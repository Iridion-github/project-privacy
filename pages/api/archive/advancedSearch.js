import { setDataToFilter } from "./advancedSearch/setDataToFilter";
import { setIsArchiveMapped } from "./advancedSearch/setIsArchiveMapped";
import { mapArchive } from "./advancedSearch/mapArchive";
import { setFilteredDocs } from "./advancedSearch/setFilteredDocs";
import { setIsConversionNeeded } from "./advancedSearch/setIsConversionNeeded";
import { convertFiles } from "./advancedSearch/convertFiles";
import { cleanUpFiles } from "./advancedSearch/cleanUpFiles";

const environment = "linux";
const envSlash = environment === "windows" ? "\\" : "/";
const refreshRate = 1000;

export default async (req, res) => {
  //------------------------------ State Declaration ------------------------------

  const phases = [
    { name: "CheckMapArchive", done: false, descr: "Controlla se è necessario mappare l'archivio" },
    { name: "MapArchive", done: false, descr: "Mappa l'archivio" },
    { name: "CleanResults", done: false, descr: "Ripulisce dai doppioni" },
    { name: "SetFilterData", done: false, descr: "Prepara i files all'essere sottoposti ai filtri" },
    { name: "FilterData", done: false, descr: "Sottopone i files ai filtri" },
    { name: "CheckConversion", done: false, descr: "Controlla se è necessario convertire l'estensione di alcuni file" },
    { name: "Conversion", done: false, descr: "Converte i files che non hanno un estensione supportata dal viewer" },
    { name: "ReturnToFrontend", done: false, descr: "Manda i files al frontend" },
  ];

  const today = new Date();
  const todayUTC = today.toUTCString();
  const activeFilters = JSON.parse(req.query.activeFilters);
  const includePdf = activeFilters.byExtension.find(obj => obj.label === "Pdf").checked;
  const includeDoc = activeFilters.byExtension.find(obj => obj.label === "Doc").checked;
  const includeDocx = activeFilters.byExtension.find(obj => obj.label === "Docx").checked;
  const state = {
    //global
    global: {
      phases: phases,
      currentPhase: 0,
      isArchiveMapped: undefined, //variabile bool che ci dirà se c'è una versione di oggi dell'archivio mappato
      mappedArchiveRaw: undefined,
      mappedArchive: undefined, //variabile array dei dati dell'archivio mappato
      searchterms: req.query.searchterms && req.query.searchterms.length > 0 ? req.query.searchterms : null,
      activeFilters: JSON.parse(req.query.activeFilters),
      includePdf: includePdf,
      includeDoc: includeDoc,
      includeDocx: includeDocx,
      filesToAnalyze: [],
      dataToFilter: undefined,
      todayDate: today,
      todayUTC: todayUTC,
      readFileName: todayUTC.slice(0, 16),
      mustBeProvv: Object.keys(JSON.parse(req.query.activeFilters)).includes("byProvvedimento"),
      analyzedFiles: undefined,
      filteredDocs: undefined,
      isConversionNeeded: undefined,
    },
    analyzedFiles: {
      singleResult: undefined,
      allResults: undefined,
    },
    getDataToFilter: {
      lastFile: undefined,
      pdf: undefined,
      docx: undefined,
      doc: undefined,
    },
    getSingleResult: {
      pdfContentResult: undefined,
    },
    docx: {
      options: {},
      docxContentResult: undefined,
    },
    doc: {
      docExtractor: undefined,
      extractedContent: undefined,
      docContentResult: undefined,
    },
    getFilteredDocs: {
      filteredArr: undefined,
      isDoneFiltering: false,
    },
    parseFileItems: {
      parsedItems: [],
    },
    content: {
      cleanContent: undefined,
      result: undefined,
    },
    byProvvedimento: {
      contentIncipit: undefined,
      enterPath: undefined,
      requiredFormat: undefined,
      target: undefined,
      resultsByArticle: undefined,
      conditions: undefined,
    },
    authorityTags: {
      tag: undefined,
    },
    bySubject: {
      tags: undefined,
      tag: undefined,
    },
    conversionNeeded: {
      names: undefined,
      conversionNeeded: undefined,
    },
    conversion: {
      convertedDocs: undefined,
      document: undefined,
      libreResult: undefined,
      mapResult: undefined,
    },
    libreResult: {
      extend: undefined,
      enterPath: undefined,
      undone: undefined,
      outputPath: undefined,
    },
  };

  const updateState = async (which, prop, newVal, debug) => {
    if (debug) {
      console.log(`updateState got called with - which: ${which}, prop: ${prop}, newVal: ${newVal}, debug: ${debug}`);
    }
    state[which][prop] = newVal;
    if (debug) {
      console.log("returning:", state[which][prop]);
    }
    return state[which][prop];
  };

  //------------------------------ Check if Archive is mapped ------------------------------
  console.log(`[${state.global.currentPhase}] ${phases[state.global.currentPhase].name}`);
  await setIsArchiveMapped({ state: state, updateState: updateState, envSlash });

  updateState("global", "currentPhase", state.global.currentPhase + 1);

  //------------------------------ Map archive ------------------------------
  console.log(`[${state.global.currentPhase}] ${phases[state.global.currentPhase].name}`);
  if (!state.global.isArchiveMapped) {
    console.log("[3.1] Mapping archive is needed ");
    await mapArchive({ state, envSlash, updateState });
  } else {
    console.log("[3.2] Mapping archive is NOT needed");
  }

  updateState("global", "currentPhase", state.global.currentPhase + 1);

  //------------------------------ clean up files ------------------------------
  console.log(`[${state.global.currentPhase}] ${phases[state.global.currentPhase].name}`);
  await cleanUpFiles({
    state,
    updateState,
  })
    .then(returnValue => {
      return returnValue;
    })
    .catch(err => {
      console.log("error in convertFiles:", err);
    });

  updateState("global", "currentPhase", state.global.currentPhase + 1);

  //------------------------------ getDataToFilter ------------------------------
  console.log(`[${state.global.currentPhase}] ${phases[state.global.currentPhase].name}`);
  await setDataToFilter({
    envSlash,
    state,
    updateState,
  })
    .then(returnValue => {
      return returnValue;
    })
    .catch(err => {
      console.log("error in setDataToFilter:", err);
    });

  updateState("global", "currentPhase", state.global.currentPhase + 1);

  //------------------------------ setFilteredDocs ------------------------------
  console.log(`[${state.global.currentPhase}] ${phases[state.global.currentPhase].name}`);
  await setFilteredDocs({
    envSlash,
    refreshRate,
    state,
    updateState,
  });

  updateState("global", "currentPhase", state.global.currentPhase + 1);

  //------------------------------ check if conversion needed ------------------------------
  console.log(`[${state.global.currentPhase}] ${phases[state.global.currentPhase].name}`);
  await setIsConversionNeeded({
    state,
    updateState,
  })
    .then(returnValue => {
      return returnValue;
    })
    .catch(err => {
      console.log("error in setIsConversionNeeded:", err);
    });

  updateState("global", "currentPhase", state.global.currentPhase + 1);

  //------------------------------ convert files ------------------------------
  console.log(`[${state.global.currentPhase}] ${phases[state.global.currentPhase].name}`);
  if (state.global.isConversionNeeded) {
    await convertFiles({
      state,
      updateState,
    })
      .then(returnValue => {
        return returnValue;
      })
      .catch(err => {
        console.log("error in convertFiles:", err);
      });
  } else {
    console.log("[6.1] Data conversion conversion is NOT needed");
  }

  updateState("global", "currentPhase", state.global.currentPhase + 1);

  //------------------------------ return data to frontend ------------------------------
  console.log(`[${state.global.currentPhase}] ${phases[state.global.currentPhase].name}`);
  console.log("returning this:", !!state.conversion.convertedDocs ? state.conversion.convertedDocs : state.global.filteredDocs);
  return res.status(200).json({
    success: true,
    data: { filteredDocs: !!state.conversion.convertedDocs ? state.conversion.convertedDocs : state.global.filteredDocs },
  });
};
