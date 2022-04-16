import styles from "../styles/Home.module.css";
import { useState, useCallback, useEffect } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";
import { RightMenu } from "../components/home/RightMenu";
import { GiurisprudenzaChoice } from "../components/giurisprudenza/GiurisprudenzaChoice";
import { GiurisprudenzaCard } from "../components/giurisprudenza/GiurisprudenzaCard";
import { PdfViewer } from "../components/fileViewers/pdf/PdfViewer";
import { PdfFileList } from "../components/fileLists/PdfFileList";

function giurisprudenza(props) {
  const { currentLang, changeSiteLang } = useAppContext();
  const [giurisprudenzaSelected, setGiurisprudenzaSelected] = useState(null);

  const handleSetGiurisprudenzaSelected = useCallback(norm => {
    setGiurisprudenzaSelected(norm);
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
      case "corteCostituzionale":
        return "Corte Costituzionale";
      case "cassazione":
        return "Cassazione";
      case "corteDiGiustiziaEuropea":
        return "Corte di Giustizia Europea";
      case "garantePrivacy":
        return "Garante Privacy";
    }
  });

  useEffect(() => {
    if (giurisprudenzaSelected && listItemSelected) {
      const pdfToShowValue = {
        relativePath: listItemSelected.url,
        filename: listItemSelected.title,
      };
      setPdfToShow(pdfToShowValue);
    } else {
      setPdfToShow(null);
    }
  }, [giurisprudenzaSelected, listItemSelected]);

  return (
    <div className={styles.container}>
      <Header title={currentLang === "ita" ? "Giurisprudenza" : "Jurisprudence"} />
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
                      {giurisprudenzaSelected && (
                        <Button variant="info" onClick={() => handleSetGiurisprudenzaSelected(null)}>
                          <i className="fas fa-long-arrow-alt-left mr-2"></i>
                          {currentLang === "ita" ? "Torna Indietro" : "Back to Selection"}
                        </Button>
                      )}
                    </Col>
                    <Col md={6}>
                      <Card.Title className="text-center">
                        <h1>
                          {currentLang === "ita" ? "Giurisprudenza" : "Jurisprudence"}
                          {giurisprudenzaSelected ? ": " + giurisprudenzaSelected.title : ""}
                        </h1>
                      </Card.Title>
                    </Col>
                  </Row>
                  {!giurisprudenzaSelected && <GiurisprudenzaChoice giurisprudenze={props.giurisprudenze} setGiurisprudenza={handleSetGiurisprudenzaSelected} currentLang={currentLang} />}
                  {giurisprudenzaSelected && (
                    <Row className="w-100 m-0 p-0">
                      {Object.keys(giurisprudenzaSelected.fileUrls).map(x => {
                        return (
                          <Col key={x} md={{ span: 6, offset: 0 }} className="p-4">
                            <Row className="w-100 m-0 p-0">
                              <Col md={{ span: 12, offset: 0 }} className="text-center">
                                <h4>{getHumanizedTitle(x)}</h4>
                              </Col>
                            </Row>
                            <PdfFileList files={giurisprudenzaSelected.fileUrls[x]} onFileClick={selectItem} />
                          </Col>
                        );
                      })}
                    </Row>
                  )}
                  {giurisprudenzaSelected && listItemSelected && (
                    <GiurisprudenzaCard
                      giurisprudenza={giurisprudenzaSelected}
                      setGiurisprudenza={handleSetGiurisprudenzaSelected}
                      currentLang={currentLang}
                      openPdfViewer={openPdfViewer}
                      giurisprudenzaSelected={giurisprudenzaSelected}
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
  const giurisprudenze = {
    data: [
      {
        id: "0",
        title: "Privacy",
        fileUrls: {
          corteCostituzionale: [
            { id: "0", url: "/giurisprudenza/SENTENZA-corte-costituzionale-20-2019-accesso-civico.pdf", title: "Sentenza Corte Costituzionale 20/2019 accesso civico" },
            { id: "1", url: "/giurisprudenza/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
          ],
          cassazione: [
            { id: "0", url: "/giurisprudenza/codice-privacy.pdf", title: "Codice Privacy (nazionale)" },
            { id: "1", url: "/giurisprudenza/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
          ],
          corteDiGiustiziaEuropea: [
            { id: "0", url: "/giurisprudenza/codice-privacy.pdf", title: "Codice Privacy (provvGarante)" },
            { id: "1", url: "/giurisprudenza/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
          ],
          garantePrivacy: [
            { id: "0", url: "/giurisprudenza/codice-privacy.pdf", title: "Codice Privacy (provvEDPB)" },
            { id: "1", url: "/giurisprudenza/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
          ],
        },
      },
      {
        id: "1",
        title: "Anticorruzione",
        fileUrls: {
          corteCostituzionale: [{ id: "0", url: "/giurisprudenza/anticorruzione1.pdf", title: "Anticorruzione 1 (europea)" }],
          cassazione: [{ id: "0", url: "/giurisprudenza/anticorruzione1.pdf", title: "Anticorruzione 1 (nazionale)" }],
          corteDiGiustiziaEuropea: [{ id: "0", url: "/giurisprudenza/anticorruzione1.pdf", title: "Anticorruzione 1 (provvGarante)" }],
          garantePrivacy: [{ id: "0", url: "/giurisprudenza/anticorruzione1.pdf", title: "Anticorruzione 1 (provvEDPB)" }],
        },
      },
      {
        id: "2",
        title: "Antiriciclaggio",
        fileUrls: {
          corteCostituzionale: [{ id: "0", url: "/giurisprudenza/antiriciclaggio1.pdf", title: "Antiriciclaggio 1 (europea)" }],
          cassazione: [
            { id: "0", url: "/giurisprudenza/antiriciclaggio1.pdf", title: "Antiriciclaggio 1 (nazionale)" },
            { id: "1", url: "/giurisprudenza/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
          ],
          corteDiGiustiziaEuropea: [{ id: "0", url: "/giurisprudenza/antiriciclaggio1.pdf", title: "Antiriciclaggio 1 (provvGarante)" }],
          garantePrivacy: [{ id: "0", url: "/giurisprudenza/antiriciclaggio1.pdf", title: "Antiriciclaggio 1 (provvEDPB)" }],
        },
      },
      {
        id: "3",
        title: "Responsabilità degli Enti",
        fileUrls: {
          corteCostituzionale: [{ id: "0", url: "/giurisprudenza/responsabilita-enti.pdf", title: "Responsabilità degli Enti 1 (europea)" }],
          cassazione: [{ id: "0", url: "/giurisprudenza/responsabilita-enti.pdf", title: "Responsabilità degli Enti 1 (nazionale)" }],
          corteDiGiustiziaEuropea: [{ id: "0", url: "/giurisprudenza/responsabilita-enti.pdf", title: "Responsabilità degli Enti 1 (provvGarante)" }],
          garantePrivacy: [{ id: "0", url: "/giurisprudenza/responsabilita-enti.pdf", title: "Responsabilità degli Enti 1 (provvEDPB)" }],
        },
      },
    ],
  };
  return { props: { giurisprudenze: giurisprudenze.data } };
}

export default giurisprudenza;
