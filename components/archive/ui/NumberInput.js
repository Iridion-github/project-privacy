import {
  Form,
  Row,
  Col
} from 'react-bootstrap'

export const NumberInput = function ({
  formGroupClass = "",
  formLabelClass = "",
  colSpan = 6,
  validationFunc = () => true,
  label = "",
  placeholderText = "",
  textmuted = null,
  value = undefined,
  onChange = () => { },
  isDisabled = false
}) {

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
          <Form.Control
            type="number"
            placeholder={placeholderText}
            value={value}
            onChange={(event) => handleChange(event.target.value)}
            disabled={isDisabled}
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
------------------------------[RETURN]------------------------------

<NumberInput
  formGroupClass={""}
  formLabelClass={""}
  colSpan={8}
  label={"prova label"}
  placeholderText={""}
  textmuted={"prova textmuted"}
  value={numeroArt}
  onChange={setNumeroArt}
  validationFunc={(num) => num >= 0 && num <= 10}
  isDisabled={false}
/>

*/