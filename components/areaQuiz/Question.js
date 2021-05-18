import {
  Card
} from 'react-bootstrap'
import { Answers } from './Answers'

export const Question = function (props) {
  return (
    <Card className="grey-border">
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