import {
  Form
} from 'react-bootstrap'

export const TextInput = function ({
  formGroupClass = "",
  formLabelClass = "",
  colSpan = 12,
  validationFunc = () => true, label = "",
  label = "",
  placeholderText = "",
  textmuted = null,
  value = "",
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
    <Form.Group className={formGroupClass}>
      <Form.Label className={formLabelClass}>{label}</Form.Label>
      <Form.Control
        type="text"
        placeholder={placeholderText}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        disabled={isDisabled}
      />
      {textmuted && <Form.Text className="text-muted">
        {textmuted}
      </Form.Text>}
    </Form.Group>
  )
}

/*
------------------------------[RETURN]------------------------------

<TextInput
        formGroupClass={"ml-5"}
        formLabelClass={"ml-5"}
        label={"prova label"}
        placeholderText={"prova placeholder"}
        textmuted={"prova textmuted"}
        value={"prova value"}
        onChange={() => {
          console.log("prova callback")
          return true
        }}
        isDisabled={true}
      />

*/