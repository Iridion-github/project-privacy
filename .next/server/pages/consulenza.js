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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YFr8");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "FCqg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Header = function (props) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, props.title), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
  }), __jsx("meta", {
    httpEquiv: "content-language",
    content: "it"
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), __jsx("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
    rel: "stylesheet"
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js"
  }));
};

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "JCBN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useLanguageUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* Per implementare una traduzione globale del sito creaimo il context usato in _app.js */

const siteLanguageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const siteLanguageUpdateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function useLanguage() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(siteLanguageContext);
}
function useLanguageUpdate() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(siteLanguageUpdateContext);
}
function LanguageProvider({
  children
}) {
  const {
    0: siteLanguage,
    1: setSiteLanguage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("ita");

  const changeSiteLanguage = newLang => {
    setSiteLanguage(newLang);
  };

  return __jsx(siteLanguageContext.Provider, {
    value: siteLanguage
  }, __jsx(siteLanguageUpdateContext.Provider, {
    value: changeSiteLanguage
  }, children));
}

/***/ }),

/***/ "Jy3C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JCBN");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //context


const ContactsBtn = function (props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const siteLanguage = Object(_context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_2__[/* useLanguage */ "b"])();
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "lg",
    variant: "info",
    onClick: () => router.push("/contatti")
  }, siteLanguage === "ita" ? "I miei Contatti" : "My Contacts", __jsx("i", {
    className: "far fa-share-square ml-2"
  }));
};

/***/ }),

/***/ "OvnE":
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "YFr8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__("vRNQ");
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__("oyvS");

// EXTERNAL MODULE: ./context/siteLanguageContext.js
var siteLanguageContext = __webpack_require__("JCBN");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/layout/Header.js
var Header = __webpack_require__("FCqg");

// EXTERNAL MODULE: ./components/layout/Navbar.js
var Navbar = __webpack_require__("nABS");

// EXTERNAL MODULE: ./components/layout/Footer.js
var Footer = __webpack_require__("cFkv");

// CONCATENATED MODULE: ./components/consultation/ConsultationChoiceBtn.js

var __jsx = external_react_default.a.createElement;
 //context


const ConsultationChoiceBtn = function (props) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context

  return __jsx(external_react_bootstrap_["Button"], {
    className: "py-5",
    block: true,
    variant: "info",
    onClick: () => props.setConsultation(props.consultation)
  }, __jsx(external_react_bootstrap_["Row"], null, __jsx(external_react_bootstrap_["Col"], {
    className: "text-center px-2"
  }, " ", __jsx("h3", null, props.consultation[siteLanguage].title))), __jsx(external_react_bootstrap_["Row"], null, __jsx(external_react_bootstrap_["Col"], {
    className: "text-center px-4"
  }, __jsx("p", null, (siteLanguage === "ita" ? "Piccola descrizione del consulto offerto riguardo " : "Short description regarding the offered consultation about") + props.consultation[siteLanguage].title))));
};
// CONCATENATED MODULE: ./components/consultation/ConsultationChoice.js

var ConsultationChoice_jsx = external_react_default.a.createElement;
 //context



const ConsultationChoice = function (props) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context //per ora inutilizzato qui, ma work in progress

  return ConsultationChoice_jsx(external_react_bootstrap_["Row"], {
    className: "m-0 p-0"
  }, ConsultationChoice_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 8,
      offset: 2
    },
    className: "p-0"
  }, ConsultationChoice_jsx(external_react_bootstrap_["Row"], {
    className: ""
  }, props.consultations.map((consult, i) => ConsultationChoice_jsx(external_react_bootstrap_["Col"], {
    key: consult.id,
    md: {
      span: 6,
      offset: i === props.consultations.length - 1 && props.consultations.length % 2 !== 0 ? 3 : 0
    },
    className: "mb-4"
  }, ConsultationChoice_jsx(ConsultationChoiceBtn, {
    consultation: consult,
    setConsultation: props.setConsultation
  }))))));
};
// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__("OvnE");
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);

// EXTERNAL MODULE: ./components/buttons/ContactsBtn.js
var ContactsBtn = __webpack_require__("Jy3C");

