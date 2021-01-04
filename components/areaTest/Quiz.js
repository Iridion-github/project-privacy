import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { QuizTimer } from './QuizTimer'
import { Question } from './Question'

export const Quiz = function (props) {
  const [questionCounter, setQuestionCounter] = useState(1)
  const [allUserAnswers, setAllUserAnswers] = useState(props.selectedTest.questions)

  return (
    <Row className="w-100 h-75 text-center" border="secondary">
      <Row className="d-flex align-items-center w-100 mb-4">
        <Col md={4} className="text-center">
          <Button
            variant="danger"
            onClick={() => props.setSelectedTopic(null)}
          >
            <i className="fas fa-long-arrow-alt-left mr-2"></i>
            I nostri Test
          </Button>
        </Col>
        <Col md={8}>
          <div style={{ fontSize: "1.5rem", fontWeight: "600", minWidth: "285px !important" }}>Argomento: {props.selectedTopic}</div>
        </Col>
      </Row>
      <Row className="w-100 mb-4">
        <Col md={3} className="d-flex align-items-center justify-content-end">
          {(questionCounter > 1) &&
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setQuestionCounter(questionCounter - 1)}
            >
              <Row>
                <Col>
                  <i className="fas fa-long-arrow-alt-left"></i>
                </Col>
              </Row>
            </Button>
          }
        </Col>
        <Col md={6}>
          <Question
            questionNumber={questionCounter}
            question={[questionCounter - 1].text}
            answers={props.selectedTest.questions[questionCounter - 1].answers}
            allUserAnswers={allUserAnswers}
            setAllUserAnswers={setAllUserAnswers}
          />
        </Col>
        <Col md={3} className="d-flex align-items-center justify-content-start">
          {(questionCounter < props.selectedTest.questions.length) &&
            <Button
              size="lg"
              variant="success"
              onClick={() => setQuestionCounter(questionCounter + 1)}
            >
              <Row>
                <Col>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </Col>
              </Row>
            </Button>
          }
          {(questionCounter === props.selectedTest.questions.length) &&
            <Button
              size="lg"
              variant="success"
              onClick={() => {
                props.setShowResults(true)
                props.setSelectedTopic(null)
                props.setResults(allUserAnswers)
              }}
            >
              <Row>
                <Col sm={6}>
                  Risultati
                </Col>
                <Col sm={5}>
                  <i className="fas fa-tasks ml-3"></i>
                </Col>
              </Row>
            </Button>
          }
        </Col>
      </Row>
      <QuizTimer
        milliseconds={props.selectedTest.timeLimit}
      />
    </Row>
  )
}