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
    selectedDay = "",
    selectedMonth = "",
    selectedYear = "",
    onChange = null,
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
        selectedDay,
        selectedMonth,
        selectedYear,
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

    const currentDate = new Date
    const currentYear = (Number(currentDate.getYear()) + 1900)

    const validateDay = (num) => {
        return num >= 0 && num <= 31
    }

    const validateMonth = (num) => {
        return num >= 0 && num <= 12
    }

    const validateYear = (num) => {
        if (num.length < 4) {
            return num >= 0 && num <= currentYear
        } else {
            return num >= 1800
        }
    }

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
                        value={props.selectedDay}
                        onChange={num => props.onChange("day", num)}
                        validationFunc={validateDay}
                    />
                </Col>
                <Col md={4} className="pl-1 pr-1">
                    <NumberInput
                        colSpan={12}
                        formGroupClass="w-100"
                        placeholderText={"MM"}
                        textmuted={""}
                        value={props.selectedMonth}
                        onChange={num => props.onChange("month", num)}
                        validationFunc={validateMonth}
                    />
                </Col>
                <Col md={4} className="pl-1 pr-0">
                    <NumberInput
                        colSpan={12}
                        formGroupClass="w-100"
                        placeholderText={"AAAA"}
                        textmuted={""}
                        value={props.selectedYear}
                        onChange={num => props.onChange("year", num)}
                        validationFunc={validateYear}
                    />
                </Col>
            </Row>
            {textmuted && <Form.Text className="text-muted">
                {textmuted}
            </Form.Text>}
        </Form.Group>
    )
}