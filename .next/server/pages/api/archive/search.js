module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/vx+":
/***/ (function(module, exports) {

module.exports = require("pdfreader");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k8zN");


/***/ }),

/***/ "LnTi":
/***/ (function(module, exports) {

module.exports = require("word-extractor");

/***/ }),

/***/ "WF1I":
/***/ (function(module, exports) {

module.exports = require("libreoffice-convert");

/***/ }),

/***/ "k8zN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("u7mm");
/* harmony import */ var slash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfreader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/vx+");
/* harmony import */ var pdfreader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfreader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mammoth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pVAQ");
/* harmony import */ var mammoth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mammoth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var word_extractor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LnTi");
/* harmony import */ var word_extractor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(word_extractor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var libreoffice_convert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("WF1I");
/* harmony import */ var libreoffice_convert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(libreoffice_convert__WEBPACK_IMPORTED_MODULE_6__);


 //pacchetto usato per leggere i pdf 

 //pacchetto usato per leggere docx files

 //pacchetto usato per convertire i docx in html

 //pacchetto usato per leggere i doc files
//import libre from 'libreoffice-convert-win' //pacchetto usato per convertire i docx files in pdf (windows version)

 //pacchetto usato per convertire i docx files in pdf (linux version)

const environment = "linux";
const envSlash = environment === "windows" ? "\\" : "/"; // ----------------------------- [Responds with an Object for every document in Archive] -----------------------------    

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  let conversionFinished = true;
  let isArchiveMapped; //variabile bool che ci dirà se c'è una versione di oggi dell'archivio mappato

  let mappedArchive; //variabile array dei dati dell'archivio mappato

  const searchterms = req.query.searchterms;
  const filesToAnalyze = [];
  const dataToFilter = [];
  const todayDate = new Date();
  const todayUTC = todayDate.toUTCString();
  const readFileName = todayUTC.slice(0, 16);

  try {
    const mappedArchiveRaw = await fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync("mappedArchive" + envSlash + readFileName + ".json");
    mappedArchive = JSON.parse(mappedArchiveRaw);
    isArchiveMapped = true;
    dataToFilter.push(...mappedArchive);
  } catch (mappedArchiveMissing) {
    console.log("No mapped archive for today yet!");
    isArchiveMapped = false;
  }

  if (!isArchiveMapped) {
    //funzione che estrae i path precisi di ogni file all'interno della dir archive
    function* getFiles(dir) {
      const dirents = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readdirSync(dir, {
        withFileTypes: true
      });

      for (const dirent of dirents) {
        const fullpath = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(dir, dirent.name);

        if (dirent.isDirectory()) {
          yield* getFiles(fullpath);
        } else {
          yield {
            fullpath: fullpath,
            linuxfullpath: slash__WEBPACK_IMPORTED_MODULE_1___default()(fullpath),
            relativepath: fullpath.split("public" + envSlash)[1],
            linuxpath: slash__WEBPACK_IMPORTED_MODULE_1___default()(fullpath.split("public" + envSlash)[1]),
            filename: dirent.name
          };
        }
      }
    }

    (() => {
      for (const f of getFiles('public/archive')) {
        filesToAnalyze.push(f);
      }
    })(); //containerResult Promise starts pending


    const containerResult = await new Promise((resolveContainer, rejectContainer) => {
      try {
        const analyzedFiles = [];
        filesToAnalyze.forEach(async (fileObj, fileIndex) => {
          const pdf = fileObj.fullpath.toLowerCase().includes(".pdf");
          const docx = fileObj.fullpath.toLowerCase().includes(".docx");
          const doc = fileObj.fullpath.toLowerCase().includes(".doc"); //singleResult Promise starts pending

          const singleResult = await new Promise((resolveSingle, rejectSingle) => {
            if (pdf) {
              //[Pdf procedure] (PdfReader + manual array push)
              const pdfBuffer = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(fileObj.fullpath);

              const getPdfContent = async () => {
                const pdfContentArray = [];
                await new pdfreader__WEBPACK_IMPORTED_MODULE_2__["PdfReader"]().parseFileItems(fileObj.fullpath, async (err, item) => {
                  if (err) return rejectSingle(err); //rejecting singleResult Promise

                  if (!item) {
                    //Condizione d'uscita da parseFileItems()
                    return resolveSingle({
                      //resolving singleResult Promise
                      fullpath: fileObj.fullpath,
                      linuxfullpath: fileObj.linuxfullpath,
                      filename: fileObj.filename,
                      relativepath: fileObj.relativepath,
                      linuxpath: fileObj.linuxpath,
                      content: pdfContentArray.join(" ")
                    });
                  }

                  if (item.text) {
                    //Per ogni frammento del pdf, pusho in pdfContentArray.
                    pdfContentArray.push(item.text);
                    return true;
                  }
                });
              };

              getPdfContent();
            } else if (docx) {
              //[Docx procedure] (mammoth)
              const options = {};
              mammoth__WEBPACK_IMPORTED_MODULE_4___default.a.convertToHtml({
                path: 'public' + envSlash + fileObj.relativepath
              }, options).then(mammothResult => {
                if (mammothResult.messages.length > 0) {
                  for (let x; x < mammothResult.messages.length; x++) {
                    console.log("\n\n Errors:", mammothResult.messages[x], '\n\n');
                  }
                }

                return resolveSingle({
                  //resolving singleResult Promise
                  fullpath: fileObj.fullpath,
                  linuxfullpath: fileObj.linuxfullpath,
                  filename: fileObj.filename,
                  relativepath: fileObj.relativepath,
                  linuxpath: fileObj.linuxpath,
                  content: mammothResult.value
                });
              });
            } else if (doc) {
              //[Doc procedure] (WordExtractor)
              const getDocContent = async fileObj => {
                const docExtractor = new word_extractor__WEBPACK_IMPORTED_MODULE_5___default.a();
                const extractedContent = await docExtractor.extract('public' + envSlash + fileObj.relativepath).then(function (doc) {
                  resolveSingle({
                    //resolving singleResult Promise
                    fullpath: fileObj.fullpath,
                    linuxfullpath: fileObj.linuxfullpath,
                    filename: fileObj.filename,
                    relativepath: fileObj.relativepath,
                    linuxpath: fileObj.linuxpath,
                    content: JSON.stringify(doc.getBody())
                  });
                });
              };

              getDocContent(fileObj);
            } else {
              rejectSingle("File is not pdf, docx or doc!"); //rejecting singleResult Promise
            }
          }).then(singleResult => {
            return singleResult;
          }); //singleResult Promise resolved/rejected

          await analyzedFiles.push({
            fullpath: fileObj.fullpath,
            filename: fileObj.filename,
            relativepath: fileObj.relativepath,
            linuxpath: fileObj.linuxpath,
            content: singleResult.content
          });

          if (analyzedFiles.length === filesToAnalyze.length) {
            //Qui dovrebbe salvare il json di containerResult
            const mappedArchiveStr = JSON.stringify([...analyzedFiles]);
            console.log("|||||||||||||||||||||||| started writing a json file representing the archive");
            const todayDate = new Date();
            const todayUTC = todayDate.toUTCString();
            const writeFileName = todayUTC.slice(0, 16);
            await fs__WEBPACK_IMPORTED_MODULE_3___default.a.writeFileSync("mappedArchive" + envSlash + writeFileName + ".json", mappedArchiveStr);
            console.log("|||||||||||||||||||||||| finished writing json file");
            resolveContainer(analyzedFiles); //resolving containerResult Promise
            //analyzedFiles is ready
          } else {
            console.log("(analyzedFiles.length !== filesToAnalyze.length) fileIndex attuale:", fileIndex);
          }
        });
      } catch (errContainer) {
        console.log("rejectContainer with error:", errContainer);
        rejectContainer(errContainer); //rejecting containerResult Promise
      }
    }).then(async containerResult => {
      dataToFilter.push(...containerResult);
      return containerResult;
    }); //containerResult Promise resolved/rejected
  }

  const filteredDocs = dataToFilter.filter(d => {
    if (d.content) {
      //Eventuali affinamenti del filtro andranno qui
      const cleanContent = d.content.replace(/[^\w\s]/gi, '').toLowerCase();
      return cleanContent.includes(searchterms.replace(/[^\w\s]/gi, '').toLowerCase());
    } else {
      return false;
    }
  });

  const checkIfConversionNeeded = fileObjArr => {
    const names = fileObjArr.map(el => el.filename);
    return names.some(name => name.includes(".docx") || name.includes(".doc"));
  };

  if (checkIfConversionNeeded(filteredDocs)) {
    let convertedDocs = [];
    conversionFinished = false;

    for (let x = 0; x < filteredDocs.length; x++) {
      const d = filteredDocs[x];
      const libreResult = await new Promise((resolveLibre, rejectLibre) => {
        if (d && d.filename) {
          const extend = '.pdf';
          const enterPath = d.fullpath;
          const outputPath = d.filename.includes(".docx") ? d.fullpath.split('.docx')[0] + extend : d.fullpath.split('.doc')[0] + extend;
          const file = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(enterPath);
          libreoffice_convert__WEBPACK_IMPORTED_MODULE_6___default.a.convert(file, extend, undefined, async (err, done) => {
            if (err) {
              console.log(`\n\n Error converting file: ${err} \n\n`);
              rejectLibre(err);
            } else {
              // writeFileSync funziona, crea veramente il pdf, ma sarebbe troppo pesante farlo ogni volta per tutti i file, quindi mi limito a sfruttare il buffer: done.
              //await fs.writeFileSync(outputPath, done)
              resolveLibre(done);
            }
          });
        } else {
          console.log("Error - Caso inaspettato con questo file: ", filteredDocs[x]);
        }
      }).then(libreResult => {
        return libreResult;
      });
      let mapResult = {};

      if (libreResult && libreResult.byteLength) {
        mapResult = {
          fullpath: d.fullpath,
          filename: d.filename,
          relativepath: d.relativepath,
          linuxpath: d.linuxpath,
          content: d.filename.includes(".docx") ? d.content : "",
          buffer: libreResult
        };
      } else {
        mapResult = {
          fullpath: d.fullpath,
          filename: d.filename,
          relativepath: d.relativepath,
          linuxpath: d.linuxpath,
          content: d.filename.includes(".docx") ? d.content : ""
        };
      }

      const updateConvertedDocs = (convertedArr, originalArr) => {
        const resultArr = [...convertedArr, mapResult];

        if (resultArr.length === originalArr.length) {
          conversionFinished = true;
        }

        return resultArr;
      };

      convertedDocs = await updateConvertedDocs(convertedDocs, filteredDocs);
    }

    (function forceWait() {
      if (!conversionFinished) {
        setTimeout(forceWait, 1000);
      } else {
        return res.status(200).json({
          //Success - Trovato qualcosa per i searchterms immessi, e nessun errore.
          success: true,
          data: {
            filteredDocs: convertedDocs
          }
        });
      }
    })();
  } else {
    return res.status(200).json({
      //Success - Trovato qualcosa per i searchterms immessi, e nessun errore.
      success: true,
      data: {
        filteredDocs: filteredDocs
      }
    });
  }
});

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pVAQ":
/***/ (function(module, exports) {

module.exports = require("mammoth");

/***/ }),

/***/ "u7mm":
/***/ (function(module, exports) {

module.exports = require("slash");

/***/ })

/******/ });