import styles from "../styles/Home.module.css";
import { useState, useCallback, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useAppContext } from "../context/contextLib";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { NormativaChoice } from "../components/normativa/NormativaChoice";
import { RightMenu } from "../components/home/RightMenu";
import { Footer } from "../components/layout/Footer";
import { PdfViewer } from "../components/fileViewers/pdf/PdfViewer";
import { PdfFileList } from "../components/fileLists/PdfFileList";

const getHumanizedTitle = str => {
  switch (str) {
    case "organismiSovranazionali":
      return "Organismi Sovranazionali";
    case "ministeroEconomiaFinanze":
      return "Ministero Economia e Finanze";
    case "bancaItalia":
      return "Banca d'Italia";
    case "unitaInformazioneFinanziaria":
      return "Unità di Informazione Finanziaria";
    case "guardiaFinanza":
      return "Guardia di Finanza";
    case "autoritaBancariaEuropea":
      return "Autorità Bancaria Europea";
    case "terrorismoInternazionale":
      return "Terrorismo Internazionale";
    case "valuteVirtuali":
      return "Valute Virtuali";
    case "proliferazioneArmiDistruzioneMassa":
      return "Proliferazione Armi di Distruzione di Massa";
    case "europea":
      return "Europea";
    case "nazionale":
      return "Nazionale";
    case "provvGarante":
      return "Provvedimento Garante";
    case "provvEDPB":
      return "Provvedimento EDPB";
  }
};

