import {
    Form,
    Row,
    Col,
} from 'react-bootstrap'
import { NumberInput } from './NumberInput'


export const DateInputNoCalendar = function ({
    formGroupClass = "",
    formLabelClass = "",
    calendarClassName = "",
    datepickerClassName = "",
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

    const currentDate = new Date
    const currentYear = (Number(currentDate.getYear()) + 1900)

    return (
        <Form.Group className={formGroupClass}>
            <Form.Label className={formLabelClass}>{label}</Form.Label>
            <Row className="w-100 ml-0 mr-0">
                <Col md={4} className="pl-0 pr-1 PROVA">
                    <NumberInput
                        formGroupClass="w-100"
                        colSpan={12}
                        placeholderText={"GG"}
                        textmuted={""}
                        value={""}
                        onChange={() => { }}
                        validationFunc={() => num >= 1 && num <= 31}
                    />
                </Col>
                <Col md={4} className="pl-1 pr-1">
                    <NumberInput
                        colSpan={12}
                        formGroupClass="w-100"
                        placeholderText={"MM"}
                        textmuted={""}
                        value={""}
                        onChange={() => { }}
                        validationFunc={() => num >= 1 && num <= 12}
                    />
                </Col>
                <Col md={4} className="pl-1 pr-0">
                    <NumberInput
                        colSpan={12}
                        formGroupClass="w-100"
                        placeholderText={"AAAA"}
                        textmuted={""}
                        value={""}
                        onChange={() => { }}
                        validationFunc={() => num >= 1800 && num <= currentYear}
                    />
                </Col>
            </Row>
            {textmuted && <Form.Text className="text-muted">
                {textmuted}
            </Form.Text>}
        </Form.Group>
    )
}