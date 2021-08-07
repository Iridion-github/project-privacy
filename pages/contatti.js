import styles from '../styles/Home.module.css';

import {
  Row,
  Col,
  Card,
  Table,
  Container
} from 'react-bootstrap';
import { Header } from '../components/layout/Header';
import { Navigation } from '../components/layout/Navbar';
import { EmailForm } from '../components/form/EmailForm';
import { Footer } from '../components/layout/Footer';
import { useAppContext } from "../context/contextLib";


const contatti = function () {
  const { currentLang, changeSiteLang } = useAppContext();

  return (
    <div className={styles.container}>
      <Header
        title={currentLang === "ita" ? "Contatti" : "Contacts"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Container className="justify-content-center p-0">
          <Card className="w-100 pt-2 pb-2">
            <Card.Img variant="top" src="contatti.png" />
            <Card.Body>
              <Card.Title className="text-center" >{currentLang === "ita" ? "Contatti" : "Contacts"}</Card.Title>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col md={12} className="p-3">
                      <Table striped bordered responsive size="sm">
                        <thead>
                        </thead>
                        <tbody>
                          <tr>
                            <td><b >{currentLang === "ita" ? "Telefono" : "Phone Numbers"}</b></td>
                            <td>{"351-5198740"}</td>
                          </tr>
                          <tr>
                            <td><b>Email:</b></td>
                            <td>{"gaetanomast@libero.it"}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="p-3">
                      <iframe
                        src={"https://maps.google.com/maps?q=rome%20italy&t=&z=11&ie=UTF8&iwloc=&output=embed"}
                        width="100%"
                        height="300"
                        frameBorder="0"
                        style={{ border: "1px solid black" }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0">
                      </iframe>
                    </Col>
                  </Row>
                </Col>
                <Col md={{ span: 6 }}>
                  <EmailForm
                    currentLang={currentLang}
                  />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="text-center">
              <small className="text-muted" >{currentLang === "ita" ? "Aggiornato al" : "Last updated"}: 19/01/2020</small>
            </Card.Footer>
          </Card>
        </Container>
      </main >
      {/* Footer */}
      < Footer />
    </div >
  );
};

export default contatti;