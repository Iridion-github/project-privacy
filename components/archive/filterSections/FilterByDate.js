import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { useLanguage } from '../../../context/siteLanguageContext' //context


export const FilterByDate = function (props) {
  const siteLanguage = useLanguage()

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100">
        <Col md={12} className="justify-content-center">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Data:</h5>
          </Row>
          <Row className="w-100 justify-content-center text-center ml-0 mr-0">
            <Col md={6} className="ml-0 mr-0">
              Da:
          <Form.Group className="justify-content-center" controlId="">
                <Form.Control
                  size="sm"
                  type="date"
                  className=""
                />
              </Form.Group>
            </Col>
            <Col md={6} className="ml-0 mr-0">
              A:
          <Form.Group className="justify-content-center" controlId="">
                <Form.Control
                  size="sm"
                  type="date"
                  className=""
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}