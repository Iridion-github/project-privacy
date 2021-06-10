import styles from '../styles/Home.module.css'
import { useState } from 'react'
import path from 'path'

import {
  Row,
  Col,
  Card,
  Button,
  Container
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ConsultationChoice } from '../components/consultation/ConsultationChoice'
import { ConsultationCard } from '../components/consultation/ConsultationCard'
import { useAppContext } from "../context/contextLib"

function consulenza(props) {
  const { currentLang, changeSiteLang } = useAppContext()

  const translate = (lang, data) => {
    return data[lang]
  }

  console.log("currentLang:", currentLang)

  const [consultation, setConsultation] = useState(null)

  return (
    <div className={styles.container}>
      <Header
        suppressHydrationWarning
        title={currentLang === "ita" ? "Consulenza" : "Privacy Advice"}
      />
      {/* Navbar */}
      <Navigation
        currentLang={currentLang}
        changeSiteLang={changeSiteLang}
      />
      {/* Page Content */}
      <main className={styles.main}>
        <Container className="justify-content-center p-0">
          <Card className="w-100 p-2 responsive-width-card">
            <Card.Img className="black-border" variant="top" src="consulenza.png" />
            <Card.Body>
              <Row>
                <Col md={3}>
                  {consultation &&
                    <Button
                      variant="info"
                      onClick={() => setConsultation(null)}
                      suppressHydrationWarning
                    >
                      <i className="fas fa-long-arrow-alt-left mr-2"></i>
                      {currentLang === "ita" ? "Torna Indietro" : "Back to Selection"}
                    </Button>}
                </Col>
                <Col md={6}>
                  <Card.Title className="text-center"> <h1 suppressHydrationWarning>{currentLang === "ita" ? "Consulenza" : "Consultation"}{consultation ? ": " + consultation[currentLang].title : ""}</h1></Card.Title>
                </Col>
              </Row>
              {!consultation &&
                <ConsultationChoice
                  consultations={props.consultations}
                  setConsultation={setConsultation}
                  currentLang={currentLang}
                />
              }
              {consultation &&
                <ConsultationCard
                  consultation={consultation}
                  setConsultation={setConsultation}
                  currentLang={currentLang}
                />
              }
            </Card.Body>
            <Card.Footer className="text-center"></Card.Footer>
          </Card>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const apiUrl = "http://" + context.req.headers.host + "/api/consultation"
  const resConsult = await fetch(apiUrl)
  const consultations = await resConsult.json()
  return { props: { consultations: consultations.data } }
}

export default consulenza