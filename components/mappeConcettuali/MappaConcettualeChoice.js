import { Row, Col } from "react-bootstrap";
import { MappaConcettualeChoiceBtn } from "./MappaConcettualeChoiceBtn";

export const MappaConcettualeChoice = function (props) {
  return (
    <Row className="m-0 p-0">
      <Col md={{ span: 8, offset: 2 }} className="p-0">
        <Row>
          {props.mappeConcettuali.map((mapp, i) => (
            <Col key={mapp.id} md={{ span: 6, offset: i === props.mappeConcettuali.length - 1 && props.mappeConcettuali.length % 2 !== 0 ? 3 : 0 }} className="mb-4 pr-0 pl-0 p-1">
              <MappaConcettualeChoiceBtn mappaConcettuale={mapp} setMappaConcettuale={props.setMappaConcettuale} currentLang={props.currentLang} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
