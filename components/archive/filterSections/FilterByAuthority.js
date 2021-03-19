import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { useLanguage } from '../../../context/siteLanguageContext' //context


export const FilterByAuthority = function (props) {
  const siteLanguage = useLanguage()

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Autorità:</h5>
          </Row>
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
        </Col>
      </Row>
    </Card>
  )
}