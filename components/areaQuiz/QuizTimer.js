import { useState, useEffect } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const QuizTimer = function (props) {

  useEffect(() => {
    if (props.timesUp) {
      setTimeout(() => props.handleShowResults(), 3000)
    }
  }, [props.timesUp])

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
                    let result
                    if (remainingTime > 0) {
                      const hours = Math.floor(remainingTime / 3600)
                      const minutes = Math.floor((remainingTime % 3600) / 60)
                      const seconds = remainingTime % 60
                      result = `${hours}:${minutes}:${seconds}`
                    } else {
                      result = <div className="red-alert-text">Tempo Scaduto</div>
                      props.setTimesUp(true)
                    }
                    return result
                  }}
                </CountdownCircleTimer>

              </Row>
            </Col>
          </Row>
        </>
      </Col>
    </Row>
  )
}