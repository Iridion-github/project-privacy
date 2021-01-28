import styles from '../styles/Home.module.css'
import { useState } from 'react'
import path from 'path'
import { useLanguage } from '../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ConsultationChoice } from '../components/consultation/ConsultationChoice'
import { ConsultationCard } from '../components/consultation/ConsultationCard'

function consulenza(props) {
  const siteLanguage = useLanguage() //context

  const translate = (lang, data) => {
    return data[lang]
  }

  const [consultation, setConsultation] = useState(null)

  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Consulenza" : "Privacy Advice"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Card className="p-2 responsive-width-card">
          <Card.Img className="black-border" variant="top" src="consulenza.png" />
          <Card.Body>
            <Row>
              <Col md={3}>
                {consultation &&
                  <Button
                    variant="info"
                    onClick={() => setConsultation(null)}
                  >
                    <i className="fas fa-long-arrow-alt-left mr-2"></i>
                    {siteLanguage === "ita" ? "Torna Indietro" : "Back to Selection"}
                  </Button>}
              </Col>
              <Col md={6}>
                <Card.Title className="text-center"> <h1>{siteLanguage === "ita" ? "Consulenza" : "Consultation"}{consultation ? ": " + consultation[siteLanguage].title : ""}</h1></Card.Title>
              </Col>
            </Row>
            {!consultation &&
              <ConsultationChoice
                consultations={props.consultations}
                setConsultation={setConsultation}
              />
            }
            {consultation &&
              <ConsultationCard
                consultation={consultation}
                setConsultation={setConsultation}
              />
            }
          </Card.Body>
          <Card.Footer className="text-center"></Card.Footer>
        </Card>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

consulenza.getInitialProps = async (context) => {
  /*
  console.log("context.req.headers.referer", context.req.headers.referer)
  console.log("context.pathname", context.pathname)
  const apiUrl = context.req.headers.referer.replace(context.pathname, "/api/consultation")
  console.log("apiUrl:", apiUrl)
  const resConsult = await fetch(apiUrl)
  const consultations = await resConsult.json()
  return { consultations: consultations.data }
  */
  return { consultations: [] }

}

export default consulenza