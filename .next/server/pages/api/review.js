module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yftF");


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

/***/ "gSYS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ReviewSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  id: {
    type: String,
    required: [true, 'id is required!'],
    unique: true,
    trim: true
  },
  glossary: {
    type: Array
  },
  date: {
    type: String,
    required: [true, 'Date is required!'],
    trim: true
  },
  authors: {
    type: Array,
    required: [true, 'Author is required!']
  },
  previewImg: {
    type: String,
    required: [true, 'previewImg is required!']
  },
  images: {
    type: Array
  },
  ita: {
    topic: {
      type: String,
      required: [true, 'Topic is required!'],
      trim: true
    },
    tags: {
      type: Array,
      required: [true, 'At least one ita.tag is required!']
    },
    title: {
      type: String,
      required: [true, 'Title is required!'],
      trim: true
    },
    subtitle: {
      type: String,
      required: [true, 'Subtitle is required!'],
      trim: true
    },
    content: {
      type: Array
    }
  },
  eng: {
    topic: {
      type: String,
      required: [true, 'Topic is required!'],
      trim: true
    },
    tags: {
      type: Array,
      required: [true, 'At least one eng.tag is required!']
    },
    title: {
      type: String,
      required: [true, 'Title is required!'],
      trim: true
    },
    subtitle: {
      type: String,
      required: [true, 'Subtitle is required!'],
      trim: true
    },
    content: {
      type: Array
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Review || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Review", ReviewSchema));

/***/ }),

/***/ "yftF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RuLO");
/* harmony import */ var _models_Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gSYS");


Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    method
  } = req;

  switch (method) {
    case "GET":
      try {
        const reviews = await _models_Review__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].find({});
        const orderedReviews = reviews.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
        res.status(200).json({
          success: true,
          data: orderedReviews
        });
      } catch (err) {
        res.status(400).json({
          success: false,
          error: err
        });
      }

      break;

    case "POST":
      try {
        const review = await _models_Review__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].create(req.body);
        res.status(201).json({
          success: true,
          data: review
        });
      } catch (err) {
        res.status(400).json({
          success: false,
          error: err
        });
      }

      break;

    default:
      res.status(400).json({
        success: false,
        error: "Unexpected case!"
      });
  }
});

/***/ })

/******/ });