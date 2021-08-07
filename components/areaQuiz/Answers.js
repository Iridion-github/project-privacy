import { useCallback } from 'react';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';

export const Answers = function (props) {

  const selectAnswer = useCallback((answerIndex) => {
    const resultingAnswer = props.selectedAnswersList.map((elem, i) => i === answerIndex ? ({ ...elem, selected: true }) : ({ ...elem, selected: false }));
    const resultingAllAnswers = props.allUserAnswers.map((elem, i) => i === props.questionIndex ? ({ ...elem, answers: resultingAnswer }) : elem);
    props.setSelectedAnswersList(resultingAllAnswers);
  }, []);

  const printAnswer = useCallback((answerNumber, text) => {
    const selected = props.selectedAnswersList[answerNumber - 1].selected;
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return (< Button
      key={answerNumber}
      type="radio"
      size="lg"
      variant={selected ? "info" : "outline-info"}
      block
      disabled={props.timesUp}
      onClick={() => selectAnswer(answerNumber - 1)}
    >
      {letters[answerNumber - 1] + ") "
      }{text}
    </Button >
    );
  }, []);

  return (
    <Row className="mb-4">
      <Col>
        {props.answers.map((elem, i) => printAnswer(i + 1, elem.text))}
      </Col>
    </Row>
  );
};