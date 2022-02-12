import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { QuizChoice } from "../components/areaQuiz/QuizChoice";
import { QuizPresentation } from "../components/areaQuiz/QuizPresentation";
import { Quiz } from "../components/areaQuiz/Quiz";
import { Results } from "../components/areaQuiz/Results";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";
import { RightMenu } from "../components/home/RightMenu";

function areaQuiz({ quizzes }) {
  console.log("quizzes:", quizzes);
  //[Checkpoint] Controllare che i dati quizzes e questions siano correttamente reperiti. Poi decidere dove generare i test randomici, FE o BE.
  const [quizOnShow, setQuizOnShow] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [dataBeforeCorrection, setDataBeforeCorrection] = useState([]);
  const [timesUp, setTimesUp] = useState(false);
  const [questionCounter, setQuestionCounter] = useState(1);
  const { currentLang } = useAppContext();

  const getQuizChoiceView = () => {
    setQuizOnShow(null);
    setSelectedQuiz(null);
    setShowResults(false);
    setDataBeforeCorrection([]);
    setQuestionCounter(1);
  };

  const handleChangeQuizToPresent = title => {
    if (title) {
      const quizToShow = quizzes.find(quiz => quiz.title.toLowerCase() === title.toLowerCase());
      setQuizOnShow(quizToShow);
    } else {
      setQuizOnShow(null);
    }
  };

  const handleChangeSelectedQuiz = quiz => {
    if (!quiz) {
      setQuizOnShow(null);
    }
    setSelectedQuiz(quiz);
  };

  const handleShowResults = () => {
    setDataBeforeCorrection(selectedQuiz.questions);
    setShowResults(true);
  };

  const handleUpdateUserAnswers = updatedQuestions => {
    const quizWithUpdatedAnswers = { ...selectedQuiz, questions: updatedQuestions };
    setSelectedQuiz(quizWithUpdatedAnswers);
  };

  return (
    <div className={styles.container}>
      <Header title={currentLang === "ita" ? "Area Quiz" : "Quiz Area"} />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100 m-0 p-0">
          <Col md={{ span: 6, offset: 3 }} className="p-0">
            <Row className="w-100 ml-0 mr-0">
              {/* Scelta Quiz */}
              {quizOnShow === null && selectedQuiz === null && showResults === false && <QuizChoice handleChangeQuizToPresent={handleChangeQuizToPresent} />}
              {/* Fine Scelta Quiz */}
              {/* Presentazione Quiz */}
              {quizOnShow && selectedQuiz === null && showResults === false && (
                <QuizPresentation
                  quizOnShow={quizOnShow}
                  handleChangeQuizToPresent={handleChangeQuizToPresent}
                  handleChangeSelectedQuiz={handleChangeSelectedQuiz}
                  getQuizChoiceView={getQuizChoiceView}
                />
              )}
              {/* Fine Presentazione Quiz */}
              {/* Quiz */}
              {selectedQuiz && showResults === false && (
                <Quiz
                  selectedQuiz={selectedQuiz}
                  setShowResults={setShowResults}
                  getQuizChoiceView={getQuizChoiceView}
                  timesUp={timesUp}
                  setTimesUp={setTimesUp}
                  questionCounter={questionCounter}
                  setQuestionCounter={setQuestionCounter}
                  allUserAnswers={selectedQuiz?.questions}
                  setAllUserAnswers={handleUpdateUserAnswers}
                  handleShowResults={handleShowResults}
                />
              )}
              {/* Fine Quiz */}
              {/* Risultati */}
              {showResults && (
                <Results
                  selectedQuiz={selectedQuiz}
                  setShowResults={setShowResults}
                  dataBeforeCorrection={dataBeforeCorrection}
                  getQuizChoiceView={getQuizChoiceView}
                  timesUp={timesUp}
                  setTimesUp={setTimesUp}
                />
              )}
              {/* Fine Risultati */}
            </Row>
          </Col>
          <Col md={{ span: 3, offset: 0 }} className="m-0 p-0 justify-content-center">
            <RightMenu currentLang={currentLang} />
          </Col>
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const apiUrl = "http://" + context.req.headers.host + "/api/quiz";
  const res = await fetch(apiUrl);
  const { quizzes } = await res.json();
  return { props: { quizzes } };
}

export default areaQuiz;
