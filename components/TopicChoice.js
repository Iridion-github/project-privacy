import {
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const TopicChoice = function (props) {
  return (
    <Card style={{}}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className="text-center">I Nostri Test</Card.Title>
        <Card.Text>
          <Row className="mb-4">
            <Col>
              <Button
                size="lg"
                variant="outline-dark"
                block
                onClick={() => props.setSelectedTopic("anticorruzione")}
              >
                Anticorruzione e Trasparenza
                  </Button>
            </Col>
            <Col>
              <Button
                size="lg"
                variant="outline-dark"
                block
                onClick={() => props.setSelectedTopic("privacy")}
              >
                Privacy
                  </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                size="lg"
                variant="outline-dark"
                block
                onClick={() => props.setSelectedTopic("antiriciclaggio")}
              >
                Antiriciclaggio
                  </Button>
            </Col>
            <Col>
              <Button
                size="lg"
                variant="outline-dark"
                block
                onClick={() => props.setSelectedTopic("responsabilitàAmministrativa")}
              >
                Responsabilità amministrativa delle persone giuridiche
                  </Button>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}