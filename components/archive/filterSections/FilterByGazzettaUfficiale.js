import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { DateInputNoCalendar } from '../ui/DateInputNoCalendar'
import { NumberInput } from '../ui/NumberInput'

export const FilterByGazzettaUfficiale = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Gazzetta Ufficiale:</h5>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={5} className="pl-0 pr-2">
              <DateInputNoCalendar
                formGroupClass={""}
                formLabelClass={""}
                label={"Data"}
                placeholderText={""}
                value={new Date()}
                onChange={val => val}
                validationFunc={el => el}
                isDisabled={false}
                calendarClassName={""}
                datepickerClassName={""}
                dateFormat='dd/MM/yyyy'
                excludeDates={[]}
                filterDate={() => true}
                locale={"it"}
              />
            </Col>
            <Col md={2} className="pl-2 pr-2">
              <NumberInput
                label={"Num."}
                //placeholderText={"prova placeholder"}
                value={""}
                onChange={(event) => event.target.value}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}