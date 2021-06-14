import {
  Form,
  Row,
  Col
} from 'react-bootstrap';
import Select from 'react-select';


export const ReactSelect = function (props) {

  const getStandardTheme = (theme) => {
    //console.log("full theme:", theme)
    return {
      ...theme,
      //borderRadius: 100,
      colors: {
        ...theme.colors,
        primary: '#17a2b8',
        //primary25: 'hotpink',
        //primary: 'black',
      }
    };
  };

  const {
    formGroupClass = "",
    formLabelClass = "",
    isMulti = false,
    validationFunc = () => true,
    label = "",
    textmuted = false,
    onChange = val => val,
    isDisabled = false,
    selectableOptions = [],
    defaultValue = "",
    value = "",
    placeholder,
    getOptionValue = el => (el && el.value) ? el.value : el,
    getOptionLabel = el => (el && el.label) ? el.label : el,
    getOptionStyle = () => ({}),
    getCustomTheme = null
  } = props;

  const handleChange = (val) => {
    if (validationFunc(val)) {
      onChange(val);
      return;
    }
  };

  console.log("value:", value);

  return (
    <Form.Group className={formGroupClass}>
      <Form.Label className={formLabelClass}>{label}</Form.Label>
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="pl-1 pr-1">
          <Select
            isMulti={isMulti}
            options={selectableOptions}
            disabled={isDisabled}
            //[Memo] sto coso funziona in modo misterioso. Collegarlo allo stato lo disturba.
            //defaultValue={value && value.length ? value : defaultValue}
            //value={value}
            //inputValue={value}
            placeholder={placeholder}
            onChange={handleChange}
            getOptionLabel={getOptionLabel}
            getOptionValue={getOptionValue}
            theme={getCustomTheme ? getCustomTheme : getStandardTheme}
          />
        </Col>
      </Row>
      {textmuted && <Form.Text className="text-muted">
        {textmuted}
      </Form.Text>}
    </Form.Group>
  );
};
