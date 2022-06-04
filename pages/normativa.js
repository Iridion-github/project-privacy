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
    case "ministeroInterni":
      return "Ministero degli Interni";
    case "ministeroGiustizia":
      return "Ministero della Giustizia";
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
              {
                id: "0",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/provv_indicatori_anomalia.pdf",
                title: "Provvedimento della Banca d'Italia del 30 gennaio 2013",
                subtitle: "Indicatori di anomalia per le società di revisione e revisori legali con incarichi di revisione su enti di interesse pubblico",
              },
              {
                id: "1",
                url: "https://www.bancaditalia.it/compiti/vigilanza/normativa/archivio-norme/riciclaggio-terrorismo/decreto-leg-2312007/provv_ind_anom.pdf",
                title: "PROVVEDIMENTO RECANTE GLI INDICATORI DI ANOMALIA PER GLI INTERMEDIARI",
              },
              {
                id: "2",
                url: "https://www.bancaditalia.it/compiti/vigilanza/normativa/archivio-norme/riciclaggio-terrorismo/decreto-leg-2312007/provv_ind_anom.pdf",
                title: "Provvedimento recante gli indicatori di anomalia per gli intermediari",
              },
              {
                id: "3",
                url: "https://www.bancaditalia.it/compiti/vigilanza/normativa/archivio-norme/disposizioni/armi-massa/armi_massa.pdf",
                title: "Provvedimento del 27 maggio 2009",
              },
              {
                id: "4",
                url: "https://www.bancaditalia.it/compiti/vigilanza/normativa/archivio-norme/disposizioni/armi-massa/armi_massa.pdf",
                title: "Provvedimento del 27 maggio 2009",
                subtitle: "Indicazioni operative per l'esercizio di controlli rafforzati contro il finanziamento dei programmi di proliferazione di armi di distruzione di massa",
              },
              {
                id: "5",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/Linee-guida-terremoto-Abruzzo.pdf",
                title: "'Linee-guida' emanate il 12 agosto 2010 e il 31 dicembre 2010 dal Comitato di coordinamento per l’alta sorveglianza delle grandi opere",
                subtitle:
                  "'Linee-guida' emanate il 12 agosto 2010 e il 31 dicembre 2010 dal Comitato di coordinamento per l’alta sorveglianza delle grandi opere in materia di ricostruzione di edifici pubblici e privati post-terremoto in Abruzzo",
              },
            ],
          },
          {
            id: "unitaInformazioneFinanziaria",
            title: getHumanizedTitle("unitaInformazioneFinanziaria"),
            linkUrls: [
              {
                id: "0",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/schemi-rappresentativi/Schemi-fiscali-10.11.2020.pdf",
                title: "Comunicazione UIF del 10 novembre 2020",
                subtitle: "Schemi rappresentativi di comportamenti anomali ai sensi dell'articolo 6, comma 7, lettera b), del d.lgs. 231/2007 - Operatività connessa con illeciti fiscali",
              },
              {
                id: "1",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/comunicato-UIF-1-agosto-2016.pdf",
                title: "Comunicazione UIF del 1° agosto 2016",
                subtitle: "Operatività over the counter con società estere di intermediazione mobiliare",
              },
              {
                id: "2",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/carte_pagamento_18022014.pdf",
                title: "Comunicazione UIF del 18 febbraio 2014",
                subtitle: "Schemi rappresentativi di comportamenti anomali ai sensi dell’articolo 6, comma 7, lettera b) del d.lgs. 231/2007 – operatività con carte di pagamento",
              },
              {
                id: "3",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/comunicato-02122013.pdf",
                title: "Comunicazione UIF del 2 dicembre 2013",
                subtitle: "Schema rappresentativo di comportamenti anomali ai sensi dell'art. 6, comma 7, lett. B) del d.lgs 231/2007 - Operatività connessa con l'anomalo utilizzo di trust",
              },
              {
                id: "4",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/COMUNICAZIONE_UIF_DEL_11_Aprile_2013.pdf",
                title: "Comunicazione UIF dell'11 aprile 2013",
                subtitle:
                  "Schemi rappresentativi di comportamenti anomali ai sensi dell’articolo 6, comma 7, lettera b) del d.lgs. 231/2007 - Operatività connessa con il settore dei giochi e delle scommesse",
              },
              {
                id: "5",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/COMUNICAZIONE_UIF_DEL_16_MARZO_2012.pdf",
                title: "Comunicazione UIF del 16 marzo 2012",
                subtitle:
                  "Schemi rappresentativi di comportamenti anomali ai sensi dell’articolo 6, comma 7, lettera b) del d.lgs. 231/2007 - Operatività connessa con il rischio di frodi nell’attività di factoring",
              },
              {
                id: "6",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/COMUNICAZIONE-090811.pdf",
                title: "Comunicazione UIF del 9 agosto 2011",
                subtitle: "Schemi rappresentativi di comportamenti anomali ai sensi dell’articolo 6, comma 7, lettera B) del d.lgs 231/2007 - Operatività riconducibile all'usura",
              },
              {
                id: "7",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/COMUNICAZIONE-180111.pdf",
                title: "Comunicazione UIF del 17 Gennaio 2011",
                subtitle:
                  "Schemi rappresentativi di comportamenti anomali ai sensi dell’articolo 6, comma 7, lettera B) del d.lgs 231/2007 - Operatività connessa con le frodi nell’attività di leasing",
              },
              {
                id: "8",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/Schemi_comp_anomal.pdf",
                title: "Comunicazione UIF dell’8 luglio 2010",
                subtitle: "Schemi rappresentativi di comportamenti anomali ai sensi dell'art. 6, co. 7, lett. B) del d.lgs 231/2007 - Operatività connessa con l'abuso di finanziamenti pubblici",
              },
              {
                id: "9",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/phising.pdf",
                title: "Comunicazione UIF del 5 febbraio 2010",
                subtitle: "Schemi rappresentativi di comportamenti anomali ai sensi dell’art. 6, co. 7, lett. b) del d.lgs 231/2007 – Frodi informatiche",
              },
              {
                id: "10",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/com_UIF_13_ottobre-09.pdf",
                title: "Comunicazione UIF del 13 ottobre 2009",
                subtitle: "Schema rappresentativo di comportamenti anomali ai sensi dell’art. 6, comma 7, lett. b) del d.lgs. n.231 del 2007. Conti dedicati",
              },
              {
                id: "11",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/sogg_diff_econ.pdf",
                title: "Comunicazione UIF del 24 settembre 2009",
                subtitle: "Schemi rappresentativi di comportamenti anomali ai sensi dell'art.6, co. 7, lett. B) del D.LGS 231/2007 – Imprese in crisi e usura",
              },
              {
                id: "12",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/Comunicazione-UIF-Covid-19-e-PNRR-11.04.2022.pdf",
                title: "Comunicazione UIF dell'11 aprile 2022",
                subtitle: "Prevenzione di fenomeni di criminalità finanziaria connessi al COVID-19 e al PNRR",
              },
              {
                id: "13",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/Comunicazione-UIF-Covid-19-110221.pdf",
                title: "Comunicazione UIF dell'11 febbraio 2021",
                subtitle: "Prevenzione di fenomeni di criminalità finanziaria connessi con l'emergenza da COVID-19",
              },
              {
                id: "14",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/Comunicazione-UIF-16.04.2020.pdf",
                title: "Comunicazione UIF del 16 aprile 2020",
                subtitle: "Prevenzione di fenomeni di criminalità finanziaria connessi con l'emergenza da COVID-19",
              },
              {
                id: "15",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/Comunicazione_VV_2019.pdf",
                title: "Comunicazione UIF del 28 maggio 2019",
                subtitle: "Utilizzo anomalo di valute virtuali",
              },
              {
                id: "16",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/Comunicazione-UIF-13.10.2017.pdf",
                title: "Comunicazione UIF del 13 ottobre 2017",
                subtitle: "Prevenzione del finanziamento del terrorismo internazionale",
              },
              {
                id: "17",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/COMUNICAZIONE_UIF_180416.pdf",
                title: "Comunicazione UIF del 18 aprile 2016",
                subtitle: "Prevenzione del finanziamento del terrorismo internazionale",
              },
              {
                id: "18",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/Comunicazione_UIF_su_VV.pdf",
                title: "Utilizzo anomalo di valute virtuali",
              },
              {
                id: "19",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/UTILIZZO_ANOMALO_CARTE_PAGAMENTO.pdf",
                title: "Utilizzo anomalo di carte di pagamento per prelevamenti di denaro contante",
                subtitle: "Aggiornamento al 27 febbraio 2012",
              },
              {
                id: "20",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/com_240210.pdf",
                title: "Comunicazione UIF del 24 Febbraio 2010",
                subtitle: "Operazioni di rimpatrio o regolarizzazione di cui all’articolo 13-bis del decreto legge 1°luglio 2009, n. 78 (cd. “scudo fiscale”). Segnalazione di operazioni sospette",
              },
              {
                id: "21",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/banconotelire.pdf",
                title: "Comunicazione UIF del 9 novembre 2009",
                subtitle: "Presentazione di banconote in lire per la conversione in euro. Segnalazione di operazioni sospette ai sensi dell'art. 41 del D.LGS. n. 231 del 2007",
              },
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
          {
            id: "ministeroInterni",
            title: getHumanizedTitle("ministeroInterni"),
            fileUrls: [
              {
                id: "0",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/decreto_INTERNO_2012-04-27.pdf",
                title: "Decreto del Ministero dell'Interno del 27 aprile 2012",
                subtitle:
                  "Modificazione del decreto 17 febbraio 2011 di determinazione degli indicatori di anomalia al fine di agevolare l'individuazione delle operazioni sospette di riciclaggio da parte di talune categorie di operatori non finanziari",
              },
              {
                id: "1",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/Decreto_17_2_2011.pdf",
                title: "Decreto del Ministero dell’Interno del 17 febbraio 2011",
                subtitle:
                  "Determinazione degli indicatori di anomalia al fine di agevolare l’individuazione di operazioni sospette di riciclaggio da parte di talune categorie di operatori non finanziari",
              },
            ],
          },
          {
            id: "ministeroGiustizia",
            title: getHumanizedTitle("ministeroGiustizia"),
            fileUrls: [
              {
                id: "0",
                url: "https://uif.bancaditalia.it/normativa/norm-indicatori-anomalia/070510_indicatori_anomalie.pdf",
                title: "Decreto del Ministero della Giustizia del 16 aprile 2010",
                subtitle:
                  "Determinazione degli indicatori di anomalia al fine di agevolare l'individuazione di operazioni sospette di riciclaggio da parte di talune categorie di professionisti e dei revisori contabili",
              },
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
