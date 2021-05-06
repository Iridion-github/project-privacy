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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ALdk");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7NZM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeDuplicatesById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return includesAll; });
const removeDuplicatesById = arr => {
  const ids = [];
  const uniques = [];
  arr.forEach(elem => {
    if (!ids.includes(elem.id)) {
      ids.push(elem.id);
      uniques.push(elem);
    }
  });
  return uniques;
};
const includesAll = (toCheck, targets, isArray) => {
  const result = [];

  if (isArray) {
    for (let x = 0; x < toCheck.length; x++) {
      let toCheckIsInclusive = true;

      for (let y = 0; y < targets.length; y++) {
        if (!toCheck[x].toLowerCase().includes(targets[y].toLowerCase())) toCheckIsInclusive = false;
      }

      if (toCheckIsInclusive) result.push(toCheck[x]);
    }
  } else {
    let toCheckIsInclusive = true;

    for (let y = 0; y < targets.length; y++) {
      if (!toCheck || !toCheck.toLowerCase().includes(targets[y].toLowerCase())) toCheckIsInclusive = false;
    }

    if (toCheckIsInclusive) result.push(toCheck);
  }

  return result;
};

/***/ }),

/***/ "ALdk":
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

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./context/siteLanguageContext.js
var siteLanguageContext = __webpack_require__("JCBN");

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

// EXTERNAL MODULE: ./utils/date.js
var date = __webpack_require__("b4WN");

// CONCATENATED MODULE: ./components/articles/ArticlePreview.js

var __jsx = external_react_default.a.createElement;



const ArticlePreview = function (props) {
  const {
    0: language,
    1: setLanguage
  } = Object(external_react_["useState"])("ita");
  return __jsx(external_react_bootstrap_["Card"], {
    className: "w-100 mb-4 grey-border"
  }, __jsx(external_react_bootstrap_["Card"].Header, null, __jsx(external_react_bootstrap_["Nav"], {
    variant: "tabs",
    defaultActiveKey: "#ita"
  }, __jsx(external_react_bootstrap_["Nav"].Item, null, __jsx(external_react_bootstrap_["Nav"].Link, {
    active: language === "ita",
    href: "#ita",
    onClick: () => setLanguage("ita")
  }, __jsx(external_react_bootstrap_["Image"], {
    src: "/bandiere/ita.png",
    className: "black-border flag-icon"
  }))), __jsx(external_react_bootstrap_["Nav"].Item, null, __jsx(external_react_bootstrap_["Nav"].Link, {
    active: language === "eng",
    href: "#eng",
    onClick: () => setLanguage("eng")
  }, " ", __jsx(external_react_bootstrap_["Image"], {
    src: "/bandiere/GB.png",
    className: "black-border flag-icon"
  }))))), __jsx(external_react_bootstrap_["Card"].Body, null, __jsx(external_react_bootstrap_["Card"].Img, {
    className: "article-preview-img",
    variant: "top",
    src: props.article.previewImg
  }), __jsx(external_react_bootstrap_["Card"].Title, {
    className: "article-preview-title"
  }, language === "ita" ? props.article.ita.title : props.article.eng.title), __jsx(external_react_bootstrap_["Card"].Text, {
    className: "article-preview-subtitle"
  }, language === "ita" ? props.article.ita.subtitle : props.article.eng.subtitle), __jsx(external_react_bootstrap_["Row"], {
    className: "justify-content-end pr-3"
  }, __jsx(external_react_bootstrap_["Button"], {
    size: "md",
    variant: "info",
    onClick: () => props.setOpenedArticle(props.article.id)
  }, language === "ita" ? "Leggi " : "Read ", __jsx("i", {
    className: "ml-2 fab fa-readme"
  })))), __jsx(external_react_bootstrap_["Card"].Footer, null, __jsx(external_react_bootstrap_["Row"], null, __jsx(external_react_bootstrap_["Col"], {
    md: 5,
    className: "pr-0"
  }, __jsx("small", {
    className: "text-muted"
  }, props.article.authors.map((author, i) => {
    return __jsx(external_react_bootstrap_["Row"], {
      key: i
    }, props.article.authors.length > 1 ? " • " + author + "\n" : " • " + author, " ");
  }))), __jsx(external_react_bootstrap_["Col"], {
    md: 3,
    className: "p-0"
  }, __jsx("span", {
    className: "text-muted"
  }, " ", props.article[language].tags.map(tag => __jsx(external_react_bootstrap_["Badge"], {
    variant: "info",
    className: "mr-1",
    key: tag
  }, tag)))), __jsx(external_react_bootstrap_["Col"], {
    md: 4,
    className: "text-right p-0"
  }, __jsx("small", {
    className: "text-muted"
  }, " ", Object(date["a" /* datePrettifier */])(props.article.date, language), " ")))));
};
// CONCATENATED MODULE: ./components/articles/ArticlesRow.js

