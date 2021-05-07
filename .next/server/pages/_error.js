module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/_error.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/iridion/Desktop/Repos/Freelancer/project-privacy/pages/_error.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n//Questo file è identico alla versione base di React Next. Esiste solo in caso si vogliano apportare modifiche.\nfunction Error({\n  statusCode\n}) {\n  return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 5\n    }\n  }, statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client');\n}\n\nError.getInitialProps = ({\n  res,\n  err\n}) => {\n  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZXJyb3IuanM/NjM0MyJdLCJuYW1lcyI6WyJFcnJvciIsInN0YXR1c0NvZGUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQztBQUFGLENBQWYsRUFBK0I7QUFDN0IsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLFVBQVUsR0FDTixZQUFXQSxVQUFXLHFCQURoQixHQUVQLDZCQUhOLENBREY7QUFPRDs7QUFFREQsS0FBSyxDQUFDRSxlQUFOLEdBQXdCLENBQUM7QUFBRUMsS0FBRjtBQUFPQztBQUFQLENBQUQsS0FBa0I7QUFDeEMsUUFBTUgsVUFBVSxHQUFHRSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0YsVUFBUCxHQUFvQkcsR0FBRyxHQUFHQSxHQUFHLENBQUNILFVBQVAsR0FBb0IsR0FBakU7QUFDQSxTQUFPO0FBQUVBO0FBQUYsR0FBUDtBQUNELENBSEQ7O0FBS2VELG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2Vycm9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9RdWVzdG8gZmlsZSDDqCBpZGVudGljbyBhbGxhIHZlcnNpb25lIGJhc2UgZGkgUmVhY3QgTmV4dC4gRXNpc3RlIHNvbG8gaW4gY2FzbyBzaSB2b2dsaWFubyBhcHBvcnRhcmUgbW9kaWZpY2hlLlxuZnVuY3Rpb24gRXJyb3IoeyBzdGF0dXNDb2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8cD5cbiAgICAgIHtzdGF0dXNDb2RlXG4gICAgICAgID8gYEFuIGVycm9yICR7c3RhdHVzQ29kZX0gb2NjdXJyZWQgb24gc2VydmVyYFxuICAgICAgICA6ICdBbiBlcnJvciBvY2N1cnJlZCBvbiBjbGllbnQnfVxuICAgIDwvcD5cbiAgKVxufVxuXG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIGVyciB9KSA9PiB7XG4gIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0XG4gIHJldHVybiB7IHN0YXR1c0NvZGUgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_error.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });