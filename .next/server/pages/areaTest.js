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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1oP4":
/***/ (function(module, exports) {

module.exports = require("react-compound-timer");

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GYsU");


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

/***/ "GYsU":
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

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/layout/Header.js
var Header = __webpack_require__("FCqg");

// EXTERNAL MODULE: ./components/layout/Navbar.js
var Navbar = __webpack_require__("nABS");

// CONCATENATED MODULE: ./components/areaTest/TopicChoice.js

var __jsx = external_react_default.a.createElement;

const TopicChoice = function (props) {
  return __jsx(external_react_bootstrap_["Row"], {
    className: "w-100 align-items-center m-auto"
  }, __jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 4,
      offset: 4
    },
    className: "align-items-center m-auto"
  }, __jsx(external_react_bootstrap_["Card"], {
    className: "w-100 p-2 grey-border",
    border: ""
  }, __jsx(external_react_bootstrap_["Card"].Img, {
    variant: "top",
    src: ""
  }), __jsx(external_react_bootstrap_["Card"].Body, null, __jsx("h4", {
    className: "text-center"
  }, "Test di verifica dell'Apprendimento"), __jsx(external_react_bootstrap_["Row"], {
    className: "mb-4"
  }, __jsx(external_react_bootstrap_["Col"], {
    className: "mb-2"
  }, __jsx(external_react_bootstrap_["Button"], {
    size: "lg",
    variant: "info",
    block: true,
    onClick: () => {
      props.setSelectedTopic("Test 1");
      props.setSelectedTest(1);
    }
  }, "Test 1")), __jsx(external_react_bootstrap_["Col"], {
    className: "mb-2"
  }, __jsx(external_react_bootstrap_["Button"], {
    disabled: true //Non c'è ancora questo test
    ,
    size: "lg",
    variant: "info",
    block: true,
    onClick: () => {
      props.setSelectedTopic("Test 2");
      props.setSelectedTest(null);
    }
  }, "Test 2")), __jsx(external_react_bootstrap_["Col"], {
    className: "mb-2"
  }, __jsx(external_react_bootstrap_["Button"], {
    size: "lg",
    variant: "info",
    block: true,
    onClick: () => {
      props.setSelectedTopic("Test Debug");
      props.setSelectedTest(0);
    }
  }, "Test Debug"))), __jsx("h4", {
    className: "text-center"
  }, "I Nostri Test"), __jsx(external_react_bootstrap_["Row"], {
    className: "mb-4"
  }, __jsx(external_react_bootstrap_["Col"], {
    className: "mb-2"
  }, __jsx(external_react_bootstrap_["Button"], {
    disabled: true //Non c'è ancora questo test
    ,
    size: "lg",
    variant: "info",
    block: true,
    onClick: () => props.setSelectedTopic("anticorruzione")
  }, "Anticorruzione e Trasparenza")), __jsx(external_react_bootstrap_["Col"], {
    className: "mb-2"
  }, __jsx(external_react_bootstrap_["Button"], {
    disabled: true //Non c'è ancora questo test
    ,
    size: "lg",
    variant: "info",
    block: true,
    onClick: () => props.setSelectedTopic("privacy")
  }, "Privacy"))), __jsx(external_react_bootstrap_["Row"], null, __jsx(external_react_bootstrap_["Col"], {
    className: "mb-2"
  }, __jsx(external_react_bootstrap_["Button"], {
    disabled: true //Non c'è ancora questo test
    ,
    size: "lg",
    variant: "info",
    block: true,
    onClick: () => props.setSelectedTopic("antiriciclaggio")
  }, "Antiriciclaggio")), __jsx(external_react_bootstrap_["Col"], {
    className: "mb-2"
  }, __jsx(external_react_bootstrap_["Button"], {
    disabled: true //Non c'è ancora questo test
    ,
    size: "lg",
    variant: "info",
    block: true,
    onClick: () => props.setSelectedTopic("responsabilitàAmministrativa")
  }, "Responsabilit\xE0 amministrativa delle persone giuridiche")))))));
};
// EXTERNAL MODULE: external "react-compound-timer"
var external_react_compound_timer_ = __webpack_require__("1oP4");
var external_react_compound_timer_default = /*#__PURE__*/__webpack_require__.n(external_react_compound_timer_);

// CONCATENATED MODULE: ./components/areaTest/QuizTimer.js

var QuizTimer_jsx = external_react_default.a.createElement;


const QuizTimer = function (props) {
  return QuizTimer_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 justify-content-center align-items-center text-center"
  }, QuizTimer_jsx(external_react_bootstrap_["Col"], {
    offset: 8,
    md: 4
  }, QuizTimer_jsx(external_react_compound_timer_default.a, {
    initialTime: props.milliseconds,
    direction: "backward"
  }, ({
    getTime
  }) => QuizTimer_jsx(external_react_bootstrap_["Card"], {
    className: "w-100 justify-content-center align-items-center text-center"
  }, getTime() <= 0 && QuizTimer_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 justify-content-center align-items-center text-center"
  }, QuizTimer_jsx(external_react_bootstrap_["Col"], null, "Tempo Scaduto!")), getTime() > 0 && QuizTimer_jsx(external_react_default.a.Fragment, null, QuizTimer_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 justify-content-center align-items-center text-center"
  }, QuizTimer_jsx(external_react_bootstrap_["Col"], null, "Tempo Rimasto")), QuizTimer_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 justify-content-center align-items-center text-center"
  }, QuizTimer_jsx(external_react_bootstrap_["Col"], null, QuizTimer_jsx(external_react_compound_timer_default.a.Minutes, null), " : ", QuizTimer_jsx(external_react_compound_timer_default.a.Seconds, null))))))));
};
// CONCATENATED MODULE: ./components/areaTest/Answers.js

var Answers_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Answers = function (props) {
  const selectAnswer = answerIndex => {
    const resultingAnswer = props.selectedAnswersList.map((elem, i) => i === answerIndex ? _objectSpread(_objectSpread({}, elem), {}, {
      selected: true
    }) : _objectSpread(_objectSpread({}, elem), {}, {
      selected: false
    }));
    const resultingAllAnswers = props.allUserAnswers.map((elem, i) => i === props.questionIndex ? _objectSpread(_objectSpread({}, elem), {}, {
      answers: resultingAnswer
    }) : elem);
    props.setSelectedAnswersList(resultingAllAnswers);
  };

  const printAnswer = (answerNumber, text) => {
    const selected = props.selectedAnswersList[answerNumber - 1].selected;
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return Answers_jsx(external_react_bootstrap_["Button"], {
      key: answerNumber,
      type: "radio",
      size: "lg",
      variant: selected ? "info" : "outline-info",
      block: true,
      onClick: () => selectAnswer(answerNumber - 1)
    }, letters[answerNumber - 1] + ") ", text);
  };

  return Answers_jsx(external_react_bootstrap_["Row"], {
    className: "mb-4"
  }, Answers_jsx(external_react_bootstrap_["Col"], null, props.answers.map((elem, i) => printAnswer(i + 1, elem.text))));
};
// CONCATENATED MODULE: ./components/areaTest/Question.js

var Question_jsx = external_react_default.a.createElement;


const Question = function (props) {
  return Question_jsx(external_react_bootstrap_["Card"], {
    className: "grey-border"
  }, Question_jsx(external_react_bootstrap_["Card"].Img, {
    variant: "top",
    src: ""
  }), Question_jsx(external_react_bootstrap_["Card"].Body, {
    className: ""
  }, Question_jsx(external_react_bootstrap_["Card"].Title, {
    className: "text-center"
  }, props.questionNumber + ") ", " ", props.question), Question_jsx(Answers, {
    questionIndex: props.questionNumber - 1,
    answers: props.answers,
    allUserAnswers: props.allUserAnswers,
    selectedAnswersList: props.allUserAnswers[props.questionNumber - 1].answers,
    setSelectedAnswersList: props.setAllUserAnswers
  })));
};
// CONCATENATED MODULE: ./components/areaTest/Quiz.js

var Quiz_jsx = external_react_default.a.createElement;




