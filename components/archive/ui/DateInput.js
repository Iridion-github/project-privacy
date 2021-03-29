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

export const DateInput = function (props) {

  console.log("DateInput props:", props)

  const {
    formGroupClass = "",
    formLabelClass = "",
    calendarClassName = "",
    datepickerClassName = "",
    colSpan = 12,
    validationFunc = () => true,
    label = "",
    textmuted = null,
    value = new Date,
    onChange = val => val,
    isDisabled = false,
    withTime = false,
    dateFormat = 'dd/MM/yyyy',
    excludeDates = [],
    filterDate = () => true,
    locale = "it",
    maxDate = null,
    minDate = null,
    readOnly = false,
    required = true,
  } = props

  const handleChange = (val) => {
    if (validationFunc(val)) {
      onChange(val)
      return
    }
  }

  return (
    <Form.Group className={formGroupClass + " w-25"}>
      <Form.Label className={formLabelClass}>{label}</Form.Label>
      <Row className="w-100">
        <Col md={colSpan}>
          <DatePicker
            selected={value}
            className={datepickerClassName + " datepicker-input"} //input-class
            calendarClassName={calendarClassName}
            onChange={date => handleChange(date)}
            showTimeInput={withTime}
            dateFormat={dateFormat}
            disabled={isDisabled}
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