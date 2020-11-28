import styles from '../styles/Home.module.css'
import {
  Row,
  Col,
  Card,
  Button,
  Link
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const Quiz = function () {
  return (
    <Row className="w-75 h-75 text-center">
      <Row className="d-flex align-items-center w-100 mb-4">
        <Col className="text-center">
          <Button
            variant="danger"
          >
            <i className="fas fa-long-arrow-alt-left mr-2"></i>
            I nostri Test
          </Button>
        </Col>
        <Col>
          <span style={{ fontSize: "2rem", fontWeight: "600" }}>Argomento: Privacy</span>
        </Col>
      </Row>
      <Row className="w-100">
        <Col md={3} className="d-flex align-items-center justify-content-center">
          <Button
            size="lg"
            variant="success"
          >
            <i className="fas fa-long-arrow-alt-left"></i>
          </Button>
        </Col>
        <Col md={6}>
          <Card className="">
            <Card.Img variant="top" src="" />
            <Card.Body className="">
              <Card.Title className="text-center">Domanda per l'user</Card.Title>
              <Card.Text>
                <Row className="mb-4">
                  <Col>
                    <Button
                      type="radio"
                      size="lg"
                      variant="outline-success"
                      block
                    >
                      Risposta 1
                  </Button>
                  </Col>
                  <Col>
                    <Button
                      type="radio"
                      size="lg"
                      variant="outline-success"
                      block
                    >
                      Risposta 2
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
                      Risposta 3
                  </Button>
                  </Col>
                  <Col>
                    <Button
                      type="radio"
                      size="lg"
                      variant="outline-success"
                      block
                    >
                      Risposta 4
                  </Button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-flex align-items-center justify-content-center">
          <Button
            size="lg"
            variant="success"
          >
            <i className="fas fa-long-arrow-alt-right"></i>
          </Button>
        </Col>
      </Row>
    </Row>
  )
}