import { Row, Col } from "react-bootstrap";

import stringToHTML from "html-react-parser";
import { ContactsBtn } from "../buttons/ContactsBtn";

export const ConsultationCard = function (props) {
  return (
    <>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="">
          {stringToHTML(props.consultation[props.currentLang].content)}
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <ContactsBtn currentLang={props.currentLang} />
      </Row>
    </>
  );
};
