import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale, setDefaultLocale } from "react-datepicker"
import it from 'date-fns/locale/it'
registerLocale('it', it)
setDefaultLocale('it');
import {
  Form,
  Row,
  Col
} from 'react-bootstrap'
import { DateInput } from './DateInput'

export const DateIntervalInput = function ({
  //container
  formLabelClass = "",
  label = "",
  textmuted = "",
  colSpan_1 = 6,
  colSpan_2 = 6,
  dateFormat = 'dd/MM/yyyy',
  //start
  value_1 = new Date,
  datepickerClassName_1 = "",
  calendarClassName_1 = "",
  onChange_1 = val => val,
  withTime_1 = false,
  isDisabled_1 = false,
  filterDate_1 = () => true,
  locale_1 = "it",
  maxDate_1 = value_2,
  minDate_1 = null,
  readOnly_1 = false,
  required_1 = false,
  excludeDates_1 = [],
  //end
  value_2 = new Date,
  datepickerClassName_2 = "",
  calendarClassName_2 = "",
  onChange_2 = val => val,
  withTime_2 = false,
  dateFormat_2 = 'dd/MM/yyyy',
  isDisabled_2 = false,
  filterDate_2 = () => true,
  locale_2 = "it",
  maxDate_2 = null,
  minDate_2 = value_1,
  readOnly_2 = false,
  required_2 = false,
  excludeDates_2 = [],
}) {

  return (
    <>
      <Row className="w-100 ml-0 mr-0">
        <h5 className={formLabelClass + " w-100 text-center"}>{label}</h5>
      </Row>
      <Row className="w-100 justify-content-center ml-0 mr-0">
        <Col md={colSpan_1} className="pl-1 pr-1">
          <DateInput
            value={value_1}
            datepickerClassName={datepickerClassName_1}
            calendarClassName={calendarClassName_1}
            onChange={onChange_1}
            withTime={withTime_1}
            dateFormat={dateFormat}
            isDisabled={isDisabled_1}
            excludeDates={excludeDates_1}
            filterDate={filterDate_1}
            locale={locale_1}
            maxDate={maxDate_1}
            minDate={minDate_1}
            readOnly={readOnly_1}
            required={required_1}
          />
        </Col>
        <Col md={colSpan_2} className="pl-1 pr-1">
          <DateInput
            value={value_2}
            datepickerClassName={datepickerClassName_2}
            calendarClassName={calendarClassName_2}
            onChange={onChange_2}
            withTime={withTime_2}
            dateFormat={dateFormat}
            isDisabled={isDisabled_2}
            excludeDates={excludeDates_2}
            filterDate={filterDate_2}
            locale={locale_2}
            maxDate={maxDate_2}
            minDate={minDate_2}
            readOnly={readOnly_2}
            required={required_2}
          />
        </Col>
      </Row>
      {
        textmuted && <Row className="small-text text-muted w-100 justify-content-center ml-0 mr-0">
          {textmuted}
        </Row>
      }
    </>
  )
}

/*
------------------------------[RETURN]------------------------------
<DateIntervalInput
        //container
        formLabelClass=""
        label="prova interval"
        textmuted="prova textmuted interval"
        colSpan_1={3}
        colSpan_2={3}
        //dateFormat={} //Mai passarlo come null o "", causa bugs di Datepicker.js
        //start
        value_1={startEs}
        //datepickerClassName_1={null}
        //calendarClassName_1={null}
        onChange_1={setStartEs}
        withTime_1={false}
        //isDisabled_1={false}
        filterDate_1={() => true}
        //locale_1={null}
        maxDate_1={endEs} //maxDate_1 e value_2 devono sempre essere bindati alla stessa variabile di stato!
        //minDate_1={new Date}
        readOnly_1={false}
        required_1={false}
        //excludeDates_1={null}
        //end
        value_2={endEs} //
        datepickerClassName_2={null}
        calendarClassName_2={null}
        onChange_2={setEndEs}
        withTime_2={false}
        isDisabled_2={false}
        filterDate_2={() => true}
        locale_2={null}
        //maxDate_2={new Date}
        //minDate_2={new Date}
        readOnly_2={false}
        required_2={false}
        excludeDates_2={null}
      />

*/