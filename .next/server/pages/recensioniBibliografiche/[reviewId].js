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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2NPC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGlossaryPopover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("OvnE");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //Questa funzione mi ha ammazzato

const getGlossaryPopover = (textRaw, targetsRaw) => {
  const text = textRaw;
  const targets = targetsRaw.map(el => el.name);
  const textFragmented = [...text];
  let analyzing = [];
  let found = [];

  for (let x = 0; x < textFragmented.length; x++) {
    const regex = RegExp('^[a-zA-Z0-9àèéìòù]*$');

    if (regex.test(textFragmented[x])) {
      analyzing.push(textFragmented[x]);
    } else {
      if (targets.map(el => el.toLowerCase()).includes(analyzing.join('').toLowerCase())) {
        found.push({
          start: Number(x - analyzing.length),
          end: x,
          value: targetsRaw.find(word => word.name === analyzing.join('').toLowerCase()).name,
          meaning: targetsRaw.find(word => word.name === analyzing.join('').toLowerCase()).meaning,
          reference: targetsRaw.find(word => word.name === analyzing.join('').toLowerCase()).reference
        });
      }

      analyzing = [];
    }
  }

  let result = [];
  let prevTarget = 0;
  found.forEach((el, i) => {
    let formattedStr = textRaw.slice(prevTarget, el.start).trim();
    result.push(formattedStr, " ");

    let popover = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      id: "glossary-popover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"].Title, {
      as: "h3",
      id: "glossary-popover-title"
    }, el.value), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"].Content, {
      id: "glossary-popover-content"
    }, el.meaning), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"].Title, {
      id: "glossary-popover-footer"
    }, el.reference));

    let segment = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
      trigger: ["click", "hover", "focus"],
      placement: "auto",
      overlay: popover,
      key: i,
      id: "glossary-word-container"
    }, __jsx("span", {
      id: "glossary-word"
    }, textRaw.slice(el.start, el.end)));

    result.push(segment, " ");
    prevTarget = el.end;

    if (found.length === i + 1 && textRaw.slice(prevTarget).trim().length > 0) {
      //Se abbiamo markato già tutte le keywords e c'è ancora del testo da stampare.
      let formattedStr = textRaw.slice(prevTarget).trim();
      result.push(formattedStr, " ");
    }
  });
  if (found.length === 0) result = html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(textRaw.trim());
  let finalResult = [];

  for (let x = 0; x < result.length; x++) {
    if (typeof result[x] === "string") {
      //Caso della stringa contenente html
      finalResult.push(html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(result[x]));
    } else {
      //Caso del component
      finalResult.push(result[x]);
    }
  }

  return finalResult;
};

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4Gbx");


/***/ }),

/***/ "4Gbx":
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

// EXTERNAL MODULE: ./context/siteLanguageContext.js
var siteLanguageContext = __webpack_require__("JCBN");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/layout/Header.js
var Header = __webpack_require__("FCqg");

// EXTERNAL MODULE: ./components/layout/Navbar.js
var Navbar = __webpack_require__("nABS");

// EXTERNAL MODULE: ./components/layout/Breadcrumbs.js + 1 modules
var Breadcrumbs = __webpack_require__("miik");

// EXTERNAL MODULE: ./components/layout/Footer.js
var Footer = __webpack_require__("cFkv");

// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__("OvnE");
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);

// EXTERNAL MODULE: ./utils/text.js
var utils_text = __webpack_require__("2NPC");

// CONCATENATED MODULE: ./components/reviews/ReviewContent.js

var __jsx = external_react_default.a.createElement;


const ReviewContent = props => {
  const getSections = (imgs, paragraphs) => {
    const specifiedGlossary = props.glossarywords.filter(word => props.glossary.includes(word.name));
    return paragraphs.map((parag, i) => {
      return __jsx("div", {
        key: i
      }, __jsx("p", {
        className: "article-paragraph"
      }, Object(utils_text["a" /* getGlossaryPopover */])(parag, specifiedGlossary)), __jsx(external_react_bootstrap_["Image"], {
        className: "article-img-" + imgs[i].size + "-" + imgs[i].position + imgs[i].margin + " black-border",
        src: imgs[i].src
      }));
    });
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx(external_react_bootstrap_["Image"], {
    className: "article-img-md-left mr-2 black-border",
    src: props.previewImg
  }), getSections(props.images, props.paragraphs));
};
// EXTERNAL MODULE: ./utils/date.js
var date = __webpack_require__("b4WN");

