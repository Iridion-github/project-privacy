import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Row,
  Col,
  Button,
  Card,
  Nav,
  Image
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export default function articoli() {
  return (
    <div className={styles.container}>
      <Header
        title="Articoli"
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Card className="w-75" border="secondary">
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first"><Image src="bandiere/ita.png" className={styles.blackBorder + " " + styles.flagIcon} /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link"><Image src="bandiere/GB.png" className={styles.blackBorder + " " + styles.flagIcon} /></Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              Per affrontare un mondo ricco di incognite, incertezze e rischi, le aziende hanno bisogno di professionisti che operino in modo nuovo, utilizzando un set di strumenti differenziati,
              in grado di adeguare l’azione di supporto al cliente alle singole realtà organizzative. Grazie alle competenze maturate in vari ambiti disciplinari, alla pluriennale esperienza in
              ambito formativo e alla rete di partner di assoluto prestigio, io Gaetano Mastropierro e la mia azienda MTS siamo in grado di offrire qualcosa di più di una mera indicazione
              standardizzata. Sono un libero professionista e sono cofondatore di MTS, una società relativamente giovane si, circa 2 anni e mezzo, ma  che vanta collaborazione con grandi aziende
              di svariati settori. Oggi più che mai il mercato richiede specialisti affidabili, capaci di supportare le imprese nel conseguimento e nel mantenimento di una conformità normativa
              tenendo contro delle peculiarità gestionali, organizzative e culturali di ciascuna realtà. Mettere in grado i nostri clienti di riconoscere tempestivamente i segnali di criticità
              così da anticipare o contenere l’”inatteso”, costituisce la forza distintiva di un servizio consulenziale efficace. Io e la mia azienda vogliamo  che i nostri clienti diventino
              organizzazioni “ad alta affidabilità” (HRO), in grado cioè di anticipare i pericoli e correggere gli errori prima che la situazione si aggravino.
          </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}