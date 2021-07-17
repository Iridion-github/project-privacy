import {
  Row,
  Col,
  Card
} from 'react-bootstrap';
import { TextInput } from '../ui/TextInput';

export const FilterByAutore = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0 mb-4">
            <Card.Header>
              <h5>Filtra per Autore</h5>
            </Card.Header>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={{ span: 6, offset: 3 }} className="pl-0 pr-0">
              <TextInput
                label={"Autore"}
                formGroupClass="text-center"
                placeholderText={"Nome e Cognome"}
                value={props.autoreNoteDottr}
                onChange={props.handleChangeAutoreNoteDottr}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};