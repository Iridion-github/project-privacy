import fs from "fs"; //pacchetto usato per leggere docx files

export const setIsArchiveMapped = async ({ state, updateState, envSlash }) => {
  let isMapped;
  try {
    await updateState("global", "mappedArchiveRaw", fs.readFileSync("state.global.mappedArchive" + envSlash + state.global.readFileName + ".json"));
    await updateState("global", "mappedArchive", JSON.parse(state.global.mappedArchiveRaw));
    await updateState("global", "dataToFilter", [...state.global.dataToFilter, ...state.global.mappedArchive]);
    isMapped = true;
  } catch (err) {
    isMapped = false;
  }
  await updateState("global", "isArchiveMapped", isMapped);
};
