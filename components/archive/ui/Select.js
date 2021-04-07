import {
  Form,
  Row,
  Col
} from 'react-bootstrap'


export const Select = function (props) {

  const {
    formGroupClass = "",
    formLabelClass = "",
    validationFunc = () => true,
    label = "",
    textmuted = false,
    onChange = val => val,
    isDisabled = false,
    selectableOptions = [],
    defaultValue = "",
    placeholder,
    getOptionValue = el => (el && el !== "") ? el : null,
    getOptionStyle = () => ({}),
  } = props

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
        <Col md={12} className="pl-1 pr-1">
          <Form.Control
            as="select"
            placeholder={placeholder}
            onChange={(event) => handleChange(event.target.value)}
            disabled={isDisabled}
            value={defaultValue}
            custom>
            {selectableOptions.map(el => <option
              style={getOptionStyle(el)}
              key={el}
              value={getOptionValue(el)}
            >
              {el}
            </option>
            )}
          </Form.Control>
        </Col>
      </Row>
      {textmuted && <Form.Text className="text-muted">
        {textmuted}
      </Form.Text>}
    </Form.Group>
  )
}

/*
------------------------------[STATE]------------------------------
const [selectVal, setSelectVal] = useState("")

const [optionsList, setOptionsList] = useState([
  "blue", "red", "green", "cyan"
])

const handleChangeSelectVal = (val) => {
  setSelectVal(val)
}


------------------------------[RETURN]------------------------------
<Select
  //formGroupClass={"mt-5"}
  //formLabelClass={"mt-5"}
  validationFunc={() => true}
  label={"label"}
  textmuted={"text muted"}
  onChange={handleChangeSelectVal}
  isDisabled={false}
  selectableOptions={optionsList}
  //laceholder={"placeholder"}
  //getOptionValue={col => col}
  //getOptionStyle={col => ({ color: `${col} !important` })}
  defaultValue={selectVal}
/>
*/