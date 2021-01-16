import { useState } from 'react'
import {
  Row,
  Col,
  Button
} from 'react-bootstrap'
import { QuizTimer } from './QuizTimer'
import { Question } from './Question'

export const Quiz = function (props) {
  const [questionCounter, setQuestionCounter] = useState(1)
  const [allUserAnswers, setAllUserAnswers] = useState(props.selectedTest.questions)

  return (
    <Row className="w-100 text-center align-items-center justify-content-center m-auto">
      <Row className="w-100 mb-3">
        <Col md={{ span: 4 }} className="">
        </Col>
        <Col md={{ span: 1 }} className="d-flex align-items-center">
          <Button
            block
            variant="info"
            onClick={() => props.setSelectedTopic(null)}
          >
            <i className="fas fa-long-arrow-alt-left mr-2"></i>
            I Test
          </Button>
        </Col>
        <Col md={2}>
          <div style={{ fontSize: "1.5rem", fontWeight: "600", minWidth: "285px !important" }}>Argomento: {props.selectedTopic}</div>
        </Col>
      </Row>

      <Row className="w-100 mb-3">
        <Col md={{ span: 3 }} className="">
        </Col>
        <Col md={{ span: 1 }} className="d-flex align-items-center justify-content-end">
          {(questionCounter > 1) &&
            <Button
              block
              size="lg"
              variant="info"
              onClick={() => setQuestionCounter(questionCounter - 1)}
            >
              <i className="fas fa-long-arrow-alt-left"></i>
            </Button>
          }
        </Col>
        <Col md={4} className="">
          <Question
            questionNumber={questionCounter}
            question={props.selectedTest.questions[questionCounter - 1].text}
            answers={props.selectedTest.questions[questionCounter - 1].answers}
            allUserAnswers={allUserAnswers}
            setAllUserAnswers={setAllUserAnswers}
          />
        </Col>
        <Col md={1} className="d-flex align-items-center justify-content-start">
          {(questionCounter < props.selectedTest.questions.length) &&
            <Button
              block
              size="lg"
              variant="info"
              onClick={() => setQuestionCounter(questionCounter + 1)}
            >
              <i className="fas fa-long-arrow-alt-right"></i>
            </Button>
          }
          {(questionCounter === props.selectedTest.questions.length) &&
            <Button
              block
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