// CONCATENATED MODULE: ./components/reviews/ReviewRead.js

var ReviewRead_jsx = external_react_default.a.createElement;


 //context




const ReviewRead = function (props) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context

  const {
    0: language,
    1: setLanguage
  } = Object(external_react_["useState"])("ita");
  return ReviewRead_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 m-auto"
  }, ReviewRead_jsx(external_react_bootstrap_["Card"], {
    className: "w-100 mb-4 p-1 grey-border"
  }, ReviewRead_jsx(external_react_bootstrap_["Button"], {
    className: "",
    variant: "info",
    href: "/recensioniBibliografiche"
  }, ReviewRead_jsx("i", {
    className: "fas fa-long-arrow-alt-left mr-2"
  }), " ", siteLanguage === "ita" ? "Torna alle Recensioni" : "Back to Reviews"), ReviewRead_jsx(external_react_bootstrap_["Card"].Header, {
    className: "pb-0"
  }, ReviewRead_jsx(external_react_bootstrap_["Row"], null, ReviewRead_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 12,
      offset: 0
    }
  }, ReviewRead_jsx(external_react_bootstrap_["Row"], null, ReviewRead_jsx("h3", {
    className: ""
  }, ReviewRead_jsx("strong", null, props.review[language].title))))), ReviewRead_jsx(external_react_bootstrap_["Row"], null, ReviewRead_jsx(external_react_bootstrap_["Col"], {
    md: 12
  }, ReviewRead_jsx(external_react_bootstrap_["Row"], null, ReviewRead_jsx(external_react_bootstrap_["Col"], {
    md: 12
  }, ReviewRead_jsx("h6", {
    className: ""
  }, "\xAB", props.review[language].subtitle, "\xBB"))))), ReviewRead_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 ml-0"
  }, ReviewRead_jsx(external_react_bootstrap_["Col"], {
    md: 9,
    className: "pr-0 pl-0"
  }, ReviewRead_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 mr-0 ml-0"
  }, ReviewRead_jsx(external_react_bootstrap_["Col"], {
    md: 6,
    className: "fake-navbar-item pr-0"
  }, ReviewRead_jsx("strong", null, language === "ita" ? props.review.authors.length < 2 ? "Autore: " : "Autori: " : props.review.authors.length < 2 ? "Author: " : "Authors: "), props.review.authors.map((author, i) => {
    return i > 0 ? external_html_react_parser_default()(`<span className="pb-1"> | </span> ${author}`) : author;
  })), ReviewRead_jsx(external_react_bootstrap_["Col"], {
    md: 6,
    className: "fake-navbar-item pr-0"
  }, ReviewRead_jsx("strong", null, siteLanguage === "ita" ? "Data: " : "Date: "), " ", Object(date["a" /* datePrettifier */])(props.review.date, language, true)))), ReviewRead_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 1,
      offset: 2
    },
    className: "m-0 p-0"
  }, ReviewRead_jsx(external_react_bootstrap_["ButtonToolbar"], {
    className: "height-100 w-100"
  }, ReviewRead_jsx(external_react_bootstrap_["ButtonGroup"], {
    className: "w-100"
  }, ReviewRead_jsx(external_react_bootstrap_["Button"], {
    className: "btn btn-light grey-border",
    active: language === "ita",
    href: "#ita",
    onClick: () => setLanguage("ita")
  }, ReviewRead_jsx(external_react_bootstrap_["Image"], {
    src: "/bandiere/ita.png",
    className: "black-border flag-icon"
  })), ReviewRead_jsx(external_react_bootstrap_["Button"], {
    className: "btn btn-light grey-border",
    active: language === "eng",
    href: "#eng",
    onClick: () => setLanguage("eng")
  }, ReviewRead_jsx(external_react_bootstrap_["Image"], {
    src: "/bandiere/GB.png",
    className: "black-border flag-icon"
  }))))))), ReviewRead_jsx(external_react_bootstrap_["Card"].Body, null, ReviewRead_jsx(external_react_bootstrap_["Row"], null, ReviewRead_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: ""
  }, ReviewRead_jsx(ReviewContent, {
    glossarywords: props.glossarywords //array preso dal db
    ,
    glossary: props.review.glossary //glossario della review aperta
    ,
    paragraphs: props.review[language].content,
    previewImg: props.review.previewImg,
    images: props.review.images
  }))))));
};
// CONCATENATED MODULE: ./components/reviews/ReviewReadRightPanelElement.js

