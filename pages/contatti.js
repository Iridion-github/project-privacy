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
                            <td><b >{currentLang === "ita" ? "Indirizzo" : "Address"}:</b></td>
                            <td>{"Non Disponibile" /*Via Fregene 33 - 00183*/}{/*currentLang === "ita" ? "Roma" : "Rome"*/}{/*(RM)*/}</td>
                          </tr>
                          <tr>
                            <td><b >{currentLang === "ita" ? "Telefono" : "Phone Numbers"}</b></td>
                            <td>{"Non Disponibile" /*335-236564*/}</td>
                          </tr>
                          <tr>
                            <td><b>Email:</b></td>
                            <td>{"Non Disponibile" /*mastrogae@gmail.com*/}</td>
                          </tr>
                          <tr>
                            <td><b >{currentLang === "ita" ? "Partita IVA" : "VAT number"}:</b></td>
                            <td>00000000000</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="p-3">
                      <iframe
                        src={""/*"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.56015081952!2d12.508396296107795!3d41.88080899993093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61ebb6fa2465%3A0xbd6dcbf7a83c7e20!2sVia%20Fregene%2C%2033%2C%2000183%20Roma%20RM!5e0!3m2!1sen!2sit!4v1606502757348!5m2!1sen!2sit"*/}
                        width="100%"
                        height="100%"
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
                    currentLang={currentLang} />
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