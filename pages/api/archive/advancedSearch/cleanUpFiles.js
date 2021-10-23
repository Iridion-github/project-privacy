export const cleanUpFiles = async ({ state, updateState }) => {
  const files = state.global.filesToAnalyze;

  const checkForDuplicates = arr => {
    for (const elem of arr) {
      const shorterArr = arr.filter(el => el !== elem);
      const lengthDiff = Number(arr.length - shorterArr.length);
      if (lengthDiff > 1) return true;
    }
    return false;
  };

  const removeDuplicates = arr => {
    const filenames = arr.map(file => file.filename);
    const includesDuplicates = checkForDuplicates(filenames);
    if (includesDuplicates) {
      const toRemove = [];
      filenames.forEach((name, i) => {
        const shorterArr = filenames.filter(el => el !== name);
        const isDuplicate = Number(filenames.length - shorterArr.length) > 1;
        const alreadyInserted = toRemove.map(el => el.name).includes(name);
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
      return arr;
    }
  };
  const cleanedUpFiles = removeDuplicates(files);
  // console.log(
  //   "cleanedUpFiles:",
  //   cleanedUpFiles.map(file => ({ ...file, content: "HIDDEN" }))
  // );
  updateState("global", "filesToAnalyze", cleanedUpFiles);
};
