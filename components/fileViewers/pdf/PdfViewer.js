import { useState, useEffect } from 'react'
import { useLanguage } from '../../../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Button,
  Modal,
  InputGroup,
  FormControl
} from 'react-bootstrap'


export const PdfViewer = function (props) {
  const siteLanguage = useLanguage() //context
  const [pdf, setPdf] = useState(null)
  const [maxPageNum, setMaxPageNum] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(1.4)
  const [destination, setDestination] = useState(null)

  const renderPdf = (pdf) => {
    pdf.getPage(currentPage).then(async page => {
      console.log(`renderPdf - setting canvas to  ${document.getElementById("pdf_renderer_" + props.path)})`)
      const canvas = document.getElementById("pdf_renderer_" + props.path)
      const ctx = canvas.getContext('2d')
      const viewport = page.getViewport(zoom)
      canvas.width = viewport.width
      canvas.height = viewport.height
      page.render({
        canvasContext: ctx,
        viewport: viewport
      })
    })
  }

  const pdfjsLibSetup = async () => {
    await pdfjsLib.getDocument(props.path).then(async pdfResult => {
      if (!maxPageNum) {
        console.log("pdfjsLibSetup - maxPageNum is not set yet, so setting to:", pdfResult._pdfInfo.numPages)
        await setMaxPageNum(pdfResult._pdfInfo.numPages)
      }
      await setPdf(pdfResult)
      renderPdf(pdfResult)
    })
  }

  const goPrevPage = () => {
    const prevPage = Number(currentPage - 1) > 0 ? Number(currentPage - 1) : 1
    setCurrentPage(prevPage)
    renderPdf(pdf)
  }

  const goNextPage = () => {
    const nextPage = Number(currentPage + 1) < maxPageNum ? Number(currentPage + 1) : maxPageNum
    setCurrentPage(nextPage)
    renderPdf(pdf)
  }

  const handleSetDestination = (dest) => {
    console.log("handleSetDestination - dest:", dest)
    if (dest > maxPageNum) dest = maxPageNum
    if (dest < 1) dest = 1
    setDestination(dest)
  }

  const handleGoToDestination = () => {
    setCurrentPage(destination)
    renderPdf(pdf)
  }

  const zoomIn = async () => {
    await setZoom(zoom + 0.1)
    renderPdf(pdf)
  }

  const zoomOut = async () => {
    await setZoom(zoom - 0.1)
    renderPdf(pdf)
  }

  const handleClose = () => {
    setPdf(null)
    setCurrentPage(1)
    setZoom(1.4)
    props.onClose()
  }

  useEffect(() => {
    if (props.show) {
      if (!pdf) {
        pdfjsLibSetup()
      }
      document.title = `Pdf viewer - page: ` + currentPage + ' / ' + maxPageNum
    }
  })

  return (
    <Row className="w-100 m-auto">
      <Modal
        className="justify-content-center"
        show={props.show}
        onHide={handleClose}
        dialogClassName="pdfviewer-dialog"
      >
        <Modal.Header
          className="w-100"
        >
          <Modal.Title className="row w-100">
            <Col md={{ span: 4 }} className="text-center">
              <div id={"zoom_controls"} className="text-left">
                <Button
                  size="lg"
                  id={"zoom_out"}
                  onClick={zoomOut}
                  disabled={zoom <= 1.4}
                  variant="info"
                  className="mr-1"
                >
                  <i className="fas fa-search-minus"></i>
                </Button>
                <Button
                  size="lg"
                  id={"zoom_in"}
                  onClick={zoomIn}
                  disabled={zoom >= 2.5}
                  variant="info"
                >
                  <i className="fas fa-search-plus"></i>
                </Button>
              </div>
            </Col>
            <Col md={{ span: 4 }} className="text-center">
              <h2>{siteLanguage === "ita" ? "Visualizzatore Pdf" : "Pdf Viewer"}</h2>
            </Col>
            <Col md={{ span: 4 }} className="m-0 p-0">
              <Row className="w-100">
                <Col md={{ span: 6 }} className="m-0 p-0 text-center" >
                  {currentPage} / {maxPageNum}
                </Col>
                <Col md={{ span: 6 }} className="m-0 p-0 text-right">
                  <Button
                    size="lg"
                    onClick={handleClose}
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="w-100">
          {/* Altra soluzione in caso di seri problemi: html object
          <object width="400" height="400" data={props.path} type="application/pdf"></object>
          */}
          <div id={"my_pdf_viewer"}>
            <div id={"canvas_container"} className="justify-content-center text-center">
              <canvas id={"pdf_renderer_" + props.path}></canvas>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div id={"navigation_controls"} className="w-100 row">
            <Col md={{ span: 2 }} className="">
              <Button
                block
                id={"go_previous"}
                onClick={goPrevPage}
                disabled={currentPage < 2}
                variant="info"
              >
                <i className="fas fa-arrow-left mr-1"></i>
                <i className="far fa-file"></i>
              </Button>
            </Col>
            <Col md={{ span: 4, offset: 2 }} className="p-0">
              <InputGroup className="pl-4">
                <FormControl
                  className="mr-2"
                  id={"current_page"}
                  value={destination ? destination : currentPage}
                  onChange={(event) => handleSetDestination(event.target.value)}
                /><span style={{ lineHeight: 2.2 }}> / {maxPageNum}</span>
                <Button
                  size="md"
                  className="ml-3 mr-1"
                  onClick={handleGoToDestination}
                  disabled={currentPage === destination}
                  variant="info"
                >
                  <i className="far fa-arrow-alt-circle-right"></i>
                </Button>
              </InputGroup>
            </Col>
            <Col md={{ span: 2, offset: 2 }} className="">
              <Button
                block
                id={"go_next"}
                onClick={goNextPage}
                variant="info"
              >
                <i className="far fa-file"></i>
                <i className="fas fa-arrow-right ml-1"></i>
              </Button>
            </Col>
          </div>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}