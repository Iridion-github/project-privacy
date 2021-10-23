export const setIsConversionNeeded = async ({ state, updateState }) => {
  const checkIfConversionNeeded = async fileObjArr => {
    await updateState("conversionNeeded", "names", await fileObjArr.map(el => el.filename));
    await updateState("conversionNeeded", "conversionNeeded", await state.conversionNeeded.names.some(name => name.includes(".docx") || name.includes(".doc")));
    return state.conversionNeeded.conversionNeeded;
  };

  await updateState("global", "isConversionNeeded", await checkIfConversionNeeded(state.global.filteredDocs));
};
