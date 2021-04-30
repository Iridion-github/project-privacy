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

  console.log("areaTest - tests:", tests)

  const [selectedTopic, setSelectedTopic] = useState(null)

  const [selectedTest, setSelectedTest] = useState(null)

  const [showResults, setShowResults] = useState(false)

  const [results, setResults] = useState([])

  const siteLanguage = useLanguage() //context

  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Area Test" : "Test Area"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100 m-auto">
          {/* Scelta Quiz */}
          {(selectedTopic === null && showResults === false) &&
            <TopicChoice
              setSelectedTopic={setSelectedTopic}
              setSelectedTest={setSelectedTest}
            />}
          {/* Fine Scelta Quiz */}
          {/* Quiz */}
          {selectedTopic && <Quiz
            selectedTopic={selectedTopic}
            selectedTest={tests[selectedTest]}
            setSelectedTopic={setSelectedTopic}
            setShowResults={setShowResults}
            setResults={setResults}
          />}
          {/* Fine Quiz */}
          {/* Risultati */}
          {showResults && <Results
            selectedTopic={selectedTopic}
            selectedTest={tests[selectedTest]}
            setShowResults={setShowResults}
            results={results}
          />}
          {/* Fine Risultati */}
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

areaTest.getInitialProps = async (context) => {
  const apiUrl = "http://" + context.req.headers.host + "/api/test"
  const res = await fetch(apiUrl)
  const { data } = await res.json()
  return { tests: data }
}

export default areaTest

/* //Rimozione di getServerSideProps per deployare su Firebase
export async function getServerSideProps(context) {
  const apiUrl = "http://" + context.req.headers.host + "/api/test"
  const res = await fetch(apiUrl)
  const { data } = await res.json()
  return { props: { tests: data } }
}
*/