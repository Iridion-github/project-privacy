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
    formGroupLabel = "",
    formLabelClass = "",
    formGroupId = "",
    formGroupStyle = {},
    validationFunc = () => true,
    type = "",
    label = "",
    textmuted = false,
    suggestions = [],
    shownSuggestions = [],
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
    onRevealSuggestions = null,
    onRemove = null,
    onRemoveAll = null,
    isTriggeredOnFocus = true,
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [isListOpen, setIsListOpen] = useState(false)
  const basicStyle = {}

  const handleAutosuggestChange = (event) => {
    if (validationFunc(event.target.value)) {
      onRevealSuggestions(event.target.value)
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

  useEffect(() => {
    //console.log("AutoSuggest state has changed - props: ", props)
  })

  return (
    <Form.Group
      controlId={"customAutosuggest_" + formGroupId}
      className={formGroupClass + " form-with-on-blur"}
      style={formGroupStyle ? { ...basicStyle, ...formGroupStyle } : basicStyle}
      onBlur={disableFocus}
    >
      <Form.Label className={formLabelClass}>{formGroupLabel}</Form.Label>
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
      <Row className="auto-suggest-list-container w-100 text-center ml-0 mr-0">
        {
          (isListOpen && shownSuggestions.length > 0 && isFocused) && props.shownSuggestions.map((sugg, i) => (
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
------------------------------[STATE]------------------------------
const suggestionsFromDb = [
    {
      id: 0,
      nome: "alfredo",
      cognome: "mantovani",
      telefono: "000000001"
    },
    {
      id: 1,
      nome: "mario",
      cognome: "rossi",
      telefono: "000000002"
    },
    {
      id: 2,
      nome: "giovanni",
      cognome: "storti",
      telefono: "000000002"
    },
    {
      id: 3,
      nome: "giacomo",
      cognome: "poretti",
      telefono: "000000003"
    },
    {
      id: 5,
      nome: "mauro",
      cognome: "giacomoni",
      telefono: "000000003"
    },
    {
      id: 6,
      nome: "mauro",
      cognome: "giacomoni",
      telefono: "000000003"
    },
    {
      id: 7,
      nome: "mauro",
      cognome: "giacomoni",
      telefono: "000000003"
    },
    {
      id: 8,
      nome: "mauro",
      cognome: "giacomoni",
      telefono: "000000003"
    },
    {
      id: 9,
      nome: "mauro",
      cognome: "giacomoni",
      telefono: "000000003"
    },
    {
      id: 10,
      nome: "mauro",
      cognome: "giacomoni",
      telefono: "000000003"
    }
  ]

  const filterFunction = (option, inputVal) => {
    if (
      option.cognome.toLowerCase().includes(inputVal.toLowerCase())
      || option.nome.toLowerCase().includes(inputVal.toLowerCase())
    ) {
      return true
    } else {
      return false
    }
  }

  const [suggestions, setSuggestions] = useState(suggestionsFromDb)

  const [shownSuggestions, setShownSuggestions] = useState([])


  const [autoSuggestValue, setAutoSuggestValue] = useState("")
  const [autoSuggestItems, setAutoSuggestItems] = useState([])

  const onChangeAutosuggestValue = (val) => {
    setAutoSuggestValue(val)
  }

  const AutosuggestItemsInsert = (val) => {
    setAutoSuggestItems([...autoSuggestItems, val])
  }

  const handleFilterOptions = (suggestions, inputVal) => {
    const filteredSuggestions = [...suggestions].filter(opt => filterFunction(opt, inputVal))
    return filteredSuggestions
  }

  const handleRevealSuggestions = (inputVal) => {
    const filteredSuggestions = handleFilterOptions(suggestions, inputVal)
    setShownSuggestions(filteredSuggestions)
  }

  const AutosuggestItemsRemove = (val) => {
    const filteredArr = [...autoSuggestItems].filter(items => items.id !== val.id)
    setAutoSuggestItems(filteredArr)
  }

  const AutosuggestItemsRemoveAll = () => {
    setAutoSuggestItems([])
  }


------------------------------[RETURN]------------------------------
<CustomAutoSuggest
            formGroupId="formGroupId"
            formGroupLabel="Prova Label"
            formGroupClassName="prova-class-name"
            type="text"
            placeholder="Prova placeholder"
            onChange={onChangeAutosuggestValue}
            value={autoSuggestValue}
            renderSuggestion={item => `${item.nome} | ${item.cognome}`}
            suggestions={suggestions}
            shownSuggestions={shownSuggestions}
            onSuggestionClick={AutosuggestItemsInsert}
            onRevealSuggestions={handleRevealSuggestions}
            onRemove={AutosuggestItemsRemove}
            onRemoveAll={AutosuggestItemsRemoveAll}
            onSuggestionsClear={() => { }}
            //getSuggestionValue={item => item.nome}
            autoSuggestItems={autoSuggestItems}
            //isTriggeredOnFocus={false}
            textmuted={"this is text muted"}
          />
*/