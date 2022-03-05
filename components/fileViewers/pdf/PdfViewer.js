import { useState, useEffect } from "react";
import { Row, Col, Button, Modal, InputGroup, FormControl } from "react-bootstrap";

export const PdfViewer = function (props) {
  const [pdf, setPdf] = useState(null);
  const [init, setInit] = useState(false);
  const [maxPageNum, setMaxPageNum] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [destination, setDestination] = useState(null);

  const renderPdf = (pdf, targetPage, targetZoom) => {
    const isMobile = screen.width < 400;
    if (!targetZoom) targetZoom = 1;
    setDestination(null);
    pdf.getPage(targetPage).then(async page => {
      const canvas = document.getElementById("pdf_renderer");
      const ctx = canvas.getContext("2d");
      const viewport = page.getViewport(targetZoom); //grandezza ed altezza del contenitore della pagina
      canvas.width = viewport.width; //grandezza della pagina
      canvas.height = viewport.height; //altezza della pagina
      page.render({
        canvasContext: ctx,
        viewport: viewport,
      });
    });
  };

  const pdfjsLibSetup = async () => {
    if (!pdf) {
      let view = [];
      if (props.buffer) {
        view = await new Uint8Array(props.buffer.data);
      }
      try {
        const pathOrBuffer = props.buffer ? view : props.path;
        await pdfjsLib.getDocument(pathOrBuffer).then(async pdfResult => {
          try {
            if (!maxPageNum) {
              setMaxPageNum(pdfResult._pdfInfo.numPages);
            }
            setPdf(pdfResult);
          } catch (err) {
            console.log("error: ", err);
          }
        });
      } catch (err) {
        console.log("error: ", err);
      }
    }
  };

  const goPrevPage = () => {
    const prevPage = Number(currentPage - 1) > 0 ? Number(currentPage - 1) : 1;
    setCurrentPage(prevPage);
    renderPdf(pdf, prevPage, zoom);
  };

  const goNextPage = () => {
    const nextPage = Number(currentPage + 1) < maxPageNum ? Number(currentPage + 1) : maxPageNum;
    setCurrentPage(nextPage);
    renderPdf(pdf, nextPage, zoom);
  };

  const handleSetDestination = dest => {
    if (dest > maxPageNum) dest = maxPageNum;
    if (dest < 1) dest = 1;
    setDestination(dest);
  };

  const handleGoToDestination = () => {
    setCurrentPage(destination);
    renderPdf(pdf, destination, zoom);
  };

  const zoomIn = () => {
    const newZoomLevel = Number(zoom + 0.2);
    setZoom(newZoomLevel);
    renderPdf(pdf, currentPage, newZoomLevel);
  };

  const zoomOut = () => {
    const newZoomLevel = Number(zoom - 0.2);
    setZoom(newZoomLevel);
    renderPdf(pdf, currentPage, newZoomLevel);
  };

  const handleClose = () => {
    setPdf(null);
    setCurrentPage(1);
    setInit(false);
    setMaxPageNum(null);
    setZoom(1);
    setDestination(null);
    props.onClose();
  };

  useEffect(() => {
    if (props.show) {
      if (!pdf) {
        pdfjsLibSetup();
      }
      document.title = `Pdf viewer - page: ` + currentPage + " / " + maxPageNum;
      if (pdf && !init) {
        setInit(true);
        renderPdf(pdf, 1, zoom);
      }
    }
  }, [pdf, init]);

  return (
    <Row className="w-100 m-auto">
      <Modal className="justify-content-center" show={props.show} onHide={handleClose} dialogClassName="w-100 pdfviewer-dialog">
        <Modal.Header className="w-100">
          <Modal.Title className="row w-100">
            <Col md={{ span: 4 }} className="text-center">
              <div id={"zoom_controls"} className="text-left">
                <Button size="lg" id={"zoom_out"} onClick={zoomOut} disabled={zoom <= 1} variant="info" className="mr-1">
                  <i className="fas fa-search-minus"></i>
                </Button>
                <Button size="lg" id={"zoom_in"} onClick={zoomIn} disabled={zoom >= 2.5} variant="info">
                  <i className="fas fa-search-plus"></i>
                </Button>
              </div>
            </Col>
            <Col md={{ span: 4 }} className="text-center">
              <h2>{props.filename}</h2>
            </Col>
            <Col md={{ span: 4 }} className="m-0 p-0">
              <Row className="w-100">
                <Col md={{ span: 6 }} className="m-0 p-0 text-center">
                  {currentPage} / {maxPageNum}
                </Col>
                <Col md={{ span: 6 }} className="m-0 p-0 text-right">
                  <Button size="lg" onClick={handleClose} variant="danger">
                    <i className="fas fa-times"></i>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="" style={{ padding: 0 }}>
          {/* Altra soluzione in caso di seri problemi: html object
          <object width="400" height="400" data={props.path} type="application/pdf"></object>
          */}
          <div id={"my_pdf_viewer"}>
            <div id={"canvas_container"} className="justify-content-center text-center">
              <canvas id={"pdf_renderer"}></canvas>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div id={"navigation_controls"} className="w-100 row">
            <Col md={{ span: 2 }} className="mb-2">
              <Button block id={"go_previous"} onClick={goPrevPage} disabled={currentPage === 1} variant="info">
                <i className="fas fa-arrow-left mr-1"></i>
                <i className="far fa-file"></i>
              </Button>
            </Col>
            <Col md={{ span: 4, offset: 2 }} className="p-0 mb-2">
              <InputGroup className="pl-4">
                <FormControl className="mr-2" id={"current_page"} value={destination !== null ? destination : currentPage} onChange={event => handleSetDestination(Number(event.target.value))} />
                <span style={{ lineHeight: 2.2 }}> / {maxPageNum}</span>
                <Button size="md" className="ml-3 mr-1" onClick={handleGoToDestination} disabled={destination === null || currentPage === destination} variant="info">
                  <i className="far fa-arrow-alt-circle-right"></i>
                </Button>
              </InputGroup>
            </Col>
            <Col md={{ span: 2, offset: 2 }} className="mb-2">
              <Button block id={"go_next"} onClick={goNextPage} disabled={currentPage >= maxPageNum} variant="info">
                <i className="far fa-file"></i>
                <i className="fas fa-arrow-right ml-1"></i>
              </Button>
            </Col>
          </div>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};
