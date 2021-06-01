import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { Select } from '../ui/Select'


export const FilterByTesto = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center">
          <Row className="w-100 justify-content-center ml-0 mr-0 mb-4">
            <Card.Header>
              <h5>I risultati della Ricerca:</h5>
            </Card.Header>
          </Row>
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <Select
              validationFunc={() => true}
              label={""}
              onChange={props.handleChangeOpzioneTestuale}
              isDisabled={false}
              selectableOptions={[
                "Contengono almeno 1 delle parole",
                "Contengono tutte le parole",
                "Contengono l'esatta frase"]}
              defaultValue={props.selectedOpzioneTestuale}
            />
          </Row>
        </Col>
      </Row>
    </Card>
  )
}