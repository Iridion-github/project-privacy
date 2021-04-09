import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'


export const FilterByTitoloVsContenuto = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Il testo dev'essere presente:</h5>
          </Row>
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <Form.Group className="justify-content-center" controlId="">
              <Form.Control
                size="sm"
                as="select"
                className=""
              >
                <option>Solo nel titolo dei documenti</option>
                <option>Solo nel contenuto dei documenti</option>
                <option>In entrambi</option>
              </Form.Control>
            </Form.Group>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}