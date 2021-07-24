import { PdfReader } from "pdfreader";  //pacchetto 1 usato per leggere i pdf 
import pdfTextExtract from "pdf-text-extract"; //pacchetto 2 usato per leggere i pdf
import { forceWait } from "../../../utils/async";

export const getPdfContent = async ({ fileObj, which, updateGetSingleResultState, updateGlobalState }) => {

  if (which === "PdfReader") {
    let pdfContentArray = [];
    const parserCallback = async ({ mode, error, item, fileObj }) => {

      if (mode === "error") {
        console.log("[2.1.A.1] exit function: PdfReader().parseFileItems with error:", error);
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
        console.log("[2.1.A.1] exit function: PdfReader().parseFileItems");
        return await parserCallback({ mode: 'exit', error: null, item: null, fileObj: fileObj });
      }
      else if (item.text) {
        await parserCallback({ mode: 'update', error: null, item: item, fileObj: fileObj });
      }
    });

    console.log("8888888888888888888888888888888 - parserReturnValue:", parserReturnValue);

    if (parserReturnValue) {
      console.log("[2.1.A] parserReturnValue is NOT null - exit function: getPdfContent");
    } else {
      console.log("[2.1.A] parserReturnValue is null - exit function: getPdfContent");
    }
  }

  if (which === "pdfTextExtract") {

    await updateGlobalState("getPdfContentHasFinished", false);

    const extractCallback = async ({ pages, fileObj }) => {
      //console.log("extractCallback - pages[0]:", pages[0]);
      await updateGetSingleResultState("pdfContentResult", {
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
        await updateGlobalState("getPdfContentHasFinished", true);
        return;
      }
      //[memo] qui ci andrà parseFileItems()
      await extractCallback({ pages: pages, fileObj: fileObj });
      await console.log("pdfTextExtract - pages.length:", pages.length);
      await updateGlobalState("getPdfContentHasFinished", true);
    });

  }

  console.log("[2.1.A] exit function: getPdfContent");
  forceWait(1000);

};