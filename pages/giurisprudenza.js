import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";
import { RightMenu } from "../components/home/RightMenu";
import { GiurisprudenzaChoice } from "../components/giurisprudenza/GiurisprudenzaChoice";
import { GiurisprudenzaCard } from "../components/giurisprudenza/GiurisprudenzaCard";

function giurisprudenza(props) {
  const { currentLang, changeSiteLang } = useAppContext();
  const [giurisprudenzaSelected, setGiurisprudenzaSelected] = useState(null);

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
                        <Button variant="info" onClick={() => setGiurisprudenzaSelected(null)}>
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
                  {!giurisprudenzaSelected && <GiurisprudenzaChoice giurisprudenze={props.giurisprudenze} setGiurisprudenza={setGiurisprudenzaSelected} currentLang={currentLang} />}
                  {giurisprudenzaSelected && <GiurisprudenzaCard giurisprudenza={giurisprudenzaSelected} setGiurisprudenza={setGiurisprudenzaSelected} currentLang={currentLang} />}
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
  const giurisprudenze = {
    data: [
      {
        id: "0",
        title: "Giurisprudenza 1 - Uno",
        fileUrl: null,
      },
      {
        id: "1",
        title: "Giurisprudenza 2 - Due",
        fileUrl: null,
      },
      {
        id: "2",
        title: "Giurisprudenza 3 - Tre",
        fileUrl: null,
      },
      {
        id: "3",
        title: "Giurisprudenza 4 - Quattro",
        fileUrl: null,
      },
    ],
  };
  return { props: { giurisprudenze: giurisprudenze.data } };
}

export default giurisprudenza;
