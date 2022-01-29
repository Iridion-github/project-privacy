import styles from "../styles/Home.module.css";
import { Row, Col, Card } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { LoginForm } from "../components/form/LoginForm";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";
import { useState } from "react";
import { Loading } from "../components/layout/Loading";

const login = function (props) {
  const { currentLang } = useAppContext();
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.container}>
      <Header title={currentLang === "ita" ? "Login" : "Login"} />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        {loading && <Loading />}
        <Row className="w-100 m-0 p-0">
          <Col md={{ span: 6, offset: 3 }} className="p-0">
            <Card className="w-100 p-2 pb-2">
              <Card.Img variant="top" src="registrazione.png" />
              <Card.Body>
                <Card.Title className="text-center">{currentLang === "ita" ? "Login" : "Login"}</Card.Title>
                <Row className="justify-content-center">
                  <Col md={{ span: 6 }}>
                    <LoginForm currentLang={currentLang} setLoading={setLoading} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
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

export default login;
