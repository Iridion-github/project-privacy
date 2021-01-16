import {
  Row,
  Col,
  Card
} from 'react-bootstrap'
import Timer from 'react-compound-timer'

export const QuizTimer = function (props) {
  return (
    <Row className="w-100 justify-content-center align-items-center text-center">
      <Col offset={8} md={4}>
        <Timer
          initialTime={props.milliseconds}
          direction="backward"
        >
          {({ getTime }) => (
            <Card className="w-100 justify-content-center align-items-center text-center">
              {(getTime() <= 0) && (
                <Row className="w-100 justify-content-center align-items-center text-center">
                  <Col>
                    Tempo Scaduto!
                </Col>
                </Row>
              )}
              {(getTime() > 0) && (
                <>
                  <Row className="w-100 justify-content-center align-items-center text-center">
                    <Col>
                      Tempo Rimasto
                </Col>
                  </Row>
                  <Row className="w-100 justify-content-center align-items-center text-center">

                    <Col>
                      <Timer.Minutes /> : <Timer.Seconds />
                    </Col>
                  </Row>
                </>
              )}
            </Card>
          )}
        </Timer>
      </Col>
    </Row>
  )
}