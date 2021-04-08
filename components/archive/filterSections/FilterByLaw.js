import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { Select } from '../ui/Select'
import { DateInput } from '../ui/DateInput'
import { NumberInput } from '../ui/NumberInput'
import { MultiSelect } from '../ui/MultiSelect'


export const FilterByLaw = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Legge:</h5>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={6} className="pl-0 pr-2">
              <Select
                validationFunc={() => true}
                label={"Legge"}
                onChange={() => { }}
                isDisabled={false}
                selectableOptions={["1", "2", "3", "4", "5"]}
                //placeholder={"placeholder"}
                //getOptionValue={col => col}
                defaultValue={""}
              />
            </Col>
            <Col md={3} className="pl-2 pr-2">
              <DateInput
                formGroupClass={""}
                formLabelClass={""}
                label={"Data"}
                placeholderText={""}
                value={new Date()}
                onChange={() => { }}
                validationFunc={el => el}
                isDisabled={false}
                calendarClassName={""}
                datepickerClassName={""}
                dateFormat='dd/MM/yyyy'
                excludeDates={[]}
                filterDate={() => true}
                locale={"it"}
              //maxDate={new Date}
              //minDate={new Date}
              />
            </Col>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={4} className="pl-0 pr-2">
              <NumberInput
                formGroupClass={""}
                formLabelClass={""}
                colSpan={8}
                label={"Art."}
                //placeholderText={""}
                value={444}
                onChange={() => { }}
                validationFunc={() => true}
                isDisabled={false}
              />
            </Col>
            <Col md={8} className="pl-2 pr-2">
              <MultiSelect
                validationFunc={() => true}
                label={"Sottonumero"}
                onChange={() => { }}
                onRemove={() => { }}
                isDisabled={false}
                selectableOptions={["1", "2", "3", "4", "5"]}
                placeholder={"-"}
                //getOptionValue={col => col}
                //getOptionStyle={col => ({ color: `${col} !important` })}
                selectedItems={["1", "2", "3", "4", "5"]}
                firstColSpan={4}
                secondColSpan={8}
              //onRemoveAll ={()=>{}}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card >
  )
}