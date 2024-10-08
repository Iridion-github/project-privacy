import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap';
import { DateInputNoCalendar } from '../ui/DateInputNoCalendar';
import { NumberInput } from '../ui/NumberInput';

export const FilterByGazzettaUfficiale = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0 mb-4">
            <Card.Header>
              <h5>Filtra per Gazzetta Ufficiale</h5>
            </Card.Header>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={5} className="pl-0 pr-2">
              <DateInputNoCalendar
                formGroupClass={""}
                formLabelClass={""}
                label={"Data"}
                placeholderText={""}
                selectedDay={props.dataFiltroGazz.day}
                selectedMonth={props.dataFiltroGazz.month}
                selectedYear={props.dataFiltroGazz.year}
                onChange={props.handleChangeDataFiltroGazz}
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
                formGroupClass={""}
                formLabelClass={""}
                colSpan={8}
                label={"Numero"}
                //placeholderText={""}
                value={props.numGazz}
                onChange={props.handleChangeNumGazz}
                validationFunc={num => num >= 0 && num <= 9999}
                isDisabled={false}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};