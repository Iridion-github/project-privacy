import { Row, Col, Button } from "react-bootstrap";

export const ConsultationChoiceBtn = function (props) {
  const longTitle = props.consultation[props.currentLang].title.length;
  return (
    <Button className="consultation-choice-btn" block variant="info" onClick={() => props.setConsultation(props.consultation)}>
      <Row>
        <Col className="text-center px-2">
          <h3>{props.consultation[props.currentLang].title}</h3>
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