var ReviewReadRightPanelElement_jsx = external_react_default.a.createElement;
 //context


const ReviewReadRightPanelElement = function (props) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context

  return ReviewReadRightPanelElement_jsx(external_react_bootstrap_["Card"], {
    className: "w-100 mb-4 cursor-pointer grey-border",
    onClick: () => {}
  }, ReviewReadRightPanelElement_jsx(external_react_bootstrap_["Card"].Header, {
    className: "pt-1 pb-1 overflow-hidden"
  }, ReviewReadRightPanelElement_jsx(external_react_bootstrap_["Row"], null, ReviewReadRightPanelElement_jsx(external_react_bootstrap_["Col"], {
    sm: 4,
    className: "p-0"
  }, ReviewReadRightPanelElement_jsx(external_react_bootstrap_["Image"], {
    className: "related-review-preview-img black-border",
    variant: "top",
    src: ''
  })), ReviewReadRightPanelElement_jsx(external_react_bootstrap_["Col"], {
    sm: 8
  }, ReviewReadRightPanelElement_jsx(external_react_bootstrap_["Card"].Title, {
    className: "mb-0 related-review-preview-title"
  }, "Cosa ci sar\xE0 qui? Chiss\xE0")))));
};
// CONCATENATED MODULE: ./components/reviews/ReviewReadRightPanel.js

var ReviewReadRightPanel_jsx = external_react_default.a.createElement;
 //context



const ReviewReadRightPanel = function (props) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context

  return ReviewReadRightPanel_jsx(external_react_default.a.Fragment, null, ReviewReadRightPanel_jsx(external_react_bootstrap_["Row"], {
    className: "justify-content-center"
  }, ReviewReadRightPanel_jsx("h1", null, siteLanguage === "ita" ? "Recensioni Correlati" : "Related Reviews")), ReviewReadRightPanel_jsx(external_react_bootstrap_["Row"], null, ReviewReadRightPanel_jsx(external_react_bootstrap_["Col"], null, ReviewReadRightPanel_jsx(ReviewReadRightPanelElement, null))));
};
// CONCATENATED MODULE: ./utils/reviews.js

const getBreadcrumbsForReviews = (reviewId, reviewTitle) => {
  const router = Object(router_["useRouter"])();
  const breadcrumbsList = [];
  const section = router.asPath.slice(1);
  const title = section.split("/").reverse().pop();
  breadcrumbsList.push({
    title: 'Home',
    path: '/'
  });
  breadcrumbsList.push({
    title: title,
    path: '/' + title
  });
  if (reviewId) breadcrumbsList.push({
    title: reviewTitle,
    path: section
  });
  return breadcrumbsList;
};
// EXTERNAL MODULE: ./utils/errors.js
var errors = __webpack_require__("X0II");

// EXTERNAL MODULE: ./components/layout/ErrorComponent.js
var ErrorComponent = __webpack_require__("LrFz");

// CONCATENATED MODULE: ./pages/recensioniBibliografiche/[reviewId].js

var _reviewId_jsx = external_react_default.a.createElement;

 //context














