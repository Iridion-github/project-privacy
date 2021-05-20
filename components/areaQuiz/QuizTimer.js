import {
  Row,
  Col,
  Card
} from 'react-bootstrap'
import Timer from 'react-compound-timer'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const QuizTimer = function (props) {

  const getFormattedTimer = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60

    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <Row className="w-100 ml-0 mr-0 mt-2 justify-content-center align-items-center text-center">
      <Col offset={8} md={4}>
        <>
          <Row className="w-100 ml-0 mr-0 justify-content-center align-items-center text-center">
            <Col className="text-center p-0">
              <strong>Tempo Rimasto:</strong>
            </Col>
          </Row>
          <Row className="w-100 ml-0 mr-0 p-0  justify-content-center align-items-center text-center">
            <Col md={{ span: 8 }} className="p-0">
              <Row className="w-100 ml-0 mr-0 p-0 justify-content-center align-items-center text-center">
                <CountdownCircleTimer
                  style={{ width: 'auto' }}
                  isPlaying={true}
                  size={110}
                  strokeWidth={8}
                  trailColor={"#83CBDD"}
                  duration={5 /*props.milliseconds / 1000*/}
                  colors={"#17a2b8"}
                >
                  {({ remainingTime }) => {
                    if (remainingTime > 0) {
                      return getFormattedTimer({ remainingTime })
                    } else {
                      return <div className="red-alert-text">Tempo Scaduto</div>
                    }
                  }}
                </CountdownCircleTimer>

              </Row>
            </Col>
          </Row>
        </>

        {/* 
        <Timer
          initialTime={props.milliseconds}
          direction="backward"
        >
          {({ getTime }) => (
            <Card className="w-100 p-4 justify-content-center align-items-center text-center">
              {(getTime() <= 0) && (
                <Row className="w-100 ml-0 mr-0 justify-content-center align-items-center text-center">
                  <Col>
                    Tempo Scaduto!
                </Col>
                </Row>
              )}
              {(getTime() > 0) && (
                <>
                  <Row className="w-100 ml-0 mr-0 justify-content-center align-items-center text-center">
                    <Col className="text-center p-0">
                      <strong>Tempo Rimasto:</strong>
                    </Col>
                  </Row>
                  <Row className="w-100 ml-0 mr-0 p-0  justify-content-center align-items-center text-center">
                    <Col md={{ span: 8 }} className="p-0">
                      <Row className="w-100 ml-0 mr-0 justify-content-center align-items-center text-center">
                        <Col md={{ span: 4 }} className="text-right p-0">
                          <CountdownCircleTimer
                            isPlaying
                            size={110}
                            duration={props.milliseconds / 1000}
                            colors={[
                              ['#004777', 0.33],
                              ['#F7B801', 0.33],
                              ['#A30000', 0.33],
                            ]}
                          >
                            {({ remainingTime }) => {
                              return remainingTime
                            }}
                          </CountdownCircleTimer>
                        </Col>
                        <Col md={{ span: 4 }} className="text-center p-0">
                          <CountdownCircleTimer
                            isPlaying
                            size={110}
                            duration={props.milliseconds / 1000}
                            colors={[
                              ['#004777', 0.33],
                              ['#F7B801', 0.33],
                              ['#A30000', 0.33],
                            ]}
                          >
                            {({ remainingTime }) => {
                              return remainingTime
                            }}
                          </CountdownCircleTimer>
                        </Col>
                        <Col md={{ span: 4 }} className="text-left p-0">
                          <CountdownCircleTimer
                            isPlaying
                            size={110}
                            duration={props.milliseconds / 1000}
                            colors={[
                              ['#004777', 0.33],
                              ['#F7B801', 0.33],
                              ['#A30000', 0.33],
                            ]}
                          >
                            {({ remainingTime }) => {
                              return remainingTime
                            }}
                          </CountdownCircleTimer>
                        </Col>
                      </Row>
                      <Row className="w-100 ml-0 mr-0 justify-content-center align-items-center text-center">
                        <Col md={{ span: 3 }} className="text-center p-0"> <Timer.Hours /></Col>
                        <Col md={{ span: 3 }} className="text-center p-0" style={{ borderLeft: "1px solid grey", borderRight: "1px solid grey" }}> <Timer.Minutes /></Col>
                        <Col md={{ span: 4 }} className="text-center p-0"> <Timer.Seconds /></Col>
                      </Row>
                    </Col>
                  </Row>
                </>
              )}
            </Card>
          )}
        </Timer>
*/}


      </Col>
    </Row>
  )
}