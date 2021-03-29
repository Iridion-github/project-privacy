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
  formGroupClass = "",
  formLabelClass = "",
  label = "",
  textmuted = "",
  colSpan_1 = 6,
  colSpan_2 = 6,
  //start
  value_1 = new Date,
  datepickerClassName_1 = "",
  calendarClassName_1 = "",
  onChange_1 = val => val,
  withTime_1 = false,
  dateFormat_1 = 'dd/MM/yyyy',
  isDisabled_1 = false,
  filterDate_1 = () => true,
  locale_1 = "it",
  maxDate_1 = value_2,
  minDate_1 = new Date,
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
  maxDate_2 = new Date,
  minDate_2 = value_1,
  readOnly_2 = false,
  required_2 = false,
  excludeDates_2 = [],
}) {
  return (
    <Form.Group className={formGroupClass + " w-25"}>
      <Form.Label className={formLabelClass}>{label}</Form.Label>
      <Row className="w-100">
        <Col md={colSpan_1}>
          <DateInput
            value={value_1}
            datepickerClassName={datepickerClassName_1}
            calendarClassName={calendarClassName_1}
            onChange={onChange_1}
            withTime={withTime_1}
            dateFormat={dateFormat_1}
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
        <Col md={colSpan_2}>
          <DateInput
            value={value_2}
            datepickerClassName={datepickerClassName_2}
            calendarClassName={calendarClassName_2}
            onChange={onChange_2}
            withTime={withTime_2}
            dateFormat={dateFormat_2}
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
      {textmuted && <Form.Text className="text-muted">
        {textmuted}
      </Form.Text>}
    </Form.Group>
  )
}

/*
[USAGE]

<DateInput
        formGroupClass={""}
        formLabelClass={""}
        //colSpan={8}
        label={"prova label"}
        placeholderText={""}
        textmuted={"prova textmuted"}
        value={dataEsempio}
        onChange={setDataEsempio}
        //validationFunc={() => { }}
        isDisabled={false}
      //calendarClassName="pt-5"
      //datepickerClassName="pt-5"
      //withTime={true}
      //dateFormat='MM/dd/yyyy'
      //excludeDates={[]}
      //filterDate={()=> {}}
      //locale={"es"}
      //maxDate={new Date}
      //minDate={new Date}
      //readOnly={true}
      //required={true}
      />

*/