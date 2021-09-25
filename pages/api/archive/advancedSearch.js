import { setDataToFilter } from "./advancedSearch/setDataToFilter";
import { initGlobalState } from "./advancedSearch/initGlobalState";
import { setIsArchiveMapped } from "./advancedSearch/setIsArchiveMapped";
import { mapArchive } from "./advancedSearch/mapArchive";
import { setFilteredDocs } from "./advancedSearch/setFilteredDocs";
import { setIsConversionNeeded } from "./advancedSearch/setIsConversionNeeded";
import { convertFiles } from "./advancedSearch/convertFiles";
import { delay } from "../../../utils/async";
import { cleanUpFiles } from "./advancedSearch/cleanUpFiles";

const environment = "linux";
const envSlash = environment === "windows" ? "\\" : "/";
const refreshRate = 1000;

export default async (req, res) => {
  //------------------------------ State Declaration ------------------------------

  const phases = [
    { name: "Init", done: false, descr: "Inizializzazione di tutti gli stati e proprietà" },
    { name: "CheckMapArchive", done: false, descr: "Controlla se è necessario mappare l'archivio" },
    { name: "MapArchive", done: false, descr: "Mappa l'archivio" },
    { name: "CleanResults", done: false, descr: "Ripulisce dai doppioni" },
    { name: "SetFilterData", done: false, descr: "Prepara i file all'essere sottoposti ai filtri" },
    { name: "FilterData", done: false, descr: "Sottopone i file ai filtri" },
    { name: "CheckConversion", done: false, descr: "Controlla se è necessario convertire l'estensione di alcuni file" },
    { name: "Conversion", done: false, descr: "Converte i file che non hanno un estensione supportata dal viewer" },
    { name: "ReturnToFrontend", done: false, descr: "Manda i file al frontend" },
  ];

  const globalState = {
    phases: phases,
    currentPhase: 0,
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
    isDoneParseFileItems: undefined,
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
    pdfContentResult: undefined,
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
    filteredArr: undefined,
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
  console.log(`[${globalState.currentPhase}] ${phases[globalState.currentPhase].name}`);
  await initGlobalState({
    req,
    globalState,
    updateGlobalState,
  });

  while (!globalState.canGoNextPhase) {
    console.log("Waiting for next phase ...");
    delay(refreshRate);
  }
  updateGlobalState("currentPhase", globalState.currentPhase + 1);

  //------------------------------ Check if Archive is mapped ------------------------------
  console.log(`[${globalState.currentPhase}] ${phases[globalState.currentPhase].name}`);
  await setIsArchiveMapped({ globalState, updateGlobalState, envSlash });

  while (!globalState.canGoNextPhase) {
    console.log("Waiting for next phase ...");
    delay(refreshRate);
  }
  updateGlobalState("currentPhase", globalState.currentPhase + 1);

  //------------------------------ Map archive ------------------------------
  console.log(`[${globalState.currentPhase}] ${phases[globalState.currentPhase].name}`);
  if (!globalState.isArchiveMapped) {
    console.log("[3.1] Mapping archive is needed ");
    await mapArchive({ globalState, envSlash, updateGlobalState });
  } else {
    console.log("[3.2] Mapping archive is NOT needed");
  }

  while (!globalState.canGoNextPhase) {
    console.log("Waiting for next phase ...");
    delay(refreshRate);
  }
  updateGlobalState("currentPhase", globalState.currentPhase + 1);

  //------------------------------ clean up files ------------------------------
  console.log(`[${globalState.currentPhase}] ${phases[globalState.currentPhase].name}`);
  await cleanUpFiles({
    globalState,
    updateGlobalState,
    conversionState,
  })
    .then(returnValue => {
      return returnValue;
    })
    .catch(err => {
      console.log("error in convertFiles:", err);
    });

  while (!globalState.canGoNextPhase) {
    //  console.log("Waiting for next phase ...:", globalState.currentPhase + 1);
    delay(refreshRate);
  }
  updateGlobalState("currentPhase", globalState.currentPhase + 1);

  //------------------------------ getDataToFilter ------------------------------
  console.log(`[${globalState.currentPhase}] ${phases[globalState.currentPhase].name}`);
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
  })
    .then(returnValue => {
      return returnValue;
    })
    .catch(err => {
      console.log("error in setDataToFilter:", err);
    });

  while (!globalState.canGoNextPhase) {
    console.log("Waiting for next phase ...");
    delay(refreshRate);
  }
  updateGlobalState("currentPhase", globalState.currentPhase + 1);

  //------------------------------ getFilteredDocs ------------------------------
  console.log(`[${globalState.currentPhase}] ${phases[globalState.currentPhase].name}`);
  await setFilteredDocs({
    envSlash,
    refreshRate,
    globalState,
    updateGlobalState,
    getFilteredDocsState,
    updateGetFilteredDocsState,
    byProvvedimentoState,
    updateByProvvedimentoState,
  });

  while (!globalState.canGoNextPhase) {
    console.log("Waiting for next phase ...");
    delay(refreshRate);
  }
  updateGlobalState("currentPhase", globalState.currentPhase + 1);

  //------------------------------ check if conversion needed ------------------------------
  console.log(`[${globalState.currentPhase}] ${phases[globalState.currentPhase].name}`);
  await setIsConversionNeeded({
    globalState,
    updateGlobalState,
    conversionNeededState,
    updateConversionNeededState,
  })
    .then(returnValue => {
      return returnValue;
    })
    .catch(err => {
      console.log("error in setIsConversionNeeded:", err);
    });

  while (!globalState.canGoNextPhase) {
    console.log("Waiting for next phase ...");
    delay(refreshRate);
  }
  updateGlobalState("currentPhase", globalState.currentPhase + 1);

  //------------------------------ convert files ------------------------------
  console.log(`[${globalState.currentPhase}] ${phases[globalState.currentPhase].name}`);
  if (globalState.isConversionNeeded) {
    await convertFiles({
      globalState,
      updateGlobalState,
      conversionState,
      updateConversionState,
      libreResultState,
      updateLibreResultState,
    })
      .then(returnValue => {
        return returnValue;
      })
      .catch(err => {
        console.log("error in convertFiles:", err);
      });
  } else {
    console.log("[7] Data conversion conversion is NOT needed");
  }

  while (!globalState.canGoNextPhase) {
    console.log("Waiting for next phase ...");
    delay(refreshRate);
  }
  updateGlobalState("currentPhase", globalState.currentPhase + 1);

  //------------------------------ return data to frontend ------------------------------
  console.log(`[${globalState.currentPhase}] ${phases[globalState.currentPhase].name}`);
  return res.status(200).json({
    success: true,
    data: { filteredDocs: conversionState.convertedDocs.length ? conversionState.convertedDocs : globalState.filteredDocs },
  });
};
