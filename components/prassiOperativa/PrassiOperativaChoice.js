import { Row, Col } from "react-bootstrap";
import { PrassiOperativaChoiceBtn } from "./PrassiOperativaChoiceBtn";

export const PrassiOperativaChoice = function (props) {
  return (
    <Row className="m-0 p-0">
      <Col md={{ span: 8, offset: 2 }} className="p-0">
        <Row>
          {props.prassiOperative.map((prass, i) => (
            <Col key={prass.id} md={{ span: 6, offset: i === props.prassiOperative.length - 1 && props.prassiOperative.length % 2 !== 0 ? 3 : 0 }} className="mb-4 pr-0 pl-0 p-1">
              <PrassiOperativaChoiceBtn prassiOperativa={prass} setPrassiOperativa={props.setPrassiOperativa} currentLang={props.currentLang} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