// CONCATENATED MODULE: ./components/consultation/ConsultationCard.js

var ConsultationCard_jsx = external_react_default.a.createElement;

 //context



const ConsultationCard = function (props) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])();
  return ConsultationCard_jsx(external_react_default.a.Fragment, null, ConsultationCard_jsx(external_react_bootstrap_["Row"], null, ConsultationCard_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 8,
      offset: 2
    },
    className: ""
  }, external_html_react_parser_default()(props.consultation[siteLanguage].content))), ConsultationCard_jsx(external_react_bootstrap_["Row"], {
    className: "justify-content-center"
  }, ConsultationCard_jsx(ContactsBtn["a" /* ContactsBtn */], null)));
};
// CONCATENATED MODULE: ./pages/consulenza.js

var consulenza_jsx = external_react_default.a.createElement;



 //context








function consulenza(props) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context

  const translate = (lang, data) => {
    return data[lang];
  };

  const {
    0: consultation,
    1: setConsultation
  } = Object(external_react_["useState"])(null);
  return consulenza_jsx("div", {
    className: Home_module_default.a.container
  }, consulenza_jsx(Header["a" /* Header */], {
    title: siteLanguage === "ita" ? "Consulenza" : "Privacy Advice"
  }), consulenza_jsx(Navbar["a" /* Navigation */], null), consulenza_jsx("main", {
    className: Home_module_default.a.main
  }, consulenza_jsx(external_react_bootstrap_["Card"], {
    className: "p-2 responsive-width-card"
  }, consulenza_jsx(external_react_bootstrap_["Card"].Img, {
    className: "black-border",
    variant: "top",
    src: "consulenza.png"
  }), consulenza_jsx(external_react_bootstrap_["Card"].Body, null, consulenza_jsx(external_react_bootstrap_["Row"], null, consulenza_jsx(external_react_bootstrap_["Col"], {
    md: 3
  }, consultation && consulenza_jsx(external_react_bootstrap_["Button"], {
    variant: "info",
    onClick: () => setConsultation(null)
  }, consulenza_jsx("i", {
    className: "fas fa-long-arrow-alt-left mr-2"
  }), siteLanguage === "ita" ? "Torna Indietro" : "Back to Selection")), consulenza_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, consulenza_jsx(external_react_bootstrap_["Card"].Title, {
    className: "text-center"
  }, " ", consulenza_jsx("h1", null, siteLanguage === "ita" ? "Consulenza" : "Consultation", consultation ? ": " + consultation[siteLanguage].title : "")))), !consultation && consulenza_jsx(ConsultationChoice, {
    consultations: props.consultations,
    setConsultation: setConsultation
  }), consultation && consulenza_jsx(ConsultationCard, {
    consultation: consultation,
    setConsultation: setConsultation
  })), consulenza_jsx(external_react_bootstrap_["Card"].Footer, {
    className: "text-center"
  }))), consulenza_jsx(Footer["a" /* Footer */], null));
}

consulenza.getInitialProps = async context => {
  const apiUrl = "http://" + context.req.headers.host + "/api/consultation";
  const resConsult = await fetch(apiUrl);
  const consultations = await resConsult.json();
  return {
    consultations: consultations.data
  };
};

/* harmony default export */ var pages_consulenza = __webpack_exports__["default"] = (consulenza);
/* //Rimozione di getServerSideProps per deployare su Firebase
export async function getServerSideProps(context) {
  const apiUrl = "http://" + context.req.headers.host + "/api/consultation"
  const resConsult = await fetch(apiUrl)
  const consultations = await resConsult.json()
  return { props: { consultations: consultations.data } }
}
*/

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cFkv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vRNQ");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JCBN");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //context



