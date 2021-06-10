import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap';


export const FilterByExtension = function (props) {

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={6}>
          <Row className="w-100 justify-content-center ml-0 mr-0 mb-4">
            <Card.Header>
              <h5>Filtra per Tipo File</h5>
            </Card.Header>
          </Row>
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <Form.Check
              size="lg"
              type="switch"
              id="doc-switch"
              label="Doc"
              checked={props.includeDoc}
              onChange={props.toggleIncludeDoc}
            />
          </Row>
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <Form.Check
              size="lg"
              type="switch"
              id="docx-switch"
              label="Docx"
              checked={props.includeDocx}
              onChange={props.toggleIncludeDocx}
            />
          </Row>
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <Form.Check
              size="lg"
              type="switch"
              id="pdf-switch"
              label="Pdf"
              checked={props.includePdf}
              onChange={props.toggleIncludePdf}
            />
          </Row>
        </Col>
        <Col md={6}>
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Categoria:</h5>
            <Row className="w-100 justify-content-center ml-0 mr-0">
              <Form.Check
                size="lg"
                type="switch"
                id="ind.corte-switch"
                label="Ind. Corte Costituzionale"
                checked={props.indCorteCost}
                onChange={props.toggleIncludeIndCorteCost}
              />
            </Row>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};