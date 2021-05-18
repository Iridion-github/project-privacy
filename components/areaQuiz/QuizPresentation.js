import { useState } from 'react'
import {
  Row,
  Col,
  Button,
  Card,
  Table
} from 'react-bootstrap'


export const QuizPresentation = function (props) {

  console.log("props.quizOnShow:", props.quizOnShow)

  return (
    <Row className="w-100 ml-0 mr-0">
      <Row className="w-100 mb-3 ml-0 mr-0 quiz-header">
        <Row className="w-100 ml-0 mr-0">
          <Col md={{ span: 4 }} className="">
          </Col>
          <Col md={{ span: 1 }} className="d-flex align-items-center">
            <Button
              block
              variant="info"
              onClick={() => props.getQuizChoiceView()}
            >
              <i className="fas fa-long-arrow-alt-left mr-2"></i>
            I Quiz
          </Button>
          </Col>
          <Col md={4} className="text-left">
            <div style={{ fontSize: "1.5rem", fontWeight: "600", minWidth: "285px !important" }}>{props.quizOnShow.title}</div>
          </Col>
        </Row>
      </Row>

      <Row className="w-100 text-center align-items-center justify-content-center m-auto">
        <Row className="w-100 ml-0 mr-0 mb-3 quiz-body ">
          <Row className="w-100 ml-0 mr-0 mb-3">
            <Col md={{ span: 4, offset: 4 }} className="">
              <Card className="w-100">
                <Row className="w-100 ml-0 mr-0">
                  <Col md={{ span: 12 }} className="p-3 text-left">
                    <Table className="w-100" striped bordered responsive>
                      <tbody>
                        <tr>
                          <th scope="col" >Titolo:</th>
                          <td scope="col" >{props.quizOnShow.title}</td>
                        </tr>

                        <tr>
                          <th scope="col" ><b>Sottotitolo:</b></th>
                          <td scope="col" >{props.quizOnShow.subtitle}</td>
                        </tr>

                        <tr>
                          <th scope="col" ><b>A risposta Multipla:</b></th>
                          <td scope="col" >{props.quizOnShow.multipleAnswer ? "Si" : "No"}</td>
                        </tr>

                        <tr>
                          <th scope="col" ><b>A punteggio:</b></th>
                          <td scope="col" >{props.quizOnShow.pointsSystem ? "Si" : "No"}</td>
                        </tr>

                        <tr>
                          <th scope="col" ><b>Istruzioni:</b></th>
                          <td scope="col" >{props.quizOnShow.instructions}</td>
                        </tr>

                        <tr>
                          <th scope="col" ><b>Tempo limite:</b></th>
                          <td scope="col" >{Number(props.quizOnShow.timeLimit / 1000 / 60)} minuti</td>
                        </tr>

                        <tr>
                          <th scope="col" ><b>Numero domande:</b></th>
                          <td scope="col" >{props.quizOnShow.questions.length}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row className="w-100 ml-0 mr-0">
                  <Col md={{ span: 12 }} className="p-3 text-left">
                    <Button
                      block
                      variant="success"
                      onClick={() => props.handleChangeSelectedQuiz(props.quizOnShow)}
                    >
                      Inizia il Quiz
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Row>
      </Row>
    </Row>
  )
}