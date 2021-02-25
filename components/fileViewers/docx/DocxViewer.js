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
import * as htmlToImage from 'html-to-image'


export const DocxViewer = function (props) {
  const siteLanguage = useLanguage() //context
  const [init, setInit] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [docxRendererStyle, setDocxRendererStyle] = useState({})

  const renderDocx = async (targetZoom) => {
    if (!targetZoom) targetZoom = 1
    const renderer = document.getElementById("docx_renderer")
    const text = props.content
    renderer.innerHTML += text
    renderer.onCopy = '() => false'
    renderer.onCut = '() => false'
    /**
     * [MEMO] 
     * Siamo costretti a usare il canvas: è l'unico modo per impedire il "furto dati" dall'html view. 
     * Problemi che ne conseguono:
     * 1) Il content è clippato male
     * 2) Il content non si presta bene allo zoom
     * 3) Il content è blurry as fuck
     */
    htmlToImage.toCanvas(renderer)
      .then(function (canvas) {
        const context = canvas.getContext('2d')
        context.scale(3, 3)
        context.imageSmoothingEnabled = false
        console.log("context:", context)
        //const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        //const modalWidth = Math.floor(viewportWidth * 0.50)
        //canvas.style.width = `${modalWidth}px` //ampiezza della pagina        
        document.getElementById("canvas_container").appendChild(canvas)
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
    await setDocxRendererStyle({ fontSize: targetZoom + "rem !important" })
    document.body.style.zoom = `${Math.floor(100 * targetZoom)}%`
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
    setInit(false)
    renderDocx(1)
    setZoom(1)
    props.onClose()
  }

  useEffect(() => {
    if (props.show) {
      document.title = "Docx viewer"
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
        <a name="top"></a>
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
            <Row id={"canvas_container"} className="w-100 p-0 ">
              <Col
                md={{ span: 8, offset: 2 }}
                id={"docx_renderer"}
                className="text-left p-5"
                style={docxRendererStyle}
              >
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div id={"navigation_controls"} className="w-100 row">
            <Col md={{ span: 2 }} className="mb-2">
            </Col>
            <Col md={{ span: 4, offset: 2 }} className="p-0 mb-2">
              <Row className="docxviewer-scrollup-btn-container">
                <Button
                  className="docxviewer-scrollup-btn"
                  variant="info"
                  href="#top"
                >
                  <i className="fas fa-arrow-circle-up"></i>
                </Button>
              </Row>
            </Col>
            <Col md={{ span: 2, offset: 2 }} className="mb-2">
            </Col>
          </div>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}