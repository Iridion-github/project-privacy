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
import { PdfFileList } from "../components/fileLists/PdfFileList";

function normativa(props) {
  const { currentLang, changeSiteLang } = useAppContext();
  const [normativaSelected, setNormativaSelected] = useState(null);

  const handleSetNormativeSelected = useCallback(norm => {
    setNormativaSelected(norm);
  });

  const [listItemSelected, setListItemSelected] = useState(null);
  const [pdfToShow, setPdfToShow] = useState(null);
  const [showPdfModal, setShowPdfModal] = useState(false);

  const openPdfViewer = useCallback(() => {
    setShowPdfModal(true);
  });

  const closePdfViewer = useCallback(() => {
    setShowPdfModal(false);
    deselectItem();
  });

  const selectItem = useCallback(item => {
    setListItemSelected(item);
  }, []);

  const deselectItem = useCallback(() => {
    setListItemSelected(null);
  }, []);

  const getHumanizedTitle = useCallback(str => {
    switch (str) {
      case "europea":
        return "Europea";
      case "nazionale":
        return "Nazionale";
      case "provvGarante":
        return "Provvedimento Garante";
      case "provvEDPB":
        return "Provvedimento EDPB";
    }
  });

  useEffect(() => {
    if (normativaSelected && listItemSelected) {
      const pdfToShowValue = {
        relativePath: listItemSelected.url,
        filename: listItemSelected.title,
      };
      setPdfToShow(pdfToShowValue);
    } else {
      setPdfToShow(null);
    }
  }, [normativaSelected, listItemSelected]);

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
                        <Button variant="info" onClick={() => handleSetNormativeSelected(null)}>
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
                  {!normativaSelected && <NormativaChoice normative={props.normative} setNormativa={handleSetNormativeSelected} currentLang={currentLang} />}
                  {normativaSelected && (
                    <Row className="w-100 m-0 p-0">
                      {Object.keys(normativaSelected.fileUrls).map(x => {
                        return (
                          <Col key={x} md={{ span: 6, offset: 0 }} className="p-4">
                            <Row className="w-100 m-0 p-0">
                              <Col md={{ span: 12, offset: 0 }} className="text-center">
                                <h4>{getHumanizedTitle(x)}</h4>
                              </Col>
                            </Row>
                            <PdfFileList files={normativaSelected.fileUrls[x]} onFileClick={selectItem} />
                          </Col>
                        );
                      })}
                    </Row>
                  )}
                  {normativaSelected && listItemSelected && (
                    <NormativaCard
                      normativa={normativaSelected}
                      setNormativa={handleSetNormativeSelected}
                      currentLang={currentLang}
                      openPdfViewer={openPdfViewer}
                      normativaSelected={normativaSelected}
                    />
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
        fileUrls: {
          europea: [{ id: "0", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione 1 (europea)" }],
          nazionale: [{ id: "0", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione 1 (nazionale)" }],
          provvGarante: [{ id: "0", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione 1 (provvGarante)" }],
          provvEDPB: [{ id: "0", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione 1 (provvEDPB)" }],
        },
      },
      {
        id: "1",
        title: "Antiriciclaggio",
        fileUrls: {
          europea: [{ id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio 1 (europea)" }],
          nazionale: [
            { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio 1 (nazionale)" },
            { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
          ],
          provvGarante: [{ id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio 1 (provvGarante)" }],
          provvEDPB: [{ id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio 1 (provvEDPB)" }],
        },
      },
      {
        id: "2",
        title: "Privacy",
        fileUrls: {
          europea: [
            { id: "0", url: "/normativa/codice-privacy.pdf", title: "Codice Privacy (europea)" },
            { id: "1", url: "/normativa/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
          ],
          nazionale: [
            { id: "0", url: "/normativa/codice-privacy.pdf", title: "Codice Privacy (nazionale)" },
            { id: "1", url: "/normativa/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
          ],
          provvGarante: [
            { id: "0", url: "/normativa/codice-privacy.pdf", title: "Codice Privacy (provvGarante)" },
            { id: "1", url: "/normativa/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
          ],
          provvEDPB: [
            { id: "0", url: "/normativa/codice-privacy.pdf", title: "Codice Privacy (provvEDPB)" },
            { id: "1", url: "/normativa/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
          ],
        },
      },
      {
        id: "3",
        title: "Responsabilità degli Enti",
        fileUrls: {
          europea: [{ id: "0", url: "/normativa/responsabilita-enti.pdf", title: "Responsabilità degli Enti 1 (europea)" }],
          nazionale: [{ id: "0", url: "/normativa/responsabilita-enti.pdf", title: "Responsabilità degli Enti 1 (nazionale)" }],
          provvGarante: [{ id: "0", url: "/normativa/responsabilita-enti.pdf", title: "Responsabilità degli Enti 1 (provvGarante)" }],
          provvEDPB: [{ id: "0", url: "/normativa/responsabilita-enti.pdf", title: "Responsabilità degli Enti 1 (provvEDPB)" }],
        },
      },
    ],
  };
  return { props: { normative: normative.data } };
}

export default normativa;
