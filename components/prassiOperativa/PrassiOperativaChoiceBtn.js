import { Row, Col, Button } from "react-bootstrap";

export const PrassiOperativaChoiceBtn = function (props) {
  const longTitle = props.prassiOperativa.title.length;
  return (
    <Button className="consultation-choice-btn" block variant="info" onClick={() => props.setPrassiOperativa(props.prassiOperativa)}>
      <Row>
        <Col className="text-center px-2">
          <h3>{props.prassiOperativa.title}</h3>
        </Col>
      </Row>
      {/* {!!props.consultation[props.currentLang].description && (
        <Row>
          <Col className="text-center px-4">
            <p>{props.consultation[props.currentLang].description}</p>
          </Col>
        </Row>
      )} */}
    </Button>
  );
};
