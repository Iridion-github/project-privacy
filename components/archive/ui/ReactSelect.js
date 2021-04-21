import {
    Form,
    Row,
    Col
} from 'react-bootstrap'
import Select from 'react-select'


export const ReactSelect = function (props) {

    //[CHECKPOINT] Cominciato con l'uso di react-select. Per ora si fallisce nel fargli prendere un tema.

    const getStandardTheme = (theme) => ({
        ...theme,
        //borderRadius: 0,
        colors: {
            ...theme.colors,
            text: 'red',
            //primary25: 'hotpink',
            //primary: 'black',
        }
    })

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
        placeholder,
        getOptionValue = el => (el && el !== "") ? el : null,
        getOptionStyle = () => ({}),
        getCustomTheme = null
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
                    <Select
                        isMulti={isMulti}
                        options={selectableOptions}
                        disabled={isDisabled}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        onChange={handleChange}
                        getOptionValue={getOptionValue}
                        theme={getCustomTheme ? getCustomTheme : getStandardTheme}
                    />
                </Col>
            </Row>
            {textmuted && <Form.Text className="text-muted">
                {textmuted}
            </Form.Text>}
        </Form.Group>
    )
}
