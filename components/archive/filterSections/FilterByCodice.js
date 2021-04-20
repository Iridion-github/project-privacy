import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { Select } from '../ui/Select'
import { MultiSelect } from '../ui/MultiSelect'
import { NumberInput } from '../ui/NumberInput'


export const FilterByCodice = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Codice:</h5>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={6} className="pl-0 pr-2">
              <Select
                validationFunc={() => true}
                label={"Codice"}
                onChange={props.handleChangeCodice}
                isDisabled={false}
                selectableOptions={props.arrCodice}
                //getOptionValue={col => col}
                defaultValue={props.selectedCodice}
              />
            </Col>
            <Col md={3} className="pl-2 pr-2">
              <NumberInput
                formGroupClass={""}
                formLabelClass={""}
                colSpan={8}
                label={"Art."}
                //placeholderText={""}
                value={""}
                onChange={() => { }}
                validationFunc={() => true}
                isDisabled={false}
              />
            </Col>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={12} className="pl-0 pr-2">
              <MultiSelect
                validationFunc={() => true}
                label={"Sottonumero"}
                onChange={props.handleAddSottonumero}
                onRemove={props.handleRemoveSottonumero}
                isDisabled={false}
                selectableOptions={props.arrSottonumero}
                placeholder={"-"}
                //getOptionValue={col => col}
                //getOptionStyle={col => ({ color: `${col} !important` })}
                selectedItems={props.arrSottonumero.filter(el => el.selected === true)}
                firstColSpan={4}
                secondColSpan={8}
                onRemoveAll={() => props.handleRemoveSottonumero("REMOVE_ALL")}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card >
  )
}