import { Row, Col } from "react-bootstrap";
import { ContactsBtn } from "../buttons/ContactsBtn";

export const MappaConcettualeCard = function (props) {
  return (
    <>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="">
          WORK IN PROGRESS - QUI CI ANDRÀ LA LETTURA DEL PDF SELEZIONATO
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <ContactsBtn currentLang={props.currentLang} />
      </Row>
    </>
  );
};
