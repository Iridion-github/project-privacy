import fs from 'fs'; //pacchetto usato per leggere docx files

export const setIsArchiveMapped = async ({ globalState, updateGlobalState, envSlash }) => {
  let isMapped;
  try {
    await updateGlobalState("canGoNextPhase", false);
    await updateGlobalState("mappedArchiveRaw", await fs.readFileSync("globalState.mappedArchive" + envSlash + globalState.readFileName + ".json"));
    await updateGlobalState("mappedArchive", JSON.parse(globalState.mappedArchiveRaw));
    await updateGlobalState("dataToFilter", [...globalState.dataToFilter, ...globalState.mappedArchive]);
    isMapped = true;
  } catch (err) {
    isMapped = false;
  }
  await updateGlobalState("isArchiveMapped", isMapped);
  await updateGlobalState("canGoNextPhase", true);
};