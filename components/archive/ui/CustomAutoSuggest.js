import {
  Row,
  Col,
  Form,
  ButtonGroup,
  Button,
  Badge
} from 'react-bootstrap'
import { useEffect, useState } from 'react'


export const CustomAutoSuggest = function (props) {

  const {
    formGroupClass = "",
    formLabelClass = "",
    formGroupId = "",
    formGroupStyle = {},
    validationFunc = () => true,
    type = "",
    label = "",
    textmuted = false,
    suggestions = [],
    renderSuggestion = item => item.value ? item.value : item,
    onSuggestionClick = () => { },
    getSuggestionValue = null,
    onChange = val => val,
    isDisabled = false,
    selectableOptions = [],
    value = "",
    placeholder,
    getOptionValue = el => (el && el !== "") ? el : null,
    getOptionStyle = () => ({}),
    autoSuggestItems = [],
    onRemove = null,
    onRemoveAll = null,
    isTriggeredOnFocus = true,
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [isListOpen, setIsListOpen] = useState(false)
  const basicStyle = {}

  const handleAutosuggestChange = (event) => {
    if (validationFunc(event.target.value)) {
      if (event.target.value.length >= 3) {
        setIsListOpen(true)
      } else {
        setIsListOpen(false)
      }
      onChange(event.target.value)
    } else {
      return
    }
  }

  const handleAutosuggestClick = (item) => {
    onSuggestionClick(getSuggestionValue ? getSuggestionValue(item) : item)
    disableFocus()
  }

  const enableFocus = () => {
    setIsFocused(true)
  }

  const disableFocus = () => {
    setIsFocused(false)
  }

  const handleFocusOnInput = () => {
    if (!isTriggeredOnFocus) return
    enableFocus()
  }


  useEffect(() => {
    console.log("AutoSuggest state has changed - props: ", props)
  })

  return (
    <Form.Group
      controlId={"customAutosuggest_" + formGroupId}
      className={formGroupClass + " form-with-on-blur"}
      style={formGroupStyle ? { ...basicStyle, ...formGroupStyle } : basicStyle}
      onBlur={disableFocus}
    >
      <Form.Label className={formLabelClass}>{label}</Form.Label>
      <Row className="w-100 ml-0 mr-0">
        <Col md={6} className="pl-1 pr-1">
          <Row className="w-100 ml-0 mr-0">
            <Col md={12} className="pl-1 pr-1">
              <Form.Control
                type={type}
                placeholder={placeholder}
                onChange={(event) => handleAutosuggestChange(event)}
                value={value}
                onMouseDown={enableFocus}
              />
            </Col>
          </Row>
        </Col>
        <Col md={6} className="pl-1 pr-1">
          {(autoSuggestItems && autoSuggestItems.length > 0) &&
            <Row className="w-100 ml-0 mr-0">
              <Col md={10} className="pl-0 pr-0">
                {autoSuggestItems.map(item => (
                  <Badge
                    variant="info"
                    className="mr-1"
                    key={item.value ? item.value : item[Object.keys(item)[0]]}
                  >
                    {item.label ? item.label : item[Object.keys(item)[0]]}
                    <Button
                      size="sm"
                      variant="danger"
                      className="ml-1 p-0"
                      style={{
                        lineHeight: "1",
                        height: "16px",
                        width: "16px",
                      }}
                      onMouseDown={() => onRemove(item?.value ? item.value : item)}
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
            </Row>}
        </Col>
      </Row>
      <Row className="w-100 text-center ml-0 mr-0">
        {
          (isListOpen && suggestions.length > 0 && isFocused) && props.suggestions.map((sugg, i) => (
            <Row className="w-100 pl-0 pr-0 ml-0 mr-0" key={i}>
              <Col md={12} className="">
                <Button
                  block
                  size="sm"
                  variant="outline-info"
                  onMouseDown={() => handleAutosuggestClick(sugg)}
                >
                  {props.renderSuggestion(sugg)}
                </Button>
              </Col>
            </Row>
          ))
        }
      </Row>
      {textmuted && <Form.Text className="text-muted pl-5">
        {textmuted}
      </Form.Text>}
    </Form.Group>
  )
}

/*
[USAGE]
State:



Return:
<CustomAutoSuggest
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