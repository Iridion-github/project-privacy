import path from 'path';
import slash from 'slash';
import fs from 'fs';//pacchetto usato per leggere docx files
import mammoth from 'mammoth'; //pacchetto usato per convertire i docx in html
import WordExtractor from "word-extractor"; //pacchetto usato per leggere i doc files
//import libre from 'libreoffice-convert-win' //pacchetto usato per convertire i docx files in pdf (windows version)
import libreConvert from 'libreoffice-convert'; //pacchetto usato per convertire i docx files in pdf (linux version)
import { forceWaitWithCondition } from '../../../utils/async';
import { convertToDocx } from './advancedSearch/convert';
import { findArticolo } from './advancedSearch/findFormattedText';
import { getPdfContent } from './advancedSearch/getPdfContent';
import { setDataToFilter } from './advancedSearch/setDataToFilter';
import { initGlobalState } from './advancedSearch/initGlobalState';
import { setIsArchiveMapped } from './advancedSearch/setIsArchiveMapped';
import { mapArchive } from './advancedSearch/mapArchive';
import { setFilteredDocs } from './advancedSearch/setFilteredDocs';
import { setIsConversionNeeded } from './advancedSearch/setIsConversionNeeded';
import { convertFiles } from './advancedSearch/convertFiles';

const environment = "linux";
const convertDocToDocx = true;
const envSlash = (environment === "windows") ? "\\" : "/";



export default async (req, res) => {

  //------------------------------ State Declaration ------------------------------ 

  const globalState = {
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
  console.log('[1] init states');
  await initGlobalState({
    req,
    globalState,
    updateGlobalState
  });

  //------------------------------ Check if Archive is mapped ------------------------------ 
  console.log('[2] set if archive is mapped');
  await setIsArchiveMapped({ globalState, updateGlobalState, envSlash });

  //------------------------------ Map archive ------------------------------ 
  console.log('[3] check if mapping neeeded');
  if (!globalState.isArchiveMapped) {
    console.log('[3.1] mapping needed ');
    await mapArchive({ globalState, envSlash, updateGlobalState });
  } else {
    console.log("[3.2] mapping not needed");
  }

  //------------------------------ getDataToFilter ------------------------------ 
  console.log('[4] set data to filter');
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

  //------------------------------ getFilteredDocs ------------------------------ 
  console.log('[5] filter data');
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

  //------------------------------ check if conversion needed ------------------------------ 
  console.log('[6] check if conversion neeeded');
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

  //------------------------------ convert files ------------------------------ 
  if (globalState.isConversionNeeded) {
    console.log('[6.1] conversion needed ');
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
    console.log("[6.2] conversion not needed");
  }

  //------------------------------ return data to frontend ------------------------------ 
  console.log("[7] return data to frontend");
  return res.status(200).json({
    success: true,
    data: { filteredDocs: (globalState.convertedDocs && globalState.convertedDocs.length) ? globalState.convertedDocs : globalState.filteredDocs }
  });

};