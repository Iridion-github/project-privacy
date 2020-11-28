import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Row,
  Col,
  Card,
  Button,
  Link
} from 'react-bootstrap'
import { Header } from '../components/Header'
import { Navigation } from '../components/Navbar'
import { Quiz } from '../components/Quiz'
import { Footer } from '../components/Footer'

export default function areaTest() {

  return (
    <div className={styles.container}>
      <Header
        title="Area Test"
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        {/* Scelta Quiz */}
        <Card style={{}}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title className="text-center">I Nostri Test</Card.Title>
            <Card.Text>
              <Row className="mb-4">
                <Col>
                  <Button
                    size="lg"
                    variant="outline-dark"
                    block
                  >
                    Anticorruzione e Trasparenza
                  </Button>
                </Col>
                <Col>
                  <Button
                    size="lg"
                    variant="outline-dark"
                    block
                  >
                    Privacy
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    size="lg"
                    variant="outline-dark"
                    block
                  >
                    Antiriciclaggio
                  </Button>
                </Col>
                <Col>
                  <Button
                    size="lg"
                    variant="outline-dark"
                    block
                  >
                    Responsabilità amministrativa delle persone giuridiche
                  </Button>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Fine Scelta Quiz */}
        {/* Quiz */}
        <Quiz />
        {/* Fine Quiz */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}