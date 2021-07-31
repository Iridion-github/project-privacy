import fs from 'fs';
import { PdfReader } from "pdfreader";

export const findArticolo = async ({ enterPath, target, requiredFormat }) => {
  const buffer = await fs.readFileSync(enterPath);
  const positiveResults = [];

  await new PdfReader().parseFileItems(enterPath, async (err, item) => {
    if (err) {
      console.log("findFormattedText - Error:", err);
      return false;
    }
    if (!item) { //Condizione d'uscita da parseFileItems()
      return positiveResults;
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
  return result;
};
