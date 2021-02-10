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
import { convertPdfToPng } from '../utils/pdf'; //pacchetto usato per convertire i pdf in png


export default function archivio(props) {
  const siteLanguage = useLanguage() //context
  const [searchInput, setSearchInput] = useState("")
  const [searched, setSearched] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [pdfBlobsArray, setPdfBlobsArray] = useState([])

  const pdfProcedure = async (fileObj) => {
    /*
      const convertAndDownload = e => {
        const pdf = e.target.files[0]
        convertPdfToPng(pdf, { outputType: 'download' })
      }
    */
    const convertAndDoSomething = event => {
      //const pdf = event.target.files[0]
      const callback = images => {
        images.forEach(img => {
          console.log("file object properties of img:", img)
        })
      }
      convertPdfToPng(fileObj.blob, {
        outputType: 'callback',
        callback: callback
      })
    }
    await convertAndDoSomething()
  }

  const handleSetSearchResult = (searchResBefore) => {
    const searchResAfter = searchResBefore.map(el => {
      if (el.filename.includes(".pdf")) {
        pdfProcedure(el)
        return { ...el }
      }
      return el
    })
    setSearchResult(searchResAfter)
  }

  const submitSearch = async (input) => { //Questo non andrà bene, per il momento non ho il context. Provare a piazzarlo come parametro.
    //const apiUrl = "http://" + context.req.headers.host + "/api/consultation" url a seconda dell'ambiente
    try {
      const resJson = await fetch(`http://localhost:3000/api/archive/search?searchterms=${input}`, {
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
        .then(async response => {
          //Se ci sono dei pdf, mando la richiesta per la creazione dei blobs
          if (response.data.filteredDocs.filter(el => el.filename.includes(".pdf")).length > 0) {
            console.log("Just before sending request to server")
            const pdfToBlobify = await response.data.filteredDocs.filter(el => el.filename.includes(".pdf")).map(el => ({ filename: el.filename, fullpath: el.fullpath }))
            console.log("pdfToBlobify:", pdfToBlobify)
            const pdfBlobs = await fetch(`http://localhost:3000/api/archive/getBlobs?pdfObjects=` + JSON.stringify(pdfToBlobify),
              {
                method: 'GET',
                headers: {
                  key: 'Access-Control-Allow-Origin',
                  value: '*'
                }
              })
              .then(response => response.blob())
              .then(blobs => {
                console.log("blob:", blobs)
                return blobs
              })
            setPdfBlobsArray(pdfBlobs)
            console.log("pdfBlobsArray:", pdfBlobsArray)
          }
          //Continuo con le operazioni clientside
          //handleSetSearchResult(response.data.filteredDocs)
          //setSearched(searchInput)          
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
                            target="_blank"
                          >
                            <i className="fas fa-download"></i>
                          </Button>
                          <Button
                            size="sm"
                            variant="info"
                            className="ml-1 py-0 px-1"
                            onClick={() => getDocumentViewer("rawtext", el.relativepath, el.content)}
                          >
                            <i className="fas fa-eye"></i>
                          </Button>
                          { el.relativepath.includes(".pdf") &&
                            <img src={el.pngPath} className="m-2" />
                          }
                          {/* googledocviewer non funziona con localhost
                          <iframe className="ml-2" src={"https://docs.google.com/gview?url=http://localhost:3000/" + el.linuxpath + "&embedded=true"}></iframe>
                          */}
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