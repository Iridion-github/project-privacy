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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("pM/g");


/***/ }),

/***/ "FbAY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return whichToUpdate; });
const whichToUpdate = (body, obj) => {
  const propsNames = Object.keys(body);
  const propsValues = Object.values(body);

  for (let x = 0; x < propsNames.length; x++) {
    if (obj[propsNames[x]]) {
      obj[propsNames[x]] = propsValues[x];
    }
  }

  return obj;
};

/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "RuLO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  } //process.env.MONGO_URI === "mongodb+srv://root:root@cluster.j3rra.mongodb.net/GM_consulting?retryWrites=true&w=majority"


  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://root:root@cluster.j3rra.mongodb.net/GM_consulting?retryWrites=true&w=majority", {
    userNewUrlParser: true,
    useUnifiedTopology: true
  });
  connection.isConnected = db.connections[0].readyState;
}

/* harmony default export */ __webpack_exports__["a"] = (dbConnect);

/***/ }),

/***/ "pM/g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RuLO");
/* harmony import */ var _models_ArticleTopics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wJuc");
/* harmony import */ var _utils_dbFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FbAY");



Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    query: {
      id
    },
    method,
    body
  } = req;
  let targetTopic = await _models_ArticleTopics__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].findOne({
    id: id
  });
  if (!targetTopic) return res.status(400).json({
    success: false,
    error: "No topic found for that id!"
  });

  switch (method) {
    case "GET":
      try {
        return res.status(200).json({
          success: true,
          data: targetTopic
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error
        });
      }

    case "PUT":
      try {
        const updatedArticle = Object(_utils_dbFunctions__WEBPACK_IMPORTED_MODULE_2__[/* whichToUpdate */ "a"])(body, targetArticle);
        targetArticle = updatedArticle;
        await targetArticle.save();
        return res.status(200).json({
          success: true,
          data: updatedArticle
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: "Failed update of existing article!"
        });
      }

    case "PUT":
      try {
        const updatedTopic = Object(_utils_dbFunctions__WEBPACK_IMPORTED_MODULE_2__[/* whichToUpdate */ "a"])(body, targetTopic);
        targetTopic = updatedTopic;
        await targetTopic.save();
        return res.status(200).json({
          success: true,
          data: articleTopics
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: "Failed update of existing article topic!"
        });
      }

    case "DELETE":
      try {
        await _models_ArticleTopics__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].deleteOne({
          _id: targetTopic.id
        });
        await targetTopic.save();
        return res.status(200).json({
          success: true,
          data: {}
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: "Failed deletion of article!"
        });
      }

    default:
      res.status(400).json({
        success: false,
        error
      });
  }
});

/***/ }),

/***/ "wJuc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ArticleTopicsSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: Object,
    ita: {
      type: String,
      required: [true, 'articleTopic name ita is required!'],
      unique: true,
      trim: true,
      maxlength: [30, "articleTopic name ita max length is 30!"]
    },
    eng: {
      type: String,
      required: [true, 'articleTopic name eng is required!'],
      unique: true,
      trim: true,
      maxlength: [30, "articleTopic name eng max length is 30!"]
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.ArticleTopics || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("ArticleTopics", ArticleTopicsSchema));

/***/ })

/******/ });