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
import html2canvas from 'html2canvas'


export const DocxViewer = function (props) {
  const siteLanguage = useLanguage() //context
  const [init, setInit] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pdfViewerClass, setPdfViewerClass] = useState("my_pdf_viewer-preCanvas")



  const renderDocx = async (targetZoom) => {
    if (!targetZoom) targetZoom = 1
    const pdfViewer = document.getElementById("my_pdf_viewer")
    const text = props.content
    pdfViewer.innerHTML += text //Prima inserisco il contenuto del docx nel pdfViewer, come HTML puro

    html2canvas(document.getElementById("my_pdf_viewer")) //html2canvas screena l'elemento posto come param
      .then(function (canvas) { //canvas è lo screen dell'elemento        
        pdfViewer.innerHTML = "" //Rimuovo l'html per non render semplice il furto di contenuti    
        //[Checkpoint] Trovare il modo di mostrare il content mancante, di non far sforare il canvas ed in seguito, di zoomare.    
        //canvas.style = "" //Canvas per qualche motivo ha sia le props height e width dirette sia lo style con height e width, identici.
        console.log("canvas:", canvas)
        const context = canvas.getContext('2d') //Dobbiamo provare a settare roba col context.
        console.log("context:", context)
        //context.canvas.clientHeight = 1000 //Qualsiasi modifica, in aggiunta o riduzione, pare turbofottere l'intero canvas.
        canvas.className = "shown-canvas"
        document.getElementById("my_pdf_viewer").appendChild(canvas)
        setPdfViewerClass("my_pdf_viewer-postCanvas")
      })
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
                <Col md={{ span: 12 }} className="m-0 p-0 text-right">
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

          <Row
            id={"my_pdf_viewer"}
            className={pdfViewerClass}
          >
            <Col
              md={{ span: 8, offset: 2 }}
              id={"docx_renderer"}
              className="text-left"
            >
            </Col>
          </Row>

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