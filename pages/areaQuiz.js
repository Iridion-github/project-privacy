import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useLanguage } from '../context/siteLanguageContext' //context
import {
  Row
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { QuizChoice } from '../components/areaQuiz/QuizChoice'
import { QuizPresentation } from '../components/areaQuiz/QuizPresentation'
import { Quiz } from '../components/areaQuiz/Quiz'
import { Results } from '../components/areaQuiz/Results'
import { Footer } from '../components/layout/Footer'


function areaQuiz({ quizzes }) {
  const [quizOnShow, setQuizOnShow] = useState(null)
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const [dataBeforeCorrection, setDataBeforeCorrection] = useState([])
  const siteLanguage = useLanguage() //context

  const getQuizChoiceView = () => {
    setQuizOnShow(null)
    setSelectedQuiz(null)
    setShowResults(false)
    setDataBeforeCorrection([])
  }

  const handleChangeQuizToPresent = (title) => {
    if (title) {
      const quizToShow = quizzes.find(quiz => quiz.title.toLowerCase() === title.toLowerCase())
      setQuizOnShow(quizToShow)
    } else {
      setQuizOnShow(null)
    }
  }

  const handleChangeSelectedQuiz = (quiz) => {
    if (!quiz) {
      setQuizOnShow(null)
    }
    setSelectedQuiz(quiz)
  }


  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Area Quiz" : "Quiz Area"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100 ml-0 mr-0">
          {/* Scelta Quiz */}
          {(quizOnShow === null && selectedQuiz === null && showResults === false) &&
            <QuizChoice
              handleChangeQuizToPresent={handleChangeQuizToPresent}
            />}
          {/* Fine Scelta Quiz */}
          {/* Presentazione Quiz */}
          {(quizOnShow && selectedQuiz === null && showResults === false) &&
            <QuizPresentation
              quizOnShow={quizOnShow}
              handleChangeQuizToPresent={handleChangeQuizToPresent}
              handleChangeSelectedQuiz={handleChangeSelectedQuiz}
              getQuizChoiceView={getQuizChoiceView}
            />}
          {/* Fine Presentazione Quiz */}
          {/* Quiz */}
          {(selectedQuiz && showResults === false) && <Quiz
            selectedQuiz={selectedQuiz}
            setShowResults={setShowResults}
            setDataBeforeCorrection={setDataBeforeCorrection}
            getQuizChoiceView={getQuizChoiceView}
          />}
          {/* Fine Quiz */}
          {/* Risultati */}
          {showResults && <Results
            selectedQuiz={selectedQuiz}
            setShowResults={setShowResults}
            dataBeforeCorrection={dataBeforeCorrection}
            getQuizChoiceView={getQuizChoiceView}
          />}
          {/* Fine Risultati */}
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const apiUrl = "http://" + context.req.headers.host + "/api/quiz"
  const res = await fetch(apiUrl)
  const { data } = await res.json()
  return { props: { quizzes: data } }
}

export default areaQuiz