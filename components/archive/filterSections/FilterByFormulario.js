import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { Select } from '../ui/Select'

export const FilterByFormulario = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Formulario:</h5>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={{ span: 6, offset: 3 }} className="pl-0 pr-0">
              <Select
                validationFunc={() => true}
                formGroupClass="text-center"
                label={"Lista Formulari"}
                onChange={props.handleChangeFormulario}
                isDisabled={false}
                selectableOptions={props.arrFormulario}
                //placeholder={"placeholder"}
                //getOptionValue={col => col}
                defaultValue={""}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}