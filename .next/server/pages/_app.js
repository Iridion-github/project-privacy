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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/siteLanguageContext.js":
/*!****************************************!*\
  !*** ./context/siteLanguageContext.js ***!
  \****************************************/
/*! exports provided: useLanguage, useLanguageUpdate, LanguageProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLanguage\", function() { return useLanguage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLanguageUpdate\", function() { return useLanguageUpdate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LanguageProvider\", function() { return LanguageProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/iridion/Desktop/Repos/Freelancer/project-privacy/context/siteLanguageContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* Per implementare una traduzione globale del sito creaimo il context usato in _app.js */\n\nconst siteLanguageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst siteLanguageUpdateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nfunction useLanguage() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(siteLanguageContext);\n}\nfunction useLanguageUpdate() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(siteLanguageUpdateContext);\n}\nfunction LanguageProvider({\n  children\n}) {\n  const {\n    0: siteLanguage,\n    1: setSiteLanguage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"ita\");\n\n  const changeSiteLanguage = newLang => {\n    setSiteLanguage(newLang);\n  };\n\n  return __jsx(siteLanguageContext.Provider, {\n    value: siteLanguage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(siteLanguageUpdateContext.Provider, {\n    value: changeSiteLanguage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, children));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3NpdGVMYW5ndWFnZUNvbnRleHQuanM/MjQyMCJdLCJuYW1lcyI6WyJzaXRlTGFuZ3VhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNpdGVMYW5ndWFnZVVwZGF0ZUNvbnRleHQiLCJ1c2VMYW5ndWFnZSIsInVzZUNvbnRleHQiLCJ1c2VMYW5ndWFnZVVwZGF0ZSIsIkxhbmd1YWdlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNpdGVMYW5ndWFnZSIsInNldFNpdGVMYW5ndWFnZSIsInVzZVN0YXRlIiwiY2hhbmdlU2l0ZUxhbmd1YWdlIiwibmV3TGFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxtQkFBbUIsZ0JBQUdDLDJEQUFhLEVBQXpDO0FBQ0EsTUFBTUMseUJBQXlCLGdCQUFHRCwyREFBYSxFQUEvQztBQUVPLFNBQVNFLFdBQVQsR0FBdUI7QUFDNUIsU0FBT0Msd0RBQVUsQ0FBQ0osbUJBQUQsQ0FBakI7QUFDRDtBQUVNLFNBQVNLLGlCQUFULEdBQTZCO0FBQ2xDLFNBQU9ELHdEQUFVLENBQUNGLHlCQUFELENBQWpCO0FBQ0Q7QUFFTSxTQUFTSSxnQkFBVCxDQUEwQjtBQUFFQztBQUFGLENBQTFCLEVBQXdDO0FBQzdDLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxLQUFELENBQWhEOztBQUNBLFFBQU1DLGtCQUFrQixHQUFJQyxPQUFELElBQWE7QUFDdENILG1CQUFlLENBQUNHLE9BQUQsQ0FBZjtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLG1CQUFELENBQXFCLFFBQXJCO0FBQThCLFNBQUssRUFBRUosWUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUJBQUQsQ0FBMkIsUUFBM0I7QUFBb0MsU0FBSyxFQUFFRyxrQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixRQURILENBREYsQ0FERjtBQU9EIiwiZmlsZSI6Ii4vY29udGV4dC9zaXRlTGFuZ3VhZ2VDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGVyIGltcGxlbWVudGFyZSB1bmEgdHJhZHV6aW9uZSBnbG9iYWxlIGRlbCBzaXRvIGNyZWFpbW8gaWwgY29udGV4dCB1c2F0byBpbiBfYXBwLmpzICovXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBzaXRlTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5jb25zdCBzaXRlTGFuZ3VhZ2VVcGRhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYW5ndWFnZSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoc2l0ZUxhbmd1YWdlQ29udGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlVXBkYXRlKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChzaXRlTGFuZ3VhZ2VVcGRhdGVDb250ZXh0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTGFuZ3VhZ2VQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3NpdGVMYW5ndWFnZSwgc2V0U2l0ZUxhbmd1YWdlXSA9IHVzZVN0YXRlKFwiaXRhXCIpXG4gIGNvbnN0IGNoYW5nZVNpdGVMYW5ndWFnZSA9IChuZXdMYW5nKSA9PiB7XG4gICAgc2V0U2l0ZUxhbmd1YWdlKG5ld0xhbmcpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzaXRlTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzaXRlTGFuZ3VhZ2V9PlxuICAgICAgPHNpdGVMYW5ndWFnZVVwZGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NoYW5nZVNpdGVMYW5ndWFnZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc2l0ZUxhbmd1YWdlVXBkYXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L3NpdGVMYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/siteLanguageContext.js\n");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@fortawesome/fontawesome-free/css/all.min.css\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/siteLanguageContext */ \"./context/siteLanguageContext.js\");\nvar _jsxFileName = \"/home/iridion/Desktop/Repos/Freelancer/project-privacy/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n //Css activation for every part of the app.\n\n //Css activation for every part of the app.\n\n //Fontawesome activation for every part of the app.\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_4__[\"LanguageProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBK0I7O0NBQ2U7O0NBQ1M7O0FBQ3ZEOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxTQUNFLE1BQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUNNQSxTQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBT0Q7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJyAvL0NzcyBhY3RpdmF0aW9uIGZvciBldmVyeSBwYXJ0IG9mIHRoZSBhcHAuXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycgLy9Dc3MgYWN0aXZhdGlvbiBmb3IgZXZlcnkgcGFydCBvZiB0aGUgYXBwLlxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnIC8vRm9udGF3ZXNvbWUgYWN0aXZhdGlvbiBmb3IgZXZlcnkgcGFydCBvZiB0aGUgYXBwLlxuaW1wb3J0IHsgTGFuZ3VhZ2VQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvc2l0ZUxhbmd1YWdlQ29udGV4dCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPExhbmd1YWdlUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAvPlxuICAgIDwvTGFuZ3VhZ2VQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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