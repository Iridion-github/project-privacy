import styles from '../styles/Home.module.css'
import { useLanguage } from '../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Card
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import content from '../database/chiSono'

export default function chiSono() {
  const siteLanguage = useLanguage() //context

  const translate = (lang, data) => {
    return data[lang]
  }

  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Chi Sono" : "Who I Am"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Card className="w-75 p-2" border="secondary">
          <Card.Img className="black-border" variant="top" src="handshake.png" />
          <Card.Body>
            <Card.Title className="text-center">{siteLanguage === "ita" ? "Chi Sono" : "Who I Am"}</Card.Title>
            <Row>
              <Col md={{ span: 8, offset: 2 }} className="text-justify">
                {translate(siteLanguage, content.firstCol)}
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 8, offset: 2 }} className="text-justify mt-2">
                {translate(siteLanguage, content.secondCol)}
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="text-center"></Card.Footer>
        </Card>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}


