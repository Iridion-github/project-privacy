import { useState, useContext, createContext } from 'react'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { TopicChoice } from '../components/areaTest/TopicChoice'
import { Quiz } from '../components/areaTest/Quiz'
import { Footer } from '../components/layout/Footer'
import tests from "../database/readiedTests"

export default function areaTest() {

  const [selectedTopic, setSelectedTopic] = useState(null)

  const [selectedTest, setSelectedTest] = useState(null)

  const [questions, setQuestions] = useState([
    {
      question: "Is privacy good?",
      answer1: { text: "No", value: 0 },
      answer2: { text: "Nope", value: 0 },
      answer3: { text: "Maybe?", value: 0 },
      answer4: { text: "Yes", value: 1 }
    },
    {
      question: "Is privacy important?",
      answer1: { text: "Nope", value: 0 },
      answer2: { text: "Maybe?", value: 0 },
      answer3: { text: "Yes", value: 1 },
      answer4: { text: "No", value: 0 }
    }
  ])

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
        {(selectedTopic === null) &&
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
        />}
        {/* Fine Quiz */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}