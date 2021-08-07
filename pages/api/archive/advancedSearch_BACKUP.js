import path, { resolve } from 'path';
import slash from 'slash';
import fs from 'fs';//pacchetto usato per leggere docx files
import mammoth from 'mammoth'; //pacchetto usato per convertire i docx in html
import WordExtractor from "word-extractor"; //pacchetto usato per leggere i doc files
//import libre from 'libreoffice-convert-win' //pacchetto usato per convertire i docx files in pdf (windows version)
import libreConvert from 'libreoffice-convert'; //pacchetto usato per convertire i docx files in pdf (linux version)
import { forceWaitWithCondition } from '../../../utils/async';
import { convertToDocx } from './convert';
import { findArticolo } from './findFormattedText';
import { getPdfContent } from './pdfUtils';

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

  const updateGlobalState = (prop, val) => {
    globalState[prop] = val;
  };

  const analyzedFilesState = {
    singleResult: undefined,
    allResults: undefined,
  };


  const updateAnalyzedFilesState = (prop, val) => {
    analyzedFilesState[prop] = val;
  };

  const getDataToFilterState = {
    lastFile: undefined,
    pdf: undefined,
    docx: undefined,
    doc: undefined,
  };

  const updateGetDataToFilterState = (prop, val) => {
    getDataToFilterState[prop] = val;
  };

  const getSingleResultState = {
    pdfContentResult: undefined
  };

  const updateGetSingleResultState = (prop, val) => {
    getSingleResultState[prop] = val;
  };

  const docxState = {
    options: {},
    docxContentResult: undefined,
  };

  const updateDocxState = (prop, val) => {
    docxState[prop] = val;
  };

  const docState = {
    docExtractor: undefined,
    extractedContent: undefined,
    docContentResult: undefined,
  };

  const updateDocState = (prop, val) => {
    docState[prop] = val;
  };

  const getFilteredDocsState = {
    filteredArr: undefined
  };

  const updateGetFilteredDocsState = (prop, val) => {
    getFilteredDocsState[prop] = val;
  };

  const contentState = {
    cleanContent: undefined,
    result: undefined,
  };

  const updateContentState = (prop, val) => {
    contentState[prop] = val;
  };

  const byProvvedimentoState = {
    contentIncipit: undefined,
    enterPath: undefined,
    requiredFormat: undefined,
    target: undefined,
    resultsByArticle: undefined,
    conditions: undefined,
  };

  const updateByProvvedimentoState = (prop, val) => {
    byProvvedimentoState[prop] = val;
  };

  const authorityTagsState = {
    tag: undefined,
  };

  const updateAuthorityTagsState = (prop, val) => {
    authorityTagsState[prop] = val;
  };

  const bySubjectState = {
    tags: undefined,
    tag: undefined,
  };

  const updateBySubjectState = (prop, val) => {
    bySubjectState[prop] = val;
  };

  const conversionNeededState = {
    names: undefined,
    conversionNeeded: undefined,
  };

  const updateConversionNeededState = (prop, val) => {
    conversionNeededState[prop] = val;
  };

  const conversionState = {
    convertedDocs: undefined,
    document: undefined,
    libreResult: undefined,
    mapResult: undefined,
  };

  const updateConversionState = (prop, val) => {
    conversionState[prop] = val;
  };

  const libreResultState = {
    extend: undefined,
    enterPath: undefined,
    undone: undefined,
    outputPath: undefined,
  };

  const updateLibreResultState = (prop, val) => {
    libreResultState[prop] = val;
  };

  //All states [end]

  await updateGlobalState("conversionFinished", true);
  await updateGlobalState("isArchiveMapped", undefined);//variabile bool che ci dirà se c'è una versione di oggi dell'archivio mappato
  await updateGlobalState("mappedArchive", undefined);//variabile array dei dati dell'archivio mappato  
  await updateGlobalState("searchterms", req.query.searchterms && req.query.searchterms.length > 0 ? req.query.searchterms : null);
  await updateGlobalState("activeFilters", JSON.parse(req.query.activeFilters));
  await updateGlobalState("includePdf", globalState.activeFilters.byExtension.find(obj => obj.label === "Pdf").checked);
  await updateGlobalState("includeDoc", globalState.activeFilters.byExtension.find(obj => obj.label === "Doc").checked);
  await updateGlobalState("includeDocx", globalState.activeFilters.byExtension.find(obj => obj.label === "Docx").checked);
  await updateGlobalState("filesToAnalyze", []);
  await updateGlobalState("dataToFilter", []);
  await updateGlobalState("todayDate", new Date());
  await updateGlobalState("todayUTC", globalState.todayDate.toUTCString());
  await updateGlobalState("readFileName", globalState.todayUTC.slice(0, 16));
  await updateGlobalState("mustBeProvv", Object.keys(globalState.activeFilters).includes("byProvvedimento"));

  const getIsArchiveMapped = async () => {
    try {
      await updateGlobalState("mappedArchiveRaw", await fs.readFileSync("globalState.mappedArchive" + envSlash + globalState.readFileName + ".json"));
      await updateGlobalState("mappedArchive", JSON.parse(globalState.mappedArchiveRaw));
      await updateGlobalState("dataToFilter", [...globalState.dataToFilter, ...globalState.mappedArchive]);
      return true;
    } catch (mappedArchiveMissing) {
      return false;
    }
  };

  await updateGlobalState("isArchiveMapped", await getIsArchiveMapped());

  if (!globalState.isArchiveMapped) {
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
      //await convertToDocx(globalState.filesToAnalyze, ['pdf'], envSlash);
      //return true; //[MEMO] to remove

      const getAnalyzedFiles = async (filesToAnalyze) => {
        await updateAnalyzedFilesState("allResults", []);
        for (let x = 0; x < filesToAnalyze.length - 1; x++) {
          const fileObj = filesToAnalyze[x];
          const fileIndex = x;

          await updateGetDataToFilterState("lastFile", fileIndex === globalState.filesToAnalyze.length - 1);
          await updateGetDataToFilterState("pdf", fileObj.fullpath.toLowerCase().includes(".pdf"));
          await updateGetDataToFilterState("docx", fileObj.fullpath.toLowerCase().includes(".docx"));
          await updateGetDataToFilterState("doc", fileObj.fullpath.toLowerCase().includes(".doc"));

          const getSingleResult = async () => {
            if (getDataToFilterState.pdf) { //[Pdf procedure] (PdfReader + manual array push)
              //pdf content extraction - start
              await getPdfContent({
                fileObj: fileObj,
                which: "pdfTextExtract",
                updateGetSingleResultState: updateGetSingleResultState,
                updateGlobalState: updateGlobalState
              });

              (function forceWaitPdfContent() {
                if (!globalState.getPdfContentHasFinished) {
                  console.log("getPdfContent isn't finished, looping");
                  setTimeout(forceWaitPdfContent, 1000);
                } else {
                  console.log("---------------- getPdfContent is finished - globalState.pdfContentResult", globalState.pdfContentResult);
                }
              })();

              return getSingleResultState.pdfContentResult;
              //pdf content extraction - end
            } else if (getDataToFilterState.docx) {
              //console.log("[2.1.B] docx case");
              //[Docx procedure] (mammoth)

              await updateDocxState("docxContentResult", await mammoth.convertToHtml({ path: 'public' + envSlash + fileObj.relativepath }, docxState.options).then((mammothResult) => {
                //console.log("entering function: mammoth.convertToHtml");
                if (mammothResult.messages.length > 0) {
                  for (let x; x < mammothResult.messages.length; x++) {
                    // console.log("\n\n Errors:", mammothResult.messages[x], '\n\n');
                  }
                }
                //console.log("[2.1.B] exit mammoth.convertToHtml");
                return {
                  fullpath: fileObj.fullpath,
                  linuxfullpath: fileObj.linuxfullpath,
                  filename: fileObj.filename,
                  relativepath: fileObj.relativepath,
                  linuxpath: fileObj.linuxpath,
                  content: mammothResult.value
                };
              }));
              //console.log("[2.1] exit getSingleResult");
              return docxState.docxContentResult;

            } else if (getDataToFilterState.doc) {
              //[Doc procedure] (WordExtractor)
              const getDocContent = async (fileObj) => {
                await updateDocState("docExtractor", new WordExtractor());
                await updateDocState("extractedContent", await docState.docExtractor.extract('public' + envSlash + fileObj.relativepath).then(function (doc) {
                  return {
                    fullpath: fileObj.fullpath,
                    linuxfullpath: fileObj.linuxfullpath,
                    filename: fileObj.filename,
                    relativepath: fileObj.relativepath,
                    linuxpath: fileObj.linuxpath,
                    content: JSON.stringify(doc.getBody())
                  };
                }));
                return docState.extractedContent;
              };

              await updateDocState("docContentResult", await getDocContent(fileObj));
              return docState.docContentResult;
            } else {
              console.log("[2.1.D] error case: File is not pdf, docx or doc!");
              return "error case: File is not pdf, docx or doc!";
            }
          };

          const singleResult = await getSingleResult();

          console.log("singleResult:", singleResult);

          await updateAnalyzedFilesState("singleResult", singleResult);

          (function forceWaitSingleResult() {
            if (!analyzedFilesState.singleResult) {
              console.log("singleResult isn't ready, looping");
              setTimeout(forceWaitSingleResult, 1000);
            } else {
              //console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  analyzedFilesState.singleResult:", analyzedFilesState.singleResult); //ok
            }
          })();

          const newResult = {
            fullpath: fileObj.fullpath,
            filename: fileObj.filename,
            relativepath: fileObj.relativepath,
            linuxpath: fileObj.linuxpath,
            content: (analyzedFilesState.singleResult && analyzedFilesState.singleResult.content) ? analyzedFilesState.singleResult.content : ""
          };


          //const slicedLastElemBefore = { ...analyzedFilesState.allResults.reverse()[0], content: analyzedFilesState.allResults.reverse()[0].content.slice(0, 200) };
          //console.log("[[[[[[[[[[[[[[[[[[[[[ analyzedFilesState.allResults[lastelem] BEFORE update:", slicedLastElemBefore);
          await updateAnalyzedFilesState("allResults", [...analyzedFilesState.allResults, newResult]);
          // console.log("updating analyzedFilesState.allResults - analyzedFilesState.allResults.length:", analyzedFilesState.allResults.length);
          // console.log("analyzedFilesState.allResults last element:", analyzedFilesState.allResults[analyzedFilesState.allResults.length - 1]);
          //const slicedLastElemAfter = { ...analyzedFilesState.allResults.reverse()[0], content: analyzedFilesState.allResults.reverse()[0].content.slice(0, 200) };
          //console.log("[[[[[[[[[[[[[[[[[[[[[ analyzedFilesState.allResults[lastelem] AFTER update:", slicedLastElemAfter); //ok

          /*
          [Checkpoint] La length della lista qui sopra pare essere corretta. Utilizzare il metodo del forceWait (vedasi line 336)
          per assicurarsi che ogni fase del processo non venga superata prima del suo completamento. L'obiettivo è che
          il console.log di consoleFormattedArr non mostri mai "MISSING" al content, ma sempre "PRESENT BUT CENSORED".
          */
        };

        //Qui dovrebbe salvare il json di containerResult
        await updateGlobalState("mappedArchiveStr", JSON.stringify([...analyzedFilesState.allResults]));

        await updateGlobalState("todayDate", new Date());
        await updateGlobalState("todayUTC", globalState.todayDate.toUTCString());
        const writeFileName = globalState.todayUTC.slice(0, 16);
        //[MEMO] ho disattivato la creazione del globalState.mappedArchive per assicurarmi che lo script lo creasse sempre (necessario per convertire i doc in docx);
        //await fs.writeFileSync("globalState.mappedArchive" + envSlash + writeFileName + ".json", globalState.mappedArchiveStr);
        //console.log("|||||||||||||||||||||||| finished writing json file");

        //console.log("getAnalyzedFiles returns analyzedFilesState.allResults, whose length is:", analyzedFilesState.allResults.length);
        return analyzedFilesState.allResults;
      };

      await updateGlobalState("analyzedFiles", await getAnalyzedFiles(globalState.filesToAnalyze));



      return globalState.analyzedFiles;

    } catch (errContainer) {
      return;
    }

  };

  await updateGlobalState("dataToFilter", await getDataToFilter());

  return res.status(200).json({ //Stop.
    success: true,
    data: { filteredDocs: [] }
  });

  const getFilteredDocs = async () => {
    await updateGetFilteredDocsState("filteredArr", await globalState.dataToFilter.filter(async (d, filterIndex) => {
      if (d.content) {

        if (!globalState.includePdf && d.filename.includes(".pdf")) return false;
        if (!globalState.includeDocx && d.filename.includes(".docx")) return false;
        if (!globalState.includeDoc && d.filename.includes(".doc") && d.filename.split(".doc")[1].length === 0) return false;
        if (globalState.mustBeProvv && !d.fullpath.includes(envSlash + "Provvedimenti" + envSlash)) {
          return false;
        } else if (globalState.mustBeProvv) { //Sottofiltro esclusivo per i Provvedimenti. 

          await updateByProvvedimentoState("contentIncipit", d.content.slice(0, 500));
          await updateByProvvedimentoState("enterPath", d.fullpath);

          //Ricerca Articolo specifico - start
          await updateByProvvedimentoState("requiredFormat", {
            bold: true,
            italic: false,
            size: null,
            prevChar: null,
            nextChar: ".",
          });
          await updateByProvvedimentoState("target", globalState.activeFilters.byProvvedimento.articolo);

          //[MEMO] Funzione da completare: findArticolo
          // console.log(">>>>>>>>>>>>>>>>>>>>>> Entering findArticolo");
          // byProvvedimentoState.resultsByArticle = await findArticolo({
          //   enterPath: byProvvedimentoState.enterPath,
          //   target: byProvvedimentoState.target,
          //   requiredFormat: byProvvedimentoState.requiredFormat
          // });
          // console.log(">>>>>>>>>>>>>>>>>>>>>> Exited findArticolo");
          //Ricerca Articolo specifico - end

          await updateByProvvedimentoState("conditions", {
            tag: byProvvedimentoState.contentIncipit.includes(globalState.activeFilters.byProvvedimento.provv),
            tipo: true, //difficile da capire, chiedere a Luigi
            data: true, //Qui ci si schianta hard, dopo
            sottonumero: true,
            articolo: true,
            numero: true,
            argomento: true,
            allegato: true
          });
          //Controllo che nei primi 500 chars del documento sia presente il tag
          return !Object.values(byProvvedimentoState.conditions).every(bool => bool === true); //questo è da cambiare
        }

        //Eventuali affinamenti del filtro andranno qui 
        await updateContentState("cleanContent", d.content.replace(/[^\w\s]/gi, '').toLowerCase());

        //Se il file non contiene la query di ricerca, result parte da false
        await updateContentState("result", contentState.cleanContent.includes(globalState.searchterms?.replace(/[^\w\s]/gi, '').toLowerCase()));
        if (contentState.result === true) {
          console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching nel content");
          return contentState.result;
        }

        //Ciclo che cerca i tag di byAuthority, appena uno viene trovato, esce per risparmiare tempo
        if (globalState.activeFilters.byAuthority?.length > 0) {
          for (let x = 0; x < globalState.activeFilters.byAuthority.length; x++) {

            await updateAuthorityTagsState("tag", globalState.activeFilters.byAuthority[x].tag.replace(/[^\w\s]/gi, ''));
            await updateContentState("result", contentState.cleanContent.toLowerCase().includes(tag));
            if (contentState.result === true) {
              console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags byAuthority");
              return contentState.result;
            }
          }
        }

        //Ciclo che cerca i tag di bySubject, appena uno viene trovato, esce per risparmiare tempo
        if (Object.keys(globalState.activeFilters.bySubject).length > 0) {

          for (let x = 0; x < globalState.activeFilters.bySubject.length; x++) {
            //Qui vanno aggiunti tutti i comportamenti dei filtri di bySubject, riproducendo questo blocco if
            if (Array.isArray(globalState.activeFilters.bySubject[x].tag)) {

              await updateBySubjectState("tags", globalState.activeFilters.bySubject[x].tag);
              for (let y = 0; y < bySubjectState.tags.length; y++) {
                await updateBySubjectState("tag", bySubjectState.tags[y].replace(/[^\w\s]/gi, ''));

                await updateContentState("result", contentState.cleanContent.includes(tag));
                if (contentState.result === true) {
                  console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags bySubject");
                  return contentState.result;
                }
              }
            } else {
              await updateBySubjectState("tag", globalState.activeFilters.bySubject[x].tag.replace(/[^\w\s]/gi, ''));
              await updateContentState("result", contentState.cleanContent.includes(tag));
              if (contentState.result === true) {
                console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags bySubject (nel content, non come tag)");
                return contentState.result;
              }
            }
          }
        }
        return contentState.result;
      } else {
        return false;
      }
    }));
    const consoleFormattedArr = await getFilteredDocsState.filteredArr.map(el =>
      ({ ...el, content: el.content.length ? "PRESENT BUT CENSORED" : "MISSING" })
    );
    console.log("consoleFormattedArr:", consoleFormattedArr);
    return getFilteredDocsState.filteredArr;
  };
  await updateGlobalState("filteredDocs", await getFilteredDocs());

  const checkIfConversionNeeded = async (fileObjArr) => {
    await updateConversionNeededState("names", await fileObjArr.map(el => el.filename));
    await updateConversionNeededState("conversionNeeded", await conversionNeededState.names.some(name => (name.includes(".docx") || name.includes(".doc"))));
    return conversionNeededState.conversionNeeded;
  };

  await updateGlobalState("isConversionNeeded", await checkIfConversionNeeded(globalState.filteredDocs));

  if (globalState.isConversionNeeded) {

    await updateConversionState("convertedDocs", []);
    await updateGlobalState("conversionFinished", false);

    for (let x = 0; x < globalState.filteredDocs.length; x++) {
      await updateConversionState("document", globalState.filteredDocs[x]);

      const getLibreResult = async () => {
        if (conversionState.document && conversionState.document.filename) {
          await updateLibreResultState("extend", '.pdf');
          await updateLibreResultState("enterPath", conversionState.document.fullpath);
          //libreResultState.outputPath = conversionState.document.filename.includes(".docx") ? conversionState.document.fullpath.split('.docx')[0] + libreResultState.extend : conversionState.document.fullpath.split('.doc')[0] + libreResultState.extend;
          await updateLibreResultState("undone", await fs.readFileSync(libreResultState.enterPath));
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

      await updateConversionState("libreResult", await getLibreResult());
      await updateConversionState("mapResult", {});

      if (conversionState.libreResult && conversionState.libreResult.byteLength) {
        await updateConversionState("mapResult", {
          fullpath: conversionState.document.fullpath,
          filename: conversionState.document.filename,
          relativepath: conversionState.document.relativepath,
          linuxpath: conversionState.document.linuxpath,
          content: conversionState.document.filename.includes(".docx") ? conversionState.document.content : "", //[memo] prob useless
          buffer: conversionState.libreResult
        });
      } else {
        await updateConversionState("mapResult", {
          fullpath: conversionState.document.fullpath,
          filename: conversionState.document.filename,
          relativepath: conversionState.document.relativepath,
          linuxpath: conversionState.document.linuxpath,
          content: conversionState.document.filename.includes(".docx") ? conversionState.document.content : "" //[memo] prob useless
        });
      }

      const updateConvertedDocs = async (convertedArr, originalArr) => {
        const resultArr = await [...convertedArr, conversionState.mapResult];
        if (resultArr.length === originalArr.length) {
          await updateGlobalState("conversionFinished", true);
        }
        return resultArr;
      };
      updateConversionState("convertedDocs", await updateConvertedDocs(conversionState.convertedDocs, globalState.filteredDocs));
    }

    console.log("globalState.filteredDocs.length:", globalState.filteredDocs.length);

    (function forceWaitFinal() {
      if (!globalState.conversionFinished) {
        setTimeout(forceWaitFinal, 1000);
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