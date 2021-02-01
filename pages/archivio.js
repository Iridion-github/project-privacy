import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { useLanguage, useLanguageUpdate } from '../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Card,
  Form,
  Button
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'


export default function archivio(props) {
  const siteLanguage = useLanguage() //context
  const [searchInput, setSearchInput] = useState("")
  const [searched, setSearched] = useState(false)
  const [searchResult, setSerchResult] = useState([])

  const submitSearch = async () => { //Questo non andrà bene, per il momento non ho il context. Provare a piazzarlo come parametro.
    //const apiUrl = "http://" + context.req.headers.host + "/api/consultation" url a seconda dell'ambiente
    try {
      const res = await fetch(`http://localhost:3000/api/archive/?searchterms=${searchInput}`, {
        method: 'GET',
        headers: {
          key: 'Access-Control-Allow-Origin',
          value: '*'
        },
        query: {
          searchterms: searchInput
        }
      })
        .then(response => response.json())
        .then(response => {
          setSerchResult(response.data.filteredDocs)
          setSearched(searchInput)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitSearch()
  }

  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Archivio" : "Archive"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Card className="p-2">
          <Card.Img variant="top" src="archiveImg.png" />
          <Card.Body>
            <Card.Title className="text-center">{siteLanguage === "ita" ? "Archivio" : "Archive"}</Card.Title>
            <Row className="p-3 justify-content-center">
              <Form
                onSubmit={(event) => handleSubmit(event)}
                inline
                className="w-100 p-0"
              >
                <Form.Group className="w-100 justify-content-center" controlId="">
                  <Form.Control
                    type="text"
                    placeholder={siteLanguage === "ita" ? "Cerca nell'Archivio Legislativo" : "Search in our Legislation Archive"}
                    value={searchInput}
                    onChange={event => setSearchInput(event.target.value)}
                    className="w-75 inline-form-custom" />
                  <Button
                    variant={"info"}
                    disabled={searchInput.length < 10}
                    type="submit"
                    className="ml-1">
                    <i className="fas fa-search"></i>
                  </Button>
                </Form.Group>
              </Form>
            </Row>

            {(searched && searchResult && searchResult.length > 0) && (
              <Row className="mt-4 p-3 justify-content-center archive-result-container">

                <Col md={12}>
                  <h4 className="text-center">Nell'Archivio {searchResult.length === 1 ? "è presente" : "sono presenti"} {searchResult.length} {searchResult.length === 1 ? "Documento" : "Documenti"} {searchResult.length === 1 ? "contenente" : "contenenti"}: </h4>
                </Col>
                <Col md={12}>
                  <p className="text-center">"{searched}" </p>
                </Col>
                <Col md={12}>
                  <ul>
                    {searchResult.map((el, i) => (
                      <li key={i}>
                        <>
                          {el.filename}
                          <Button
                            size="sm"
                            variant="info"
                            className="ml-3 py-0 px-1"
                            href={el.relativepath}
                          >
                            <i className="fas fa-download"></i>
                          </Button>
                          <iframe src={"https://docs.google.com/gview?url=http://localhost:3000/" + el.linuxpath + "&embedded=true"}></iframe>
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