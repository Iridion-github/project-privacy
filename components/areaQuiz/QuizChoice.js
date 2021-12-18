import { Row, Col, Card, Button } from "react-bootstrap";

export const QuizChoice = function (props) {
  return (
    <Row className="w-100 align-items-center m-auto">
      <Col md={{ span: 4, offset: 4 }} className="align-items-center m-auto">
        <Card className="w-100 p-2 grey-border" border="">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <h4 className="text-center">Verifica dell'Apprendimento</h4>
            {/* <Row className="mb-4">
              <Col className="mb-2">
                <Button size="lg" variant="info" block onClick={() => props.handleChangeQuizToPresent("Test da Internet")}>
                  Quiz da Internet
                </Button>
              </Col>
              <Col className="mb-2">
                <Button size="lg" variant="info" block onClick={() => props.handleChangeQuizToPresent("Test Debug")}>
                  Quiz Debug
                </Button>
              </Col>
            </Row> */}
            <Row className="mb-4">
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.handleChangeQuizToPresent("Responsabilità Amministrativa degli Enti");
                  }}
                >
                  Responsabilità Amministrativa degli Enti
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
                    props.handleChangeQuizToPresent("Privacy");
                  }}
                >
                  Privacy
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
                    props.handleChangeQuizToPresent("Antiriciclaggio");
                  }}
                >
                  Antiriciclaggio
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
                    props.handleChangeQuizToPresent("Anticorruzione");
                  }}
                >
                  Anticorruzione
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
                    props.handleChangeQuizToPresent("Modulo 3");
                  }}
                >
                  Test 1
                </Button>
              </Col>
              <Col className="mb-2">
                <Button
                  size="lg"
                  variant="info"
                  block
                  onClick={() => {
                    props.handleChangeQuizToPresent("Modulo 4");
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
                    props.handleChangeQuizToPresent("Modulo 5");
                  }}
                >
                  Test 3
                </Button>
              </Col>
            </Row>
            {/* <Row>
              <Col className="mb-2">
                <Button
                  disabled //Non c'è ancora questo quiz
                  size="lg"
                  variant="info"
                  block
                  onClick={() => props.handleChangeQuizToPresent("Quiz Placeholder")}
                >
                  Quiz Placeholder
                </Button>
              </Col>
              <Col className="mb-2">
                <Button
                  disabled //Non c'è ancora questo quiz
                  size="lg"
                  variant="info"
                  block
                  onClick={() => props.handleChangeQuizToPresent("Quiz Placeholder")}
                >
                  Quiz Placeholder
                </Button>
              </Col>
            </Row> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
