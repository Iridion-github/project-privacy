import styles from "../styles/Home.module.css";
import { useState, useCallback, useEffect, useMemo } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useAppContext } from "../context/contextLib";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { NormativaChoice } from "../components/normativa/NormativaChoice";
import { RightMenu } from "../components/home/RightMenu";
import { Footer } from "../components/layout/Footer";
import { PdfViewer } from "../components/fileViewers/pdf/PdfViewer";
import { PdfFileList } from "../components/fileLists/PdfFileList";
import { LinksList } from "../components/fileLists/LinksList";

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
      return "Provvedimenti Garante";
    case "provvEDPB":
      return "Provvedimenti EDPB";
    case "codiceAppalti":
      return "Codice Appalti";
    case "anac":
      return "ANAC - Autorità Nazionale Anti-Corruzione";
    case "lineeGuidaAssCategoria":
      return "Linee guida associazioni di categoria";
    case "provvAutoGaranteConcorrMercato":
      return "Provvedimenti autorità garante per concorrenza mercato (Antitrust)";
    default:
      return " - ";
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

  const showSelectionNormativa = useMemo(() => {
    return !normativaSelected;
  }, [normativaSelected]);

  const showSelectionSubSection = useMemo(() => {
    return normativaSelected && !subSectionSelected;
  }, [normativaSelected, subSectionSelected]);

  const showPdfFileList = useMemo(() => {
    return normativaSelected && subSectionSelected && subSectionSelected.fileUrls && subSectionSelected.fileUrls.length;
  }, [normativaSelected, subSectionSelected]);

  const showLinksList = useMemo(() => {
    return normativaSelected && subSectionSelected && subSectionSelected.linkUrls && subSectionSelected.linkUrls.length;
  }, [normativaSelected, subSectionSelected]);

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
                  <Row className="w-100 m-0 p-0">
                    <Col md={12} className="justify-content-center text-center p-0" style={{ zIndex: 1 }}>
                      <Card.Title>
                        <h3>
                          {currentLang === "ita" ? "Normativa" : "Regulations"}
                          {normativaSelected ? "/" + normativaSelected.title : ""}
                          {subSectionSelected ? "/" + subSectionSelected.title : ""}
                        </h3>
                      </Card.Title>
                    </Col>
                  </Row>
                  {showSelectionNormativa && <NormativaChoice normative={props.normative} setNormativa={handleSetNormativeSelected} />}
                  {showSelectionSubSection && (
                    <NormativaChoice normative={normativaSelected.subSections} setNormativa={handleSetSubsectionSelected} currentLang={currentLang} handleGoBackBtn={handleGoBackBtn} />
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
            id: "anac",
            title: "ANAC - Autorità Nazionale Anti-Corruzione",
            fileUrls: [
              { id: "0", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - ANAC - Autorità Nazionale Anti-Corruzione - 1 (europea)" },
              { id: "1", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - ANAC - Autorità Nazionale Anti-Corruzione - 2 (europea)" },
            ],
          },
          {
            id: "codiceAppalti",
            title: "Codice appalti",
            fileUrls: [
              { id: "0", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - Codice appalti - 1 (europea)" },
              { id: "1", url: "/normativa/anticorruzione1.pdf", title: "Anticorruzione - Codice appalti - 2 (europea)" },
            ],
          },
        ],
      },
      {
        id: "1",
        title: "Antiriciclaggio",
        subSections: [
          {
            id: "europea",
            title: "Europea",
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - Europea - 1 (europea)" },
              { id: "1", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - Europea - 2 (europea)" },
            ],
          },
          {
            id: "nazionale",
            title: "Nazionale",
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - Nazionale - 1 (europea)" },
              { id: "1", url: "/normativa/antiriciclaggio1.pdf", title: "Antiriciclaggio - Nazionale - 2 (europea)" },
            ],
          },
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
            fileUrls: [{ id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Regolamento UE 679/2016 - GDPR" }],
            linkUrls: [
              { id: "0", url: "https://www.google.it/", title: "link numero 1" },
              { id: "1", url: "https://www.google.it/", title: "link numero 2" },
              { id: "2", url: "https://www.google.it/", title: "link numero 3" },
            ],
          },
          {
            id: "nazionale",
            title: getHumanizedTitle("nazionale"),
            fileUrls: [{ id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Codice Privacy" }],
            linkUrls: [
              { id: "0", url: "https://www.google.it/", title: "link numero 1" },
              { id: "1", url: "https://www.google.it/", title: "link numero 2" },
              { id: "2", url: "https://www.google.it/", title: "link numero 3" },
            ],
          },
          {
            id: "provvGarante",
            title: getHumanizedTitle("provvGarante"),
            linkSections: ["Linee guida e pareri", "Provvedimenti sanzionatori"],
            linkUrls: [
              { id: "0", url: "https://www.google.it/", title: "Linee guida e pareri link numero 1", section: "Linee guida e pareri" },
              { id: "1", url: "https://www.google.it/", title: "Linee guida e pareri link numero 2", section: "Linee guida e pareri" },
              { id: "2", url: "https://www.google.it/", title: "Provvedimenti sanzionatori link numero 1", section: "Provvedimenti sanzionatori" },
              { id: "3", url: "https://www.google.it/", title: "Provvedimenti sanzionatori numero 2", section: "Provvedimenti sanzionatori" },
            ],
          },
          {
            id: "provvEDPB",
            title: getHumanizedTitle("provvEDPB"),
            linkSections: ["Linee guida e pareri"],
            linkUrls: [
              { id: "0", url: "https://www.google.it/", title: "Linee guida e pareri link numero 1", section: "Linee guida e pareri" },
              { id: "1", url: "https://www.google.it/", title: "Linee guida e pareri link numero 2", section: "Linee guida e pareri" },
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
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: getHumanizedTitle("europea") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "nazionale",
            title: getHumanizedTitle("nazionale"),
            fileUrls: [{ id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "D.Lgs 231/2001" }],
          },
          {
            id: "lineeGuidaAssCategoria",
            title: getHumanizedTitle("lineeGuidaAssCategoria"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: getHumanizedTitle("lineeGuidaAssCategoria") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
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
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: getHumanizedTitle("europea") },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Regolamento UE 2016/679" },
            ],
          },
          {
            id: "nazionale",
            title: getHumanizedTitle("nazionale"),
            fileUrls: [{ id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "D.Lgs " + getHumanizedTitle("nazionale") }],
          },
          {
            id: "provvAutoGaranteConcorrMercato",
            title: getHumanizedTitle("provvAutoGaranteConcorrMercato"),
            fileUrls: [{ id: "0", url: "/normativa/antiriciclaggio1.pdf", title: getHumanizedTitle("provvAutoGaranteConcorrMercato") }],
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
            fileUrls: [{ id: "0", url: "/normativa/antiriciclaggio1.pdf", title: getHumanizedTitle("europea") }],
          },
          {
            id: "nazionale",
            title: getHumanizedTitle("nazionale"),
            fileUrls: [
              { id: "0", url: "/normativa/antiriciclaggio1.pdf", title: "Codice Antimafia" },
              { id: "1", url: "/normativa/regolamento_UE_2016_679.pdf", title: "Codice penale" },
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
  return { props: { normative: normative.data } };
}

export default normativa;
