import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const Answers = function (props) {

  const selectAnswer = (answerIndex) => {
    const resultingAnswer = props.selectedAnswersList.map((elem, i) => i === answerIndex ? ({ selected: true }) : ({ selected: false }))
    //console.log(resultingAnswer)
    const resultingAllAnswers = props.allUserAnswers.map((elem, i) => i === props.questionIndex ? ({ list: resultingAnswer }) : elem)
    //console.log(resultingAllAnswers)
    props.setSelectedAnswersList(resultingAllAnswers)
  }

  const printAnswer = (answerNumber, text) => {
    const selected = props.selectedAnswersList[answerNumber - 1].selected
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return (< Button
      key={answerNumber}
      type="radio"
      size="lg"
      variant={selected ? "secondary" : "outline-secondary"}
      block
      onClick={() => selectAnswer(answerNumber - 1)}
    >
      { letters[answerNumber - 1] + ") "
      }{text}
    </Button >
    )
  }

  return (
    <Row className="mb-4">
      <Col>
        {props.answers.map((elem, i) => printAnswer(i + 1, elem.text))}
      </Col>
    </Row>
  )
}