import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { QuizTimer } from '../components/QuizTimer'

export const Quiz = function (props) {

  const [questionCounter, setQuestionCounter] = useState(1)

  return (
    <Row className="w-100 h-75 text-center">
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
          <div style={{ fontSize: "1.5rem", fontWeight: "600", minWidth: "285px !important" }}>Argomento: Privacy</div>
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
          <Card className="">
            <Card.Img variant="top" src="" />
            <Card.Body className="">
              <Card.Title className="text-center">{props.questions[0].question}</Card.Title>
              <Card.Text>
                <Row className="mb-4">
                  <Col>
                    <Button
                      type="radio"
                      size="lg"
                      variant="outline-success"
                      block
                    >
                      {props.questions[0].answer1.text}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="radio"
                      size="lg"
                      variant="outline-success"
                      block
                    >
                      {props.questions[0].answer2.text}
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      type="radio"
                      size="lg"
                      variant="outline-success"
                      block
                    >
                      {props.questions[0].answer3.text}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="radio"
                      size="lg"
                      variant="outline-success"
                      block
                    >
                      {props.questions[0].answer4.text}
                    </Button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-flex align-items-center justify-content-start">
          {(questionCounter < props.questions.length) &&
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
          {(questionCounter === props.questions.length) &&
            <Button
              size="lg"
              variant="success"
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
        milliseconds={10000}
      />
    </Row>
  )
}