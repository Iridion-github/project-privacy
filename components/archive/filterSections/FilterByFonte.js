import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { CustomAutoSuggest } from '../ui/CustomAutoSuggest'
import { NumberInput } from '../ui/NumberInput'


export const FilterByFonte = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Fonte:</h5>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={9} className="pl-0 pr-2">
              <CustomAutoSuggest
                formGroupId="formGroupId"
                formGroupLabel="Fonte"
                formGroupClassName=""
                type="text"
                placeholder=""
                onChange={() => { }}
                value={""}
                renderSuggestion={item => `${item}`}
                suggestions={[["1", "2", "3", "4", "5"]]}
                shownSuggestions={["1", "2", "3", "4", "5"]}
                onSuggestionClick={() => { }}
                onRevealSuggestions={() => { }}
                onRemove={() => { }}
                onRemoveAll={() => { }}
                onSuggestionsClear={() => { }}
                //getSuggestionValue={item => item.nome}
                autoSuggestItems={["1", "2", "3", "4", "5"]}
              //isTriggeredOnFocus={false}
              />
            </Col>
            <Col md={3} className="pl-2 pr-0">
              <NumberInput
                formGroupClass={""}
                formLabelClass={""}
                colSpan={8}
                label={"Anno"}
                //placeholderText={""}
                value={444}
                onChange={() => { }}
                validationFunc={() => true}
                isDisabled={false}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card >
  )
}