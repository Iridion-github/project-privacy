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

  //All states [start]
  const globalState = {
    conversionFinished: undefined,
    isArchiveMapped: undefined,
    mappedArchive: undefined,
    searchterms: undefined,
    activeFilters: undefined,
    includePdf: undefined,
    includeDoc: undefined,
    includeDocx: undefined,
    filesToAnalyze: undefined,
    dataToFilter: undefined,
    todayDate: undefined,
    todayUTC: undefined,
    readFileName: undefined,
    mustBeProvv: undefined,
    analyzedFiles: undefined,
    filteredDocs: undefined,
    isConversionNeeded: undefined,
  };

  const analyzedFilesState = {
    singleResult: undefined,
    allResults: undefined,
  };

  const getDataToFilterState = {
    lastFile: undefined,
    pdf: undefined,
    docx: undefined,
    doc: undefined,
  };

  const getPdfContentState = {
    pdfContentArray: []
  };

  const getSingleResultState = {
    pdfContentResult: undefined
  };

  const docxState = {
    options: {},
    docxContentResult: undefined,
  };

  const docState = {
    docExtractor: undefined,
    extractedContent: undefined,
    docContentResult: undefined,
  };

  const getFilteredDocsState = {
    filteredArr: undefined
  };

  const contentState = {
    cleanContent: undefined,
    result: undefined,
  };

  const byProvvedimentoState = {
    contentIncipit: undefined,
    enterPath: undefined,
    requiredFormat: undefined,
    target: undefined,
    resultsByArticle: undefined,
    conditions: undefined,
  };

  const authorityTagsState = {
    tag: undefined,
  };

  const bySubjectState = {
    tags: undefined,
    tag: undefined,
  };

  const conversionNeededState = {
    names: undefined,
    conversionNeeded: undefined,
  };

  const conversionState = {
    convertedDocs: undefined,
    document: undefined,
    libreResult: undefined,
    mapResult: undefined,
  };

  const libreResultState = {
    extend: undefined,
    enterPath: undefined,
    undone: undefined,
    outputPath: undefined,
  };
  //All states [end]

  globalState.conversionFinished = true;
  globalState.isArchiveMapped = undefined; //variabile bool che ci dirà se c'è una versione di oggi dell'archivio mappato
  globalState.mappedArchive = undefined; //variabile array dei dati dell'archivio mappato
  globalState.searchterms = req.query.searchterms && req.query.searchterms.length > 0 ? req.query.searchterms : null;
  globalState.activeFilters = JSON.parse(req.query.activeFilters);
  globalState.includePdf = globalState.activeFilters.byExtension.find(obj => obj.label === "Pdf").checked;
  globalState.includeDoc = globalState.activeFilters.byExtension.find(obj => obj.label === "Doc").checked;
  globalState.includeDocx = globalState.activeFilters.byExtension.find(obj => obj.label === "Docx").checked;
  globalState.filesToAnalyze = [];
  globalState.dataToFilter = [];
  globalState.todayDate = new Date();
  globalState.todayUTC = globalState.todayDate.toUTCString();
  globalState.readFileName = globalState.todayUTC.slice(0, 16);
  globalState.mustBeProvv = Object.keys(globalState.activeFilters).includes("byProvvedimento");

  const getIsArchiveMapped = async () => {
    try {
      globalState.mappedArchiveRaw = await fs.readFileSync("globalState.mappedArchive" + envSlash + globalState.readFileName + ".json");
      globalState.mappedArchive = JSON.parse(globalState.mappedArchiveRaw);
      await globalState.dataToFilter.push(...globalState.mappedArchive);
      return true;
    } catch (mappedArchiveMissing) {
      return false;
    }
  };

  console.log("[1] calculating globalState.isArchiveMapped value");
  globalState.isArchiveMapped = await getIsArchiveMapped();

  if (!globalState.isArchiveMapped) {
    console.log("[1.A] archive needs mapping");
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
        globalState.filesToAnalyze.push(f);
      }
    })();
  } else {
    console.log("[1.B] archive DOES NOT need mapping");
  }

  const getDataToFilter = async () => {
    try {
      //Ogni volta che l'archivio viene aggiornato, va eseguito questo script per ottenere la versione docx di tutti i files
      //console.log("advancedSearch - Entering convertToDocx");
      //await convertToDocx(globalState.filesToAnalyze, ['pdf'], envSlash);
      //console.log("advancedSearch - Exited convertToDocx");
      //return true; //[MEMO] to remove

      //Ogni volta che l'archivio viene aggiornato, va eseguito questo script per ottenere la versione docx di tutti i files

























      const getAnalyzedFiles = async (filesToAnalyze) => {
        analyzedFilesState.allResults = [];
        for (let x = 0; x < filesToAnalyze.length - 1; x++) {
          const fileObj = filesToAnalyze[x];
          const fileIndex = x;

          getDataToFilterState.lastFile = fileIndex === globalState.filesToAnalyze.length - 1;
          getDataToFilterState.pdf = fileObj.fullpath.toLowerCase().includes(".pdf");
          getDataToFilterState.docx = fileObj.fullpath.toLowerCase().includes(".docx");
          getDataToFilterState.doc = fileObj.fullpath.toLowerCase().includes(".doc");

          const getSingleResult = async () => {
            console.log("[2.1] entered function: getSingleResult()");
            if (getDataToFilterState.pdf) { //[Pdf procedure] (PdfReader + manual array push)
              //pdf content extraction - start
              console.log("[2.1.A] enter pdf case");
              const getPdfContent = async () => {
                console.log("[2.1.A.1] enter function: PdfReader().parseFileItems");
                await new PdfReader().parseFileItems(fileObj.fullpath, async (err, item) => {
                  //console.log("entering function: parseFileItems");
                  if (err) {
                    //[MEMO] forse conviene uscire cmq in caso di errore
                    console.log("[2.1.A.1] exit function: PdfReader().parseFileItems with error:", err);
                    return {
                      fullpath: fileObj.fullpath,
                      linuxfullpath: fileObj.linuxfullpath,
                      filename: fileObj.filename,
                      relativepath: fileObj.relativepath,
                      linuxpath: fileObj.linuxpath,
                      content: await getPdfContentState.pdfContentArray.join(" ")
                    };
                  }
                  if (!item) { //Condizione d'uscita da parseFileItems()
                    console.log("[2.1.A.1] exit function: PdfReader().parseFileItems");
                    return {
                      fullpath: fileObj.fullpath,
                      linuxfullpath: fileObj.linuxfullpath,
                      filename: fileObj.filename,
                      relativepath: fileObj.relativepath,
                      linuxpath: fileObj.linuxpath,
                      content: await getPdfContentState.pdfContentArray.join(" ")
                    };
                  }
                  if (item.text) { //Per ogni frammento del pdf, pusho in getPdfContentState.pdfContentArray.
                    const updatedPdfContentArray = async (arr, newElem) => {
                      await arr.push(newElem);
                    };
                    await updatedPdfContentArray(getPdfContentState.pdfContentArray, item.text);
                  }
                });
                console.log("[2.1.A] exit function: getPdfContent");
              };

              console.log("[2.1.A] enter function: getPdfContent");
              getSingleResultState.pdfContentResult = await getPdfContent();

              console.log("[2.1] exit function: getSingleResult()");
              return getSingleResultState.pdfContentResult;
              //pdf content extraction - end
            } else if (getDataToFilterState.docx) {
              console.log("[2.1.B] docx case");
              //[Docx procedure] (mammoth)

              docxState.docxContentResult = await mammoth.convertToHtml({ path: 'public' + envSlash + fileObj.relativepath }, docxState.options).then((mammothResult) => {
                console.log("entering function: mammoth.convertToHtml");
                if (mammothResult.messages.length > 0) {
                  for (let x; x < mammothResult.messages.length; x++) {
                    console.log("\n\n Errors:", mammothResult.messages[x], '\n\n');
                  }
                }
                console.log("[2.1.B] exit mammoth.convertToHtml");
                return {
                  fullpath: fileObj.fullpath,
                  linuxfullpath: fileObj.linuxfullpath,
                  filename: fileObj.filename,
                  relativepath: fileObj.relativepath,
                  linuxpath: fileObj.linuxpath,
                  content: mammothResult.value
                };
              });
              console.log("[2.1] exit getSingleResult");
              return docxState.docxContentResult;
            } else if (getDataToFilterState.doc) {
              console.log("[2.1.C] enter doc case");
              //[Doc procedure] (WordExtractor)
              const getDocContent = async (fileObj) => {
                docState.docExtractor = new WordExtractor();
                console.log("[2.1.C.1] enter docExtractor.extract");
                docState.extractedContent = await docState.docExtractor.extract('public' + envSlash + fileObj.relativepath).then(function (doc) {
                  console.log("[2.1.C.1] exit docExtractor.extract");
                  return {
                    fullpath: fileObj.fullpath,
                    linuxfullpath: fileObj.linuxfullpath,
                    filename: fileObj.filename,
                    relativepath: fileObj.relativepath,
                    linuxpath: fileObj.linuxpath,
                    content: JSON.stringify(doc.getBody())
                  };
                });
                console.log("[2.1.C] exit getDocContent");
                return docState.extractedContent;
              };

              console.log("[2.1.C] enter getDocContent");
              docState.docContentResult = await getDocContent(fileObj);
              console.log("[2.1.C] exit getSingleResult");
              return docState.docContentResult;
            } else {
              console.log("[2.1.D] error case: File is not pdf, docx or doc!");
              return;
            }
          };

          analyzedFilesState.singleResult = await getSingleResult();
          const newResult = {
            fullpath: fileObj.fullpath,
            filename: fileObj.filename,
            relativepath: fileObj.relativepath,
            linuxpath: fileObj.linuxpath,
            content: (analyzedFilesState.singleResult && analyzedFilesState.singleResult.content) ? analyzedFilesState.singleResult.content : ""
          };

          analyzedFilesState.allResults = [...analyzedFilesState.allResults, newResult];
          console.log("updating analyzedFilesState.allResults - analyzedFilesState.allResults.length:", analyzedFilesState.allResults.length);
          console.log("analyzedFilesState.allResults last element:", analyzedFilesState.allResults[analyzedFilesState.allResults.length - 1]);
        };

        //Qui dovrebbe salvare il json di containerResult
        globalState.mappedArchiveStr = JSON.stringify([...analyzedFilesState.allResults]);
        //console.log("|||||||||||||||||||||||| started writing a json file representing the archive");
        globalState.todayDate = new Date();
        globalState.todayUTC = globalState.todayDate.toUTCString();
        const writeFileName = globalState.todayUTC.slice(0, 16);
        //[MEMO] ho disattivato la creazione del globalState.mappedArchive per assicurarmi che lo script lo creasse sempre (necessario per convertire i doc in docx);
        //await fs.writeFileSync("globalState.mappedArchive" + envSlash + writeFileName + ".json", globalState.mappedArchiveStr);
        //console.log("|||||||||||||||||||||||| finished writing json file");

        console.log("getAnalyzedFiles returns analyzedFilesState.allResults, whose length is:", analyzedFilesState.allResults.length);
        return analyzedFilesState.allResults;
      };





























      globalState.analyzedFiles = await getAnalyzedFiles(globalState.filesToAnalyze);

      console.log("[after getAnalyzedFiles returns] globalState.analyzedFiles.length", globalState.analyzedFiles.length);

      return globalState.analyzedFiles;

    } catch (errContainer) {
      console.log("error:", errContainer);
      return;
    }

  };

  console.log("[2] calculating globalState.dataToFilter value");
  globalState.dataToFilter = await getDataToFilter();

  const getFilteredDocs = async () => {
    console.log("entering function: getFilteredDocs");

    //console.log("===================================== globalState.dataToFilter:", globalState.dataToFilter); //all pending
    getFilteredDocsState.filteredArr = await globalState.dataToFilter.filter(async (d, filterIndex) => {
      if (d.content) {

        if (!globalState.includePdf && d.filename.includes(".pdf")) return false;
        if (!globalState.includeDocx && d.filename.includes(".docx")) return false;
        if (!globalState.includeDoc && d.filename.includes(".doc") && d.filename.split(".doc")[1].length === 0) return false;
        if (globalState.mustBeProvv && !d.fullpath.includes(envSlash + "Provvedimenti" + envSlash)) {
          return false;
        } else if (globalState.mustBeProvv) { //Sottofiltro esclusivo per i Provvedimenti. 
          byProvvedimentoState.contentIncipit = d.content.slice(0, 500);
          byProvvedimentoState.enterPath = d.fullpath;

          //Ricerca Articolo specifico - start
          byProvvedimentoState.requiredFormat = {
            bold: true,
            italic: false,
            size: null,
            prevChar: null,
            nextChar: ".",
          };
          byProvvedimentoState.target = globalState.activeFilters.byProvvedimento.articolo;


          //[MEMO] Funzione da completare: findArticolo
          // console.log(">>>>>>>>>>>>>>>>>>>>>> Entering findArticolo");
          // byProvvedimentoState.resultsByArticle = await findArticolo({
          //   enterPath: byProvvedimentoState.enterPath,
          //   target: byProvvedimentoState.target,
          //   requiredFormat: byProvvedimentoState.requiredFormat
          // });
          // console.log(">>>>>>>>>>>>>>>>>>>>>> Exited findArticolo");
          //Ricerca Articolo specifico - end

          byProvvedimentoState.conditions = {
            tag: byProvvedimentoState.contentIncipit.includes(globalState.activeFilters.byProvvedimento.provv),
            tipo: true, //difficile da capire, chiedere a Luigi
            data: true, //Qui ci si schianta hard, dopo
            sottonumero: true,
            articolo: true,
            numero: true,
            argomento: true,
            allegato: true
          };
          //Controllo che nei primi 500 chars del documento sia presente il tag
          return !Object.values(byProvvedimentoState.conditions).every(bool => bool === true); //questo è da cambiare
        }

        console.log("Started analyzing file:", d.fullpath);
        //Eventuali affinamenti del filtro andranno qui 
        contentState.cleanContent = d.content.replace(/[^\w\s]/gi, '').toLowerCase();
        //Se il file non contiene la query di ricerca, result parte da false
        contentState.result = cleanContent.includes(globalState.searchterms?.replace(/[^\w\s]/gi, '').toLowerCase());
        if (contentState.result === true) {
          console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching nel content");
          return contentState.result;
        }
        console.log("File:", d.fullpath, " does NOT include globalState.searchterms");

        //Ciclo che cerca i tag di byAuthority, appena uno viene trovato, esce per risparmiare tempo
        if (globalState.activeFilters.byAuthority?.length > 0) {
          console.log("Checking tags byAuthority.");
          for (let x = 0; x < globalState.activeFilters.byAuthority.length; x++) {

            authorityTagsState.tag = globalState.activeFilters.byAuthority[x].tag.replace(/[^\w\s]/gi, '');
            contentState.result = contentState.cleanContent.toLowerCase().includes(tag);
            if (contentState.result === true) {
              console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags byAuthority");
              return contentState.result;
            }
          }
        }
        console.log("File:", d.fullpath, " does NOT include searched byAuthority tags");

        //Ciclo che cerca i tag di bySubject, appena uno viene trovato, esce per risparmiare tempo
        if (Object.keys(globalState.activeFilters.bySubject).length > 0) {
          console.log("About to check tags bySubject");

          for (let x = 0; x < globalState.activeFilters.bySubject.length; x++) {
            //Qui vanno aggiunti tutti i comportamenti dei filtri di bySubject, riproducendo questo blocco if
            if (Array.isArray(globalState.activeFilters.bySubject[x].tag)) {
              bySubjectState.tags = globalState.activeFilters.bySubject[x].tag;
              for (let y = 0; y < bySubjectState.tags.length; y++) {
                bySubjectState.tag = bySubjectState.tags[y].replace(/[^\w\s]/gi, '');
                contentState.result = cleanContent.includes(tag);
                if (contentState.result === true) {
                  console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags bySubject");
                  return contentState.result;
                }
              }
            } else {
              bySubjectState.tag = globalState.activeFilters.bySubject[x].tag.replace(/[^\w\s]/gi, '');
              contentState.result = cleanContent.includes(tag);
              if (contentState.result === true) {
                console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags bySubject (nel content, non come tag)");
                return contentState.result;
              }
            }
          }
        }
        console.log("File:", d.fullpath, " does NOT include searched bySubject tags");
        console.log("FINE DEI FILTRI - contentState.result:", contentState.result);
        return contentState.result;
      } else {
        return false;
      }
    });
    //console.log("getFilteredDocsState.filteredArr (formatted):", getFilteredDocsState.filteredArr);
    const consoleFormattedArr = await getFilteredDocsState.filteredArr.map(el => ({ ...el, content: "CENSORED" }));
    //[Checkpoint] Beccare il punto che non rispetta la sincronia forzata dagli await. Salire da qui.
    /*[MEMO]Questo è già fottuto:
        globalState.dataToFilter.length: 11
        getFilteredDocsState.filteredArr (formatted): [
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
    //console.log("exiting function: getFilteredDocs - getFilteredDocsState.filteredArr.length", getFilteredDocsState.filteredArr.length);
    return getFilteredDocsState.filteredArr;
  };

  console.log("[3] calculating globalState.filteredDocs value");
  globalState.filteredDocs = await getFilteredDocs();


  const checkIfConversionNeeded = async (fileObjArr) => {
    console.log("entering function: checkIfConversionNeeded");

    conversionNeededState.names = await fileObjArr.map(el => el.filename);
    conversionNeededState.conversionNeeded = await conversionNeededState.names.some(name => (name.includes(".docx") || name.includes(".doc")));
    console.log("is conversion needed ?", conversionNeededState.conversionNeeded);
    return conversionNeededState.conversionNeeded;
  };

  console.log("[4] calculating globalState.isConversionNeeded value");
  globalState.isConversionNeeded = await checkIfConversionNeeded(globalState.filteredDocs);

  if (globalState.isConversionNeeded) {

    conversionState.convertedDocs = [];
    globalState.conversionFinished = false;

    console.log("Starting conversion process");
    for (let x = 0; x < globalState.filteredDocs.length; x++) {
      conversionState.document = globalState.filteredDocs[x];

      const getLibreResult = async () => {
        if (conversionState.document && conversionState.document.filename) {
          libreResultState.extend = '.pdf';
          libreResultState.enterPath = conversionState.document.fullpath;
          //libreResultState.outputPath = conversionState.document.filename.includes(".docx") ? conversionState.document.fullpath.split('.docx')[0] + libreResultState.extend : conversionState.document.fullpath.split('.doc')[0] + libreResultState.extend;
          libreResultState.undone = await fs.readFileSync(libreResultState.enterPath);
          //console.log("conversion process - libreResultState.extend", libreResultState.extend);
          console.log("conversion process - libreResultState.enterPath", libreResultState.enterPath);
          console.log("conversion process - libreResultState.undone.byteLength", libreResultState.undone.byteLength);
          libreConvert.convert(libreResultState.undone, libreResultState.extend, undefined, (err, done) => {
            if (err) {
              console.log(`\n\n Error converting file: ${libreResultState.enterPath} \n\n`);
              rejectLibre(err);
            } else {
              console.log("successfully converted file:", libreResultState.enterPath);
              // writeFileSync funziona, crea veramente il pdf, ma sarebbe troppo pesante farlo ogni volta per tutti i file, quindi mi limito a sfruttare il buffer: done.
              //await fs.writeFileSync(libreResultState.outputPath, done)
              return done;
            }
          });
        } else {
          console.log("Error - Caso inaspettato con questo file: ", globalState.filteredDocs[x].fullpath);
        }
      };

      conversionState.libreResult = await getLibreResult();

      conversionState.mapResult = {};

      if (conversionState.libreResult && conversionState.libreResult.byteLength) {
        console.log("if (conversionState.libreResult && conversionState.libreResult.byteLength)");
        conversionState.mapResult = {
          fullpath: conversionState.document.fullpath,
          filename: conversionState.document.filename,
          relativepath: conversionState.document.relativepath,
          linuxpath: conversionState.document.linuxpath,
          content: conversionState.document.filename.includes(".docx") ? conversionState.document.content : "", //[memo] prob useless
          buffer: conversionState.libreResult
        };
      } else {
        console.log("conversionState.libreResult && conversionState.libreResult.byteLength is FALSE.");
        console.log("conversionState.libreResult:", conversionState.libreResult);
        conversionState.mapResult = {
          fullpath: conversionState.document.fullpath,
          filename: conversionState.document.filename,
          relativepath: conversionState.document.relativepath,
          linuxpath: conversionState.document.linuxpath,
          content: conversionState.document.filename.includes(".docx") ? conversionState.document.content : "" //[memo] prob useless
        };
      }

      const updateConvertedDocs = (convertedArr, originalArr) => {
        const resultArr = [...convertedArr, conversionState.mapResult];
        if (resultArr.length === originalArr.length) {
          globalState.conversionFinished = true;
        }
        return resultArr;
      };
      conversionState.convertedDocs = await updateConvertedDocs(conversionState.convertedDocs, globalState.filteredDocs);
    }

    console.log("Finished conversion process");
    /*[Checkpoint] 
    Finire di refattorizzare tutto. Qui ci arriva, ma in console si denotano dei logs tipo:
    [2.1.A.1] exit function: PdfReader().parseFileItems
    legati a processi che si sarebbero dovuti concludere da un pezzo.
    Inoltre advancedSearch non ritorna dati, o li ritorna errati, facendo crashare il frontend.
*/

    (function forceWait() {
      if (!globalState.conversionFinished) {
        setTimeout(forceWait, 1000);
      } else {
        return res.status(200).json({ //Success - Trovato qualcosa per i globalState.searchterms immessi, e nessun errore.
          success: true,
          data: { filteredDocs: globalState.convertedDocs }
        });
      }
    })();
  } else {
    return res.status(200).json({ //Success - Trovato qualcosa per i globalState.searchterms immessi, e nessun errore.
      success: true,
      data: { filteredDocs: globalState.filteredDocs }
    });
  };
};