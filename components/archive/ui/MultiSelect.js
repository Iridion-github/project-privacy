import {
  Form,
  Row,
  Col,
  Badge,
  Button
} from 'react-bootstrap'


export const MultiSelect = function (props) {

  const {
    formGroupClass = "",
    formLabelClass = "",
    validationFunc = () => true,
    label = "",
    textmuted = false,
    onChange = val => val,
    onRemove,
    isDisabled = false,
    selectableOptions = [],
    placeholder,
    getOptionValue = el => {
      console.log("getOptionValue - el", el)
      if (el?.label && el?.value) {
        return el.value
      } else {
        return (el && el !== "") ? el : null
      }
    },
    getOptionStyle = () => ({}),
    selectedItems = [],
    onRemoveAll = null,
    firstColSpan = 6,
    secondColSpan = 6
  } = props

  const handleChange = (val) => {
    console.log("multiselect handlechange - val:", val)
    if (validationFunc(val)) {
      onChange(val)
      return
    }
  }

  return (
    <Form.Group className={formGroupClass}>
      <Form.Label className={formLabelClass}>{label}</Form.Label>
      <Row className="w-100 ml-0 mr-0">
        <Col md={firstColSpan} className="pl-1 pr-1">
          <Form.Control
            as="select"
            defaultValue=""
            onChange={(event) => handleChange(event.target.value)}
            disabled={isDisabled}
          >
            <option
              style={{ display: "none !important" }}
              key={"empty-value-key"}
              value={""}
            >
              {placeholder}
            </option>
            {selectableOptions.filter(el => !el?.selected).map(el => <option
              style={getOptionStyle(el)}
              key={el?.value ? el?.value : el}
              value={getOptionValue(el)}
            >
              {el?.label ? el?.label : el}
            </option>
            )}
          </Form.Control>
        </Col>
        <Col md={secondColSpan} className="pl-1 pr-1">
          {(selectedItems && selectedItems.length > 0) &&
            <Row className="w-100 ml-0 mr-0">
              <Col md={10} className="pl-0 pr-0">
                {selectedItems.map(opt => (
                  <Badge
                    variant="info"
                    className="mr-1"
                    key={opt.value ? opt.value : opt}
                  >
                    {opt.label ? opt.label : opt}
                    <Button
                      size="sm"
                      variant="danger"
                      className="ml-1 p-0"
                      style={{
                        lineHeight: "1",
                        height: "16px",
                        width: "16px",
                      }}
                      onClick={() => onRemove(opt?.value ? opt.value : opt)}
                    >
                      <i
                        className="fas fa-times p-0"
                      ></i>
                    </Button>
                  </Badge>
                ))}
              </Col>
              <Col md={2} className="pl-0 pr-0 text-right">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={onRemoveAll}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </Col>
            </Row>
          }
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

const [multiSelectVal, setMultiSelectVal] = useState("")
  const [optionsList, setOptionsList] = useState([
    { value: "blue", label: "Blue", selected: false },
    { value: "red", label: "Red", selected: false },
    { value: "green", label: "Green", selected: false },
    { value: "cyan", label: "Cyan", selected: false },
  ])

  const handleChangeMultiSelectVal = (val) => {
    if (multiSelectVal === "") {
      console.log("handleChangeSelectVal - empty string case - val: ", val)
      const valObject = optionsList.find(opt => opt.value === val)
      setMultiSelectVal([valObject])
    } else {
      console.log("handleChangeSelectVal - array case - val: ", val)
      const valObject = optionsList.find(opt => opt.value === val)
      setMultiSelectVal([valObject])
      setMultiSelectVal([...multiSelectVal, valObject])
    }
    //setto selected a true
    setOptionsList([...optionsList].map(opt => {
      if (opt.value === val) {
        opt.selected = !opt.selected
      }
      return opt
    }))
  }

  const handleRemoveMultiSelectVal = (val) => {
    console.log("handleRemoveMultiSelectVal - val:", val)
    const updatedMultiSelectVal = [...multiSelectVal].filter(el => el.value !== val)
    setMultiSelectVal(updatedMultiSelectVal)
    //setto selected a false
    setOptionsList([...optionsList].map(opt => {
      if (opt.value === val) {
        opt.selected = !opt.selected
      }
      return opt
    }))
  }

------------------------------[RETURN]------------------------------

 <MultiSelect
  //formGroupClass={"mt-5"}
  //formLabelClass={"mt-5"}
  validationFunc={() => true}
  label={"label"}
  textmuted={"text muted"}
  onChange={handleChangeMultiSelectVal}
  onRemove={handleRemoveMultiSelectVal}
  isDisabled={false}
  selectableOptions={optionsList}
  placeholder={"Seleziona i colori"}
  //getOptionValue={col => col}
  //getOptionStyle={col => ({ color: `${col} !important` })}
  selectedItems={multiSelectVal}
/>
*/