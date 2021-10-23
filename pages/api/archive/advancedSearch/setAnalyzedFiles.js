import WordExtractor from "word-extractor"; //pacchetto usato per leggere i doc files
import mammoth from "mammoth"; //pacchetto usato per convertire i docx in html
import { getPdfContent } from "./getPdfContent";

export const setAnalyzedFiles = async ({ envSlash, state, updateState }) => {
  const getAnalyzedFiles = async filesToAnalyze => {
    await updateState("analyzedFiles", "allResults", []);
    for (let x = 0; x < filesToAnalyze.length; x++) {
      const fileObj = filesToAnalyze[x];
      await updateState("getDataToFilter", "pdf", fileObj.fullpath.toLowerCase().includes(".pdf"));
      await updateState("getDataToFilter", "docx", fileObj.fullpath.toLowerCase().includes(".docx"));
      await updateState("getDataToFilter", "doc", fileObj.fullpath.toLowerCase().includes(".doc"));

      const getSingleResult = async () => {
        if (state.getDataToFilter.pdf) {
          //[Pdf procedure] (PdfReader + manual array push)
          //pdf content extraction - start
          const getPdfContentReturnVal = await getPdfContent({
            fileObj: fileObj,
            which: "pdfTextExtract",
            state,
            updateState,
          })
            .then(returnValue => returnValue)
            .catch(err => {
              console.log("error in getPdfContent:", err);
              return null;
            });
          return getPdfContentReturnVal;
          //pdf content extraction - end
        } else if (state.getDataToFilter.docx) {
          //[Docx procedure] (mammoth)

          await updateState(
            "docx",
            "docxContentResult",
            await mammoth.convertToHtml({ path: "public" + envSlash + fileObj.relativepath }, state.docx.options).then(mammothResult => {
              if (mammothResult.messages.length > 0) {
                for (let x; x < mammothResult.messages.length; x++) {}
              }
              return {
                fullpath: fileObj.fullpath,
                linuxfullpath: fileObj.linuxfullpath,
                filename: fileObj.filename,
                relativepath: fileObj.relativepath,
                linuxpath: fileObj.linuxpath,
                content: mammothResult.value,
              };
            })
          );
          return state.docx.docxContentResult;
        } else if (state.getDataToFilter.doc) {
          //[Doc procedure] (WordExtractor)
          const getDocContent = async fileObj => {
            await updateState("doc", "docExtractor", new WordExtractor());
            await updateState(
              "doc",
              "extractedContent",
              await state.doc.docExtractor.extract("public" + envSlash + fileObj.relativepath).then(function (doc) {
                return {
                  fullpath: fileObj.fullpath,
                  linuxfullpath: fileObj.linuxfullpath,
                  filename: fileObj.filename,
                  relativepath: fileObj.relativepath,
                  linuxpath: fileObj.linuxpath,
                  content: JSON.stringify(doc.getBody()),
                };
              })
            );
            return state.doc.extractedContent;
          };

          await updateState("doc", "docContentResult", await getDocContent(fileObj));
          return state.doc.docContentResult;
        } else {
          return "error case: File is not pdf, docx or doc!";
        }
      };

      const singleResult = await getSingleResult();
      const newResult = {
        fullpath: fileObj.fullpath,
        filename: fileObj.filename,
        relativepath: fileObj.relativepath,
        linuxpath: fileObj.linuxpath,
        content: singleResult && singleResult.content ? singleResult.content : "",
      };
      await updateState("analyzedFiles", "allResults", [...state.analyzedFiles.allResults, newResult]);
    }
    //Qui dovrebbe salvare il json di containerResult
    await updateState("global", "mappedArchiveStr", JSON.stringify([...state.analyzedFiles.allResults]));
    await updateState("global", "todayDate", new Date());
    await updateState("global", "todayUTC", state.global.todayDate.toUTCString());
    const writeFileName = state.global.todayUTC.slice(0, 16);
    //[MEMO] ho disattivato la creazione del state.mappedArchive per assicurarmi che lo script lo creasse sempre (necessario per convertire i doc in docx);
    //await fs.writeFileSync("state.mappedArchive" + envSlash + writeFileName + ".json", state.mappedArchiveStr);
    console.log("getAnalyzedFiles returns an arr whose length is:", state.analyzedFiles.allResults.length);
    return state.analyzedFiles.allResults;
  };

  const getAnalyzedFilesReturnValue = await getAnalyzedFiles(state.global.filesToAnalyze).then(returnValue => {
    return returnValue;
  });

  const updateStateReturnValue = await updateState("global", "analyzedFiles", getAnalyzedFilesReturnValue).then(returnValue => {
    return returnValue;
  });

  return updateStateReturnValue;
};
