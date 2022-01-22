import styles from "../styles/Home.module.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { RegistrationForm } from "../components/form/RegistrationForm";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";

const registrazioneCompletata = function (props) {
  const { currentLang } = useAppContext();

  return (
    <div className={styles.container}>
      <Header title={currentLang === "ita" ? "Registrazione Completata" : "User Registered"} />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Container className="justify-content-center p-0">
          <Card className="w-100 p-2 pb-2">
            <Card.Img variant="top" src="registrazione.png" />
            <Card.Body>
              <Card.Title className="text-center">
                <h2 className="text-success text-center">{currentLang === "ita" ? "Registrazione Completata" : "User Registered"}</h2>
              </Card.Title>
              <Row className="justify-content-center">
                <Col md={{ span: 12 }} className="m-0 p-0">
                  <h5 className="text-center">Registrazione avvenuta con successo, puoi procedere al login</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const environment = "http://" + context.req.headers.host;
  //const environment = "https://project-privacy-d803e.web.app"
  const apiUrlUser = environment + "/api/user";
  const resUser = await fetch(apiUrlUser);
  const DBusers = await resUser.json();
  return { props: { DBusers: DBusers.data } };
}

export default registrazioneCompletata;
