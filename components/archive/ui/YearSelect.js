import {
  Form,
  Row,
  Col
} from 'react-bootstrap'

//[CHECKPOINT] DEBUGGARE TUTTO

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

  console.log("YearSelect - props:", props)

  const handleChange = (val) => {
    if (validationFunc(val)) {
      console.log("validated ok")
      console.log("valid val is:", val)
      console.log("about to call this onChange: ", onChange)
      onChange(val)
      return
    }
  }

  const getYearsArr = (start, partialEnd) => {
    console.log("start:", start)
    console.log("maxDate:", maxDate)
    console.log("partialEnd:", partialEnd)
    let end
    if (partialEnd >= 0) {
      end = partialEnd + 1900
    }
    /*
    if (end >= 0) {
      partialEnd = end + 1900
    }*/
    console.log("end:", end)
    let result = [""]
    for (let x = start; x <= end; x++) {
      result.push(x)
    }
    console.log("end:", end)
    console.log("result: ", result)
    return result
  }

  const selectableYears = getYearsArr(minDate ? minDate : 1800, maxDate ? new Date(`06/06/${maxDate}`).getYear() : new Date().getYear())

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