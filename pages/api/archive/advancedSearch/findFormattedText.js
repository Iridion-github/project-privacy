import fs from "fs";
import { PdfReader } from "pdfreader";

export const findArticolo = async ({ enterPath, target, requiredFormat, updateByProvvedimentoState }) => {
  console.log("findArticolo - first line");
  console.log("findArticolo - target:", target);
  console.log("findArticolo - enterPath:", enterPath);
  console.log("findArticolo - requiredFormat:", requiredFormat);
  const buffer = await fs.readFileSync(enterPath);
  const positiveResults = [];

  const results = await new PdfReader().parseFileItems(enterPath, async (err, item) => {
    if (err) {
      console.log("findFormattedText - Error:", err);
      return false;
    }
    // if (item === undefined) {
    //   //Condizione d'uscita per evitare errori - FORSE TEMPORANEA
    //   await updateByProvvedimentoState("resultsByArticle", []);
    //   return;
    // }
    if (!item) {
      //Condizione d'uscita da parseFileItems()
      console.log("!item - positiveResults:", positiveResults);
      await updateByProvvedimentoState("resultsByArticle", positiveResults);
      return;
    }
    if (item.text) {
      //Per ogni frammento del pdf, esegui quanto segue
      const currentItemFormat = {
        //face: !!item.R[0].TS[0],
        size: item.R[0].TS[1],
        bold: !!item.R[0].TS[2],
        italic: !!item.R[0].TS[3],
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
};
