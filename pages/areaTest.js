import { useState, useContext, createContext } from 'react'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { TopicChoice } from '../components/areaTest/TopicChoice'
import { Quiz } from '../components/areaTest/Quiz'
import { Results } from '../components/areaTest/Results'
import { Footer } from '../components/layout/Footer'
import tests from "../database/readiedTests"

export default function areaTest() {

  const [selectedTopic, setSelectedTopic] = useState(null)

  const [selectedTest, setSelectedTest] = useState(null)

  const [showResults, setShowResults] = useState(false)

  const [results, setResults] = useState([])

  return (
    <div className={styles.container}>
      <Header
        title="Area Test"
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
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
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}