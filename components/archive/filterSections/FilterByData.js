import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap';
import { DateIntervalInput } from '../ui/DateIntervalInput';


export const FilterByData = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 justify-content-center ml-0 mr-0 mb-4">
        <Card.Header>
          <h5>Filtra per Data</h5>
        </Card.Header>
      </Row>
      <Row className="w-100 justify-content-center ml-0 mr-0">
        <DateIntervalInput
          //container
          formLabelClass=""
          label=""
          textmuted=""
          colSpan_1={6}
          colSpan_2={6}
          //dateFormat={} //Mai passarlo come null o "", causa bugs di Datepicker.js
          //start
          label1={"Da:"}
          value_1={props.startDate}
          datepickerClassName_1={"text-center"}
          //calendarClassName_1={null}
          onChange_1={props.handleChangeStartDate}
          withTime_1={false}
          //isDisabled_1={false}
          filterDate_1={() => true}
          //locale_1={null}
          maxDate_1={props.endDate} //maxDate_1 e value_2 devono sempre essere bindati alla stessa variabile di stato!
          //minDate_1={new Date}
          readOnly_1={false}
          required_1={false}
          //excludeDates_1={null}
          removeStartDate={props.removeStartDate}
          //end
          label2={"A:"}
          value_2={props.endDate} //
          datepickerClassName_2={"text-center"}
          calendarClassName_2={null}
          onChange_2={props.handleChangeEndDate}
          withTime_2={false}
          isDisabled_2={false}
          filterDate_2={() => true}
          locale_2={null}
          //maxDate_2={new Date}
          //minDate_2={new Date}
          readOnly_2={false}
          required_2={false}
          excludeDates_2={null}
          removeEndDate={props.removeEndDate}
        />
      </Row>
    </Card>
  );
};