function normativa(props) {
  const { currentLang } = useAppContext();
  const [normativaSelected, setNormativaSelected] = useState(null);
  const handleSetNormativeSelected = useCallback(norm => {
    setNormativaSelected(norm);
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
    if (normativaSelected && !subSectionSelected) {
      handleSetNormativeSelected(null);
    } else if (normativaSelected && subSectionSelected) {
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
    if (normativaSelected && subSectionSelected && fileSelected) {
      const pdfToShowValue = {
        relativePath: fileSelected.url,
        filename: fileSelected.title,
      };
      setPdfToShow(pdfToShowValue);
    } else {
      setPdfToShow(null);
    }
  }, [normativaSelected, subSectionSelected, fileSelected]);

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
                        <Button variant="info" onClick={() => handleGoBackBtn()}>
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
                  {normativaSelected && !subSectionSelected && <NormativaChoice normative={normativaSelected.subSections} setNormativa={handleSetSubsectionSelected} currentLang={currentLang} />}
                  {normativaSelected && subSectionSelected && (
                    <Row className="w-100 m-0 p-0">
                      <PdfFileList files={subSectionSelected.fileUrls} onFileClick={selectItem} />
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
  const normative = {
    data: [
      {
        id: "0",
        title: "Anticorruzione",
        subSections: [
          {
            id: "europea",
            title: "Europea",
            fileUrls: [
              { id: "0", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - Europea - 1 (europea)" },
              { id: "1", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - Europea - 2 (europea)" },
            ],
          },
          {
            id: "nazionale",
            title: "Nazionale",
            fileUrls: [
              { id: "0", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - Nazionale - 1 (europea)" },
              { id: "1", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - Nazionale - 2 (europea)" },
            ],
          },
          {
            id: "provvGarante",
            title: "Provvedimento garante",
            fileUrls: [
              { id: "0", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - Provvedimento garante - 1 (europea)" },
              { id: "1", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - Provvedimento garante - 2 (europea)" },
            ],
          },
          {
            id: "provvEDPB",
            title: "Provvedimento EDPB",
            fileUrls: [
              { id: "0", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - Provvedimento EDPB - 1 (europea)" },
              { id: "1", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - Provvedimento EDPB - 2 (europea)" },
            ],
          },
        ],
      },
      {
        id: "1",
        title: "Antiriciclaggio",
        subSections: [
          {
            id: "organismiSovranazionali",
            title: getHumanizedTitle("organismiSovranazionali"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - " + getHumanizedTitle("organismiSovranazionali") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "ministeroEconomiaFinanze",
            title: getHumanizedTitle("ministeroEconomiaFinanze"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - " + getHumanizedTitle("ministeroEconomiaFinanze") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "bancaItalia",
            title: getHumanizedTitle("bancaItalia"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - " + getHumanizedTitle("bancaItalia") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "unitaInformazioneFinanziaria",
            title: getHumanizedTitle("unitaInformazioneFinanziaria"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - " + getHumanizedTitle("unitaInformazioneFinanziaria") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "guardiaFinanza",
            title: getHumanizedTitle("guardiaFinanza"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - " + getHumanizedTitle("guardiaFinanza") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "autoritaBancariaEuropea",
            title: getHumanizedTitle("autoritaBancariaEuropea"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - " + getHumanizedTitle("autoritaBancariaEuropea") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "terrorismoInternazionale",
            title: getHumanizedTitle("terrorismoInternazionale"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - " + getHumanizedTitle("terrorismoInternazionale") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "valuteVirtuali",
            title: getHumanizedTitle("valuteVirtuali"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - " + getHumanizedTitle("valuteVirtuali") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "proliferazioneArmiDistruzioneMassa",
            title: getHumanizedTitle("proliferazioneArmiDistruzioneMassa"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - " + getHumanizedTitle("proliferazioneArmiDistruzioneMassa") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
        ],
      },
      {
        id: "2",
        title: "Privacy",
        subSections: [
          {
            id: "europea",
            title: getHumanizedTitle("europea"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Privacy - " + getHumanizedTitle("europea") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "nazionale",
            title: getHumanizedTitle("nazionale"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Privacy - " + getHumanizedTitle("nazionale") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "provvGarante",
            title: getHumanizedTitle("provvGarante"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Privacy - " + getHumanizedTitle("provvGarante") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "provvEDPB",
            title: getHumanizedTitle("provvEDPB"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Privacy - " + getHumanizedTitle("provvEDPB") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
        ],
      },
      {
        id: "3",
        title: "Responsabilità degli Enti",
        subSections: [
          {
            id: "europea",
            title: getHumanizedTitle("europea"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Responsabilità degli Enti - " + getHumanizedTitle("europea") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "nazionale",
            title: getHumanizedTitle("nazionale"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Responsabilità degli Enti - " + getHumanizedTitle("nazionale") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "provvGarante",
            title: getHumanizedTitle("provvGarante"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Responsabilità degli Enti - " + getHumanizedTitle("provvGarante") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "provvEDPB",
            title: getHumanizedTitle("provvEDPB"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Responsabilità degli Enti - " + getHumanizedTitle("provvEDPB") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
        ],
      },
      {
        id: "4",
        title: '"Codice" di consumo',
        subSections: [
          {
            id: "europea",
            title: getHumanizedTitle("europea"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: '"Codice" di consumo - ' + getHumanizedTitle("europea") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "nazionale",
            title: getHumanizedTitle("nazionale"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: '"Codice" di consumo - ' + getHumanizedTitle("nazionale") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "provvGarante",
            title: getHumanizedTitle("provvGarante"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: '"Codice" di consumo - ' + getHumanizedTitle("provvGarante") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "provvEDPB",
            title: getHumanizedTitle("provvEDPB"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: '"Codice" di consumo - ' + getHumanizedTitle("provvEDPB") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
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
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Contrasto alla criminalità organizzata - " + getHumanizedTitle("europea") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "nazionale",
            title: getHumanizedTitle("nazionale"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Contrasto alla criminalità organizzata - " + getHumanizedTitle("nazionale") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "provvGarante",
            title: getHumanizedTitle("provvGarante"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Contrasto alla criminalità organizzata - " + getHumanizedTitle("provvGarante") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "provvEDPB",
            title: getHumanizedTitle("provvEDPB"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Contrasto alla criminalità organizzata - " + getHumanizedTitle("provvEDPB") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
        ],
      },
    ],
  };
  return { props: { normative: normative.data } };
}

export default normativa;
