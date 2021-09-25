import { PdfReader } from "pdfreader";

export const findArticolo = async ({ enterPath, target, requiredFormat, refreshRate, globalState, updateGlobalState }) => {
  updateGlobalState("isDoneParseFileItems", false);
  console.log("findArticolo - target:", target);
  console.log("findArticolo - enterPath:", enterPath);
  console.log("findArticolo - requiredFormat:", requiredFormat);
  //const buffer = await fs.readFileSync(enterPath);
  const positiveResults = [];

  return new Promise(function (resolve, reject) {
    new PdfReader().parseFileItems(enterPath, function (err, item) {
      if (err) {
        console.log("PdfReader().parseFileItems - Error:", err);
        reject(err);
      }
      if (item && item.text) {
        //Per ogni frammento del pdf, esegui quanto segue
        const currentItemFormat = {
          //face: !!item.R[0].TS[0],
          size: item.R[0].TS[1],
          bold: !!item.R[0].TS[2],
          italic: !!item.R[0].TS[3],
        };
        const boldOk = currentItemFormat.bold !== requiredFormat.bold;
        const italicOk = currentItemFormat.italic !== requiredFormat.italic;
        const sizeOk = currentItemFormat.size !== requiredFormat.size;
        const contentOk = item.text.includes(target);

        if (boldOk && italicOk && sizeOk && contentOk) {
          console.log("This item respects the rules and will be pushed into positiveResults. item.text:", item.text);
          positiveResults.push(item);
        }
      }
      if (!item) {
        //Condizione d'uscita da parseFileItems()
        console.log("PdfReader().parseFileItems - exit");
        resolve(positiveResults);
      }
    });
  });

  // new PdfReader().parseFileItems(enterPath, (err, item) => {
  //   if (err) {
  //     console.log("PdfReader().parseFileItems - Error:", err);
  //     return false;
  //   }
  //   if (item && item.text) {
  //     //Per ogni frammento del pdf, esegui quanto segue
  //     const currentItemFormat = {
  //       //face: !!item.R[0].TS[0],
  //       size: item.R[0].TS[1],
  //       bold: !!item.R[0].TS[2],
  //       italic: !!item.R[0].TS[3],
  //     };
  //     const boldOk = currentItemFormat.bold !== requiredFormat.bold;
  //     const italicOk = currentItemFormat.italic !== requiredFormat.italic;
  //     const sizeOk = currentItemFormat.size !== requiredFormat.size;
  //     const contentOk = item.text.includes(target);

  //     if (boldOk && italicOk && sizeOk && contentOk) {
  //       console.log("This item respects the rules and will be pushed into positiveResults. item.text:", item.text);
  //       positiveResults.push(item);
  //     }
  //   }
  //   if (!item) {
  //     //Condizione d'uscita da parseFileItems()
  //     console.log("PdfReader().parseFileItems - exit");
  //   }
  // });
  // console.log("parseFileItems - positiveResults:", positiveResults);
  // return positiveResults;
};
