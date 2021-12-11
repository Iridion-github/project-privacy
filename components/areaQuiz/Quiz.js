import {
  Row,
  Col,
  Button
} from 'react-bootstrap'
import { QuizTimer } from './QuizTimer'
import { Question } from './Question'

export const Quiz = function (props) {

  return (
    <Row className="w-100 ml-0 mr-0">
      <Row className="w-100 mb-3 ml-0 mr-0 quiz-header">
        <Row className="w-100 ml-0 mr-0">
          <Col md={{ span: 4 }} className="">
          </Col>
          <Col md={{ span: 1 }} className="d-flex align-items-center">
            <Button
              block
              variant="info"
              onClick={() => props.getQuizChoiceView()}
            >
              <i className="fas fa-long-arrow-alt-left mr-2"></i>
            I Quiz
          </Button>
          </Col>
          <Col md={4} className="text-left">
            <div style={{ fontSize: "1.5rem", fontWeight: "600", minWidth: "285px !important" }}>Quiz: {props.selectedQuiz.title}</div>
          </Col>
        </Row>
        <Row className="w-100 ml-0 mr-0 d-flex align-items-center">
          <QuizTimer
            milliseconds={props.selectedQuiz.timeLimit}
            setShowResults={props.setShowResults}
            timesUp={props.timesUp}
            setTimesUp={props.setTimesUp}
            handleShowResults={props.handleShowResults}
          />
        </Row>
      </Row>

      <Row className="w-100 text-center align-items-center justify-content-center m-auto">

        <Row className="w-100 ml-0 mr-0 mb-3 quiz-body ">
          <Row className="w-100 ml-0 mr-0 mb-3">
            <Col md={{ span: 3 }} className="">
            </Col>
            <Col md={{ span: 1 }} className="d-flex align-items-center justify-content-end">
              {(props.questionCounter > 1) &&
                <Button
                  block
                  size="lg"
                  variant="info"
                  disabled={props.timesUp}
                  onClick={() => props.setQuestionCounter(props.questionCounter - 1)}
                >
                  <i className="fas fa-long-arrow-alt-left"></i>
                </Button>
              }
            </Col>
            <Col md={4} className="">
              <Question
                questionNumber={props.questionCounter}
                question={props.selectedQuiz.questions[props.questionCounter - 1].text}
                answers={props.selectedQuiz.questions[props.questionCounter - 1].answers}
                allUserAnswers={props.allUserAnswers}
                setAllUserAnswers={props.setAllUserAnswers}
                timesUp={props.timesUp}
                setTimesUp={props.setTimesUp}
              />
            </Col>
            <Col md={1} className="d-flex align-items-center justify-content-start">
              {(props.questionCounter < props.selectedQuiz.questions.length) &&
                <Button
                  block
                  size="lg"
                  variant="info"
                  disabled={props.timesUp}
                  onClick={() => props.setQuestionCounter(props.questionCounter + 1)}
                >
                  <i className="fas fa-long-arrow-alt-right"></i>
                </Button>
              }
              {(props.questionCounter === props.selectedQuiz.questions.length) &&
                <Button
                  block
                  className="pt-3 pb-3"
                  variant="success"
                  disabled={props.timesUp}
                  onClick={() => props.handleShowResults(true)}
                >
                  Risultati <i className="fas fa-tasks ml-3"></i>
                </Button>
              }
            </Col>
          </Row>
        </Row>
      </Row>
    </Row>
  )
}