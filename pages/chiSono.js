import styles from '../styles/Home.module.css'
import { useLanguage } from '../context/siteLanguageContext' //context
import {
  Container,
  Row,
  Col,
  Card,
  Image
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import content from '../database/chiSono'


function chiSono(props) {
  const siteLanguage = useLanguage() //context

  const translate = (lang, data) => {
    return (data[lang]).toString()
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
        <Container className="justify-content-center p-0">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <Card className="pt-2 pb-2 text-center justify-content-center">
              <Image src="logoCropped.svg" className="chiSonoImg" />
              <Card.Body>
                <Col md={{ span: 12 }} >
                  <Card.Title className="text-center">{siteLanguage === "ita" ? "Chi Sono" : "Who I Am"}</Card.Title>
                </Col>
                <Col md={{ span: 12 }} className="text-justify">
                  <p>{translate(siteLanguage, content.firstCol)
                  }</p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify">
                  <p>{translate(siteLanguage, content.secondCol)
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
  )
}

export default chiSono