const Footer = function () {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const siteLanguage = Object(_context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_2__[/* useLanguage */ "b"])(); //context

  const scrollToTopSmoothly = () => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: window.scrollY - Math.ceil(window.scrollY / 10),
        behavior: 'smooth'
      });
      setTimeout(scrollToTopSmoothly, 10);
    }
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    sticky: "bottom",
    bg: "standard-blue",
    expand: "lg",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "w-100"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: {
      span: 4
    },
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerText + " text-dark"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: {
      span: 3
    },
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerText + " text-dark"
  }, siteLanguage === "ita" ? "Gaetano Mastropierro - Consulenza Privacy" : "Gaetano Mastropierro - Privacy Consultation"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    onClick: () => router.push('/'),
    xs: {
      span: 1
    },
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerLogoContainer + " text-center"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    href: "/",
    src: "/editedLogo.png",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerLogo
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 2,
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerBtnContainer + " text-center"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerBtn,
    variant: "info",
    onClick: () => scrollToTopSmoothly()
  }, __jsx("i", {
    className: "fas fa-arrow-circle-up"
  })))));
};

/***/ }),

/***/ "nABS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vRNQ");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JCBN");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //context


const Navigation = function () {
  const siteLanguage = Object(_context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_2__[/* useLanguage */ "b"])(); //context

  const siteLanguageUpdate = Object(_context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_2__[/* useLanguageUpdate */ "c"])(); //context

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "m-0 w-100 bg-standard-blue navbar-row"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: {
      span: 9,
      offset: 2
    },
    className: "m-auto justify-content-center h-100"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    sticky: "top",
    bg: "standard-blue pt-0 pb-0 h-100",
    expand: "lg",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbar
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
    id: "basic-navbar-nav",
    className: "h-100"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "m-auto align-items-center mt-0 mb-0 h-100 nav-link-container justify-content-center"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbarLogoContainer + " h-100",
    href: "/"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "/editedLogo.png",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbarLogo + " h-100"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbarText,
    href: "/"
  }, "Home"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/chiSono",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbarText + " align-items-center"
  }, siteLanguage === "ita" ? "Chi Sono" : "Who I Am"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/formazione",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbarText
  }, siteLanguage === "ita" ? "Formazione" : "Training"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/consulenza",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbarText
  }, siteLanguage === "ita" ? "Consulenza" : "Consultation"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/areaTest",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbarText
  }, siteLanguage === "ita" ? "Area Test" : "Test Area"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/recensioniBibliografiche",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbarText
  }, siteLanguage === "ita" ? "Recensioni Bibliografiche" : "Bibliographic Reviews"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/articoli",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbarText
  }, siteLanguage === "ita" ? "Articoli" : "Articles"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/contatti",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbarText
  }, siteLanguage === "ita" ? "Contatti" : "Contacts"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/archivio",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbarText
  }, siteLanguage === "ita" ? "Archivio" : "Archive"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "bg-standard-blue justify-content-center align-items-center navbar-flag-row"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "align-items-center p-0 flag-icon-container"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => siteLanguageUpdate("ita"),
    variant: "",
    active: false,
    className: "p-0 flag-icon-btn mr-1"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "/bandiere/ita.png",
    className: "black-border flag-icon " + _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.responsiveFlagIcon
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "align-items-center p-0 flag-icon-container"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => siteLanguageUpdate("eng"),
    variant: "",
    active: false,
    className: "p-0 flag-icon-btn"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "/bandiere/GB.png",
    className: "black-border flag-icon " + _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.responsiveFlagIcon
  }))))))))));
};

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "vRNQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"navbar": "Home_navbar__14ZRa",
	"navbarText": "Home_navbarText__3-yXK",
	"responsiveFlagIcon": "Home_responsiveFlagIcon__2aJw6",
	"navbarDivider": "Home_navbarDivider__29ZYm",
	"dropdownTitle": "Home_dropdownTitle__2u3ZY",
	"dropdownOption": "Home_dropdownOption__Mf_n5",
	"carouselContainer": "Home_carouselContainer__GmjtI",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"navbarLogoContainer": "Home_navbarLogoContainer__Wc5h0",
	"navbarLogo": "Home_navbarLogo__2REKp",
	"footerText": "Home_footerText__1cXmR",
	"footerLogoContainer": "Home_footerLogoContainer__hDCNF",
	"footerLogo": "Home_footerLogo__1tlla",
	"footerBtnContainer": "Home_footerBtnContainer__2PPgQ",
	"footerBtn": "Home_footerBtn__1ehjk"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });