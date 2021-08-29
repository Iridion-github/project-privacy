import { setDataToFilter } from './advancedSearch/setDataToFilter';
import { initGlobalState } from './advancedSearch/initGlobalState';
import { setIsArchiveMapped } from './advancedSearch/setIsArchiveMapped';
import { mapArchive } from './advancedSearch/mapArchive';
import { setFilteredDocs } from './advancedSearch/setFilteredDocs';
import { setIsConversionNeeded } from './advancedSearch/setIsConversionNeeded';
import { convertFiles } from './advancedSearch/convertFiles';

const environment = "linux";
const envSlash = (environment === "windows") ? "\\" : "/";
const refreshRate = 1000;

export default async (req, res) => {

  //------------------------------ State Declaration ------------------------------ 

  const phases = { //per ora non sono usate, ma tornerebbe utile crearvi un sistema affidabile
    1: { name: "1-Init", done: false },
    2: { name: "2-CheckMapArchive", done: false },
    3: { name: "3-MapArchive", done: false },
    4: { name: "4-SetFilterData", done: false },
    5: { name: "5-FilterData", done: false },
    6: { name: "6-CheckConversion", done: false },
    7: { name: "7-Conversion", done: false },
    8: { name: "8-ReturnToFrontend", done: false },
  };

  const globalState = {
    canGoNextPhase: undefined,
    conversionFinished: undefined,
    isArchiveMapped: undefined,
    mappedArchive: undefined,
    searchterms: undefined,
    activeFilters: undefined,
    includePdf: undefined,
    includeDoc: undefined,
    includeDocx: undefined,
    filesToAnalyze: undefined,
    dataToFilter: undefined,
    todayDate: undefined,
    todayUTC: undefined,
    readFileName: undefined,
    mustBeProvv: undefined,
    analyzedFiles: undefined,
    filteredDocs: undefined,
    isConversionNeeded: undefined,
  };

  const updateGlobalState = async (prop, val) => {
    globalState[prop] = val;
    return globalState[prop];
  };

  const analyzedFilesState = {
    singleResult: undefined,
    allResults: undefined,
  };

  const updateAnalyzedFilesState = async (prop, val) => {
    analyzedFilesState[prop] = val;
    return analyzedFilesState[prop];
  };

  const getDataToFilterState = {
    lastFile: undefined,
    pdf: undefined,
    docx: undefined,
    doc: undefined,
  };

  const updateGetDataToFilterState = async (prop, val) => {
    getDataToFilterState[prop] = val;
    return getDataToFilterState[prop];
  };

  const getSingleResultState = {
    pdfContentResult: undefined
  };

  const updateGetSingleResultState = async (prop, val) => {
    getSingleResultState[prop] = val;
    return getSingleResultState[prop];
  };

  const docxState = {
    options: {},
    docxContentResult: undefined,
  };

  const updateDocxState = async (prop, val) => {
    docxState[prop] = val;
    return docxState[prop];
  };

  const docState = {
    docExtractor: undefined,
    extractedContent: undefined,
    docContentResult: undefined,
  };

  const updateDocState = async (prop, val) => {
    docState[prop] = val;
    return docState[prop];
  };

  const getFilteredDocsState = {
    filteredArr: undefined
  };

  const updateGetFilteredDocsState = async (prop, val) => {
    getFilteredDocsState[prop] = val;
    return getFilteredDocsState[prop];
  };

  const contentState = {
    cleanContent: undefined,
    result: undefined,
  };

  const updateContentState = async (prop, val) => {
    contentState[prop] = val;
    return contentState[prop];
  };

  const byProvvedimentoState = {
    contentIncipit: undefined,
    enterPath: undefined,
    requiredFormat: undefined,
    target: undefined,
    resultsByArticle: undefined,
    conditions: undefined,
  };

  const updateByProvvedimentoState = async (prop, val) => {
    byProvvedimentoState[prop] = val;
    return byProvvedimentoState[prop];
  };

  const authorityTagsState = {
    tag: undefined,
  };

  const updateAuthorityTagsState = async (prop, val) => {
    authorityTagsState[prop] = val;
    return authorityTagsState[prop];
  };

  const bySubjectState = {
    tags: undefined,
    tag: undefined,
  };

  const updateBySubjectState = async (prop, val) => {
    bySubjectState[prop] = val;
    return bySubjectState[prop];
  };

  const conversionNeededState = {
    names: undefined,
    conversionNeeded: undefined,
  };

  const updateConversionNeededState = async (prop, val) => {
    conversionNeededState[prop] = val;
    return conversionNeededState[prop];
  };

  const conversionState = {
    convertedDocs: undefined,
    document: undefined,
    libreResult: undefined,
    mapResult: undefined,
  };

  const updateConversionState = async (prop, val) => {
    conversionState[prop] = val;
    return conversionState[prop];
  };

  const libreResultState = {
    extend: undefined,
    enterPath: undefined,
    undone: undefined,
    outputPath: undefined,
  };

  const updateLibreResultState = async (prop, val) => {
    libreResultState[prop] = val;
    return libreResultState[prop];
  };

  //------------------------------ State Initialization ------------------------------ 
  console.log('[1] Init states');
  await initGlobalState({
    req,
    globalState,
    updateGlobalState
  });

  while (!globalState.canGoNextPhase) {
    setTimeout(() => console.log("Waiting ..."), refreshRate);
  }
  console.log('[2] Set isArchiveMapped bool');

  //------------------------------ Check if Archive is mapped ------------------------------   
  await setIsArchiveMapped({ globalState, updateGlobalState, envSlash });

  while (!globalState.canGoNextPhase) {
    setTimeout(() => console.log("Waiting ..."), refreshRate);
  }
  console.log('[3] Check if mapping archive is needed');

  //------------------------------ Map archive ------------------------------   
  if (!globalState.isArchiveMapped) {
    console.log('[3.1] Mapping archive is needed ');
    await mapArchive({ globalState, envSlash, updateGlobalState });
  } else {
    console.log("[3.2] Mapping archive is NOT needed");
  }

  while (!globalState.canGoNextPhase) {
    setTimeout(() => console.log("Waiting ..."), refreshRate);
  }
  console.log('[4] Set data to filter');


  //------------------------------ getDataToFilter ------------------------------   
  await setDataToFilter({
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
  }).catch(err => {
    console.log('error in setDataToFilter:', err);
  });

  console.log("exited phase 4, canGoNextPhase ? ", globalState.canGoNextPhase);

  while (!globalState.canGoNextPhase) {
    setTimeout(() => console.log("Waiting ..."), refreshRate);
  }
  console.log('[5] Filter data');

  //------------------------------ getFilteredDocs ------------------------------ 
  await setFilteredDocs({
    envSlash,
    globalState,
    updateGlobalState,
    getFilteredDocsState,
    updateGetFilteredDocsState,
    byProvvedimentoState,
    updateByProvvedimentoState,
  }).then(returnValue => {
    return returnValue;
  }).catch(err => {
    console.log('error in setFilteredDocs:', err);
  });

  (function forceWait() {
    if (!globalState.canGoNextPhase) {
      setTimeout(forceWait, refreshRate);
    } else {
      console.log('[6] Check if data conversion is needed');
    }
  })();

  //------------------------------ check if conversion needed ------------------------------ 
  await setIsConversionNeeded({
    globalState,
    updateGlobalState,
    conversionNeededState,
    updateConversionNeededState,
  }).then(returnValue => {
    return returnValue;
  }).catch(err => {
    console.log('error in setIsConversionNeeded:', err);
  });

  (function forceWait() {
    if (!globalState.canGoNextPhase) {
      setTimeout(forceWait, refreshRate);
    } else {
      console.log('[7] Data conversion is needed ');
    }
  })();

  //------------------------------ convert files ------------------------------ 
  if (globalState.isConversionNeeded) {
    await convertFiles({
      globalState,
      updateGlobalState,
      conversionState,
      updateConversionState,
      libreResultState,
      updateLibreResultState,
    }).then(returnValue => {
      return returnValue;
    }).catch(err => {
      console.log('error in convertFiles:', err);
    });
  } else {
    console.log("[7] Data conversion conversion is NOT needed");
  }

  (function forceWait() {
    if (!globalState.canGoNextPhase) {
      setTimeout(forceWait, refreshRate);
    } else {
      console.log("[8] Return data to frontend");
    }
  })();

  //------------------------------ return data to frontend ------------------------------ 
  return res.status(200).json({
    success: true,
    data: { filteredDocs: (globalState.convertedDocs && globalState.convertedDocs.length) ? globalState.convertedDocs : globalState.filteredDocs }
  });

};