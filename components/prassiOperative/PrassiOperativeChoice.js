import { Row, Col, Button } from "react-bootstrap";
import { PrassiOperativeChoiceBtn } from "./PrassiOperativeChoiceBtn";

export const PrassiOperativeChoice = function (props) {
  return (
    <Row className="m-0 p-0">
      {props.handleGoBackBtn && (
        <Button variant="info" onClick={() => props.handleGoBackBtn()} style={{ position: "absolute", left: "1%", zIndex: 9999 }}>
          <i className="fas fa-long-arrow-alt-left mr-2"></i>
          {props.currentLang === "ita" ? "Torna Indietro" : "Back to Selection"}
        </Button>
      )}
      <Col md={{ span: 8, offset: 2 }} className="p-0">
        <Row>
          {props.prassiOperative.map((prass, i) => (
            <Col key={prass.id} md={{ span: 6, offset: i === props.prassiOperative.length - 1 && props.prassiOperative.length % 2 !== 0 ? 3 : 0 }} className="mb-4 pr-0 pl-0 p-1">
              <PrassiOperativeChoiceBtn prassiOperativa={prass} setPrassiOperativa={props.setPrassiOperativa} currentLang={props.currentLang} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
