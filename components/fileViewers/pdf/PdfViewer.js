import { useState, useEffect } from 'react'
import { useLanguage } from '../../../context/siteLanguageContext' //context
import {
  Row,
  Button,
  Modal
} from 'react-bootstrap'


export const PdfViewer = function (props) {
  const siteLanguage = useLanguage() //context
  const [pdf, setPdf] = useState(null)
  const [maxPageNum, setMaxPageNum] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(1.4)
  const [ready, setReady] = useState(false)

  const renderPdf = () => {
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
    pdfjsLib.getDocument(props.path).then(async pdfResult => {
      if (!maxPageNum) {
        console.log("pdfjsLibSetup - maxPageNum is not set yet")
        await setMaxPageNum(pdfResult._pdfInfo.numPages)
        console.log("pdfjsLibSetup - setting maxPageNum to ", pdfResult._pdfInfo.numPages)
      }
      console.log("pdfjsLibSetup - pdf is not set")
      setPdf(pdfResult)
      console.log("pdfjsLibSetup - setting pdf to ", pdfResult)
      setReady(true)
    })
  }

  if (!pdf) pdfjsLibSetup()

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

  const zoomIn = () => {
    setZoom(zoom + 1)
  }

  const zoomOut = () => {
    setZoom(zoom - 1)
  }

  const handleClose = () => {
    setPdf(null)
    setCurrentPage(1)
    setZoom(1.4)
    props.onClose()
  }

  useEffect(() => { })

  return (
    <Row className="w-100 m-auto">
      <Modal
        className="justify-content-center"
        show={props.show && ready}
        onHide={handleClose}
        dialogClassName="pdfviewer-dialog"
      >
        <Modal.Header
          className="text-center justify-content-center"
          closeButton
        >
          <Modal.Title>
            {siteLanguage === "ita" ? "Visualizzatore Pdf" : "Pdf Viewer"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="w-100">
          {/* Altra soluzione in caso di seri problemi: html object
          <object width="400" height="400" data={props.path} type="application/pdf"></object>
          */}
          <div id={"my_pdf_viewer"}>
            <div id={"canvas_container"}>
              <canvas id={"pdf_renderer_" + props.path}></canvas>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div id={"navigation_controls"}>
            <Button
              size="sm"
              id={"go_previous"}
              onClick={goPrevPage}
              disabled={currentPage < 2}
              variant="info"
            >
              Previous
                    </Button>
            <input
              id={"current_page"}
              value={currentPage}
              onChange={() => true}
              type="number"
              className="ml-1 mr-1"
            />
            <Button
              size="sm"
              id={"go_next"}
              onClick={goNextPage}
              variant="info"
            >
              Next
                      </Button>
          </div>

          <div id={"zoom_controls"}>
            <Button
              size="sm"
              id={"zoom_out"}
              onClick={() => zoomOut()}
              disabled={zoom < 2}
              variant="info"
              className="mr-1"
            >
              Zoom -
          </Button>
            <Button
              size="sm"
              id={"zoom_in"}
              onClick={() => zoomIn()}
              variant="info"
            >
              Zoom +
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}