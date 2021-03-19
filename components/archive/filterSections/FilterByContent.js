import {
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap'
import { useLanguage } from '../../../context/siteLanguageContext' //context


export const FilterByContent = function (props) {
  const siteLanguage = useLanguage()

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center pl-0 pr-0 ml-0 mr-0">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Contenuti:</h5>
          </Row>
          <Row className="w-100 justify-content-center text-center ml-0 mr-0">
            <Row>
              <Col>
                <Form.Check
                  size="lg"
                  type="checkbox"
                  id=""
                  label="Direttive"
                  checked={false}
                  onChange={() => { }}
                />
              </Col>
              <Col>
                <Form.Check
                  size="lg"
                  type="checkbox"
                  id=""
                  label="Ordinanze"
                  checked={false}
                  onChange={() => { }}
                />
              </Col>
              <Col>
                <Form.Check
                  size="lg"
                  type="checkbox"
                  id=""
                  label="Provvedimenti"
                  checked={false}
                  onChange={() => { }}
                />
              </Col>
              <Col>
                <Form.Check
                  size="lg"
                  type="checkbox"
                  id=""
                  label="Raccomandazioni"
                  checked={false}
                  onChange={() => { }}
                />
              </Col>
              <Col>
                <Form.Check
                  size="lg"
                  type="checkbox"
                  id=""
                  label="Regolamenti"
                  checked={false}
                  onChange={() => { }}
                />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}