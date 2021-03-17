
import {
  Row,
  Col,
  Form,
  FormLabel,
  Button,
  Jumbotron,
  Card
} from 'react-bootstrap'
import { useState } from 'react'
import { useLanguage } from '../../context/siteLanguageContext' //context


export const AdvancedSearch = function (props) {
  const siteLanguage = useLanguage() //context
  //Filtri possibili
  const [includeDoc, setIncludeDoc] = useState(true)
  const [includeDocx, setIncludeDocx] = useState(true)
  const [includePdf, setIncludePdf] = useState(true)
  const [indCorteCost, setIndCorteCost] = useState(false) //controlla se il file contiene ".IND CORTE"


  const toggleIncludeDoc = () => {
    setIncludeDoc(!includeDoc)
  }

  const toggleIncludeDocx = () => {
    setIncludeDocx(!includeDocx)
  }

  const toggleIncludePdf = () => {
    setIncludePdf(!includePdf)
  }

  const toggleIncludeIndCorteCost = () => {
    setIndCorteCost(!indCorteCost)
  }

  const submitAdvancedSearch = async () => {
    let activeFilters = {}
    if (includeDoc) activeFilters = { ...activeFilters, includeDoc: true }
    if (includeDocx) activeFilters = { ...activeFilters, includeDocx: true }
    if (includePdf) activeFilters = { ...activeFilters, includePdf: true }
    if (indCorteCost) activeFilters = { ...activeFilters, indCorteCost: true }
    try {
      props.setLoading(true)
      const activeFiltersStr = JSON.stringify(activeFilters)
      const resJson = await fetch(`http://localhost:3000/api/archive/advancedSearch?searchterms=${props.searchInput}&activeFilters=${activeFiltersStr}`, {
        method: 'GET',
        headers: {
          key: 'Access-Control-Allow-Origin',
          value: '*'
        }
      })
        .then(response => {
          return response.json()
        })
        .then(async response => {
          props.handleSetSearchResult(response.data.filteredDocs)
          props.handleSetSearched(props.searchInput, activeFilters)
          props.setLoading(false)
        })
    } catch (error) {
      console.log("submitAdvancedSearch error:", error)
    }
  }

  return (
    <Row className="w-100 mt-2 ml-0 mr-0">
      <Jumbotron className="w-100 pt-4 pb-4">
        <Form>
          {/* Comportamento ricerca testuale */}
          <Card className="pt-2 pb-2 mb-2">
            <Row className="w-100 ml-0 mr-0">
              <Col md={12} className="justify-content-center">
                <Row className="w-100 justify-content-center ml-0 mr-0">
                  <h5>I risultati della Ricerca:</h5>
                </Row>
                <Row className="w-100 justify-content-center ml-0 mr-0">
                  <Form.Group className="justify-content-center" controlId="">
                    <Form.Control
                      size="sm"
                      as="select"
                      className=""
                    >
                      <option>Contengono almeno 1 delle parole</option>
                      <option>Contengono tutte le parole</option>
                      <option>Contengono l'esatta frase</option>
                    </Form.Control>
                  </Form.Group>
                </Row>
              </Col>
            </Row>
          </Card>
          {/* Filtro per Contenuti */}
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
          {/* Filtro per Data */}
          <Card className="pt-2 pb-2 mb-2">
            <Row className="w-100">
              <Col md={12} className="justify-content-center">
                <Row className="w-100 justify-content-center ml-0 mr-0">
                  <h5>Filtra per Data:</h5>
                </Row>
                <Row className="w-100 justify-content-center text-center ml-0 mr-0">
                  <Col md={6} className="ml-0 mr-0">
                    Da:
                  <Form.Group className="justify-content-center" controlId="">
                      <Form.Control
                        size="sm"
                        type="date"
                        className=""
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="ml-0 mr-0">
                    A:
                  <Form.Group className="justify-content-center" controlId="">
                      <Form.Control
                        size="sm"
                        type="date"
                        className=""
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
          {/* Filtro per Autorità */}
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
          {/* Filtro per Fonte */}
          <Card className="pt-2 pb-2 mb-2">
            <Row className="w-100">
              <Col md={12} className="justify-content-center">
                <Row className="w-100 justify-content-center ml-0 mr-0">
                  <h5>Filtra per Fonte:</h5>
                </Row>
                <Row className="w-100 justify-content-center ml-0 mr-0">
                  <Form.Check
                    size="lg"
                    type="checkbox"
                    id=""
                    label="1° label"
                    checked={false}
                    onChange={() => { }}
                  />
                </Row>
              </Col>
            </Row>
          </Card>
          {/* Filtro per tipo di File */}
          <Card className="pt-2 pb-2 mb-2">
            <Row className="w-100 ml-0 mr-0">
              <Col md={6}>
                <Row className="w-100 justify-content-center ml-0 mr-0">
                  <h5>Filtra per Tipo File:</h5>
                </Row>
                <Row className="w-100 justify-content-center ml-0 mr-0">
                  <Form.Check
                    size="lg"
                    type="switch"
                    id="doc-switch"
                    label="Doc"
                    checked={includeDoc}
                    onChange={toggleIncludeDoc}
                  />
                </Row>
                <Row className="w-100 justify-content-center ml-0 mr-0">
                  <Form.Check
                    size="lg"
                    type="switch"
                    id="docx-switch"
                    label="Docx"
                    checked={includeDocx}
                    onChange={toggleIncludeDocx}
                  />
                </Row>
                <Row className="w-100 justify-content-center ml-0 mr-0">
                  <Form.Check
                    size="lg"
                    type="switch"
                    id="pdf-switch"
                    label="Pdf"
                    checked={includePdf}
                    onChange={toggleIncludePdf}
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
                      checked={indCorteCost}
                      onChange={toggleIncludeIndCorteCost}
                    />
                  </Row>
                </Row>
              </Col>
            </Row>
          </Card>
        </Form>
        <Row className="w-100 ml-0 mr-0">
          <Col md={12} className="pr-0 pl-0 text-right">
            <Button
              variant={"info"}
              className="ml-1"
              onClick={() => submitAdvancedSearch()}
            > Ricerca Avanzata
            <i className="fas fa-search ml-2"></i>
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    </Row >
  )
}



