import { setAnalyzedFiles } from "./setAnalyzedFiles";

export const setDataToFilter = async ({ envSlash, state, updateState }) => {
  const getDataToFilter = async () => {
    try {
      const setAnalyzedFilesReturnValue = await setAnalyzedFiles({
        envSlash,
        state,
        updateState,
      }).then(returnValue => {
        return returnValue;
      });
      return setAnalyzedFilesReturnValue;
    } catch (error) {
      console.log("getDataToFilter - error:", error);
    }
  };

  const dataToFilter = await getDataToFilter();

  return await updateState("global", "dataToFilter", dataToFilter).then(returnValue => {
    return returnValue;
  });
};
