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
import stringToHTML from 'html-react-parser'


export const DocxViewer = function (props) {
  const siteLanguage = useLanguage() //context
  const [init, setInit] = useState(false)
  const [maxPageNum, setMaxPageNum] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(1)
  const [destination, setDestination] = useState(null)
  const [pdf, setPdf] = useState(null)
  const [docxRendererStyle, setDocxRendererStyle] = useState({})

  const renderDocx = async (targetZoom) => {
    if (!targetZoom) targetZoom = 1
    setDestination(null)
    const renderer = document.getElementById("docx_renderer")
    const text = props.content
    renderer.innerHTML = text
    await setDocxRendererStyle({ fontSize: targetZoom + "rem !important" })
    //[Memo] Siamo arrivati qui: elaborazione di un sistema per zoomare. A Luigi potrebbe non andar bene cmq il sistema di DocxViewer.
    renderer.children = React.Children.map(children, async function (child) {
      child.style = { fontSize: targetZoom + "rem !important" }
    })

  }

  const goPrevPage = () => {
    const prevPage = Number(currentPage - 1) > 0 ? Number(currentPage - 1) : 1
    setCurrentPage(prevPage)
    renderDocx(zoom)
  }

  const goNextPage = () => {
    const nextPage = Number(currentPage + 1) < maxPageNum ? Number(currentPage + 1) : maxPageNum
    setCurrentPage(nextPage)
    renderDocx(zoom)
  }

  const handleSetDestination = (dest) => {
    if (dest > maxPageNum) dest = maxPageNum
    if (dest < 1) dest = 1
    setDestination(dest)
  }

  const handleGoToDestination = () => {
    setCurrentPage(destination)
    renderDocx(zoom)
  }

  const zoomIn = () => {
    const newZoomLevel = Number(zoom + 0.2)
    setZoom(newZoomLevel)
    renderDocx(newZoomLevel)
  }

  const zoomOut = () => {
    const newZoomLevel = Number(zoom - 0.2)
    setZoom(newZoomLevel)
    renderDocx(newZoomLevel)
  }

  const handleClose = () => {
    setCurrentPage(1)
    setInit(false)
    setMaxPageNum(null)
    setZoom(1)
    setDestination(null)
    props.onClose()
  }

  useEffect(() => {
    if (props.show) {
      document.title = `Docx viewer - page: ` + currentPage + ' / ' + maxPageNum
      if (!init) {
        setInit(true)
        renderDocx(zoom)
      }
    }
  })

  return (
    <Row className="w-100 m-auto">
      <Modal
        className="justify-content-center"
        show={props.show}
        onHide={handleClose}
        dialogClassName="w-100 pdfviewer-dialog"
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
                  disabled={zoom <= 1}
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
              <h2>{props.filename}</h2>
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
        <Modal.Body className="" style={{ padding: 0 }}>
          <div id={"my_pdf_viewer"}>
            <Row id={"canvas_container"} className="w-100 text-center">
              <Col md={{ span: 8, offset: 2 }} id={"docx_renderer"} className="text-left p-5" style={docxRendererStyle}>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div id={"navigation_controls"} className="w-100 row">
            <Col md={{ span: 2 }} className="mb-2">
              <Button
                block
                id={"go_previous"}
                onClick={goPrevPage}
                disabled={currentPage === 1}
                variant="info"
              >
                <i className="fas fa-arrow-left mr-1"></i>
                <i className="far fa-file"></i>
              </Button>
            </Col>
            <Col md={{ span: 4, offset: 2 }} className="p-0 mb-2">
              <InputGroup className="pl-4">
                <FormControl
                  className="mr-2"
                  id={"current_page"}
                  value={destination !== null ? destination : currentPage}
                  onChange={(event) => handleSetDestination(Number(event.target.value))}
                /><span style={{ lineHeight: 2.2 }}> / {maxPageNum}</span>
                <Button
                  size="md"
                  className="ml-3 mr-1"
                  onClick={handleGoToDestination}
                  disabled={(destination === null || currentPage === destination)}
                  variant="info"
                >
                  <i className="far fa-arrow-alt-circle-right"></i>
                </Button>
              </InputGroup>
            </Col>
            <Col md={{ span: 2, offset: 2 }} className="mb-2">
              <Button
                block
                id={"go_next"}
                onClick={goNextPage}
                disabled={currentPage >= maxPageNum}
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