const Quiz = function (props) {
  const {
    0: questionCounter,
    1: setQuestionCounter
  } = Object(external_react_["useState"])(1);
  const {
    0: allUserAnswers,
    1: setAllUserAnswers
  } = Object(external_react_["useState"])(props.selectedTest.questions);
  return Quiz_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 text-center align-items-center justify-content-center m-auto"
  }, Quiz_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 mb-3"
  }, Quiz_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 4
    },
    className: ""
  }), Quiz_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 1
    },
    className: "d-flex align-items-center"
  }, Quiz_jsx(external_react_bootstrap_["Button"], {
    block: true,
    variant: "info",
    onClick: () => props.setSelectedTopic(null)
  }, Quiz_jsx("i", {
    className: "fas fa-long-arrow-alt-left mr-2"
  }), "I Test")), Quiz_jsx(external_react_bootstrap_["Col"], {
    md: 2
  }, Quiz_jsx("div", {
    style: {
      fontSize: "1.5rem",
      fontWeight: "600",
      minWidth: "285px !important"
    }
  }, "Argomento: ", props.selectedTopic))), Quiz_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 mb-3"
  }, Quiz_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 3
    },
    className: ""
  }), Quiz_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 1
    },
    className: "d-flex align-items-center justify-content-end"
  }, questionCounter > 1 && Quiz_jsx(external_react_bootstrap_["Button"], {
    block: true,
    size: "lg",
    variant: "info",
    onClick: () => setQuestionCounter(questionCounter - 1)
  }, Quiz_jsx("i", {
    className: "fas fa-long-arrow-alt-left"
  }))), Quiz_jsx(external_react_bootstrap_["Col"], {
    md: 4,
    className: ""
  }, Quiz_jsx(Question, {
    questionNumber: questionCounter,
    question: props.selectedTest.questions[questionCounter - 1].text,
    answers: props.selectedTest.questions[questionCounter - 1].answers,
    allUserAnswers: allUserAnswers,
    setAllUserAnswers: setAllUserAnswers
  })), Quiz_jsx(external_react_bootstrap_["Col"], {
    md: 1,
    className: "d-flex align-items-center justify-content-start"
  }, questionCounter < props.selectedTest.questions.length && Quiz_jsx(external_react_bootstrap_["Button"], {
    block: true,
    size: "lg",
    variant: "info",
    onClick: () => setQuestionCounter(questionCounter + 1)
  }, Quiz_jsx("i", {
    className: "fas fa-long-arrow-alt-right"
  })), questionCounter === props.selectedTest.questions.length && Quiz_jsx(external_react_bootstrap_["Button"], {
    block: true,
    size: "lg",
    variant: "success",
    onClick: () => {
      props.setShowResults(true);
      props.setSelectedTopic(null);
      props.setResults(allUserAnswers);
    }
  }, Quiz_jsx(external_react_bootstrap_["Row"], null, Quiz_jsx(external_react_bootstrap_["Col"], {
    sm: 6
  }, "Risultati"), Quiz_jsx(external_react_bootstrap_["Col"], {
    sm: 5
  }, Quiz_jsx("i", {
    className: "fas fa-tasks ml-3"
  })))))), Quiz_jsx(QuizTimer, {
    milliseconds: props.selectedTest.timeLimit
  }));
};
// CONCATENATED MODULE: ./components/areaTest/ResultRow.js

var ResultRow_jsx = external_react_default.a.createElement;
const ResultRow = function (props) {
  const userAnswerSpan = props.userAnswer.length > 1 ? props.userAnswer.map((elem, i) => ResultRow_jsx("span", {
    key: i
  }, " ", elem.text, " | ")) : " - ";
  const correctAnswerSpan = props.correctAnswer.length > 1 ? props.correctAnswer.map((elem, i) => ResultRow_jsx("span", {
    key: i
  }, " ", i !== 0 ? "|" : "", " ", elem.text, " ")) : props.correctAnswer[0].text;
  return ResultRow_jsx("tr", {
    className: props.color === "green" ? "table-success" : "table-danger"
  }, ResultRow_jsx("th", {
    scope: "row"
  }, props.questionNumber, ") ", props.questionText), ResultRow_jsx("td", null, userAnswerSpan), ResultRow_jsx("td", null, correctAnswerSpan), props.points !== null && ResultRow_jsx("td", null, props.points));
};
// EXTERNAL MODULE: ./components/buttons/ContactsBtn.js
var ContactsBtn = __webpack_require__("Jy3C");

// CONCATENATED MODULE: ./components/areaTest/Results.js

var Results_jsx = external_react_default.a.createElement;



