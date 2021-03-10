
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

  const submitAdvancedSearch = async (input) => {
    let activeFilters = {}
    if (includeDoc) activeFilters = { ...activeFilters, includeDoc: true }
    if (includeDocx) activeFilters = { ...activeFilters, includeDocx: true }
    if (includePdf) activeFilters = { ...activeFilters, includePdf: true }
    if (indCorteCost) activeFilters = { ...activeFilters, indCorteCost: true }
    console.log("submitAdvancedSearch - Active filters:", activeFilters)
    try {
      props.setLoading(true)
      const activeFiltersStr = JSON.stringify(activeFilters)
      const resJson = await fetch(`http://localhost:3000/api/archive/advancedSearch?searchterms=${input}&activeFilters=${activeFiltersStr}`, {
        method: 'GET',
        headers: {
          key: 'Access-Control-Allow-Origin',
          value: '*'
        },
        query: {
          //searchterms: searchInput,
          activeFilters: activeFiltersStr
        }
      })
        .then(response => {
          console.log("submitAdvancedSearch 1st phase response:", response)
          return response.json()
        })
        .then(async response => {
          console.log("submitAdvancedSearch 2nd phase response:", response)
          props.setLoading(false)
          //handleSetSearchResult(response.data.filteredDocs)
          //setSearched(searchInput)
        })
    } catch (error) {
      console.log("submitAdvancedSearch error:", error)
    }
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
                  onChange={toggleIncludeDoc}
                />
              </Row>
              <Row className="w-100 justify-content-center">
                <Form.Check
                  size="lg"
                  type="switch"
                  id="docx-switch"
                  label="Docx"
                  checked={includeDocx}
                  onChange={toggleIncludeDocx}
                />
              </Row>
              <Row className="w-100 justify-content-center">
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
            <Col md={4}>
              <Row className="w-100 justify-content-center">
                <h4>Filtra per Categoria:</h4>
                <Row className="w-100 justify-content-center">
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
            <Col md={4}>
              <Row className="w-100 justify-content-center">
                <h4>Filtra per ???:</h4>
              </Row>
            </Col>
          </Row>
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
    </Row>
  )
}