var ArticlesRow_jsx = external_react_default.a.createElement;


const ArticlesRow = function (props) {
  return ArticlesRow_jsx(external_react_bootstrap_["Row"], {
    className: "w-100"
  }, props.articles.map((article, i) => ArticlesRow_jsx(external_react_bootstrap_["Col"], {
    md: 6,
    className: "mobile-adaptive-card-container",
    key: i
  }, ArticlesRow_jsx(ArticlePreview, {
    setOpenedArticle: props.setOpenedArticle,
    article: article
  }))));
};
// EXTERNAL MODULE: ./components/layout/MyPagination.js
var MyPagination = __webpack_require__("tRNR");

// CONCATENATED MODULE: ./components/articles/ArticlesList.js

var ArticlesList_jsx = external_react_default.a.createElement;

 //context




const ArticlesList = function (props) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context

  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(external_react_["useState"])(1);
  const {
    0: elementsPerPage,
    1: setElementsPerPage
  } = Object(external_react_["useState"])(6);
  const {
    0: elementsPerRow,
    1: setElementsPerRow
  } = Object(external_react_["useState"])(2);
  const articlesRows = !props.filtered ? props.allArticles.reduce(function (articles, acc, i) {
    if (i % elementsPerRow) {
      articles[articles.length - 1].push(acc);
    } else {
      articles.push([acc]);
    }

    return articles;
  }, []) : props.searchFilter(props.allArticles, props.searchInput, siteLanguage).reduce(function (articles, acc, i) {
    if (i % elementsPerRow) {
      articles[articles.length - 1].push(acc);
    } else {
      articles.push([acc]);
    }

    return articles;
  }, []);
  const visibleRows = articlesRows.filter((elem, index) => index >= currentPage * elementsPerPage / elementsPerRow - elementsPerPage / elementsPerRow && index < currentPage * elementsPerPage / elementsPerRow);

  const searchInputOnChange = value => {
    if (value.length < 3) {
      props.setSearchInput(value);
      props.setFiltered(false);
    } else {
      props.setSearchInput(value);
    }
  };

  return ArticlesList_jsx(external_react_bootstrap_["Row"], {
    className: ""
  }, ArticlesList_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 m-auto"
  }, ArticlesList_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, ArticlesList_jsx("h1", null, siteLanguage === "ita" ? "Ultimi Articoli" : "Latest Articles")), ArticlesList_jsx(external_react_bootstrap_["Col"], {
    sm: 6,
    className: "justify-content-end mb-1 flex-row"
  }, ArticlesList_jsx(external_react_bootstrap_["Form"], {
    inline: true,
    className: "justify-content-end w-100 p-0 flex-row"
  }, ArticlesList_jsx(external_react_bootstrap_["Form"].Group, {
    className: "w-100",
    controlId: "formBasicEmail"
  }, ArticlesList_jsx(external_react_bootstrap_["Form"].Control, {
    type: "text",
    placeholder: siteLanguage === "ita" ? "Cerca" : "Search",
    onChange: event => searchInputOnChange(event.target.value),
    className: "w-75 inline-form-custom"
  }), ArticlesList_jsx(external_react_bootstrap_["Button"], {
    variant: !props.filtered ? "info" : "danger",
    disabled: props.searchInput.length < 3,
    onClick: !props.filtered ? () => props.setFiltered(true) : () => props.setFiltered(false),
    className: "ml-1"
  }, !props.filtered ? ArticlesList_jsx("i", {
    className: "fas fa-search"
  }) : ArticlesList_jsx("i", {
    className: "fas fa-times-circle"
  })))))), visibleRows.length > 0 && ArticlesList_jsx(MyPagination["a" /* MyPagination */], {
    totalPages: !props.filtered ? Math.ceil(props.allArticles.length / elementsPerPage) : Math.ceil(props.searchFilter(props.allArticles, props.searchInput, siteLanguage).length / elementsPerPage),
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    elementsPerPage: elementsPerPage,
    totalElements: !props.filtered ? props.allArticles.length : props.searchFilter(props.allArticles, props.searchInput, siteLanguage).length
  }), ArticlesList_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 mobile-compatible m-auto"
  }, ArticlesList_jsx(external_react_bootstrap_["Col"], {
    md: 12,
    className: visibleRows.length > 0 ? "resulting-article-container" : "d-flex resulting-article-container align-items-center justify-content-center"
  }, visibleRows.length > 0 ? visibleRows.map((row, i) => ArticlesList_jsx(ArticlesRow, {
    setOpenedArticle: props.setOpenedArticle,
    key: i,
    articles: row
  })) : ArticlesList_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 text-center justify-content-center"
  }, siteLanguage === "ita" ? "Nessun risultato trovato" : "No result found"))), visibleRows.length > 0 && ArticlesList_jsx(MyPagination["a" /* MyPagination */], {
    totalPages: !props.filtered ? Math.ceil(props.allArticles.length / elementsPerPage) : Math.ceil(props.searchFilter(props.allArticles, props.searchInput, siteLanguage).length / elementsPerPage),
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    elementsPerPage: elementsPerPage,
    totalElements: !props.filtered ? props.allArticles.length : props.searchFilter(props.allArticles, props.searchInput, siteLanguage).length
  }));
};
// CONCATENATED MODULE: ./components/articles/ArticlesTagRow.js

