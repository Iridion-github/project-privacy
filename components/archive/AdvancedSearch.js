
import {
  Row,
  Col,
  Form,
  FormLabel,
  Button,
  Jumbotron
} from 'react-bootstrap'
import { useState } from 'react'
import { useLanguage } from '../../context/siteLanguageContext' //context


export const AdvancedSearch = function (props) {
  const siteLanguage = useLanguage() //context
  const [includeDoc, setIncludeDoc] = useState(true)
  const [includeDocx, setIncludeDocx] = useState(true)
  const [includePdf, setIncludePdf] = useState(true)

  const toggleIncludeDoc = () => {
    setIncludeDoc(!includeDoc)
  }

  const toggleIncludeDocx = () => {
    setIncludeDocx(!includeDocx)
  }

  const toggleIncludePdf = () => {
    setIncludePdf(!includePdf)
  }

  return (
    <Row className="w-100 mt-2">
      <Jumbotron className="w-100 pt-4 pb-4">
        <Form>
          <Row className="w-100">
            <Col md={4}>
              <Row className="w-100 justify-content-center">
                <h4>Filtra per tipo:</h4>
              </Row>
              <Row className="w-100 justify-content-center">
                <Form.Check
                  size="lg"
                  type="switch"
                  id="doc-switch"
                  label="Doc"
                  checked={includeDoc}
                  onClick={toggleIncludeDoc}
                />
              </Row>
              <Row className="w-100 justify-content-center">
                <Form.Check
                  size="lg"
                  type="switch"
                  id="docx-switch"
                  label="Docx"
                  checked={includeDocx}
                  onClick={toggleIncludeDocx}
                />
              </Row>
              <Row className="w-100 justify-content-center">
                <Form.Check
                  size="lg"
                  type="switch"
                  id="pdf-switch"
                  label="Pdf"
                  checked={includePdf}
                  onClick={toggleIncludePdf}
                />
              </Row>
            </Col>
            <Col md={4}>
              <Row className="w-100 justify-content-center">
                <h4>Filtra per tipo:</h4>
              </Row>
            </Col>
            <Col md={4}>
              <Row className="w-100 justify-content-center">
                <h4>Filtra per tipo:</h4>
              </Row>
            </Col>
          </Row>
        </Form>
      </Jumbotron>
    </Row>
  )
}



