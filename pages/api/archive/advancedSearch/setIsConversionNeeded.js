export const setIsConversionNeeded = async ({
  globalState,
  updateGlobalState,
  conversionNeededState,
  updateConversionNeededState
}) => {
  const checkIfConversionNeeded = async (fileObjArr) => {
    await updateConversionNeededState("names", await fileObjArr.map(el => el.filename));
    await updateConversionNeededState("conversionNeeded", await conversionNeededState.names.some(name => (name.includes(".docx") || name.includes(".doc"))));
    return conversionNeededState.conversionNeeded;
  };

  await updateGlobalState("isConversionNeeded", await checkIfConversionNeeded(globalState.filteredDocs));

}