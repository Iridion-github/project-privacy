import styles from "../styles/Home.module.css";
import { useState, useCallback, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useAppContext } from "../context/contextLib";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { NormativaChoice } from "../components/normativa/NormativaChoice";
import { NormativaCard } from "../components/normativa/NormativaCard";
import { RightMenu } from "../components/home/RightMenu";
import { Footer } from "../components/layout/Footer";
import { PdfViewer } from "../components/fileViewers/pdf/PdfViewer";

function normativa(props) {
  const { currentLang, changeSiteLang } = useAppContext();
  const [normativaSelected, setNormativaSelected] = useState(null);
  const [pdfToShow, setPdfToShow] = useState(null);
  const [showPdfModal, setShowPdfModal] = useState(false);

  const openPdfViewer = useCallback(() => {
    setShowPdfModal(true);
  });

  const closePdfViewer = useCallback(() => {
    setShowPdfModal(false);
    setNormativaSelected(null);
  });

  useEffect(() => {
    if (normativaSelected) {
      const pdfToShowValue = {
        relativePath: normativaSelected.fileUrl,
        filename: normativaSelected.title,
      };
      setPdfToShow(pdfToShowValue);
    } else {
      setPdfToShow(null);
    }
  }, [normativaSelected]);

  return (
    <div className={styles.container}>
      <Header title={currentLang === "ita" ? "Normativa" : "Regulations"} />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100 m-0 p-0">
          <Col md={{ span: 6, offset: 3 }} className="p-0">
            <Container className="justify-content-center p-0">
              <Card className="w-100 p-2 responsive-width-card">
                {/* todo: cambiare img */}
                <Card.Img className="black-border" variant="top" src="consulting.png" />
                <Card.Body>
                  <Row>
                    <Col md={3}>
                      {normativaSelected && (
                        <Button variant="info" onClick={() => setNormativaSelected(null)}>
                          <i className="fas fa-long-arrow-alt-left mr-2"></i>
                          {currentLang === "ita" ? "Torna Indietro" : "Back to Selection"}
                        </Button>
                      )}
                    </Col>
                    <Col md={6}>
                      <Card.Title className="text-center">
                        <h1>
                          {currentLang === "ita" ? "Normativa" : "Regulations"}
                          {normativaSelected ? ": " + normativaSelected.title : ""}
                        </h1>
                      </Card.Title>
                    </Col>
                  </Row>
                  {!normativaSelected && <NormativaChoice normative={props.normative} setNormativa={setNormativaSelected} currentLang={currentLang} />}
                  {normativaSelected && (
                    <NormativaCard normativa={normativaSelected} setNormativa={setNormativaSelected} currentLang={currentLang} openPdfViewer={openPdfViewer} normativaSelected={normativaSelected} />
                  )}
                </Card.Body>
                <Card.Footer className="text-center"></Card.Footer>
              </Card>
              {pdfToShow && (
                <PdfViewer
                  path={pdfToShow.relativePath}
                  //buffer={el.buffer}
                  filename={pdfToShow.filename}
                  //show={showPdfModal === el.relativepath || showPdfModal === el.buffer}
                  show={showPdfModal}
                  onClose={closePdfViewer}
                />
              )}
            </Container>
          </Col>
          <Col md={{ span: 3, offset: 0 }} className="m-0 p-0 justify-content-center">
            <RightMenu currentLang={currentLang} />
          </Col>
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  // const apiUrl = "http://" + context.req.headers.host + "/api/consultation";
  // const resConsult = await fetch(apiUrl);
  // const consultations = await resConsult.json();
  const normative = {
    data: [
      {
        id: "0",
        title: "Anticorruzione",
        fileUrl: "/normativa/anticorruzione.pdf",
      },
      {
        id: "1",
        title: "Antiriciclaggio",
        fileUrl: "/normativa/antiriciclaggio.pdf",
      },
      {
        id: "2",
        title: "Privacy",
        fileUrl: "/normativa/privacy.pdf",
      },
      {
        id: "3",
        title: "Responsabilità degli Enti",
        fileUrl: "/normativa/responsabilita_enti.pdf",
      },
    ],
  };
  return { props: { normative: normative.data } };
}

export default normativa;
