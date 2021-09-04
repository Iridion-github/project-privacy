import { file } from "jszip";
import { delay } from "../../../../utils/async";

export const cleanUpFiles = async ({ globalState, updateGlobalState, conversionState, updateCleanUpState }) => {
  updateGlobalState("canGoNextPhase", false);
  const files = conversionState.convertedDocs && conversionState.convertedDocs.length ? conversionState.convertedDocs : globalState.filteredDocs;

  const checkForDuplicates = arr => {
    for (const elem of arr) {
      console.log("elem:", elem);
      const shorterArr = arr.filter(el => el !== elem);
      const lengthDiff = Number(arr.length - shorterArr.length);
      console.log("CHECK - lengthDiff:", lengthDiff);
      if (lengthDiff > 1) return true;
    }
    return false;
  };

  const removeDuplicates = arr => {
    const filenames = arr.map(file => file.filename);
    const includesDuplicates = checkForDuplicates(filenames);
    console.log("includesDuplicates ?", includesDuplicates ? "Yes" : "No");
    if (includesDuplicates) {
      console.log("arr contains dupes");
      const toRemove = [];
      filenames.forEach((name, i) => {
        const shorterArr = filenames.filter(el => el !== name);
        const isDuplicate = Number(filenames.length - shorterArr.length) > 1;
        const alreadyInserted = toRemove.map(el => el.name).includes(name);
        console.log("EXECUTE - shorterArr:", shorterArr);
        console.log("EXECUTE - isDuplicate:", isDuplicate);
        console.log("EXECUTE - alreadyInserted:", alreadyInserted);
        if (
          isDuplicate &&
          //se è già stato inserito in toRemove, non lo inserisco nuovamente. Se necessario, sarà fatto nella prossima ricorsione
          !alreadyInserted
        ) {
          toRemove.push({ index: i, name: name });
        }
      });
      const processedArr = arr.filter((file, i) => {
        return !toRemove.map(e => e.index).includes(i);
      });
      return removeDuplicates(processedArr);
    } else {
      console.log("arr elems are unique:", arr);
      return arr;
    }
  };
  console.log("entered recursion");
  const cleanedUpFiles = removeDuplicates(files);
  console.log("exited recursion");
  console.log(
    "filesForFrontend:",
    cleanedUpFiles.map(file => ({ ...file, content: "NO" }))
  );
  updateCleanUpState("filesForFrontend", cleanedUpFiles);
  updateGlobalState("canGoNextPhase", true);
};
