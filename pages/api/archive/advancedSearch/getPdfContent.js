import { PdfReader } from "pdfreader"; //pacchetto 1 usato per leggere i pdf
import pdfTextExtract from "pdf-text-extract"; //pacchetto 2 usato per leggere i pdf
import { delay } from "../../../../utils/async";

const refreshRate = 100;

export const getPdfContent = async ({ fileObj, which, getSingleResultState, updateGetSingleResultState }) => {
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
          content: pdfContentArray.join(" "),
        };
      }

      if (mode === "update") {
        const updatePdfContentArray = async (arr, newElem) => {
          return [...arr, newElem];
        };
        pdfContentArray = await updatePdfContentArray(pdfContentArray, item.text);
      }

      if (mode === "exit") {
        //Condizione d'uscita da parseFileItems()
        return {
          fullpath: fileObj.fullpath,
          linuxfullpath: fileObj.linuxfullpath,
          filename: fileObj.filename,
          relativepath: fileObj.relativepath,
          linuxpath: fileObj.linuxpath,
          content: pdfContentArray.join(" "),
        };
      }
    };

    console.log("getPdfContent - enterpath:", fileObj.fullpath);
    const parserReturnValue = await new PdfReader().parseFileItems(fileObj.fullpath, async function (err, item) {
      if (err) {
        await parserCallback({ mode: "error", error: err, item: item, fileObj: fileObj });
      } else if (!item) {
        return await parserCallback({ mode: "exit", error: null, item: null, fileObj: fileObj });
      } else if (item.text) {
        await parserCallback({ mode: "update", error: null, item: item, fileObj: fileObj });
      }
    });

    if (parserReturnValue) {
      console.log("parserReturnValue is NOT null");
    } else {
      console.log("parserReturnValue is null");
    }
  } else if (which === "pdfTextExtract") {
    const extractCallback = async ({ pages, fileObj }) => {
      await updateGetSingleResultState("pdfContentResult", null);
      while (getSingleResultState.pdfContentResult) {
        delay(refreshRate);
      }
      const pdfContentResultNewVal = {
        fullpath: fileObj.fullpath,
        linuxfullpath: fileObj.linuxfullpath,
        filename: fileObj.filename,
        relativepath: fileObj.relativepath,
        linuxpath: fileObj.linuxpath,
        content: pages,
      };
      await updateGetSingleResultState("pdfContentResult", pdfContentResultNewVal);
      while (!getSingleResultState.pdfContentResult.content || getSingleResultState.pdfContentResult.content.length !== pages.length) {
        delay(refreshRate);
      }
      return pdfContentResultNewVal;
    };
    let extractCallbackReturnValue = "unset";
    pdfTextExtract(fileObj.fullpath, { splitPages: false }, async function (err, pages) {
      if (err) {
        return "ERROR in pdfTextExtract";
      }
      //[memo] qui ci andrà parseFileItems() prima o poi
      const callTime = Date.now();
      extractCallbackReturnValue = await extractCallback({ pages: pages, fileObj: fileObj });
      while (extractCallbackReturnValue === "unset") {
        await delay(refreshRate);
      }
      //console.log(`pdfTextExtract COMPLETED in ${Date.now() - callTime} ms for file: ${fileObj.fullpath}`);
      return extractCallbackReturnValue;
    });

    while (extractCallbackReturnValue === "unset") {
      await delay(refreshRate);
    }
    return extractCallbackReturnValue;
  }
};
