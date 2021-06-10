import {
  Row,
  Col,
  Card,
  Form,
  Button
} from 'react-bootstrap';
import { Select } from '../ui/Select';
import { MultiSelect } from '../ui/MultiSelect';
import { DateInputNoCalendar } from '../ui/DateInputNoCalendar';
import { TextInput } from '../ui/TextInput';
import { NumberInput } from '../ui/NumberInput';


export const FilterByProvvedimento = function (props) {
  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0 mb-4">
            <Card.Header>
              <Row className="w-100 ml-0 mr-0">
                <h5>Filtra per Provvedimento</h5>
              </Row>
              <Row className="w-100 ml-0 mr-0 justify-content-center">
                <Button
                  variant="warning"
                  small
                  className="reset-filter-btn"
                  onClick={ }
                >
                  Pulisci Filtro
                </Button>
              </Row>
            </Card.Header>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={7} className="pl-0 pr-2">
              <Select
                validationFunc={() => true}
                label={"Provvedimento"}
                onChange={props.handleChangeProvvedimento}
                isDisabled={false}
                selectableOptions={props.arrProvvedimento}
                placeholder={"placeholder"}
                getOptionValue={opt => opt.tag}
                defaultValue={props.selectedProvvedimento}
              />
            </Col>
            <Col md={5} className="pl-2 pr-0">
              <Select
                validationFunc={() => true}
                label={"Tipo"}
                onChange={props.handleChangeTipoProvv}
                isDisabled={false}
                selectableOptions={["vigente", "testo in GU"]}
                //placeholder={"placeholder"}
                //getOptionValue={col => col}
                defaultValue={props.tipoProvv}
              />
            </Col>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={5} className="pl-0 pr-2">
              <DateInputNoCalendar
                formGroupClass={""}
                formLabelClass={""}
                label={"Data"}
                placeholderText={""}
                selectedDay={props.dataFiltroProvv.day}
                selectedMonth={props.dataFiltroProvv.month}
                selectedYear={props.dataFiltroProvv.year}
                onChange={props.handleChangeDataFiltroProvv}
                isDisabled={false}
                calendarClassName={""}
                datepickerClassName={""}
                dateFormat='dd/MM/yyyy'
                excludeDates={[]}
                filterDate={() => true}
                locale={"it"}
              />
            </Col>
            <Col md={7} className="pl-2 pr-2">
              <MultiSelect
                validationFunc={() => true}
                label={"Sottonumero"}
                onChange={props.handleAddSottonumero}
                onRemove={props.handleRemoveSottonumero}
                isDisabled={false}
                selectableOptions={props.arrSottonumero}
                placeholder={"-"}
                //getOptionValue={col => col}
                //getOptionStyle={col => ({ color: `${col} !important` })}
                selectedItems={props.arrSottonumero.filter(el => el.selected === true)}
                firstColSpan={4}
                secondColSpan={8}
                onRemoveAll={() => props.handleRemoveSottonumero("REMOVE_ALL")}
              />
            </Col>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={3} className="pl-0 pr-2">
              <NumberInput
                formGroupClass={""}
                formLabelClass={""}
                colSpan={8}
                label={"Articolo"}
                //placeholderText={""}
                value={props.artProvv}
                onChange={props.handleChangeArtProvv}
                validationFunc={num => num >= 0 && num <= 9999}
                isDisabled={false}
              />
            </Col>
            <Col md={3} className="pl-2 pr-0">
              <NumberInput
                formGroupClass={""}
                formLabelClass={""}
                colSpan={8}
                label={"Numero"}
                //placeholderText={""}
                value={props.numProvv}
                onChange={props.handleChangeNumProvv}
                validationFunc={num => num >= 0 && num <= 9999}
                isDisabled={false}
              />
            </Col>
          </Row>
          <Row className="w-100 ml-0 mr-0 pl-4 pr-4">
            <Col md={7} className="pl-0 pr-2">
              <Select
                validationFunc={() => true}
                label={"Argomento"}
                onChange={props.handleChangeCategoriaProvvedimento}
                isDisabled={false}
                selectableOptions={props.arrCategoriaProvvedimento}
                placeholder={"-"}
                //getOptionValue={col => col}
                defaultValue={props.selectedCategoriaProvvedimento}
              />
            </Col>
            <Col md={3} className="pl-2 pr-2">
              <TextInput
                label={"Allegato"}
                //placeholderText={"prova placeholder"}
                value={props.allegatoProvv}
                onChange={props.handleChangeAllegatoProvv}
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
  );
};