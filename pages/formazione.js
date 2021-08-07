import styles from '../styles/Home.module.css';
import { useState } from 'react';

import {
  Row,
  Col,
  Card,
  Button,
  Container
} from 'react-bootstrap';
import { Header } from '../components/layout/Header';
import { Navigation } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useAppContext } from "../context/contextLib";

function formazione(props) {
  const { currentLang, changeSiteLang } = useAppContext();

  return (
    <div className={styles.container}>
      <Header
        title={currentLang === "ita" ? "Formazione" : "Learning"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Container className="justify-content-center p-0">
          <Card className="w-100 p-2 responsive-width-card">
            <Card.Img className="black-border" variant="top" src="consulenza.png" />
            <Card.Body>
              <Row>
                <Col md={{ span: 12 }} >
                  <Card.Title className="text-center"><h1>{currentLang === "ita" ? "Formazione" : "Learning"}</h1></Card.Title>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisono-text" >
                    {currentLang === "ita"
                      ? "La normativa sulla tutela dei dati personali, la normativa sulla salute e sicurezza sui posti di lavoro, la disciplina sulla responsabilità degli enti, la disciplina antiriciclaggio e sull'anticorruzione, rappresentano esempi tipici in cui il legislatore ha imposto un vero e proprio obbligo di adeguato formazione dei “soggetti obbligati” e dei suoi dipendenti. In tale contesto non si deve commettere l'errore di progettare l'attività formativa in relazione alle esigenze individuali della singola funzione aziendale."
                      : "The legislation on the protection of personal data, the legislation on health and safety in the workplace, the regulations on the liability of entities, the anti-money laundering and anti-corruption regulations, represent typical examples in which the legislator has imposed a real obligation of adequate training of 'obliged parties' and its employees. In this context, one must not make the mistake of planning the training activity in relation to the individual needs of the individual company function."
                    }</p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisono-text" >
                    {currentLang === "ita"
                      ? " La formazione, infatti, è una funzione aziendale trasversale che deve intercettare in modo integrato le esigenze di compliance che interessano contemporaneamente differenti ambiti normativi (che si richiamano tra loro) e differenti attori e organi di controllo aziendali. È evidente, quindi, la necessità, e soprattutto l'utilità, di realizzare sessioni formative in cui i docenti sappiano fornire ai “discendenti” gli spunti di collegamento e riflessione tra gli adempimenti relativi alle varie normative che non devono essere considerati in modo separato ma come un sistema organico e integrato."
                      : "Training, in fact, is a transversal corporate function that must intercept in an integrated way the compliance needs that simultaneously affect different regulatory areas (which refer to each other) and different actors and corporate control bodies. It is therefore evident the need, and above all the usefulness, of carrying out training sessions in which teachers are able to provide the 'descendants' with the points of connection and reflection between the obligations relating to the various regulations that must not be considered separately but as an organic and integrated system."
                    }</p>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="text-center"></Card.Footer>
          </Card>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </div >
  );
}

export async function getServerSideProps(context) {
  //const apiUrl = "http://" + context.req.headers.host + "/api/learning"
  //const resLessons = await fetch(apiUrl)
  //const lessons = await resLessons.json()
  //return { lessons: lessons.data }
  return { props: { lessons: [] } };
}
export default formazione;