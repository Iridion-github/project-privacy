import { Row, Col, Button } from "react-bootstrap";

export const NormativaChoiceBtn = function (props) {
  const longTitle = props.normativa.title.length;
  return (
    <Button className="consultation-choice-btn" block variant="info" onClick={() => props.setNormativa(props.normativa)}>
      <Row>
        <Col className="text-center px-2">
          <h3>{props.normativa.title}</h3>
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
