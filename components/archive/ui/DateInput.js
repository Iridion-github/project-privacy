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

export const DateInput = function ({
  formGroupClass = "",
  formLabelClass = "",
  calendarClassName = "",
  datepickerClassName = "",
  colSpan = 12,
  validationFunc = () => true,
  label = "",
  textmuted = false,
  value = new Date,
  onChange = val => val,
  isDisabled = false,
  withTime = false,
  dateFormat = 'dd/MM/yyyy',
  excludeDates = [],
  filterDate = () => true,
  locale = "it",
  maxDate = undefined,
  minDate = undefined,
  readOnly = false,
  required = true,
}) {

  const props = {
    formGroupClass,
    formLabelClass,
    calendarClassName,
    datepickerClassName,
    colSpan,
    validationFunc,
    label,
    textmuted,
    value,
    onChange,
    isDisabled,
    withTime,
    dateFormat,
    excludeDates,
    filterDate,
    locale,
    maxDate,
    minDate,
    readOnly,
    required,
  }

  const handleChange = (val) => {
    if (validationFunc(val)) {
      onChange(val)
      return
    }
  }

  return (
    <Form.Group className={formGroupClass}>
      <Form.Label className={formLabelClass}>{label}</Form.Label>
      <Row className="w-100 ml-0 mr-0">
        <Col md={colSpan} className="pl-1 pr-1">
          <DatePicker
            selected={value}
            className={datepickerClassName + " datepicker-input"} //input-class
            calendarClassName={calendarClassName}
            onChange={date => handleChange(date)}
            showTimeInput={withTime}
            dateFormat={"yyyy"}
            disabled={isDisabled ? true : false}
            excludeDates={excludeDates}
            filterDate={filterDate}
            locale={locale}
            maxDate={maxDate}
            minDate={minDate}
            readOnly={readOnly}
            required={required}
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
        value={startEs}
        onChange={setStartEs}
        validationFunc={el => el}
        isDisabled={false}
        calendarClassName=""
        datepickerClassName=""
        //withTime={true}
        //dateFormat='MM/dd/yyyy'
        excludeDates={[]}
        filterDate={() => true}
        locale={"es"}
        //maxDate={new Date}
        //minDate={new Date}
        //readOnly={true}
        required={true}
      />
*/