function recensione({
  glossarywords,
  DBreviews
}) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context

  const router = Object(router_["useRouter"])();
  const {
    reviewId
  } = router.query;
  const {
    0: reviews,
    1: setReviews
  } = Object(external_react_["useState"])(DBreviews);
  const {
    0: openedReview,
    1: setOpenedReview
  } = Object(external_react_["useState"])(reviewId);

  const handleOpenedReview = id => {
    const fullRoute = id !== null ? '/recensioniBibliografiche/' + id : '/recensioniBibliografiche/';
    router.push(fullRoute);
    setOpenedReview(id);
  };

  Object(external_react_["useEffect"])(() => {
    if (reviews.length === 0) {
      if (DBreviews.map(el => el.id).includes(reviewId)) {
        setOpenedReview(reviewId);
      }
    }
  });
  return _reviewId_jsx("div", {
    className: Home_module_default.a.container
  }, _reviewId_jsx(Header["a" /* Header */], {
    title: siteLanguage === "ita" ? "Recensioni" : "Reviews"
  }), _reviewId_jsx(Navbar["a" /* Navigation */], null), openedReview && reviews.length > 0 && _reviewId_jsx(Breadcrumbs["a" /* Breadcrumbs */], {
    breadcrumbsList: getBreadcrumbsForReviews(openedReview, reviews.find(art => art.id === openedReview)[siteLanguage].title)
  }), reviews.length === 0 && _reviewId_jsx(Breadcrumbs["a" /* Breadcrumbs */], {
    breadcrumbsList: Object(errors["a" /* getBreadcrumbsForErrors */])({
      ita: "Recensione inesistente",
      eng: "No such review"
    }, "/recensioniBibliografiche", siteLanguage)
  }), _reviewId_jsx("main", {
    className: Home_module_default.a.main
  }, !openedReview && _reviewId_jsx(ErrorComponent["a" /* ErrorComponent */], null), _reviewId_jsx(external_react_bootstrap_["Row"], {
    className: "w-100"
  }, _reviewId_jsx(external_react_bootstrap_["Col"], {
    md: 3,
    className: ""
  }), openedReview && reviews.length > 0 && _reviewId_jsx(external_react_default.a.Fragment, null, _reviewId_jsx(external_react_bootstrap_["Col"], {
    md: 6,
    className: "justify-content-center"
  }, _reviewId_jsx(ReviewRead, {
    review: reviews.find(art => art.id === openedReview),
    allReviews: reviews,
    setOpenedReview: handleOpenedReview,
    glossarywords: glossarywords
  })), _reviewId_jsx(external_react_bootstrap_["Col"], {
    md: 3,
    className: ""
  }, _reviewId_jsx(ReviewReadRightPanel, null))))), _reviewId_jsx(Footer["a" /* Footer */], null));
}

recensione.getInitialProps = async context => {
  const getReviewId = async rawStr => {
    let reviewId = rawStr.split('/recensioniBibliografiche/')[1];

    if (reviewId.includes('/')) {
      reviewId = reviewId.split('/')[1].split('/')[1];
    }

    return reviewId;
  };

  let propsObj = {
    DBreviews: [],
    glossarywords: []
  };

  if (!context.req) {
    const reviewId = await getReviewId(context.asPath);

    if (location.href.includes("recensioniBibliografiche/")) {
      location.replace(reviewId);
    } else {
      location.replace("recensioniBibliografiche/" + reviewId);
    }
  } else {
    const apiUrlGlossary = "http://" + context.req.headers.host + "/api/glossaryword";
    const resGlossaryword = await fetch(apiUrlGlossary);
    const glossarywords = await resGlossaryword.json();
    const apiUrlReview = "http://" + context.req.headers.host + "/api/review";
    const resReview = await fetch(apiUrlReview);
    const DBreviews = await resReview.json();
    propsObj = {
      DBreviews: DBreviews.data,
      glossarywords: glossarywords.data
    };
  }

  return propsObj;
};

/* harmony default export */ var _reviewId_ = __webpack_exports__["default"] = (recensione);
/* //Rimozione di getServerSideProps per deployare su Firebase
export async function getServerSideProps(context) {
  const apiUrlGlossary = "http://" + context.req.headers.host + "/api/glossaryword"
  const resGlossaryword = await fetch(apiUrlGlossary)
  const glossarywords = await resGlossaryword.json()
  const apiUrlReview = "http://" + context.req.headers.host + "/api/review"
  const resReview = await fetch(apiUrlReview)
  const DBreviews = await resReview.json()
  return { props: { DBreviews: DBreviews.data, glossarywords: glossarywords.data } }
}
*/

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

/***/ "LrFz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JCBN");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //context



