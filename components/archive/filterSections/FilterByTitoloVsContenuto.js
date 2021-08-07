import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap';
import { Select } from '../ui/Select';


export const FilterByTitoloVsContenuto = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center">
          <Row className="w-100 justify-content-center ml-0 mr-0 mb-4">
            <Card.Header>
              <h5>Il testo dev'essere presente:</h5>
            </Card.Header>
          </Row>
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <Col md={6} className="pl-0 pr-0">
              <Select
                //validationFunc={() => true}
                label={""}
                onChange={props.handleWhereToSearch}
                isDisabled={false}
                selectableOptions={[
                  "In qualsiasi punto del documento",
                  "Solo nel titolo del documento",
                  "Solo nel contenuto del documento",
                  "Sia nel Titolo che nel Corpo del documento"
                ]}
                //placeholder={"placeholder"}
                //getOptionValue={col => col}
                defaultValue={props.whereToSearch}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};