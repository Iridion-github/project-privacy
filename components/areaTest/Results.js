import {
  Row,
  Col,
  Card,
  Button,
  Table
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ResultRow } from './ResultRow'

export const Results = function (props) {

  console.log("props.results:", props.results)

  return (
    <Row className="w-100 h-75 text-center">
      <Row className="d-flex align-items-center w-100 mb-4">
        <Col md={4} className="text-center">
          <Button
            variant="danger"
            onClick={() => props.setShowResults(false)}
          >
            <i className="fas fa-long-arrow-alt-left mr-2"></i>
            I nostri Test
          </Button>
        </Col>
      </Row>
      <Card style={{}}>
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
                    <th scope="col" key="4">Punti</th>
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
                      userAnswer={elem.answers[0].selected}
                      rightAnswer={elem.answers[0].value}
                    />
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  )
}