var ArticlesTagRow_jsx = external_react_default.a.createElement;

const ArticlesTagRow = function (props) {
  return ArticlesTagRow_jsx(external_react_bootstrap_["ListGroup"].Item, null, ArticlesTagRow_jsx(external_react_bootstrap_["Button"], {
    block: true,
    variant: "info",
    onClick: () => props.searchTopic(props.tagName, props.siteLanguage)
  }, props.tagName));
};
// CONCATENATED MODULE: ./components/articles/ArticlesLeftMenu.js

var ArticlesLeftMenu_jsx = external_react_default.a.createElement;
 //context



const ArticlesLeftMenu = function (props) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context

  return ArticlesLeftMenu_jsx(external_react_bootstrap_["Row"], {
    className: "justify-content-center mb-2"
  }, ArticlesLeftMenu_jsx(external_react_bootstrap_["Row"], {
    className: "mobile-compatible w-100 mt-1"
  }, ArticlesLeftMenu_jsx(external_react_bootstrap_["Col"], null, ArticlesLeftMenu_jsx(external_react_bootstrap_["Card"], {
    className: "bg-standard-blue"
  }, ArticlesLeftMenu_jsx(external_react_bootstrap_["Card"].Header, null, ArticlesLeftMenu_jsx(external_react_bootstrap_["Row"], null, ArticlesLeftMenu_jsx(external_react_bootstrap_["Col"], null, siteLanguage === "ita" ? "Argomenti" : "Topics"), ArticlesLeftMenu_jsx(external_react_bootstrap_["Col"], {
    className: "text-right"
  }, props.filteredByTopic && ArticlesLeftMenu_jsx(external_react_bootstrap_["Button"], {
    size: "sm",
    className: "",
    variant: "danger",
    onClick: () => props.removeTopicFilter()
  }, ArticlesLeftMenu_jsx("i", {
    className: "fas fa-times-circle"
  }))))), ArticlesLeftMenu_jsx(external_react_bootstrap_["ListGroup"], {
    variant: "flush"
  }, props.allTopics.map(tag => ArticlesLeftMenu_jsx(ArticlesTagRow, {
    key: tag.id,
    tagName: siteLanguage === "ita" ? tag.name.ita : tag.name.eng,
    siteLanguage: siteLanguage,
    searchTopic: props.searchTopic
  })))))));
};
// EXTERNAL MODULE: ./utils/arrays.js
var arrays = __webpack_require__("7NZM");

// CONCATENATED MODULE: ./pages/articoli.js

var articoli_jsx = external_react_default.a.createElement;



 //context










