import path, { resolve } from 'path';
import slash from 'slash';
import { PdfReader } from "pdfreader";  //pacchetto usato per leggere i pdf 
import fs from 'fs';//pacchetto usato per leggere docx files
import mammoth from 'mammoth'; //pacchetto usato per convertire i docx in html
import WordExtractor from "word-extractor"; //pacchetto usato per leggere i doc files
//import libre from 'libreoffice-convert-win' //pacchetto usato per convertire i docx files in pdf (windows version)
import libreConvert from 'libreoffice-convert'; //pacchetto usato per convertire i docx files in pdf (linux version)
import { convertToDocx } from './convert';
import { findArticolo } from './findFormattedText';

const environment = "linux";

const convertDocToDocx = true;

const envSlash = (environment === "windows") ? "\\" : "/";

// ----------------------------- [Responds with an Object for every document in Archive] -----------------------------    

export default async (req, res) => {
  let conversionFinished = true;
  let isArchiveMapped; //variabile bool che ci dirà se c'è una versione di oggi dell'archivio mappato
  let mappedArchive; //variabile array dei dati dell'archivio mappato
  const searchterms = req.query.searchterms && req.query.searchterms.length > 0 ? req.query.searchterms : null;
  const activeFilters = JSON.parse(req.query.activeFilters);
  const includePdf = activeFilters.byExtension.find(obj => obj.label === "Pdf").checked;
  const includeDoc = activeFilters.byExtension.find(obj => obj.label === "Doc").checked;
  const includeDocx = activeFilters.byExtension.find(obj => obj.label === "Docx").checked;
  const filesToAnalyze = [];
  let dataToFilter = [];
  const todayDate = new Date();
  const todayUTC = todayDate.toUTCString();
  const readFileName = todayUTC.slice(0, 16);
  console.log("activeFilters:", activeFilters);
  const mustBeProvv = Object.keys(activeFilters).includes("byProvvedimento");

  try {
    const mappedArchiveRaw = await fs.readFileSync("mappedArchive" + envSlash + readFileName + ".json");
    mappedArchive = JSON.parse(mappedArchiveRaw);
    isArchiveMapped = true;
    await dataToFilter.push(...mappedArchive);
  } catch (mappedArchiveMissing) {
    console.log("mappedArchiveMissing");
    isArchiveMapped = false;
  }

  if (!isArchiveMapped) {
    //funzione che estrae i path precisi di ogni file all'interno della dir archive
    function* getFiles(dir) {
      const dirents = fs.readdirSync(dir, { withFileTypes: true });
      for (const dirent of dirents) {
        const fullpath = path.resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
          yield* getFiles(fullpath);
        } else {
          yield {
            fullpath: fullpath,
            linuxfullpath: slash(fullpath),
            relativepath: fullpath.split("public" + envSlash)[1],
            linuxpath: slash(fullpath.split("public" + envSlash)[1]),
            filename: dirent.name
          };
        }
      }
    }
    (async () => {
      let startDirectory = 'public/archive';
      for (const f of getFiles(startDirectory)) {
        filesToAnalyze.push(f);
      }
    })();

    const getDataToFilter = async () => {
      console.log("entering function: getDataToFilter");
      try {
        //Ogni volta che l'archivio viene aggiornato, va eseguito questo script per ottenere la versione docx di tutti i files
        //console.log("advancedSearch - Entering convertToDocx");
        //await convertToDocx(filesToAnalyze, ['pdf'], envSlash);
        //console.log("advancedSearch - Exited convertToDocx");
        //return true; //[MEMO] to remove

        //Ogni volta che l'archivio viene aggiornato, va eseguito questo script per ottenere la versione docx di tutti i files
        const analyzedFiles = await filesToAnalyze.map(async (fileObj, fileIndex) => {
          const lastFile = fileIndex === filesToAnalyze.length - 1;
          const pdf = fileObj.fullpath.toLowerCase().includes(".pdf");
          const docx = fileObj.fullpath.toLowerCase().includes(".docx");
          const doc = fileObj.fullpath.toLowerCase().includes(".doc");

          const getSingleResult = async () => {
            console.log("entering function: getSingleResult");
            if (pdf) { //[Pdf procedure] (PdfReader + manual array push)
              //pdf content extraction - start
              const getPdfContent = async () => {
                console.log("entering function: getPdfContent");
                const pdfContentArray = [];
                await new PdfReader().parseFileItems(fileObj.fullpath, async (err, item) => {
                  //console.log("entering function: parseFileItems");
                  if (err) {
                    console.log("PdfReader - Error:", err);
                  }
                  if (!item) { //Condizione d'uscita da parseFileItems()
                    //console.log("exiting function: parseFileItems");
                    return {
                      fullpath: fileObj.fullpath,
                      linuxfullpath: fileObj.linuxfullpath,
                      filename: fileObj.filename,
                      relativepath: fileObj.relativepath,
                      linuxpath: fileObj.linuxpath,
                      content: await pdfContentArray.join(" ")
                    };
                  }
                  if (item.text) { //Per ogni frammento del pdf, pusho in pdfContentArray.
                    await pdfContentArray.push(item.text);
                  }
                });
              };
              const pdfContentResult = await getPdfContent();
              console.log("exiting function: getSingleResult - return value length:", pdfContentResult.length);
              return pdfContentResult;
              //pdf content extraction - end
            } else if (docx) {
              //[Docx procedure] (mammoth)
              const options = {};
              const docxContentResult = await mammoth.convertToHtml({ path: 'public' + envSlash + fileObj.relativepath }, options).then((mammothResult) => {
                console.log("entering function: mammoth.convertToHtml");
                if (mammothResult.messages.length > 0) {
                  for (let x; x < mammothResult.messages.length; x++) {
                    console.log("\n\n Errors:", mammothResult.messages[x], '\n\n');
                  }
                }
                return {
                  fullpath: fileObj.fullpath,
                  linuxfullpath: fileObj.linuxfullpath,
                  filename: fileObj.filename,
                  relativepath: fileObj.relativepath,
                  linuxpath: fileObj.linuxpath,
                  content: mammothResult.value
                };
              });
              console.log("exiting function: getSingleResult - return value fullpath: ", docxContentResult.fullpath);
              return docxContentResult;
            } else if (doc) {
              //[Doc procedure] (WordExtractor)
              const getDocContent = async (fileObj) => {
                console.log("entering function: getDocContent");
                const docExtractor = new WordExtractor();
                const extractedContent = await docExtractor.extract('public' + envSlash + fileObj.relativepath).then(function (doc) {
                  return {
                    fullpath: fileObj.fullpath,
                    linuxfullpath: fileObj.linuxfullpath,
                    filename: fileObj.filename,
                    relativepath: fileObj.relativepath,
                    linuxpath: fileObj.linuxpath,
                    content: JSON.stringify(doc.getBody())
                  };
                });
                console.log("exiting function: getDocContent - return value fullpath:", extractedContent.fullpath);
                return extractedContent;
              };
              const docContentResult = await getDocContent(fileObj);
              console.log("exiting function: getSingleResult - docContentResult.fullpath:", docContentResult.fullpath);
              return docContentResult;
            } else {
              console.log("File is not pdf, docx or doc!");
              return;
            }
          };

          const singleResult = await getSingleResult();

          if (lastFile) {
            console.log("This is the last File");
            //Qui dovrebbe salvare il json di containerResult
            const mappedArchiveStr = JSON.stringify([...analyzedFiles, singleResult]);
            //console.log("|||||||||||||||||||||||| started writing a json file representing the archive");
            const todayDate = new Date();
            const todayUTC = todayDate.toUTCString();
            const writeFileName = todayUTC.slice(0, 16);
            //[MEMO] ho disattivato la creazione del mappedArchive per assicurarmi che lo script lo creasse sempre (necessario per convertire i doc in docx);
            //await fs.writeFileSync("mappedArchive" + envSlash + writeFileName + ".json", mappedArchiveStr);
            //console.log("|||||||||||||||||||||||| finished writing json file");
          }

          console.log("exiting function: getDataToFilter - fullpath: ", fileObj.fullpath);
          return {
            fullpath: fileObj.fullpath,
            filename: fileObj.filename,
            relativepath: fileObj.relativepath,
            linuxpath: fileObj.linuxpath,
            content: (singleResult && singleResult.content) ? singleResult.content : ""
          };

        });























































        return analyzedFiles;
      } catch (errContainer) {
        console.log("error:", errContainer);
        return;
      }

    };

    dataToFilter = await getDataToFilter();
  };

  const getFilteredDocs = async () => {
    console.log("entering function: getFilteredDocs");
    console.log("dataToFilter.length:", dataToFilter.length);
    const filteredArr = await dataToFilter.filter(async (d, filterIndex) => {
      if (d.content) {
        if (!includePdf && d.filename.includes(".pdf")) return false;
        if (!includeDocx && d.filename.includes(".docx")) return false;
        if (!includeDoc && d.filename.includes(".doc") && d.filename.split(".doc")[1].length === 0) return false;
        if (mustBeProvv && !d.fullpath.includes(envSlash + "Provvedimenti" + envSlash)) {
          return false;
        } else if (mustBeProvv) { //Sottofiltro esclusivo per i Provvedimenti. 
          const contentIncipit = d.content.slice(0, 500);
          const enterPath = d.fullpath;

          //Ricerca Articolo specifico - start
          const requiredFormat = {
            bold: true,
            italic: false,
            size: null,
            prevChar: null,
            nextChar: ".",
          };
          const target = activeFilters.byProvvedimento.articolo;

          console.log(">>>>>>>>>>>>>>>>>>>>>> Entering findArticolo");
          const resultsByArticle = await findArticolo({ enterPath, target, requiredFormat });
          console.log(">>>>>>>>>>>>>>>>>>>>>> Exited findArticolo");
          //Ricerca Articolo specifico - end

          const conditions = {
            tag: contentIncipit.includes(activeFilters.byProvvedimento.provv),
            tipo: true, //difficile da capire, chiedere a Luigi
            data: true, //Qui ci si schianta hard, dopo
            sottonumero: true,
            articolo: true,
            numero: true,
            argomento: true,
            allegato: true
          };
          //Controllo che nei primi 500 chars del documento sia presente il tag
          return !Object.values(conditions).every(bool => bool === true); //questo è da cambiare
        }

        console.log("Started analyzing file:", d.fullpath);
        //Eventuali affinamenti del filtro andranno qui 
        const cleanContent = d.content.replace(/[^\w\s]/gi, '').toLowerCase();
        //Se il file non contiene la query di ricerca, result parte da false
        let result = cleanContent.includes(searchterms?.replace(/[^\w\s]/gi, '').toLowerCase());
        if (result === true) {
          console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching nel content");
          return result;
        }
        console.log("File:", d.fullpath, " does NOT include searchterms");

        //Ciclo che cerca i tag di byAuthority, appena uno viene trovato, esce per risparmiare tempo
        if (activeFilters.byAuthority?.length > 0) {
          console.log("Checking tags byAuthority.");
          for (let x = 0; x < activeFilters.byAuthority.length; x++) {
            let tag = activeFilters.byAuthority[x].tag.replace(/[^\w\s]/gi, '');
            result = cleanContent.toLowerCase().includes(tag);
            if (result === true) {
              console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags byAuthority");

              return result;
            }
          }
        }
        console.log("File:", d.fullpath, " does NOT include searched byAuthority tags");

        //Ciclo che cerca i tag di bySubject, appena uno viene trovato, esce per risparmiare tempo
        if (Object.keys(activeFilters.bySubject).length > 0) {
          console.log("About to check tags bySubject");
          for (let x = 0; x < activeFilters.bySubject.length; x++) {
            //Qui vanno aggiunti tutti i comportamenti dei filtri di bySubject, riproducendo questo blocco if
            if (Array.isArray(activeFilters.bySubject[x].tag)) {
              let tags = activeFilters.bySubject[x].tag;
              for (let y = 0; y < tags.length; y++) {
                let tag = tags[y].replace(/[^\w\s]/gi, '');
                result = cleanContent.includes(tag);
                if (result === true) {
                  console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags bySubject");
                  return result;
                }
              }
            } else {
              let tag = activeFilters.bySubject[x].tag.replace(/[^\w\s]/gi, '');
              result = cleanContent.includes(tag);
              if (result === true) {
                console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags bySubject (nel content, non come tag)");
                return result;
              }
            }
          }
        }
        console.log("File:", d.fullpath, " does NOT include searched bySubject tags");
        console.log("FINE DEI FILTRI - result:", result);
        return result;
      } else {
        return false;
      }
    });
    const consoleFormattedArr = await filteredArr.map(el => ({ ...el, content: "CENSORED" }));
    //[Checkpoint] Beccare il punto che non rispetta la sincronia forzata dagli await. Salire da qui.
    console.log("filteredArr (formatted):", consoleFormattedArr); /*[MEMO]Questo è già fottuto:
    dataToFilter.length: 11
filteredArr (formatted): [
  { content: 'CENSORED' },
  { content: 'CENSORED' },
  { content: 'CENSORED' },
  { content: 'CENSORED' },
  { content: 'CENSORED' },
  { content: 'CENSORED' },
  { content: 'CENSORED' },
  { content: 'CENSORED' },
  { content: 'CENSORED' },
  { content: 'CENSORED' },
  { content: 'CENSORED' }
]
    */
    console.log("exiting function: getFilteredDocs - filteredArr.length", filteredArr.length);
    return filteredArr;
  };

  //console.log("About to call getFilteredDocs - filesToAnalyze:", filesToAnalyze); [MEMO] Questo è ok

  const filteredDocs = await getFilteredDocs();

  const checkIfConversionNeeded = async (fileObjArr) => {
    console.log("entering function: checkIfConversionNeeded");
    const names = await fileObjArr.map(el => el.filename);
    const conversionNeeded = await names.some(name => (name.includes(".docx") || name.includes(".doc")));
    console.log("is conversion needed ?", conversionNeeded);
    return conversionNeeded;
  };

  if (await checkIfConversionNeeded(filteredDocs)) {
    let convertedDocs = [];
    conversionFinished = false;

    console.log("Starting conversion process");
    for (let x = 0; x < filteredDocs.length; x++) {
      const d = filteredDocs[x];

      const getLibreResult = async () => {
        if (d && d.filename) {
          const extend = '.pdf';
          const enterPath = d.fullpath;
          //const outputPath = d.filename.includes(".docx") ? d.fullpath.split('.docx')[0] + extend : d.fullpath.split('.doc')[0] + extend;
          const undone = await fs.readFileSync(enterPath);
          //console.log("conversion process - extend", extend);
          console.log("conversion process - enterPath", enterPath);
          console.log("conversion process - undone.byteLength", undone.byteLength);
          libreConvert.convert(undone, extend, undefined, (err, done) => {
            if (err) {
              console.log(`\n\n Error converting file: ${enterPath} \n\n`);
              rejectLibre(err);
            } else {
              console.log("successfully converted file:", enterPath);
              // writeFileSync funziona, crea veramente il pdf, ma sarebbe troppo pesante farlo ogni volta per tutti i file, quindi mi limito a sfruttare il buffer: done.
              //await fs.writeFileSync(outputPath, done)
              return done;
            }
          });
        } else {
          console.log("Error - Caso inaspettato con questo file: ", filteredDocs[x].fullpath);
        }
      };

      const libreResult = await getLibreResult();

      let mapResult = {};

      if (libreResult && libreResult.byteLength) {
        console.log("if (libreResult && libreResult.byteLength)");
        mapResult = {
          fullpath: d.fullpath,
          filename: d.filename,
          relativepath: d.relativepath,
          linuxpath: d.linuxpath,
          content: d.filename.includes(".docx") ? d.content : "", //[memo] prob useless
          buffer: libreResult
        };
      } else {
        console.log("libreResult && libreResult.byteLength is FALSE.");
        console.log("libreResult:", libreResult);
        mapResult = {
          fullpath: d.fullpath,
          filename: d.filename,
          relativepath: d.relativepath,
          linuxpath: d.linuxpath,
          content: d.filename.includes(".docx") ? d.content : "" //[memo] prob useless
        };
      }

      const updateConvertedDocs = (convertedArr, originalArr) => {
        const resultArr = [...convertedArr, mapResult];
        if (resultArr.length === originalArr.length) {
          conversionFinished = true;
        }
        return resultArr;
      };
      convertedDocs = await updateConvertedDocs(convertedDocs, filteredDocs);
    }

    console.log("Finished conversion process");

    (function forceWait() {
      if (!conversionFinished) {
        setTimeout(forceWait, 1000);
      } else {
        return res.status(200).json({ //Success - Trovato qualcosa per i searchterms immessi, e nessun errore.
          success: true,
          data: { filteredDocs: convertedDocs }
        });
      }
    })();
  } else {
    return res.status(200).json({ //Success - Trovato qualcosa per i searchterms immessi, e nessun errore.
      success: true,
      data: { filteredDocs: filteredDocs }
    });
  }
};