function ErrorComponent(props) {
  const siteLanguage = Object(_context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_1__[/* useLanguage */ "b"])(); //context

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "w-75 p-2 no-border"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
    className: "text-center"
  }, __jsx("h2", null, siteLanguage === "ita" ? "Errore 404" : "Error 404")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
    className: "error-img",
    variant: "top",
    src: "/standardError.png"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: {
      span: 8,
      offset: 2
    },
    className: "text-justify text-center"
  }, __jsx("h5", null, siteLanguage === "ita" ? "La pagina che hai cercato di raggiungere non esiste." : "The page you tried to reach doesn't exist."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "pt-3"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: {
      span: 2,
      offset: 3
    },
    className: "text-justify text-center mb-3"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    block: true,
    variant: "info",
    href: "/"
  }, __jsx("i", {
    className: "fas fa-home mr-2"
  }), siteLanguage === "ita" ? "Torna alla Home" : "Return to Home")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: {
      span: 2
    },
    className: "text-justify text-center mb-3"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    block: true,
    variant: "info",
    onClick: () => router.back()
  }, __jsx("i", {
    className: "fas fa-undo-alt mr-2"
  }), siteLanguage === "ita" ? "Torna Indietro" : "Go Back")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: {
      span: 2
    },
    className: "text-justify text-center mb-3"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    block: true,
    variant: "info",
    onClick: () => router.reload()
  }, __jsx("i", {
    className: "fas fa-sync-alt mr-2"
  }), siteLanguage === "ita" ? "Riprova" : "Try Again")))));
}

/***/ }),

/***/ "OvnE":
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "X0II":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBreadcrumbsForErrors; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const getBreadcrumbsForErrors = (errorMsg, href, lang) => {
  const breadcrumbsList = [];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const section = router.asPath.slice(1);
  const title = section.split("/").reverse().pop();
  breadcrumbsList.push({
    title: 'Home',
    path: '/'
  });
  breadcrumbsList.push({
    title: title,
    path: '/' + title
  });
  breadcrumbsList.push({
    title: errorMsg[lang],
    path: href
  });
  return breadcrumbsList;
};

/***/ }),

/***/ "b4WN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datePrettifier; });
const getOrdinal = day => {
  let result = "";
  if (day === 1) result = "st";
  if (day === 2) result = "nd";
  if (day === 3) result = "rd";
  if (day >= 4) result = "th";
  return result;
};

const datePrettifier = (inputDate, lang, shorter) => {
  const giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const rawDate = new Date(inputDate);
  let day = rawDate.getDate();
  if (lang === "eng") day += getOrdinal(day);
  const giornoSettimana = giorniSettimana[rawDate.getDay()];
  const weekday = weekdays[rawDate.getDay()];
  const mese = mesi[rawDate.getMonth()];
  const month = months[rawDate.getMonth()];
  const year = rawDate.getFullYear();
  let result = lang === "ita" ? (shorter ? "" : giornoSettimana + ', ') + day + ' ' + mese + ' ' + year : (shorter ? "" : weekday + ', ') + month + ' ' + day + ' ' + year;
  return result;
};

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

/***/ "miik":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Breadcrumbs; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./context/siteLanguageContext.js
var siteLanguageContext = __webpack_require__("JCBN");

// CONCATENATED MODULE: ./components/layout/BreadcrumbsElement.js

var __jsx = external_react_default.a.createElement;
 //context

const BreadcrumbsElement = function (props) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context, da usare.

  return __jsx(external_react_default.a.Fragment, null, props.index > 0 && __jsx("span", null, " \xBB "), __jsx("a", {
    href: props.lastElem ? null : props.route.path,
    onClick: () => {}
  }, props.route.title));
};
// CONCATENATED MODULE: ./components/layout/Breadcrumbs.js

var Breadcrumbs_jsx = external_react_default.a.createElement;


const Breadcrumbs = function (props) {
  return Breadcrumbs_jsx(external_react_bootstrap_["Row"], {
    className: "m-0 w-100 breadcrumbs"
  }, Breadcrumbs_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 6,
      offset: 3
    },
    className: ""
  }, props.breadcrumbsList && props.breadcrumbsList.map((elem, i) => Breadcrumbs_jsx(BreadcrumbsElement, {
    route: elem,
    index: i,
    key: i,
    lastElem: i === props.breadcrumbsList.length - 1
  }))));
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