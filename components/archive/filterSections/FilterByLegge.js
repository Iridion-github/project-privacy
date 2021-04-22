import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { Select } from '../ui/Select'
import { DateInputNoCalendar } from '../ui/DateInputNoCalendar'
import { NumberInput } from '../ui/NumberInput'
import { MultiSelect } from '../ui/MultiSelect'


export const FilterByLegge = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Legge:</h5>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={5} className="pl-0 pr-2">
              <Select
                validationFunc={props.handleChangeLegge}
                label={"Legge"}
                onChange={props.handleChangeLegge}
                isDisabled={false}
                selectableOptions={props.arrLegge}
                //placeholder={"placeholder"}
                //getOptionValue={col => col}
                defaultValue={props.selectedLegge}
              />
            </Col>
            <Col md={5} className="pl-2 pr-2">
              <DateInputNoCalendar
                formGroupClass={""}
                formLabelClass={""}
                label={"Data"}
                placeholderText={""}
                selectedDay={props.dataFiltroLegge.day}
                selectedMonth={props.dataFiltroLegge.month}
                selectedYear={props.dataFiltroLegge.year}
                onChange={props.handleChangeDataFiltroLegge}
                isDisabled={false}
                calendarClassName={""}
                datepickerClassName={""}
                dateFormat='dd/MM/yyyy'
                excludeDates={[]}
                filterDate={() => true}
                locale={"it"}
              />
            </Col>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={3} className="pl-0 pr-2">
              <NumberInput
                formGroupClass={""}
                formLabelClass={""}
                colSpan={8}
                label={"Articolo"}
                //placeholderText={""}
                value={props.artLegge}
                onChange={props.handleChangeArtLegge}
                validationFunc={num => num >= 0 && num <= 9999}
                isDisabled={false}
              />
            </Col>
            <Col md={3} className="pl-2 pr-0">
              <NumberInput
                formGroupClass={""}
                formLabelClass={""}
                colSpan={8}
                label={"Numero"}
                //placeholderText={""}
                value={props.numLegge}
                onChange={props.handleChangeNumLegge}
                validationFunc={num => num >= 0 && num <= 9999}
                isDisabled={false}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card >
  )
}