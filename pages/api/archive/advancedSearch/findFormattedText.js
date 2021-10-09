import { PdfReader } from "pdfreader";

export const findArticolo = ({ enterPath, target, requiredFormat, refreshRate, globalState, updateGlobalState }) => {
  updateGlobalState("isDoneParseFileItems", false);
  console.log("target:", target);
  console.log("enterPath:", enterPath);
  console.log("requiredFormat:", requiredFormat);
  let parsedResults = [];

  function readPdf(onFillCallback, onExitCallback) {
    let positiveResults = [];
    new PdfReader().parseFileItems(enterPath, function (err, item) {
      if (!item) {
        onExitCallback(positiveResults);
      }
      if (item && item.text) {
        onFillCallback(positiveResults, item);
      }
    });
  }

  const onFillCallback = (positiveResults, item) => {
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
      positiveResults = [...positiveResults, item];
    }
  };

  const onExitCallback = results => {
    parsedResults = [...results];
    console.log(`>>> exit case - parsedResults: ${parsedResults} <<<`);
    return parsedResults;
  };

  readPdf(onFillCallback, onExitCallback);
  console.log("after readpdf - parsedResults:", parsedResults);
  return parsedResults;
};
