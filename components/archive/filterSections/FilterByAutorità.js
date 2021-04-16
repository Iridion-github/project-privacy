import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { Select } from '../ui/Select'
import { DateInput } from '../ui/DateInput'
import { NumberInput } from '../ui/NumberInput'
import { TextInput } from '../ui/TextInput'


export const FilterByAutorità = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Autorità:</h5>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={6} className="pl-0 pr-2">
              <Select
                validationFunc={() => true}
                label={"Autorità"}
                onChange={props.handleChangeAutorità}
                isDisabled={false}
                selectableOptions={props.arrAutorità}
                //getOptionValue={col => col}
                defaultValue={""}
              />
            </Col>
            <Col md={3} className="pl-2 pr-2">
              <DateInput
                formGroupClass={""}
                formLabelClass={""}
                label={"Data"}
                placeholderText={""}
                value={new Date()}
                onChange={val => val}
                validationFunc={el => el}
                isDisabled={false}
                calendarClassName={""}
                datepickerClassName={""}
                dateFormat='dd/MM/yyyy'
                excludeDates={[]}
                filterDate={() => true}
                locale={"it"}
              //maxDate={new Date}
              //minDate={new Date}
              />
            </Col>
            <Col md={3} className="pl-2 pr-0">
              <NumberInput
                formGroupClass={""}
                formLabelClass={""}
                colSpan={8}
                label={"Num."}
                //placeholderText={""}
                value={""}
                onChange={event => event.target.value}
                validationFunc={() => true}
                isDisabled={false}
              />
            </Col>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={4} className="pl-0 pr-2">
              <Select
                validationFunc={() => true}
                label={"Sezione"}
                onChange={val => val}
                isDisabled={false}
                selectableOptions={["-", "I", "II", "III", "IV", "V", "VI", "VII", "Feriali", "Unite"]}
                //placeholder={"placeholder"}
                //getOptionValue={col => col}
                defaultValue={""}
              />
            </Col>
            <Col md={4} className="pl-2 pr-2">
              <Select
                validationFunc={() => true}
                label={"Regione"}
                onChange={val => val}
                isDisabled={false}
                selectableOptions={[
                  "-",
                  "Abruzzo",
                  "Basilicata",
                  "Calabria",
                  "Campania",
                  "Emilia-Romagna",
                  "Friuli Venezia Giulia",
                  "Lazio",
                  "Liguria",
                  "Lombardia",
                  "Marche",
                  "Molise",
                  "Piemonte",
                  "Puglia",
                  "Sardegna",
                  "Sicilia",
                  "Toscana",
                  "Trentino-Alto Adige",
                  "Umbria",
                  "Valle d'Aosta",
                  "Veneto"]}
                //placeholder={"placeholder"}
                //getOptionValue={col => col}
                defaultValue={""}
              />
            </Col>
            <Col md={4} className="pl-2 pr-0">
              <TextInput
                label={"Città"}
                //placeholderText={"prova placeholder"}
                value={"-"}
                onChange={(event) => event.target.value}
              />
            </Col>
          </Row>
          {/* 
          <Row className="w-100 justify-content-center ml-0 mr-0 pl-5">
            <Col className="pl-0 pr-0">
              <Form.Check
                size="lg"
                type="checkbox"
                id=""
                label="Presidente Consiglio Ministri"
                checked={false}
                onChange={() => { }}
              />
            </Col>
            <Col className="pl-0 pr-0">
              <Form.Check
                size="lg"
                type="checkbox"
                id=""
                label="Agenzia delle Entrate"
                checked={false}
                onChange={() => { }}
              />
            </Col>
            <Col className="pl-0 pr-0">
              <Form.Check
                size="lg"
                type="checkbox"
                id=""
                label="Ministeriale"
                checked={false}
                onChange={() => { }}
              />
            </Col>
            <Col className="pl-0 pr-0">
              <Form.Check
                size="lg"
                type="checkbox"
                id=""
                label="Commissione"
                checked={false}
                onChange={() => { }}
              />
            </Col>
          </Row>
          <Row className="w-100 justify-content-center ml-0 mr-0 pl-5">
            <Col className="pl-0 pr-0">
              <Form.Check
                size="lg"
                type="checkbox"
                id=""
                label="Unione Europea"
                checked={false}
                onChange={() => { }}
              />
            </Col>
            <Col className="pl-0 pr-0">
              <Form.Check
                size="lg"
                type="checkbox"
                id=""
                label="ANAC"
                checked={false}
                onChange={() => { }}
              />
            </Col>
            <Col className="pl-0 pr-0">
              <Form.Check
                size="lg"
                type="checkbox"
                id=""
                label="Autorità"
                checked={false}
                onChange={() => { }}
              />
            </Col>
            <Col className="pl-0 pr-0">
              <Form.Check
                size="lg"
                type="checkbox"
                id=""
                label="Garante"
                checked={false}
                onChange={() => { }}
              />
            </Col>
          </Row>
          */}
        </Col>
      </Row>
    </Card >
  )
}