function articoli({
  DBarticles,
  articleTopics
}) {
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context

  const {
    0: articles,
    1: setArticles
  } = Object(external_react_["useState"])(DBarticles);
  const {
    0: openedArticle,
    1: setOpenedArticle
  } = Object(external_react_["useState"])(null);
  const router = Object(router_["useRouter"])();

  const handleOpenedArticle = articleId => {
    const fullRoute = articleId !== null ? '/articoli/' + articleId : '/articoli/';
    setOpenedArticle(articles.find(art => art.id === articleId));
    router.push(fullRoute);
  };

  const searchTopic = async (topic, lang) => {
    handleOpenedArticle(null);
    setFilteredByTopic(true);
    const result = [];

    if (topic !== "") {
      DBarticles.forEach(art => {
        if (Object(arrays["a" /* includesAll */])(art[lang].topic, topic, Array.isArray(art[lang].topic)).length > 0) {
          result.push(art);
        }
      });
    }

    setArticles(result);
  };

  const removeTopicFilter = () => {
    handleOpenedArticle(null);
    setFilteredByTopic(false);
    setArticles(DBarticles);
  };

  const searchFilter = (articles, input, lang) => {
    const searchTerms = input.toLowerCase().split(" ");
    const found = [];

    if (input !== "") {
      articles.forEach(art => {
        if (Object(arrays["a" /* includesAll */])(art.authors, searchTerms, Array.isArray(art.authors)).length > 0 || Object(arrays["a" /* includesAll */])(art[lang].topic, searchTerms, Array.isArray(art[lang].topic)).length > 0 || Object(arrays["a" /* includesAll */])(art[lang].tags, searchTerms, Array.isArray(art[lang].tags)).length > 0 || Object(arrays["a" /* includesAll */])(art.ita.title, searchTerms, Array.isArray(art.ita.title)).length > 0 || Object(arrays["a" /* includesAll */])(art.ita.subtitle, searchTerms, Array.isArray(art.ita.subtitle)).length > 0 || Object(arrays["a" /* includesAll */])(art.ita.content, searchTerms, Array.isArray(art.ita.content)).length > 0 || Object(arrays["a" /* includesAll */])(art.eng.title, searchTerms, Array.isArray(art.eng.title)).length > 0 || Object(arrays["a" /* includesAll */])(art.eng.subtitle, searchTerms, Array.isArray(art.eng.subtitle)).length > 0 || Object(arrays["a" /* includesAll */])(art.eng.content, searchTerms, Array.isArray(art.eng.content)).length > 0) {
          found.push(art);
        }
      });
    }

    const result = Object(arrays["b" /* removeDuplicatesById */])(found);
    return result;
  };

  const {
    0: filtered,
    1: setFiltered
  } = Object(external_react_["useState"])(false);
  const {
    0: filteredByTopic,
    1: setFilteredByTopic
  } = Object(external_react_["useState"])(false);
  const {
    0: searchInput,
    1: setSearchInput
  } = Object(external_react_["useState"])("");
  return articoli_jsx("div", {
    className: Home_module_default.a.container
  }, articoli_jsx(Header["a" /* Header */], {
    title: siteLanguage === "ita" ? "Articoli" : "Articles"
  }), articoli_jsx(Navbar["a" /* Navigation */], null), articoli_jsx(Breadcrumbs["a" /* Breadcrumbs */], null), articoli_jsx("main", {
    className: Home_module_default.a.main
  }, articoli_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 mb-5"
  }, articoli_jsx(external_react_bootstrap_["Col"], {
    md: 3,
    className: ""
  }, articoli_jsx(ArticlesLeftMenu, {
    allArticles: articles,
    allTopics: articleTopics,
    searchTopic: searchTopic,
    searchInput: searchInput,
    setSearchInput: setSearchInput,
    filteredByTopic: filteredByTopic,
    removeTopicFilter: removeTopicFilter
  })), articoli_jsx(external_react_bootstrap_["Col"], {
    md: 6,
    className: "justify-content-center"
  }, openedArticle === null && articoli_jsx(ArticlesList, {
    allArticles: articles,
    setOpenedArticle: handleOpenedArticle,
    searchFilter: searchFilter,
    filtered: filtered,
    setFiltered: setFiltered,
    searchInput: searchInput,
    setSearchInput: setSearchInput
  })), articoli_jsx(external_react_bootstrap_["Col"], {
    md: 3,
    className: ""
  }))), articoli_jsx(Footer["a" /* Footer */], null));
}

