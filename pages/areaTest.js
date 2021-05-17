import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useLanguage } from '../context/siteLanguageContext' //context
import {
  Row
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { TopicChoice } from '../components/areaTest/TopicChoice'
import { Quiz } from '../components/areaTest/Quiz'
import { Results } from '../components/areaTest/Results'
import { Footer } from '../components/layout/Footer'


function areaTest({ tests }) {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedTest, setSelectedTest] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const [dataBeforeCorrection, setDataBeforeCorrection] = useState([])
  const siteLanguage = useLanguage() //context

  const handleChangeSelectedTopic = (testTitle) => {
    setSelectedTopic(testTitle)
  }

  const handleChangeSelectedTest = (testTitle) => {
    const testToSelect = tests.find(test => test.title.toLowerCase().trim() === testTitle.toLowerCase().trim())
    setSelectedTest(testToSelect)
  }

  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Area Test" : "Test Area"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100 ml-0 mr-0">
          {/* Scelta Quiz */}
          {(selectedTopic === null && showResults === false) &&
            <TopicChoice
              handleChangeSelectedTopic={handleChangeSelectedTopic}
              handleChangeSelectedTest={handleChangeSelectedTest}
            />}
          {/* Fine Scelta Quiz */}
          {/* Quiz */}
          {selectedTopic && <Quiz
            selectedTopic={selectedTopic}
            selectedTest={selectedTest}
            handleChangeSelectedTopic={handleChangeSelectedTopic}
            setShowResults={setShowResults}
            setDataBeforeCorrection={setDataBeforeCorrection}
          />}
          {/* Fine Quiz */}
          {/* Risultati */}
          {showResults && <Results
            selectedTopic={selectedTopic}
            selectedTest={selectedTest}
            setShowResults={setShowResults}
            dataBeforeCorrection={dataBeforeCorrection}
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
  const apiUrl = "http://" + context.req.headers.host + "/api/test"
  const res = await fetch(apiUrl)
  const { data } = await res.json()
  return { props: { tests: data } }
}

export default areaTest