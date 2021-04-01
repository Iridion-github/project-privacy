import {
  Form,
  Row,
  Col
} from 'react-bootstrap'


export const YearSelect = function (props) {

  const {
    formGroupClass = "",
    formLabelClass = "",
    validationFunc = () => true,
    label = "",
    textmuted = false,
    onChange = val => val,
    isDisabled = false,
    maxDate = undefined,
    minDate = undefined
  } = props

  const handleChange = (val) => {
    if (validationFunc(val)) {
      onChange(val)
      return
    }
  }

  const getYearsArr = (startParam, endParam) => {
    const start = startParam ? startParam : 1800
    const partialEnd = endParam ? new Date(`06/06/${endParam}`).getYear() : new Date().getYear()
    const end = partialEnd + 1900
    let result = [""]
    for (let x = start; x <= end; x++) {
      result.push(x)
    }
    return result
  }

  const selectableYears = getYearsArr(minDate, maxDate)

  return (
    <Form.Group className={formGroupClass}>
      <Form.Label className={formLabelClass}>{label}</Form.Label>
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="pl-1 pr-1">
          <Form.Control
            as="select"
            placeholder="Seleziona l'anno"
            onChange={(event) => handleChange(event.target.value)}
            disabled={isDisabled}
            custom>
            {selectableYears.map(y => (
              <option
                key={y}
                value={y !== "" ? y : null}
              >
                {y}
              </option>
            ))}
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