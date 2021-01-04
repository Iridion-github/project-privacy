import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Answers } from './Answers'

export const Question = function (props) {
  return (
    <Card className="p-2" border="secondary">
      <Card.Img variant="top" src="" />
      <Card.Body className="">
        <Card.Title className="text-center">{props.questionNumber + ") "} {props.question}</Card.Title>
        <Answers
          questionIndex={props.questionNumber - 1}
          answers={props.answers}
          allUserAnswers={props.allUserAnswers}
          selectedAnswersList={props.allUserAnswers[props.questionNumber - 1].answers}
          setSelectedAnswersList={props.setAllUserAnswers}
        />
      </Card.Body>
    </Card >
  )
}