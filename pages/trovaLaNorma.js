import styles from "../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import { Row, Col, Card, Table, Form, Button } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";
import { RightMenu } from "../components/home/RightMenu";
import { Loading } from "../components/layout/Loading";

function trovaLaNorma({ normaRecords, apiUrl, isDeployedVersion }) {
  const { currentLang, resetQuizQuestionsSeen } = useAppContext();
  const [searchInput, setSearchInput] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredNormaRecords, setFilteredNormaRecords] = useState([]);

  const allTableRows = normaRecords.map(record => {
    return (
      <tr key={record._id}>
        <td className="border-MG-blue td-termini">{record.terminiDiRiferimento}</td>
        <td className="border-MG-blue td-GDPR">{record.GDPR.length > 0 ? record.GDPR : " - "}</td>
        <td className="border-MG-blue td-d-legis">{record.decretoLegislativo.length > 0 ? record.decretoLegislativo : " - "}</td>
        <td className="border-MG-blue td-altre-norme">{record.altreNorme.length > 0 ? record.altreNorme : " - "}</td>
      </tr>
    );
  });

  const filteredTableRows =
    filteredNormaRecords && filteredNormaRecords.length > 0
      ? filteredNormaRecords.map(record => {
          return (
            <tr key={record._id}>
              <td className="border-MG-blue td-termini">{record.terminiDiRiferimento}</td>
              <td className="border-MG-blue td-GDPR">{record.GDPR.length > 0 ? record.GDPR : " - "}</td>
              <td className="border-MG-blue td-d-legis">{record.decretoLegislativo.length > 0 ? record.decretoLegislativo : " - "}</td>
              <td className="border-MG-blue td-altre-norme">{record.altreNorme.length > 0 ? record.altreNorme : " - "}</td>
            </tr>
          );
        })
      : [];

  const handleSetSearchResult = searchResBefore => {
    setSearchResult(searchResBefore);
  };

  const handleSetSearched = searchedString => {
    setSearched(searchedString);
  };

  const resetFilters = () => {
    setSearched(false);
  };

  const submitSearch = async input => {
    try {
      setLoading(true);
      let fetchApiUrl = `${apiUrl}/search?searchterms=${input}`;
      if (isDeployedVersion) {
        if (fetchApiUrl.includes("http") && !fetchApiUrl.includes("https")) {
          fetchApiUrl = fetchApiUrl.replace("http", "https");
        }
      }
      const resJson = await fetch(fetchApiUrl, {
        method: "GET",
        headers: {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      })
        .then(response => response.json())
        .then(async response => {
          setFilteredNormaRecords(response.data);
          handleSetSearched(searchInput);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const cleanInput = searchInput.replace(/[^\w\s]/gi, "");
    submitSearch(cleanInput);
  };

  const presentationRef = useRef();
  const [presentationRefHeight, setPresentationRefHeight] = useState();

  useEffect(() => {
    if (presentationRef.current) {
      setPresentationRefHeight(presentationRef.current.clientHeight);
    }
  }, [presentationRef, presentationRef.current]);

  return (
    <div className={styles.container}>
      <Header title={currentLang === "ita" ? "Trova la norma" : "Find the norm"} />
      {/* Navbar */}
      <Navigation />
      {loading && <Loading />}
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100 m-0 p-0">
          <Col md={{ span: 3, offset: 0 }}>
            {/*Presentation start*/}
            <Row className="w-100 ml-0 mr-0 p-3">
              <Card className="grey-border" ref={presentationRef}>
                <Card.Img variant="top" src="./trovaLaNorma/copertinaTrovaLaNorma.png" />
                <Card.Body className="" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                  <Row className="w-100 p-2 ml-0 mr-0">
                    Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la
                    norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di
                    trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma.
                    Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la
                    norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di
                    trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma.
                    Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la
                    norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma. Descrizione di trova la norma.
                  </Row>
                  <Row className="w-100 text-right p-1 font-italic" style={{ fontSize: "11px", justifyContent: "end", lineHeight: 1.5 }}>
                    <Col className="p-0" md={{ span: 12, offset: 0 }}>
                      Dott. Gaetano Mastropierro Consulente Privacy e Antiririclaggio
                    </Col>
                  </Row>
                  <Row className="w-100 text-right p-1 font-italic" style={{ fontSize: "11px", justifyContent: "end", lineHeight: 1.5 }}>
                    <Col className="p-0" md={{ span: 12, offset: 0 }}>
                      DPO Referente Assodata per la Provincia di Roma{" "}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
            {/*Presentation end*/}
          </Col>
          <Col md={{ span: 6, offset: 0 }} className="p-0">
            <Row className="w-100 ml-0 mr-0 p-3">
              <Card
                className="grey-border"
                style={{
                  width: "100%",
                  height: presentationRefHeight ? `${presentationRefHeight}px` : "100vh",
                  //overflowX: "hidden",
                  overflowY: "scroll",
                }}
              >
                <Card.Body className="">
                  <Col md={12}>
                    <Row>
                      <Col md={12} className="p-3">
                        {/*Searchbar start*/}
                        <Row className="p-3 justify-content-center ml-0">
                          <Form onSubmit={event => handleSubmit(event)} inline className="w-100 p-0">
                            <Form.Group className="w-100 justify-content-center">
                              <Col md={9} className="text-right pl-0 pr-0">
                                <Row className="w-100">
                                  <Col md={11} className="pl-0 pr-0">
                                    <Form.Control
                                      size="lg"
                                      type="text"
                                      placeholder={currentLang === "ita" ? "Cerca una norma" : "Search a norm"}
                                      value={searchInput}
                                      onChange={event => setSearchInput(event.target.value)}
                                      className="inline-form-custom w-100"
                                    />
                                  </Col>
                                  <Col md={1} className="pl-0 pr-0">
                                    <Button block variant={"info"} disabled={searchInput.length < 5} type="submit" size="lg" className="">
                                      <i className="fas fa-search"></i>
                                    </Button>
                                  </Col>
                                </Row>
                              </Col>
                            </Form.Group>
                          </Form>
                        </Row>
                        {/*Searchbar end*/}
                        {/*Table start*/}
                        <Row className="p-3 justify-content-center ml-0">
                          {!!searched && (
                            <Row className="ml-0 mb-3 w-100 align-items-center">
                              <Col md={6} className="pl-0 pr-3 text-right">
                                {currentLang === "ita" ? `Risultati per la ricerca: "${searched}"` : `Results found for: "${searched}"`}
                              </Col>
                              <Col md={6} className="pl-0 pr-0 ">
                                <Button variant={"danger"} size="sm" className="" onClick={resetFilters}>
                                  <i class="fas fa-times"></i> {currentLang === "ita" ? `Rimuovi filtro: "${searched}"` : `Remove filter: "${searched}"`}
                                </Button>
                              </Col>
                            </Row>
                          )}
                          <Col md={12} className="pl-3 pr-3 table-responsive">
                            <Table responsive="sm" size="sm">
                              <thead className="bg-standard-blue">
                                <tr>
                                  <th className="border-MG-blue" scope="col">
                                    {currentLang === "ita" ? "Termini di riferimento in ambito privacy" : "Terms of reference in privacy field"}
                                  </th>
                                  <th className="border-MG-blue" scope="col">
                                    {currentLang === "ita" ? "GDPR" : "GDPR"}
                                  </th>
                                  <th className="border-MG-blue" scope="col">
                                    {currentLang === "ita" ? "D.Lgs.196/2003" : "D.Lgs.196/2003"}
                                  </th>
                                  <th className="border-MG-blue" scope="col">
                                    {currentLang === "ita" ? "Altre norme" : "Other norms"}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>{searched ? filteredTableRows : allTableRows}</tbody>
                            </Table>
                          </Col>
                        </Row>
                        {/*Table end*/}
                      </Col>
                    </Row>
                  </Col>
                </Card.Body>
              </Card>
            </Row>
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
  const host = context.req.headers.host;
  const path = "/api/trovaLaNorma";
  let isDeployedVersion;
  let apiUrl;
  if (host.includes("localhost")) {
    //local connection
    isDeployedVersion = false;
    apiUrl = "http://" + context.req.headers.host + path;
  } else {
    //deployed connection
    isDeployedVersion = true;
    const needsScheme = !host.includes("http");
    if (needsScheme) {
      apiUrl = "http://" + host + path;
    } else {
      apiUrl = host + path;
    }
  }
  const res = await fetch(apiUrl);
  const { data } = await res.json();
  return { props: { normaRecords: data, apiUrl, isDeployedVersion } };
}

export default trovaLaNorma;
