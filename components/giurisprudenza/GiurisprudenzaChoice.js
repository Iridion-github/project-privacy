import { Row, Col } from "react-bootstrap";
import { GiurisprudenzaChoiceBtn } from "./GiurisprudenzaChoiceBtn";

export const GiurisprudenzaChoice = function (props) {
  return (
    <Row className="m-0 p-0">
      <Col md={{ span: 8, offset: 2 }} className="p-0">
        <Row>
          {props.giurisprudenze.map((giuris, i) => (
            <Col key={giuris.id} md={{ span: 6, offset: i === props.giurisprudenze.length - 1 && props.giurisprudenze.length % 2 !== 0 ? 3 : 0 }} className="mb-4 pr-0 pl-0 p-1">
              <GiurisprudenzaChoiceBtn giurisprudenza={giuris} setGiurisprudenza={props.setGiurisprudenza} currentLang={props.currentLang} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
