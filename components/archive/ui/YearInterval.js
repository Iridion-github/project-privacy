import {
  Form,
  Row,
  Col
} from 'react-bootstrap'
import { YearSelect } from './YearSelect'


export const YearInterval = function (props) {
  const {
    //shared
    formGroupClass = "",
    formLabelClass = "",
    label = "",
    textmuted = false,
    //1
    setYear_1 = val => val,
    formGroupClass_1 = "",
    formLabelClass_1 = "",
    validationFunc_1 = () => true,
    label_1 = "",
    isDisabled_1 = false,
    minYear_1 = undefined,
    maxYear_1 = undefined,
    //2
    setYear_2 = val => val,
    formGroupClass_2 = "",
    formLabelClass_2 = "",
    validationFunc_2 = () => true,
    label_2 = "",
    isDisabled_2 = false,
    minYear_2 = undefined,
    maxYear_2 = undefined,
  } = props

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
            minDate={minYear_1}
            maxDate={maxYear_1}
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
            minDate={minYear_2}
            maxDate={maxYear_2}
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

State:
const [Y_1, setY_1] = useState("")
const [Y_2, setY_2] = useState("")
const [minYear_1, setMinYear_1] = useState(1800)
const [maxYear_1, setMaxYear_1] = useState(2021)
const [minYear_2, setMinYear_2] = useState(1800)
const [maxYear_2, setMaxYear_2] = useState(2021)


Return:
<YearInterval
  formGroupClass={"mt-5"}
  formLabelClass={"mt-5"}
  label={"label"}
  textmuted={"textmuted"}
  setYear_1={handleChangeY_1}
  formGroupClass_1={"mt-5"}
  formLabelClass_1={"mt-5"}
  //validationFunc_1={()=> true}
  label_1={"label_1"}
  isDisabled_1={false}
  minYear_1={minYear_1}
  maxYear_1={maxYear_1}
  setYear_2={handleChangeY_2}
  formGroupClass_2={"mt-5"}
  formLabelClass_2={"mt-5"}
  //validationFunc_2={()=> true}
  label_2={"label_2"}
  isDisabled_2={false}
  minYear_2={minYear_2}
  maxYear_2={maxYear_2}
/>

*/