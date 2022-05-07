import styles from "../styles/Home.module.css";
import { useState, useMemo, useCallback, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";
import { RightMenu } from "../components/home/RightMenu";
import { GiurisprudenzaChoice } from "../components/giurisprudenza/GiurisprudenzaChoice";
import { PdfViewer } from "../components/fileViewers/pdf/PdfViewer";
import { PdfFileList } from "../components/fileLists/PdfFileList";
import { LinksList } from "../components/fileLists/LinksList";

const getHumanizedTitle = str => {
  switch (str) {
    case "corteCostituzionale":
      return "Corte Costituzionale";
    case "cassazione":
      return "Cassazione";
    case "corteDiCassazione":
      return "Corte di Cassazione";
    case "corteDiGiustiziaEuropea":
      return "Corte di Giustizia Europea";
    case "garantePrivacy":
      return "Garante Privacy";
    case "provvMinisEconoFinanza":
      return "Provvedimenti ministero Economia e Finanza";
    default:
      return " - ";
  }
};

function giurisprudenza(props) {
  const { currentLang, changeSiteLang } = useAppContext();
  const [giurisprudenzaSelected, setGiurisprudenzaSelected] = useState(null);
  const handleSetGiurisprudenzaSelected = useCallback(norm => {
    setGiurisprudenzaSelected(norm);
  });

  const [subSectionSelected, setSubSectionSelected] = useState(null);
  const handleSetSubsectionSelected = useCallback(subSect => {
    setSubSectionSelected(subSect);
  });

  const [fileSelected, setFileSelected] = useState(null);
  const handleSetFileSelected = useCallback(file => {
    setFileSelected(file);
  });

  const handleGoBackBtn = () => {
    if (giurisprudenzaSelected && !subSectionSelected) {
      handleSetGiurisprudenzaSelected(null);
    } else if (giurisprudenzaSelected && subSectionSelected) {
      handleSetSubsectionSelected(null);
    }
  };

  const [pdfToShow, setPdfToShow] = useState(null);

  const closePdfViewer = useCallback(() => {
    deselectItem();
  });

  const selectItem = useCallback(fileElem => {
    handleSetFileSelected(fileElem);
  }, []);

  const deselectItem = useCallback(() => {
    handleSetFileSelected(null);
  }, []);

  useEffect(() => {
    if (giurisprudenzaSelected && subSectionSelected && fileSelected) {
      const pdfToShowValue = {
        relativePath: fileSelected.url,
        filename: fileSelected.title,
      };
      setPdfToShow(pdfToShowValue);
    } else {
      setPdfToShow(null);
    }
  }, [giurisprudenzaSelected, subSectionSelected, fileSelected]);

  const showSelectionGiurisprudenza = useMemo(() => {
    return !giurisprudenzaSelected;
  }, [giurisprudenzaSelected]);

  const showSelectionSubSection = useMemo(() => {
    return giurisprudenzaSelected && !subSectionSelected;
  }, [giurisprudenzaSelected, subSectionSelected]);

  const showPdfFileList = useMemo(() => {
    return giurisprudenzaSelected && subSectionSelected && subSectionSelected.fileUrls && subSectionSelected.fileUrls.length;
  }, [giurisprudenzaSelected, subSectionSelected]);

  const showLinksList = useMemo(() => {
    return giurisprudenzaSelected && subSectionSelected && subSectionSelected.linkUrls && subSectionSelected.linkUrls.length;
  }, [giurisprudenzaSelected, subSectionSelected]);

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
                  <Row className="w-100 m-0 p-0">
                    <Col md={12} className="justify-content-center text-center p-0" style={{ zIndex: 1 }}>
                      <Card.Title>
                        <h3>
                          {currentLang === "ita" ? "Giurisprudenza" : "Jurisprudence"}
                          {giurisprudenzaSelected ? "/" + giurisprudenzaSelected.title : ""}
                          {subSectionSelected ? "/" + subSectionSelected.title : ""}
                        </h3>
                      </Card.Title>
                    </Col>
                  </Row>
                  {showSelectionGiurisprudenza && <GiurisprudenzaChoice giurisprudenze={props.giurisprudenze} setGiurisprudenza={handleSetGiurisprudenzaSelected} />}
                  {showSelectionSubSection && (
                    <GiurisprudenzaChoice
                      giurisprudenze={giurisprudenzaSelected.subSections}
                      setGiurisprudenza={handleSetSubsectionSelected}
                      currentLang={currentLang}
                      handleGoBackBtn={handleGoBackBtn}
                    />
                  )}
                  {showPdfFileList && (
                    <Row className="w-100 m-0 p-0">
                      <PdfFileList files={subSectionSelected.fileUrls} onFileClick={selectItem} colMd={6} currentLang={currentLang} handleGoBackBtn={handleGoBackBtn} />
                    </Row>
                  )}
                  {showLinksList && (
                    <Row className="w-100 m-0 p-0">
                      <LinksList
                        links={subSectionSelected.linkUrls}
                        colMd={6}
                        linkSections={subSectionSelected.linkSections}
                        currentLang={currentLang}
                        handleGoBackBtn={!showPdfFileList ? handleGoBackBtn : null}
                      />
                    </Row>
                  )}
                </Card.Body>
                <Card.Footer className="text-center"></Card.Footer>
              </Card>
              {pdfToShow && <PdfViewer path={pdfToShow.relativePath} filename={pdfToShow.filename} show={!!pdfToShow} onClose={closePdfViewer} />}
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
        subSections: [
          {
            id: "corteDiGiustiziaEuropea",
            title: getHumanizedTitle("corteDiGiustiziaEuropea"),
            fileUrls: [
              { id: "0", url: "/giurisprudenza/codice-privacy.pdf", title: "Codice Privacy (provvGarante)" },
              { id: "1", url: "/giurisprudenza/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
            ],
          },
          {
            id: "corteCostituzionale",
            title: getHumanizedTitle("corteCostituzionale"),
            fileUrls: [
              { id: "0", url: "/giurisprudenza/SENTENZA-corte-costituzionale-20-2019-accesso-civico.pdf", title: "Sentenza Corte Costituzionale 20/2019 accesso civico" },
              { id: "1", url: "/giurisprudenza/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
            ],
          },
          {
            id: "corteDiCassazione",
            title: getHumanizedTitle("corteDiCassazione"),
            fileUrls: [
              { id: "0", url: "/giurisprudenza/codice-privacy.pdf", title: "Codice Privacy (nazionale)" },
              { id: "1", url: "/giurisprudenza/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
            ],
          },
          {
            id: "garantePrivacy",
            title: getHumanizedTitle("garantePrivacy"),
            fileUrls: [
              { id: "0", url: "/giurisprudenza/codice-privacy.pdf", title: "Codice Privacy (provvEDPB)" },
              { id: "1", url: "/giurisprudenza/d-Legislativo101-2018.pdf", title: "D.Legislativo 101/2018" },
            ],
          },
        ],
      },
      {
        id: "1",
        title: "Anticorruzione",
        subSections: [
          {
            id: "corteCostituzionale",
            title: getHumanizedTitle("corteCostituzionale"),
            fileUrls: [{ id: "0", url: "/giurisprudenza/anticorruzione1.pdf", title: "Anticorruzione 1 (europea)" }],
          },
          {
            id: "cassazione",
            title: getHumanizedTitle("cassazione"),
            fileUrls: [{ id: "0", url: "/giurisprudenza/anticorruzione1.pdf", title: "Anticorruzione 1 (nazionale)" }],
          },
          {
            id: "corteDiGiustiziaEuropea",
            title: getHumanizedTitle("corteDiGiustiziaEuropea"),
            fileUrls: [{ id: "0", url: "/giurisprudenza/anticorruzione1.pdf", title: "Anticorruzione 1 (provvGarante)" }],
          },
        ],
      },
      {
        id: "2",
        title: "Antiriciclaggio",
        subSections: [
          {
            id: "corteDiCassazione",
            title: getHumanizedTitle("corteDiCassazione"),
            fileUrls: [
              { id: "0", url: "/giurisprudenza/antiriciclaggio1.pdf", title: "Antiriciclaggio 1 (nazionale)" },
              { id: "1", url: "/giurisprudenza/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "provvMinisEconoFinanza",
            title: getHumanizedTitle("provvMinisEconoFinanza"),
            linkUrls: [
              { id: "0", url: "https://www.google.it/", title: "link numero 1" },
              { id: "1", url: "https://www.google.it/", title: "link numero 2" },
            ],
          },
        ],
      },
      {
        id: "3",
        title: "Responsabilità degli Enti",
        subSections: [
          {
            id: "corteCostituzionale",
            title: getHumanizedTitle("corteCostituzionale"),
            fileUrls: [{ id: "0", url: "/giurisprudenza/responsabilita-enti.pdf", title: "Responsabilità degli Enti 1 (europea)" }],
          },
          {
            id: "cassazione",
            title: getHumanizedTitle("cassazione"),
            fileUrls: [{ id: "0", url: "/giurisprudenza/responsabilita-enti.pdf", title: "Responsabilità degli Enti 1 (nazionale)" }],
          },
          {
            id: "corteDiGiustiziaEuropea",
            title: getHumanizedTitle("corteDiGiustiziaEuropea"),
            fileUrls: [{ id: "0", url: "/giurisprudenza/responsabilita-enti.pdf", title: "Responsabilità degli Enti 1 (provvGarante)" }],
          },
        ],
      },
      {
        id: "4",
        title: "Codice di consumo",
        subSections: [
          {
            id: "europea",
            title: getHumanizedTitle("europea"),
            fileUrls: [
              { id: "0", url: "/giurisprudenza/antiriciclaggio1.pdf", title: getHumanizedTitle("europea") },
              { id: "1", url: "/giurisprudenza/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "nazionale",
            title: getHumanizedTitle("nazionale"),
            fileUrls: [{ id: "0", url: "/giurisprudenza/antiriciclaggio1.pdf", title: "D.Lgs " + getHumanizedTitle("nazionale") }],
          },
          {
            id: "provvAutoGaranteConcorrMercato",
            title: getHumanizedTitle("provvAutoGaranteConcorrMercato"),
            fileUrls: [{ id: "0", url: "/giurisprudenza/antiriciclaggio1.pdf", title: getHumanizedTitle("provvAutoGaranteConcorrMercato") }],
          },
        ],
      },
      {
        id: "5",
        title: "Contrasto alla criminalità organizzata",
        subSections: [
          {
            id: "europea",
            title: getHumanizedTitle("europea"),
            fileUrls: [{ id: "0", url: "/giurisprudenza/antiriciclaggio1.pdf", title: getHumanizedTitle("europea") }],
          },
          {
            id: "nazionale",
            title: getHumanizedTitle("nazionale"),
            fileUrls: [
              { id: "0", url: "/giurisprudenza/antiriciclaggio1.pdf", title: "Codice Antimafia" },
              { id: "1", url: "/giurisprudenza/regolamento_UE_2016_679.pdf", title: "Codice penale" },
            ],
            linkSections: ["Provv. vari"],
            linkUrls: [
              { id: "0", url: "https://www.google.it/", title: "Provv. vario numero 1", section: "Provv. vari" },
              { id: "1", url: "https://www.google.it/", title: "Provv. vario numero 2", section: "Provv. vari" },
            ],
          },
        ],
      },
    ],
  };
  return { props: { giurisprudenze: giurisprudenze.data } };
}

export default giurisprudenza;
