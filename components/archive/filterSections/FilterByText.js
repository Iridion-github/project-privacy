import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { useLanguage } from '../../../context/siteLanguageContext' //context


export const FilterByText = function (props) {
  const siteLanguage = useLanguage()

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>I risultati della Ricerca:</h5>
          </Row>
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <Form.Group className="justify-content-center" controlId="">
              <Form.Control
                size="sm"
                as="select"
                className=""
              >
                <option>Contengono almeno 1 delle parole</option>
                <option>Contengono tutte le parole</option>
                <option>Contengono l'esatta frase</option>
              </Form.Control>
            </Form.Group>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}