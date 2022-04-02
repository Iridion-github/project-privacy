import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { Row, Col, Card, Table, Form, Button } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";
import { RightMenu } from "../components/home/RightMenu";
import { Loading } from "../components/layout/Loading";

function dizionarioPrivacy({ dizionarioRecords, apiUrl }) {
  const { currentLang, resetQuizQuestionsSeen } = useAppContext();

  const [searchInput, setSearchInput] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredDizionarioRecords, setFilteredDizionarioRecords] = useState([]);

  const allTableRows = dizionarioRecords.map(record => {
    return (
      <tr key={record._id}>
        <td className="border-MG-blue">{record.ita}</td>
        <td className="border-MG-blue">{record.eng}</td>
        <td className="border-MG-blue">{record.ref.length > 0 ? record.ref : " - "}</td>
      </tr>
    );
  });

  const filteredTableRows = filteredDizionarioRecords.map(record => {
    return (
      <tr key={record._id}>
        <td className="border-MG-blue">{record.ita}</td>
        <td className="border-MG-blue">{record.eng}</td>
        <td className="border-MG-blue">{record.ref.length > 0 ? record.ref : " - "}</td>
      </tr>
    );
  });

  const handleSetSearchResult = searchResBefore => {
    setSearchResult(searchResBefore);
  };

  const handleSetSearched = searchedString => {
    setSearched(searchedString);
  };

  const submitSearch = async input => {
    try {
      setLoading(true);
      const resJson = await fetch(`${apiUrl}/search?searchterms=${input}`, {
        method: "GET",
        headers: {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      })
        .then(response => response.json())
        .then(async response => {
          setFilteredDizionarioRecords(response.data);
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

  return (
    <div className={styles.container}>
      <Header title={currentLang === "ita" ? "Dizionario Privacy" : "Privacy Dictionary"} />
      {/* Navbar */}
      <Navigation />
      {loading && <Loading />}
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100 m-0 p-0">
          <Col md={{ span: 3, offset: 0 }}>
            {/*Presentation start*/}
            <Row className="w-100 ml-0 mr-0 p-3">
              <Card className="grey-border">
                <Card.Img variant="top" src="./dizionario/copertinaDizionario.png" />
                <Card.Body className="" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                  <Row className="w-100 p-2 ml-0 mr-0">
                    L'attuale normativa sulla tutela dei dati personali trova la sua fonte di riferimento principale nel Regolamento dell'Unione Europea 679/2016/UE (comunemente chiamato GDPR). Il
                    sistema di protezione dei dati personali antecedente al GDPR era strutturato, invece, sulla Direttiva 95/46/CE e su distinte discipline nazionali di attuazione. Nonostante i comuni
                    principi il cambiamento dello strumento legislativo ha determinato cambiamenti strutturali nel processo di adeguamento alla disciplina comunitaria. Sotto la previgente normativa si
                    era infatti creata nel territorio dell'Unione una frammentazione applicativa per la compresenza di livelli di protezione non equivalenti. Il nuovo Regolamento nasce, quindi, con
                    l'obiettivo di realizzare un'applicazione coerente ed omogenea al fine di assicurare più efficaci e armonizzate misure di protezione dei dati personali e una più fluida
                    circolazione dei dati, nell'ottica dello sviluppo dell'economia digitale in tutto il mercato interno. La menzionata disciplina ha posto, ovviamente, la necessità di tradurre
                    principi ed istituti alle realtà linguistiche dei singoli Stati membri. È evidente, però, che il testo in lingua inglese costituisce il riferimento principale per tutti gli
                    operatori, pubblici e privati, che si trovano ad operare sul mercato internazionale o che realizzano trattamenti transfrontalieri. Si pensi, al riguardo, ai dipendenti o
                    responsabili delle articolazioni dedicate alla “compliance privacy” di gruppi societari che operano in differenti nazioni e che devono discutere e affrontare problematiche
                    differenti con colleghi residenti in altri stati ovvero ai Responsabili della Protezione Dati che risiedono presso sedi che sono differenti dalle sedi delle rispettive branch o
                    filiali nazionali. In tale contesto si è pensato di realizzare un piccolo dizionario tascabile dove riportare i termini e/o le frasi più importanti o più utilizzate nell’ambito del
                    GDPR. In questo modo viene messo a disposizione di tutti gli addetti ai lavori un pratico e agile strumento di lavoro che, a livello internazionale, potrà essere consultato in
                    occasione della redazione di testi scritti o per preparare interventi in occasione di riunioni o incontri. In alcuni casi è stato altresì riportato il riferimento al Considerando
                    e/o all’articolo da cui il termine o la frase sono state tratte. Il testo, in realtà, può essere considerato utile anche per chi lavora nel mercato nazionale perché consente di
                    poter conoscere il corretto significato di molti termini che ormai sono entrati nel linguaggio comune e che vengono pronunciati direttamente in inglese (vgs, ad esempio,
                    accountability privacy by design o by default) senza conoscere il reale significato letterale.
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
              <Card className="grey-border">
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
                                      placeholder={currentLang === "ita" ? "Cerca nel Dizionario" : "Search in the Dictionary"}
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
                          {!!searched && <Row className="ml-0 mb-3">{currentLang === "ita" ? `Risultati per la ricerca: "${searched}"` : `Results found for: "${searched}"`}</Row>}
                          <Table responsive size="md">
                            <thead className="bg-standard-blue">
                              <tr>
                                <th className="border-MG-blue" scope="col">
                                  {currentLang === "ita" ? "Italiano" : "Italian"}
                                </th>
                                <th className="border-MG-blue" scope="col">
                                  {currentLang === "ita" ? "Inglese" : "English"}
                                </th>
                                <th className="border-MG-blue" scope="col">
                                  {currentLang === "ita" ? "Riferimento" : "Reference"}
                                </th>
                              </tr>
                            </thead>
                            <tbody>{searched ? filteredTableRows : allTableRows}</tbody>
                          </Table>
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
  //online: https://project-privacy-fzv6cyxxi-iridion-github.vercel.app/
  //local: http://localhost:3000/dizionarioPrivacy
  const host = context.req.headers.host;
  const path = "api/dizionario";
  let apiUrl;
  if (host.includes("localhost")) {
    //local connection
    apiUrl = "http://" + context.req.headers.host + "/" + path;
  } else {
    //deployed connection
    const needsScheme = host.includes("http");
    console.log("needsScheme:", needsScheme);
    if (needsScheme) {
      apiUrl = "https://" + host + path;
    } else {
      apiUrl = host + path;
    }
  }
  console.log("apiUrl:", apiUrl);
  const res = await fetch(apiUrl);
  const { data } = await res.json();
  return { props: { dizionarioRecords: data, apiUrl } };
}

export default dizionarioPrivacy;
