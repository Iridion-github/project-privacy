import {
  Form,
  Row,
  Col
} from 'react-bootstrap'
import { YearSelect } from './YearSelect'

//[CHECKPOINT] DEBUGGARE TUTTO

export const YearInterval = function (props) {
  const {
    formGroupClass = "",
    formLabelClass = "",
    label = "",
    textmuted = false,
    setYear_1 = val => val,
    formGroupClass_1 = "",
    formLabelClass_1 = "",
    validationFunc_1 = "",
    label_1 = "",
    isDisabled_1 = false,
    minYear_2 = undefined,
    minYear_1 = undefined,
    setYear_2 = val => val,
    formGroupClass_2 = "",
    formLabelClass_2 = "",
    validationFunc_2 = "",
    label_2 = "",
    isDisabled_2 = false,
    maxYear_2 = undefined,
    maxYear_1 = undefined
  } = props

  console.log("YearInterval - props:", props)

  return (
    <Form.Group className={formGroupClass}>
      <Form.Label className={formLabelClass}>{label}</Form.Label>
      <Row className="w-100 ml-0 mr-0">
        <Col md={6} className="pl-1 pr-1">
          <YearSelect
            onChange={setYear_1}
            formGroupClass={formGroupClass_1}
            formLabelClass={formLabelClass_1}
            validationFunc={validationFunc_1}
            label={label_1}
            isDisabled={isDisabled_1}
            maxDate={minYear_1}
            minDate={minYear_2}
          />
        </Col>
        <Col md={6} className="pl-1 pr-1">
          <YearSelect
            onChange={setYear_2}
            formGroupClass={formGroupClass_2}
            formLabelClass={formLabelClass_2}
            validationFunc={validationFunc_2}
            label={label_2}
            isDisabled={isDisabled_2}
            maxDate={maxYear_1}
            minDate={maxYear_2}
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

<YearSelect
          onChange={setRandomDate}
          formGroupClass={"mt-5"}
          formLabelClass={"mt-5"}
          validationFunc={() => true}
          label={"prova label"}
          textmuted={"prova text muted"}
          isDisabled={false}
          maxDate={1990}
          minDate={1945}
        />

*/