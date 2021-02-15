import { useState, useEffect } from 'react'
import { useLanguage } from '../../../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'


export const PdfViewer = function (props) {
  const siteLanguage = useLanguage() //context
  const [pdf, setPdf] = useState(null)
  const [maxPageNum, setMaxPageNum] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(1.4)

  const renderPdf = (_pdf) => {
    console.log("renderPdf was called")
    _pdf.getPage(currentPage).then((page) => {
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

  const pdfjsLibSetup = () => {
    pdfjsLib.getDocument(props.path).then(async (_file) => {
      await setMaxPageNum(_file._pdfInfo.numPages)
      await setPdf(_file)
      renderPdf(_file)
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

  const zoomIn = () => {
    setZoom(zoom + 1)
  }

  const zoomOut = () => {
    setZoom(zoom - 1)
  }

  useEffect(() => {
    if (!pdf) {
      pdfjsLibSetup()
    }
  })

  return (
    <Row className="w-100 m-auto">
      <Card className="w-100 mb-4 p-1 grey-border">
        <Button
          className=""
          variant="info"
          href="/articoli"
        >
          <i className="fas fa-long-arrow-alt-left mr-2"></i> {siteLanguage === "ita" ? "Torna all'Archivio" : "Back to the Archive"}
        </Button>
        <Card.Header className="pb-0">
          <Row>
            <Col md={{ span: 12, offset: 0 }}>
              <Row>
                <h3 className=""><strong>{siteLanguage === "ita" ? "Visualizzatore Pdf" : "Pdf Viewer"}</strong></h3>
              </Row>
            </Col>
          </Row>
          <Row className="w-100 ml-0">
            <Col md={9} className="pr-0 pl-0">
              <Row className="w-100 mr-0 ml-0">
                {pdf &&
                  <div id={"my_pdf_viewer"}>
                    <div id={"canvas_container"}>
                      <canvas id={"pdf_renderer_" + props.path}></canvas>
                    </div>
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

                    <div id={"zoom_controls"} >
                      <Button
                        id={"zoom_in"}
                        onClick={() => zoomIn()}
                        variant="info"
                      >
                        +
                    </Button>
                      <Button
                        id={"zoom_out"}
                        onClick={() => zoomOut()}
                        disabled={zoom < 2}
                        variant="info"
                      >
                        -
                      </Button>
                    </div>
                  </div>
                }
              </Row>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={12} className="">

            </Col>
          </Row>
        </Card.Body>
      </Card >
    </Row>
  )
}