articoli.getInitialProps = async context => {
  const environment = "http://" + context.req.headers.host; //const environment = "https://project-privacy-d803e.web.app"

  const apiUrlArticle = environment + "/api/article";
  const resArticle = await fetch(apiUrlArticle);
  const DBarticles = await resArticle.json();
  const apiUrlTopics = environment + "/api/articleTopics";
  const resArticleTopics = await fetch(apiUrlTopics);
  const articleTopics = await resArticleTopics.json();
  return {
    DBarticles: DBarticles.data,
    articleTopics: articleTopics.data
  };
};

/* harmony default export */ var pages_articoli = __webpack_exports__["default"] = (articoli);
/* //Rimozione di getServerSideProps per deployare su Firebase
export async function getServerSideProps(context) {
  const apiUrlArticle = "http://" + context.req.headers.host + "/api/article"
  const resArticle = await fetch(apiUrlArticle)
  const DBarticles = await resArticle.json()
  const apiUrlTopics = "http://" + context.req.headers.host + "/api/articleTopics"
  const resArticleTopics = await fetch(apiUrlTopics)
  const articleTopics = await resArticleTopics.json()
  return { props: { DBarticles: DBarticles.data, articleTopics: articleTopics.data } }
}
*/

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

/***/ "tRNR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JCBN");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //context


const MyPagination = function (props) {
  const siteLanguage = Object(_context_siteLanguageContext__WEBPACK_IMPORTED_MODULE_1__[/* useLanguage */ "b"])(); //context

  const {
    0: targetPage,
    1: setTargetPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const lastPage = props.totalPages;

  const changePage = destination => props.setCurrentPage(destination);

  let firstShownArticleIndex = props.currentPage === 1 ? 1 : props.currentPage * props.elementsPerPage + 1 - props.elementsPerPage;
  let lastShownArticleIndex = props.currentPage === 1 ? 6 : props.currentPage * props.elementsPerPage;
  if (lastShownArticleIndex > props.totalElements) lastShownArticleIndex = props.totalElements;
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "w-100 m-auto justify-content-center"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 7,
    className: "m-auto text-center justify-content-center"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    size: "sm",
    className: "justify-content-end custom-pagination"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].First, {
    onClick: () => changePage(1)
  }), props.currentPage >= 4 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Ellipsis, {
    disabled: true
  }), props.currentPage - 2 > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Item, {
    onClick: () => changePage(props.currentPage - 2)
  }, props.currentPage - 2), props.currentPage - 1 > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Item, {
    onClick: () => changePage(props.currentPage - 1)
  }, props.currentPage - 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Item, {
    active: true
  }, props.currentPage), props.currentPage + 1 < lastPage && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Item, {
    onClick: () => changePage(props.currentPage + 1)
  }, props.currentPage + 1), props.currentPage + 2 < lastPage && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Item, {
    onClick: () => changePage(props.currentPage + 2)
  }, props.currentPage + 2), props.currentPage <= lastPage - 4 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Ellipsis, {
    disabled: true
  }), props.currentPage < lastPage && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Item, {
    onClick: () => changePage(lastPage)
  }, lastPage), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Last, {
    onClick: () => changePage(lastPage)
  }), props.totalPages > 20 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    className: "ml-2"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "goalPage",
    className: "inline-form-custom"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    value: targetPage,
    onChange: event => setTargetPage(event.target.value),
    size: "sm",
    type: "number",
    placeholder: siteLanguage === "ita" ? "Vai a" : "Go to",
    className: "small-input"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: targetPage === "",
    size: "sm",
    variant: "info",
    className: "ml-1",
    onClick: () => changePage(Number(targetPage))
  }, __jsx("i", {
    className: "fas fa-arrow-right"
  })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 5,
    className: "m-auto text-right"
  }, __jsx("p", {
    className: "ml-3 text-muted small-text pt-2 pr-5"
  }, siteLanguage === "ita" ? firstShownArticleIndex + " - " + lastShownArticleIndex + " di " + props.totalElements + " articoli" : firstShownArticleIndex + " - " + lastShownArticleIndex + " of " + props.totalElements + " articles")));
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