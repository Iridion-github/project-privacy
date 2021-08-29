import WordExtractor from "word-extractor"; //pacchetto usato per leggere i doc files
import mammoth from 'mammoth'; //pacchetto usato per convertire i docx in html
import { getPdfContent } from "./getPdfContent";

export const setAnalyzedFiles = async ({
  envSlash,
  globalState,
  updateGlobalState,
  analyzedFilesState,
  updateAnalyzedFilesState,
  getDataToFilterState,
  updateGetDataToFilterState,
  getSingleResultState,
  updateGetSingleResultState,
  docState,
  updateDocState,
  docxState,
  updateDocxState,
}) => {

  const getAnalyzedFiles = async (filesToAnalyze) => {
    await updateAnalyzedFilesState("allResults", []);
    for (let x = 0; x < filesToAnalyze.length; x++) {
      console.log("For inside getAnalyzedFiles needs " + filesToAnalyze.length + " cycles - this is cycle number:", x + 1);
      const lastForCycle = x === Number(filesToAnalyze.length - 1);
      console.log("x = ", x);
      console.log("Number(filesToAnalyze.length - 1)", Number(filesToAnalyze.length - 1));
      console.log("lastForCycle = ", lastForCycle);
      if (lastForCycle) console.log("This is the last cycle");
      const fileObj = filesToAnalyze[x];

      await updateGetDataToFilterState("pdf", fileObj.fullpath.toLowerCase().includes(".pdf"));
      await updateGetDataToFilterState("docx", fileObj.fullpath.toLowerCase().includes(".docx"));
      await updateGetDataToFilterState("doc", fileObj.fullpath.toLowerCase().includes(".doc"));

      const getSingleResult = async () => {
        if (getDataToFilterState.pdf) { //[Pdf procedure] (PdfReader + manual array push)
          //pdf content extraction - start
          await getPdfContent({
            fileObj: fileObj,
            which: "pdfTextExtract",
            updateGetSingleResultState
          }).then(returnValue => {
            console.log("pdfContent return value:", returnValue);
            return returnValue;
          }).catch(err => {
            console.log('error in getPdfContent:', err);
          });
          //pdf content extraction - end
        } else if (getDataToFilterState.docx) {
          //[Docx procedure] (mammoth)

          await updateDocxState("docxContentResult", await mammoth.convertToHtml({ path: 'public' + envSlash + fileObj.relativepath }, docxState.options).then((mammothResult) => {
            if (mammothResult.messages.length > 0) {
              for (let x; x < mammothResult.messages.length; x++) {
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
          }));
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
          return "error case: File is not pdf, docx or doc!";
        }
      };

      const singleResult = await getSingleResult();
      await updateAnalyzedFilesState("singleResult", singleResult);
      const newResult = {
        fullpath: fileObj.fullpath,
        filename: fileObj.filename,
        relativepath: fileObj.relativepath,
        linuxpath: fileObj.linuxpath,
        content: (singleResult && singleResult.content) ? singleResult.content : ""
      };
      console.log('setAnalyzedFiles - newResult.content.length:', newResult.content ? newResult.content.length : 'no content');
      //console.log("[[[[[[[[[[[[[[[[[[[[[ analyzedFilesState.allResults.length BEFORE update:", analyzedFilesState.allResults.length); //ok
      //const slicedLastElemBefore = { ...analyzedFilesState.allResults.reverse()[0], content: analyzedFilesState.allResults.reverse()[0]?.content.slice(0, 200) };
      //console.log("[[[[[[[[[[[[[[[[[[[[[ analyzedFilesState.allResults[lastelem] BEFORE update:", slicedLastElemBefore);
      await updateAnalyzedFilesState("allResults", [...analyzedFilesState.allResults, newResult]);
      // console.log("updating analyzedFilesState.allResults - analyzedFilesState.allResults.length:", analyzedFilesState.allResults.length);
      // console.log("analyzedFilesState.allResults last element:", analyzedFilesState.allResults[analyzedFilesState.allResults.length - 1]);
      //console.log("[[[[[[[[[[[[[[[[[[[[[ analyzedFilesState.allResults.length AFTER update:", analyzedFilesState.allResults.length); //ok
      //const slicedLastElemAfter = { ...analyzedFilesState.allResults.reverse()[0], content: analyzedFilesState.allResults.reverse()[0].content.slice(0, 200) };
      //console.log("[[[[[[[[[[[[[[[[[[[[[ analyzedFilesState.allResults[lastelem] AFTER update:", slicedLastElemAfter); //ok
      /*
      [Memo]L'obiettivo è che il console.log di consoleFormattedArr non mostri 
      mai "MISSING" al content, ma sempre "PRESENT BUT CENSORED".
      */
      if (lastForCycle) {
        await updateGlobalState("canGoNextPhase", true);
      } else {
        await updateGlobalState("canGoNextPhase", false);
      }
    };

    /*
    [CHECKPOINT] 
      Il problema è che esce dal precedente for loop eseguendo solo 1 volta pdfTextExtract, che si trova dentro getPdfContent.
      Infatti, le restanti chiamate di getPdfContent avvengono dopo aver ritornato i dati al frontend.
    */




    //Qui dovrebbe salvare il json di containerResult
    await updateGlobalState("mappedArchiveStr", JSON.stringify([...analyzedFilesState.allResults]));
    await updateGlobalState("todayDate", new Date());
    await updateGlobalState("todayUTC", globalState.todayDate.toUTCString());
    const writeFileName = globalState.todayUTC.slice(0, 16);
    //[MEMO] ho disattivato la creazione del globalState.mappedArchive per assicurarmi che lo script lo creasse sempre (necessario per convertire i doc in docx);
    //await fs.writeFileSync("globalState.mappedArchive" + envSlash + writeFileName + ".json", globalState.mappedArchiveStr);
    return analyzedFilesState.allResults;
  };


  const getAnalyzedFilesReturnValue = await getAnalyzedFiles(globalState.filesToAnalyze).then(returnValue => {
    return returnValue;
  });

  const updateGlobalStateReturnValue = await updateGlobalState("analyzedFiles", getAnalyzedFilesReturnValue).then(returnValue => {
    return returnValue;
  });

  return updateGlobalStateReturnValue;

};