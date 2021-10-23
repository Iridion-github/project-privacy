import { PdfReader } from "pdfreader";

export const findArticolo = async ({ enterPath, target, requiredFormat, state, updateState }) => {
  async function readPdf(onFillCallback, onExitCallback) {
    new PdfReader().parseFileItems(enterPath, function (err, item) {
      if (err) {
        throw Error(err);
      } else if (!item) {
        onExitCallback();
      } else if (item && item.text) {
        onFillCallback(item);
      }
    });
  }

  const onFillCallback = async item => {
    const currentItemFormat = {
      //face: !!item.R[0].TS[0],
      size: item.R[0].TS[1],
      bold: !!item.R[0].TS[2],
      //italic: !!item.R[0].TS[3], [TODO] capire perchè italic non va mai bene e ripristinarlo
    };
    const boldOk = currentItemFormat.bold !== requiredFormat.bold;
    //const italicOk = currentItemFormat.italic !== requiredFormat.italic; //[TODO] capire perchè italic non va mai bene e ripristinarlo
    const sizeOk = currentItemFormat.size !== requiredFormat.size;
    const prevChar = item.text[item.text.indexOf(target) - 1]; //per assicurasi non sia parte di un numeroi più grande (tipo 1 in 11)
    const contentOk = (await item.text.includes(target)) && (!prevChar || prevChar === "");
    if (boldOk /*&& italicOk*/ && sizeOk && contentOk) {
      await updateState("parseFileItems", "parsedItems", [...state.parseFileItems.parsedItems, item]);
    }
  };

  const onExitCallback = async () => {
    console.log(">>> exit case - state.parseFileItems.parsedItems.length:", state.parseFileItems.parsedItems.length);
    return state.parseFileItems.parsedItems;
  };

  console.log("before readPdf - state.parseFileItems.parsedItems.length:", state.parseFileItems.parsedItems.length);
  await readPdf(onFillCallback, onExitCallback);
  console.log("after readPdf - state.parseFileItems.parsedItems.length:", state.parseFileItems.parsedItems.length);

  return state.parseFileItems.parsedItems;
};
