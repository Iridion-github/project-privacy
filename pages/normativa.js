import styles from "../styles/Home.module.css";
import { useState } from "react";
import path from "path";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";
import { RightMenu } from "../components/home/RightMenu";
import { NormativaChoice } from "../components/normativa/NormativaChoice";
import { NormativaCard } from "../components/normativa/NormativaCard";

function normativa(props) {
  const { currentLang, changeSiteLang } = useAppContext();
  const [normativaSelected, setNormativaSelected] = useState(null);

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
                  {normativaSelected && <NormativaCard normativa={normativaSelected} setNormativa={setNormativaSelected} currentLang={currentLang} />}
                </Card.Body>
                <Card.Footer className="text-center"></Card.Footer>
              </Card>
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
        title: "Normativa 1 - Uno",
        fileUrl: null,
      },
      {
        id: "1",
        title: "Normativa 2 - Due",
        fileUrl: null,
      },
      {
        id: "2",
        title: "Normativa 3 - Tre",
        fileUrl: null,
      },
      {
        id: "3",
        title: "Normativa 4 - Quattro",
        fileUrl: null,
      },
    ],
  };
  return { props: { normative: normative.data } };
}

export default normativa;
