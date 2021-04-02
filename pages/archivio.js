import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { useLanguage, useLanguageUpdate } from '../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  ButtonGroup
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Loading } from '../components/layout/Loading'
import { Footer } from '../components/layout/Footer'
import { PdfViewer } from '../components/fileViewers/pdf/PdfViewer'
import { AdvancedSearch } from '../components/archive/AdvancedSearch'
import { MultiSelect } from '../components/archive/ui/MultiSelect'

export default function archivio(props) {
  const siteLanguage = useLanguage() //context
  const [searchInput, setSearchInput] = useState("")
  const [isAdvanced, setIsAdvanced] = useState(false)
  const [searched, setSearched] = useState(false)
  const [advancedSearched, setAdvancedSearched] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [showPdfModal, setShowPdfModal] = useState(null)
  const [shownTab, setShownTab] = useState("giurisprudenza")

  const openPdfViewer = (path, buffer) => {
    path ? setShowPdfModal(path) : setShowPdfModal(buffer)
  }

  const closePdfViewer = () => {
    setShowPdfModal(null)
  }

  const handleSetSearchResult = (searchResBefore) => {
    setSearchResult(searchResBefore)
  }

  const openAdvancedSearch = () => {
    setIsAdvanced(true)
  }

  const closeAdvancedSearch = () => {
    setIsAdvanced(false)
  }

  const handleSetSearched = (searchedString, advancedFilters) => {
    if (!advancedFilters) {
      setSearched(searchedString)
    } else {
      setAdvancedSearched(advancedFilters)
      if (searchedString && searchedString.length > 0) setSearched(searchedString)
    }
  }

  const submitSearch = async (input) => {
    //const apiUrl = "http://" + context.req.headers.host + "/api/consultation" url a seconda dell'ambiente
    try {
      setLoading(true)
      const resJson = await fetch(`http://localhost:3000/api/archive/search?searchterms=${input}`, {
        method: 'GET',
        headers: {
          key: 'Access-Control-Allow-Origin',
          value: '*'
        }
      })
        .then(response => response.json())
        .then(async response => {
          handleSetSearchResult(response.data.filteredDocs)
          handleSetSearched(searchInput)
          setLoading(false)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const cleanInput = searchInput.replace(/[^\w\s]/gi, '')
    submitSearch(cleanInput)
  }

  useEffect(() => {
    console.log("multiSelectVal:", multiSelectVal)
  })

  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Archivio" : "Archive"}
      />
      {/* Navbar */}
      <Navigation />

      {loading && <Loading />}
      {/* Page Content */}
      <main className={styles.main}>
        <Card className="p-2 fixed-width-card">
          <Card.Img variant="top" src="archiveImg.png" />
          <ButtonGroup className="mt-5 mb-3 w-100">
            <Button
              block
              className="mt-0"
              variant={(shownTab === "giurisprudenza") ? "info" : "outline-info"}
              onClick={() => setShownTab("giurisprudenza")}
            >
              <h4>Giurisprudenza</h4>
            </Button>
            <Button
              block
              className="mt-0"
              variant={(shownTab === "normativa") ? "info" : "outline-info"}
              onClick={() => setShownTab("normativa")}
            >
              <h4>Normativa</h4>
            </Button>
            <Button
              block
              className="mt-0"
              variant={(shownTab === "noteedottrina") ? "info" : "outline-info"}
              onClick={() => setShownTab("noteedottrina")}
            >
              <h4>Note e Dottrina</h4>
            </Button>
            <Button
              block
              className="mt-0"
              variant={(shownTab === "formulari") ? "info" : "outline-info"}
              onClick={() => setShownTab("formulari")}
            >
              <h4>Formulari</h4>
            </Button>
          </ButtonGroup>
          <Card.Body>
            <Card.Title className="text-center">{siteLanguage === "ita" ? "Archivio" : "Archive"}</Card.Title>
            <Row className="p-3 justify-content-center ml-0">
              <Form
                onSubmit={(event) => handleSubmit(event)}
                inline
                className="w-100 p-0"
              >
                <Form.Group className="w-100 justify-content-center">
                  <Col md={9} className="text-right pl-0 pr-0">
                    <Row className="w-100">
                      <Col md={11} className="pl-0 pr-0">
                        <Form.Control
                          size="lg"
                          type="text"
                          placeholder={siteLanguage === "ita" ? "Cerca nell'Archivio Legislativo" : "Search in our Legislation Archive"}
                          value={searchInput}
                          onChange={event => setSearchInput(event.target.value)}
                          className="inline-form-custom w-100"
                        />
                      </Col>
                      <Col md={1} className="pl-0 pr-0">
                        <Button
                          block
                          variant={"info"}
                          disabled={searchInput.length < 10}
                          type="submit"
                          size="lg"
                          className="">
                          <i className="fas fa-search"></i>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={3} className="pl-0 pr-0">
                    <Button
                      variant={"info"}
                      className="ml-1 w-100"
                      size="lg"
                      onClick={isAdvanced ? () => closeAdvancedSearch() : () => openAdvancedSearch()}
                    >
                      <Row className="m-0 w-100">
                        <Col md={10} className="pr-0 pl-0">
                          <span className="kinda-small-text">Ricerca Avanzata</span>
                        </Col>
                        <Col md={2} className="pr-0 pl-1 chevron-container">
                          {isAdvanced ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                        </Col>
                      </Row>
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Row>
            <Row className="p-3 justify-content-center">
              {isAdvanced &&
                <AdvancedSearch
                  shownTab={shownTab}
                  loading={loading}
                  setLoading={setLoading}
                  searchInput={searchInput}
                  handleSetSearched={handleSetSearched}
                  handleSetSearchResult={handleSetSearchResult}
                />
              }
            </Row>
            {((searched && searchResult && searchResult.length > 0) || (advancedSearched)) && (
              <Row className="mt-4 p-3 justify-content-center archive-result-container">
                {(searched && searchResult && searchResult.length > 0 && !advancedSearched) &&
                  <>
                    <Col md={12}>
                      <h4 className="text-center">Nell'Archivio
                  {searchResult.length === 1 ? " è presente " : " sono presenti "}
                        {searchResult.length}
                        {searchResult.length === 1 ? " Documento " : " Documenti "}
                        {(searched && searchResult && searchResult.length > 0) && searchResult.length === 1 ? " contenente" : " contenenti"}: </h4>
                    </Col>
                    <Col md={12}>
                      <p className="text-center">"{searched}" </p>
                    </Col>
                  </>
                }
                {(advancedSearched && searchResult && searchResult.length > 0 && !searched) &&
                  <Col md={12}>
                    <h4 className="text-center">Nell'Archivio
                  {searchResult.length === 1 ? " è presente " : " sono presenti "}
                      {searchResult.length}
                      {searchResult.length === 1 ? " Documento " : " Documenti "}
                      {searchResult.length === 1 ? " che soddisfa " : " che soddisfano "}
                      i filtri di ricerca.
                      </h4>
                  </Col>
                }
                <Col md={12}>
                  <ul>
                    {searchResult.map((el, i) => (
                      <li key={i}>
                        <>
                          {el.filename}
                          {(el.filename && el.filename.includes(".pdf")) && //pdf files viewer btn
                            <Button
                              size="sm"
                              variant="info"
                              className="ml-1 py-0 px-1"
                              onClick={() => openPdfViewer(el.relativepath)}
                            >
                              <i className="fas fa-eye"></i>
                            </Button>
                          }
                          {(el.filename && (el.filename.includes(".docx") || el.filename.includes(".doc"))) && //docx files viewer btn
                            <Button
                              size="sm"
                              variant="info"
                              className="ml-1 py-0 px-1"
                              onClick={() => {
                                openPdfViewer(null, el.buffer)
                              }}
                            >
                              <i className="fas fa-eye"></i>
                            </Button>
                          }
                          <PdfViewer
                            path={el.relativepath}
                            buffer={el.buffer}
                            filename={el.filename}
                            show={showPdfModal === el.relativepath || showPdfModal === el.buffer}
                            onClose={closePdfViewer}
                          />
                        </>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            )}

            {(searched && searchResult && searchResult.length === 0) && (
              <Row className="mt-4 p-3 justify-content-center archive-result-container">
                <h4>Nessun documento contenente: " {searched} "</h4>
              </Row>
            )}

          </Card.Body>


          <Card.Footer className="text-center">
            <small className="text-muted">{siteLanguage === "ita" ? "Archivio aggiornato al" : "Archive last updated"}: 26/01/2020</small>
          </Card.Footer>
        </Card>
      </main >
      {/* Footer */}
      < Footer />
    </div >
  )
}