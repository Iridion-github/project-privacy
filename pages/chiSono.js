import styles from '../styles/Home.module.css';

import {
  Container,
  Row,
  Col,
  Card,
  Image
} from 'react-bootstrap';
import { Header } from '../components/layout/Header';
import { Navigation } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useAppContext } from "../context/contextLib";


function chiSono(props) {
  const { currentLang, changeSiteLang } = useAppContext();

  return (
    <div className={styles.container}>
      <Header suppressHydrationWarning
        title={currentLang === "ita" ? "Chi Sono" : "Who I Am"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Container className="justify-content-center p-0">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <Card className="pt-2 pb-2 text-center justify-content-center">
              <Image src="logoCropped.svg" className="chiSonoImg" />
              <Card.Body>
                <Col md={{ span: 12 }} >
                  <Card.Title className="text-center"><h2 suppressHydrationWarning>{currentLang === "ita" ? "Chi Sono" : "Who I Am"}</h2></Card.Title>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisono-text" suppressHydrationWarning>
                    {currentLang === "ita"
                      ? "Per affrontare un mondo ricco di incognite, incertezze e rischi, le aziende hanno bisogno di professionisti che operino in modo nuovo, utilizzando un set di strumenti differenziati, in grado di adeguare l’azione di supporto al cliente alle singole realtà organizzative. Grazie alle competenze maturate in vari ambiti disciplinari, alla pluriennale esperienza in ambito formativo e alla rete di partner di assoluto prestigio, io Gaetano Mastropierro e la mia azienda MTS siamo in grado di offrire qualcosa di più di una mera indicazione standardizzata."
                      : "To face a world full of unknowns, uncertainties and risks, companies need professionals who work in a new way, using a set of differentiated tools, able to adapt the customer support action to the individual organizational realities. Thanks to the skills gained in various disciplinary fields, to the many years of experience in the training field and to the network of partners of absolute prestige, I Gaetano Mastropierro and my company MTS are able to offer something more than a mere standardized indication."
                    }</p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisono-text" suppressHydrationWarning>
                    {currentLang === "ita"
                      ? "Sono un libero professionista e sono cofondatore di MTS, una società relativamente giovane si, circa 2 anni e mezzo, ma  che vanta collaborazione con grandi aziende di svariati settori. Oggi più che mai il mercato richiede specialisti affidabili, capaci di supportare le imprese nel conseguimento e nel mantenimento di una conformità normativa tenendo contro delle peculiarità gestionali, organizzative e culturali di ciascuna realtà. Mettere in grado i nostri clienti di riconoscere tempestivamente i segnali di criticità così da anticipare o contenere l’”inatteso”, costituisce la forza distintiva di un servizio consulenziale efficace. Io e la mia azienda vogliamo  che i nostri clienti diventino organizzazioni “ad alta affidabilità” (HRO), in grado cioè di anticipare i pericoli e correggere gli errori prima che la situazione si aggravi."
                      : "I am a freelancer and I am co-founder of MTS, a relatively young company, about 2 and a half years old, but which boasts collaboration with large companies in various sectors. Today, more than ever, the market requires reliable specialists, capable of supporting companies in achieving and maintaining regulatory compliance taking into account the managerial, organizational and cultural peculiarities of each reality. Enabling our customers to promptly recognize critical signs so as to anticipate or contain the 'unexpected' is the distinctive strength of an effective consulting service. My company and I want our customers to become “high reliability” organizations (HROs), able to anticipate dangers and correct errors before the situation escalates."
                    }</p>
                </Col>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </main >
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default chiSono;