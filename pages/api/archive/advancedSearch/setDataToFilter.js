import { setAnalyzedFiles } from './setAnalyzedFiles';

export const setDataToFilter = async ({
  envSlash,
  globalState,
  updateGlobalState,
  analyzedFilesState,
  updateAnalyzedFilesState,
  getDataToFilterState,
  updateGetDataToFilterState,
  getSingleResultState,
  updateGetSingleResultState,
  docState,
  updateDocState,
  docxState,
  updateDocxState,
}) => {
  const getDataToFilter = async () => {
    try {
      const setAnalyzedFilesReturnValue = await setAnalyzedFiles({
        envSlash,
        globalState,
        updateGlobalState,
        analyzedFilesState,
        updateAnalyzedFilesState,
        getDataToFilterState,
        updateGetDataToFilterState,
        getSingleResultState,
        updateGetSingleResultState,
        docState,
        updateDocState,
        docxState,
        updateDocxState,
      }).then(returnValue => {
        return returnValue;
      });
      return setAnalyzedFilesReturnValue;
    } catch (error) {
      console.log('getDataToFilter - error:', error);
    }
  };

  return await updateGlobalState("dataToFilter", await getDataToFilter()).then(returnValue => {
    return returnValue;
  });

};