const Results = function (props) {
  const getUserAnswerText = answers => {
    const userAnswers = [];
    answers.forEach(elem => {
      if (elem.selected === true) userAnswers.push(elem);
    });
    return userAnswers;
  };

  const getCorrectAnswer = answers => {
    const rightAnswers = [];
    answers.forEach(elem => {
      if (elem.value === true) rightAnswers.push(elem);
    });
    return rightAnswers;
  };

  const getUserCorrectAnswer = answers => {
    const rightSelectedAnswers = [];
    answers.forEach(elem => {
      if (elem.value === true && elem.selected === true) rightSelectedAnswers.push(elem);
    });
    return rightSelectedAnswers;
  };

  const getPoints = answers => {
    let points = 0;
    answers.forEach(elem => {
      if (elem.value === true && elem.selected === true) points += elem.points;
    });
    return points;
  };

  return Results_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 text-center align-items-center justify-content-center m-auto"
  }, Results_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 mb-3"
  }, Results_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 4
    },
    className: ""
  }), Results_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 1
    },
    className: "d-flex align-items-center"
  }, Results_jsx(external_react_bootstrap_["Button"], {
    block: true,
    variant: "info",
    onClick: () => props.setShowResults(false)
  }, Results_jsx("i", {
    className: "fas fa-long-arrow-alt-left mr-2"
  }), "I Test")), Results_jsx(external_react_bootstrap_["Col"], {
    md: 2
  }, Results_jsx("div", {
    style: {
      fontSize: "1.5rem",
      fontWeight: "600",
      minWidth: "285px !important"
    }
  }, "Argomento: ", props.selectedTopic))), Results_jsx(external_react_bootstrap_["Row"], {
    className: "w-100"
  }, Results_jsx(external_react_bootstrap_["Col"], {
    md: {
      span: 6,
      offset: 3
    }
  }, Results_jsx(external_react_bootstrap_["Card"], {
    className: "w-100 p-2 grey-border justify-content-center"
  }, Results_jsx(external_react_bootstrap_["Card"].Img, {
    variant: "top",
    src: ""
  }), Results_jsx(external_react_bootstrap_["Card"].Body, null, Results_jsx(external_react_bootstrap_["Card"].Title, {
    className: "text-center"
  }, "Risultati del Test: "), Results_jsx(external_react_bootstrap_["Row"], {
    className: "mb-4"
  }, Results_jsx(external_react_bootstrap_["Col"], null, Results_jsx(external_react_bootstrap_["Table"], {
    striped: true,
    bordered: true,
    hover: true,
    size: "sm"
  }, Results_jsx("thead", null, Results_jsx("tr", null, Results_jsx("th", {
    scope: "col",
    key: "1"
  }, "Domanda"), Results_jsx("th", {
    scope: "col",
    key: "2"
  }, "Tua Risposta"), Results_jsx("th", {
    scope: "col",
    key: "3"
  }, "Risposta Corretta"), props.selectedTest.pointsSystem && Results_jsx("th", {
    scope: "col",
    key: "4"
  }, "Punti"))), Results_jsx("tbody", null, props.results.map((elem, index) => Results_jsx(ResultRow, {
    key: index,
    questionNumber: index + 1,
    questionText: elem.text,
    correctAnswer: getCorrectAnswer(elem.answers),
    userAnswer: getUserAnswerText(elem.answers),
    color: getUserCorrectAnswer(elem.answers).length > 0 ? "green" : "red",
    points: props.selectedTest.pointsSystem ? getPoints(elem.answers) : null
  })))))), Results_jsx(external_react_bootstrap_["Row"], {
    className: "justify-content-center"
  }, Results_jsx(ContactsBtn["a" /* ContactsBtn */], null)))))));
};
// EXTERNAL MODULE: ./components/layout/Footer.js
var Footer = __webpack_require__("cFkv");

// CONCATENATED MODULE: ./pages/areaTest.js

var areaTest_jsx = external_react_default.a.createElement;


 //context









function areaTest({
  tests
}) {
  const {
    0: selectedTopic,
    1: setSelectedTopic
  } = Object(external_react_["useState"])(null);
  const {
    0: selectedTest,
    1: setSelectedTest
  } = Object(external_react_["useState"])(null);
  const {
    0: showResults,
    1: setShowResults
  } = Object(external_react_["useState"])(false);
  const {
    0: results,
    1: setResults
  } = Object(external_react_["useState"])([]);
  const siteLanguage = Object(siteLanguageContext["b" /* useLanguage */])(); //context

  return areaTest_jsx("div", {
    className: Home_module_default.a.container
  }, areaTest_jsx(Header["a" /* Header */], {
    title: siteLanguage === "ita" ? "Area Test" : "Test Area"
  }), areaTest_jsx(Navbar["a" /* Navigation */], null), areaTest_jsx("main", {
    className: Home_module_default.a.main
  }, areaTest_jsx(external_react_bootstrap_["Row"], {
    className: "w-100 m-auto"
  }, selectedTopic === null && showResults === false && areaTest_jsx(TopicChoice, {
    setSelectedTopic: setSelectedTopic,
    setSelectedTest: setSelectedTest
  }), selectedTopic && areaTest_jsx(Quiz, {
    selectedTopic: selectedTopic,
    selectedTest: tests[selectedTest],
    setSelectedTopic: setSelectedTopic,
    setShowResults: setShowResults,
    setResults: setResults
  }), showResults && areaTest_jsx(Results, {
    selectedTopic: selectedTopic,
    selectedTest: tests[selectedTest],
    setShowResults: setShowResults,
    results: results
  }))), areaTest_jsx(Footer["a" /* Footer */], null));
}

areaTest.getInitialProps = async context => {
  const apiUrl = "http://" + context.req.headers.host + "/api/test";
  const res = await fetch(apiUrl);
  const {
    data
  } = await res.json();
  return {
    tests: data
  };
};

/* harmony default export */ var pages_areaTest = __webpack_exports__["default"] = (areaTest);
/* //Rimozione di getServerSideProps per deployare su Firebase
export async function getServerSideProps(context) {
  const apiUrl = "http://" + context.req.headers.host + "/api/test"
  const res = await fetch(apiUrl)
  const { data } = await res.json()
  return { props: { tests: data } }
}
*/

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