import {
  Row,
  Col,
  Card,
  Button,
  Table
} from 'react-bootstrap'
import { ResultRow } from './ResultRow'

export const Results = function (props) {

  const getUserAnswerText = (answers) => {
    const userAnswers = []
    answers.forEach(elem => { if (elem.selected === true) userAnswers.push(elem) })
    return userAnswers
  }

  const getCorrectAnswer = (answers) => {
    const rightAnswers = []
    answers.forEach(elem => { if (elem.value === true) rightAnswers.push(elem) })
    return rightAnswers
  }

  const getUserCorrectAnswer = (answers) => {
    const rightSelectedAnswers = []
    answers.forEach(elem => { if (elem.value === true && elem.selected === true) rightSelectedAnswers.push(elem) })
    return rightSelectedAnswers
  }

  const getPoints = (answers) => {
    let points = 0
    answers.forEach(elem => { if (elem.value === true && elem.selected === true) points += elem.points })
    return points
  }

  return (
    <Row className="w-100 h-75">
      <Col className="w-100 m-auto">
        <Row className="d-flex w-100 mb-4">
          <Col md={{ span: 6, offset: 3 }}>
            <Button
              variant="danger"
              className="black-border"
              onClick={() => props.setShowResults(false)}
            >
              <i className="fas fa-long-arrow-alt-left mr-2"></i>
            I nostri Test
          </Button>
          </Col>
        </Row>
        <Row className="w-100 mb-4">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="w-100 p-2 justify-content-center" border="secondary">
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title className="text-center">Risultati del Test: </Card.Title>
                <Row className="mb-4">
                  <Col>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th scope="col" key="1">Domanda</th>
                          <th scope="col" key="2">Tua Risposta</th>
                          <th scope="col" key="3">Risposta Corretta</th>
                          {props.selectedTest.pointsSystem && <th scope="col" key="4">Punti</th>}
                        </tr>
                      </thead>
                      <tbody>
                        {/* 
                    [PROMEMORIA]
                    L'elem di props.result.map() è un oggetto che contiene text (testo della domanda) ed answers: un array che contiene oggetti con le props[text, selected, value].
                  */}
                        {props.results.map((elem, index) => (
                          <ResultRow
                            key={index}
                            questionNumber={index + 1}
                            questionText={elem.text}
                            correctAnswer={getCorrectAnswer(elem.answers)}
                            userAnswer={getUserAnswerText(elem.answers)}
                            color={getUserCorrectAnswer(elem.answers).length > 0 ? "green" : "red"}
                            points={props.selectedTest.pointsSystem ? getPoints(elem.answers) : null}
                          />
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col >
    </Row >
  )
}