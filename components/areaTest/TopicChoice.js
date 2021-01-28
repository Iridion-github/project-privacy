import {
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'

export const TopicChoice = function (props) {
  return (
    <Row className="w-100 align-items-center m-auto">
      <Col md={{ span: 4, offset: 4 }} className="align-items-center m-auto">
        <Card className="w-100 p-2 grey-border" border="">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <h4 className="text-center">Test di verifica dell'Apprendimento</h4>
            <Row className="mb-4">
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.setSelectedTopic("Test 1")
                    props.setSelectedTest(1)
                  }}
                >
                  Test 1
                  </Button>
              </Col>
              <Col className="mb-2">
                <Button
                  disabled //Non c'è ancora questo test
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.setSelectedTopic("Test 2")
                    props.setSelectedTest(null)
                  }}
                >
                  Test 2
                  </Button>
              </Col>
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.setSelectedTopic("Test Debug")
                    props.setSelectedTest(0)
                  }}
                >
                  Test Debug
                  </Button>
              </Col>
            </Row>
            <h4 className="text-center">I Nostri Test</h4>
            <Row className="mb-4">
              <Col className="mb-2">
                <Button
                  disabled //Non c'è ancora questo test
                  size="lg"
                  variant="info"
                  block
                  onClick={() => props.setSelectedTopic("anticorruzione")}
                >
                  Anticorruzione e Trasparenza
                  </Button>
              </Col>
              <Col className="mb-2">
                <Button
                  disabled //Non c'è ancora questo test
                  size="lg"
                  variant="info"
                  block
                  onClick={() => props.setSelectedTopic("privacy")}
                >
                  Privacy
                  </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button
                  disabled //Non c'è ancora questo test
                  size="lg"
                  variant="info"
                  block
                  onClick={() => props.setSelectedTopic("antiriciclaggio")}
                >
                  Antiriciclaggio
                  </Button>
              </Col>
              <Col className="mb-2">
                <Button
                  disabled //Non c'è ancora questo test
                  size="lg"
                  variant="info"
                  block
                  onClick={() => props.setSelectedTopic("responsabilitàAmministrativa")}
                >
                  Responsabilità amministrativa delle persone giuridiche
                  </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row >
  )
}