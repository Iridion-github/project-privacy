import { PdfReader } from "pdfreader";  //pacchetto 1 usato per leggere i pdf 
import pdfTextExtract from "pdf-text-extract"; //pacchetto 2 usato per leggere i pdf
import { forceWait } from "../../../../utils/async";

export const getPdfContent = async ({ fileObj, which, updateGetSingleResultState, updateGlobalState }) => {

  if (which === "PdfReader") {
    let pdfContentArray = [];
    const parserCallback = async ({ mode, error, item, fileObj }) => {

      if (mode === "error") {
        //[memo] L'errore dovrebbe tornare qualcosa di specifico, non questo
        return {
          fullpath: fileObj.fullpath,
          linuxfullpath: fileObj.linuxfullpath,
          filename: fileObj.filename,
          relativepath: fileObj.relativepath,
          linuxpath: fileObj.linuxpath,
          content: pdfContentArray.join(" ")
        };
      }

      if (mode === "update") {
        const updatePdfContentArray = async (arr, newElem) => {
          return [...arr, newElem];
        };
        pdfContentArray = await updatePdfContentArray(pdfContentArray, item.text);
      }

      if (mode === "exit") { //Condizione d'uscita da parseFileItems()
        return {
          fullpath: fileObj.fullpath,
          linuxfullpath: fileObj.linuxfullpath,
          filename: fileObj.filename,
          relativepath: fileObj.relativepath,
          linuxpath: fileObj.linuxpath,
          content: pdfContentArray.join(" ")
        };
      }
    };

    const parserReturnValue = await new PdfReader().parseFileItems(fileObj.fullpath, async function (err, item) {
      if (err) {
        await parserCallback({ mode: 'error', error: err, item: item, fileObj: fileObj });
      }
      else if (!item) {
        return await parserCallback({ mode: 'exit', error: null, item: null, fileObj: fileObj });
      }
      else if (item.text) {
        await parserCallback({ mode: 'update', error: null, item: item, fileObj: fileObj });
      }
    });

    if (parserReturnValue) {
      console.log("parserReturnValue is NOT null");
    } else {
      console.log("parserReturnValue is null");
    }
  }

  if (which === "pdfTextExtract") {

    await updateGlobalState("getPdfContentHasFinished", false);

    const extractCallback = async ({ pages, fileObj }) => {
      return await updateGetSingleResultState("pdfContentResult", {
        fullpath: fileObj.fullpath,
        linuxfullpath: fileObj.linuxfullpath,
        filename: fileObj.filename,
        relativepath: fileObj.relativepath,
        linuxpath: fileObj.linuxpath,
        content: pages,
      });
    };

    pdfTextExtract(fileObj.fullpath, { splitPages: false }, async function (err, pages) {
      if (err) {
        console.log("pdfTextExtract - ERROR:", error);
        return null;
      }
      //[memo] qui ci andrà parseFileItems()
      const extractCallbackReturnValue = await extractCallback({ pages: pages, fileObj: fileObj });
      await console.log("pdfTextExtract - pages.length:", pages.length);
      await updateGlobalState("getPdfContentHasFinished", true);
      return extractCallbackReturnValue;
    });

  }

  forceWait(1000);

};