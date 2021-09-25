export const initGlobalState = async ({ req, globalState, updateGlobalState }) => {
  await updateGlobalState("canGoNextPhase", false);
  await updateGlobalState("conversionFinished", true);
  await updateGlobalState("isArchiveMapped", undefined); //variabile bool che ci dirà se c'è una versione di oggi dell'archivio mappato
  await updateGlobalState("mappedArchive", undefined); //variabile array dei dati dell'archivio mappato
  await updateGlobalState("searchterms", req.query.searchterms && req.query.searchterms.length > 0 ? req.query.searchterms : null);
  await updateGlobalState("activeFilters", JSON.parse(req.query.activeFilters));
  await updateGlobalState("includePdf", globalState.activeFilters.byExtension.find(obj => obj.label === "Pdf").checked);
  await updateGlobalState("includeDoc", globalState.activeFilters.byExtension.find(obj => obj.label === "Doc").checked);
  await updateGlobalState("includeDocx", globalState.activeFilters.byExtension.find(obj => obj.label === "Docx").checked);
  await updateGlobalState("filesToAnalyze", []);
  await updateGlobalState("dataToFilter", []);
  await updateGlobalState("todayDate", new Date());
  await updateGlobalState("todayUTC", globalState.todayDate.toUTCString());
  await updateGlobalState("readFileName", globalState.todayUTC.slice(0, 16));
  await updateGlobalState("mustBeProvv", Object.keys(globalState.activeFilters).includes("byProvvedimento"));
  await updateGlobalState("canGoNextPhase", true);
  await updateGlobalState("isDoneParseFileItems", false);
};
