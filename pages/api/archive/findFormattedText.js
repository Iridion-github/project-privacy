import fs from 'fs';
import { PdfReader } from "pdfreader";

export const findArticolo = async ({ enterPath, target, requiredFormat }) => {
  const buffer = await fs.readFileSync(enterPath);
  const pdfContentArray = [];
  const positiveResults = [];



  const result = await new Promise(async (resolvePdfReader, rejectPdfReader) => {
    await new PdfReader().parseFileItems(enterPath, async (err, item) => {
      if (err) {
        console.log("findFormattedText - Error:", err);
        return false;
      }
      if (!item) { //Condizione d'uscita da parseFileItems()
        resolvePdfReader(positiveResults);
      }
      if (item.text) { //Per ogni frammento del pdf, esegui quanto segue
        const currentItemFormat = {
          //face: !!item.R[0].TS[0],
          size: item.R[0].TS[1],
          bold: !!item.R[0].TS[2],
          italic: !!item.R[0].TS[3]
        };
        let shouldContinue = true;
        if (currentItemFormat.bold !== requiredFormat.bold) shouldContinue = false;
        if (currentItemFormat.italic !== requiredFormat.italic) shouldContinue = false;
        if (currentItemFormat.size !== requiredFormat.size) shouldContinue = false;

        if (shouldContinue) {
          console.log("This item respects the rules and will be pushed into positiveResults. item:", item);
          await positiveResults.push(item);
        }
      }
    });
  }).then((positiveResultsArr) => {
    console.log("PdfReader Promise - positiveResultsArr:", positiveResultsArr);
    return positiveResultsArr;
  });






  console.log("findArticolo process ended - result:", result);
  return result;
};
