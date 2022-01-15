import { useEffect, useState } from "react";
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { ResultRow } from "./ResultRow";
import { ContactsBtn } from "../buttons/ContactsBtn";

export const Results = function (props) {
  //memo: Unanswered questions count as wrong too
  const initAnsweredQuestions = () => {
    const answered = { wrong: [], correct: [] };
    for (let x = 0; x < props.dataBeforeCorrection.length; x++) {
      let target = { ...props.dataBeforeCorrection[x] };
      let foundCorrect = false;
      for (let y = 0; y < target.answers.length; y++) {
        if (!foundCorrect) {
          let subTarget = { ...target.answers[y] };
          if (subTarget.selected === true && subTarget.value === true) {
            foundCorrect = true;
            answered.correct.push(target);
          } else if (y === target.answers.length - 1 && !foundCorrect) {
            answered.wrong.push(target);
          }
        }
      }
    }
    return answered;
  };

  const initUnansweredQuestions = () => {
    const unanswered = [];
    for (let x = 0; x < props.dataBeforeCorrection.length; x++) {
      let target = { ...props.dataBeforeCorrection[x] };
      const selectedArr = target.answers.map(el => el.selected);
      if (!selectedArr.includes(true)) {
        unanswered.push(target);
      }
    }
    return unanswered;
  };

  const [correctAnswers, setCorrectAnswers] = useState(initAnsweredQuestions().correct);
  const [unansweredQuestions, setUnansweredQuestions] = useState(initUnansweredQuestions());
  const [wrongAnswers, setWrongAnswers] = useState(initAnsweredQuestions().wrong);
  const [correctnessPercentage, setCorrectnessPercentage] = useState(Number(Number((100 * correctAnswers.length) / props.dataBeforeCorrection.length).toFixed(1)));

  const getUserAnswerText = answers => {
    const userAnswer = answers.find(ans => ans.selected === true) ? answers.find(ans => ans.selected === true).text : " - ";
    return userAnswer;
  };

  const getCorrectAnswer = answers => {
    const rightAnswers = [];
    answers.forEach(elem => {
      if (elem.value === true) rightAnswers.push(elem);
    });
    return rightAnswers;
  };

  const getUserCorrectAnswer = answers => {
    const rightSelectedAnswers = [];
    answers.forEach(elem => {
      if (elem.value === true && elem.selected === true) rightSelectedAnswers.push(elem);
    });
    return rightSelectedAnswers;
  };

  const getPoints = answers => {
    let points = 0;
    answers.forEach(elem => {
      if (elem.value === true && elem.selected === true) points += elem.points;
    });
    return points;
  };

  useEffect(() => {
    props.setTimesUp(false);
  }, [props.timesUp]);

  return (
    <Row className="w-100 text-center align-items-center justify-content-center m-auto">
      <Row className="w-100 mb-3">
        <Col md={{ span: 1 }} className=""></Col>
        <Col md={{ span: 2 }} className="d-flex align-items-center">
          <Button block variant="info" onClick={() => props.getQuizChoiceView()}>
            <i className="fas fa-long-arrow-alt-left mr-2"></i>I Quiz
          </Button>
        </Col>
        <Col md={6}>
          <div style={{ fontSize: "1.5rem", fontWeight: "600", minWidth: "285px !important" }}>Argomento: {props.selectedQuiz.title}</div>
        </Col>
      </Row>

      <Row className="w-100">
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="w-100 p-2 grey-border justify-content-center">
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="text-center">
                Risposte corrette: {correctAnswers.length} su {props.dataBeforeCorrection.length} ({correctnessPercentage}%){" "}
              </Card.Title>
              <Row className="mb-4">
                <Col>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th scope="col" key="1">
                          Domanda
                        </th>
                        <th scope="col" key="2">
                          Tua Risposta
                        </th>
                        <th scope="col" key="3">
                          Risposta Corretta
                        </th>
                        {props.selectedQuiz.pointsSystem && (
                          <th scope="col" key="4">
                            Punti
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {/* 
                    [PROMEMORIA]
                    L'elem di props.result.map() è un oggetto che contiene text (testo della domanda) ed answers: un array che contiene oggetti con le props[text, selected, value].
                  */}
                      {props.dataBeforeCorrection.map((elem, index) => (
                        <ResultRow
                          key={index}
                          questionNumber={index + 1}
                          questionText={elem.text}
                          correctAnswer={getCorrectAnswer(elem.answers)}
                          userAnswer={getUserAnswerText(elem.answers)}
                          color={getUserCorrectAnswer(elem.answers).length > 0 ? "green" : "red"}
                          points={props.selectedQuiz.pointsSystem ? getPoints(elem.answers) : null}
                        />
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <ContactsBtn />
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Row>
  );
};
