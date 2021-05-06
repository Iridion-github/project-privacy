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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d2RA");


/***/ }),

/***/ "5Xci":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ConsultationSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  id: {
    type: String,
    required: [true, 'id is required!'],
    unique: true,
    trim: true
  },
  img: {
    type: String,
    required: [true, 'previewImg is required!']
  },
  ita: {
    title: {
      type: String,
      required: [true, 'Title (ita) is required!'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Subtitle (ita) is required!'],
      trim: true
    },
    content: {
      type: String,
      required: [true, 'Content (ita) is required!'],
      trim: true
    }
  },
  eng: {
    title: {
      type: String,
      required: [true, 'Title (eng) is required!'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Subtitle (eng) is required!'],
      trim: true
    },
    content: {
      type: String,
      required: [true, 'Content (eng) is required!'],
      trim: true
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Consultation || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Consultation", ConsultationSchema));

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

/***/ "d2RA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RuLO");
/* harmony import */ var _models_Consultation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5Xci");
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
  let targetConsult = await _models_Consultation__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].findOne({
    id: id
  });
  if (!targetConsult) return res.status(400).json({
    success: false,
    error: "No consultation found for that id!"
  });

  switch (method) {
    case "GET":
      try {
        return res.status(200).json({
          success: true,
          data: consultation
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error
        });
      }

    case "PUT":
      try {
        const updatedConsult = Object(_utils_dbFunctions__WEBPACK_IMPORTED_MODULE_2__[/* whichToUpdate */ "a"])(body, targetConsult);
        targetConsult = updatedConsult;
        await targetConsult.save();
        return res.status(200).json({
          success: true,
          data: updatedConsult
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: "Failed update of existing consultation!"
        });
      }

    case "DELETE":
      try {
        await _models_Consultation__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].deleteOne({
          _id: targetConsult.id
        });
        await targetConsult.save();
        return res.status(200).json({
          success: true,
          data: {}
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: "Failed deletion of existing consultation!"
        });
      }

    default:
      return res.status(400).json({
        success: false,
        error
      });
  }
});

/***/ })

/******/ });