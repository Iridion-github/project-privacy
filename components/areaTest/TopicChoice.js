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
            <h4 className="text-center">Verifica dell'Apprendimento</h4>
            <Row className="mb-4">
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.handleChangeSelectedTopic("Test da Internet")
                    props.handleChangeSelectedTest("Test da Internet")
                  }}
                >
                  Test da Internet
                  </Button>
              </Col>
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.handleChangeSelectedTopic("Test Debug")
                    props.handleChangeSelectedTest("Test Debug")
                  }}
                >
                  Test Debug
                  </Button>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.handleChangeSelectedTopic("Privacy Specialist (24 ore)")
                    props.handleChangeSelectedTest("Privacy Specialist (24 ore)")
                  }}
                >
                  Privacy Specialist (24 ore)
                  </Button>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.handleChangeSelectedTopic("Manager Privacy (60 ore)")
                    props.handleChangeSelectedTest("Manager Privacy (60 ore)")
                  }}
                >
                  Manager Privacy (60 ore)
                  </Button>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.handleChangeSelectedTopic("Data Protection Officer (80 ore)")
                    props.handleChangeSelectedTest("Data Protection Officer (80 ore)")
                  }}
                >
                  Data Protection Officer (80 ore)
                  </Button>
              </Col>
            </Row>
            <h4 className="text-center">Per Modulo</h4>
            <Row className="mb-4">
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.handleChangeSelectedTopic("Modulo 3")
                    props.handleChangeSelectedTest("Modulo 3")
                  }}
                >
                  Modulo 3
                  </Button>
              </Col>
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.handleChangeSelectedTopic("Modulo 4")
                    props.handleChangeSelectedTest("Modulo 4")
                  }}
                >
                  Modulo 4
                  </Button>
              </Col>
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.handleChangeSelectedTopic("Modulo 5")
                    props.handleChangeSelectedTest("Modulo 5")
                  }}
                >
                  Modulo 5
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
                  onClick={() => props.handleChangeSelectedTopic("Test Placeholder")}
                >
                  Test Placeholder
                  </Button>
              </Col>
              <Col className="mb-2">
                <Button
                  disabled //Non c'è ancora questo test
                  size="lg"
                  variant="info"
                  block
                  onClick={() => props.handleChangeSelectedTopic("Test Placeholder")}
                >
                  Test Placeholder
                  </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row >
  )
}