import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useLanguage } from '../context/siteLanguageContext' //context
import {
  Card
} from 'react-bootstrap'
import consultations from '../database/consultations'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ConsultationChoice } from '../components/consultation/ConsultationChoice'
import { ConsultationCard } from '../components/consultation/ConsultationCard'

export default function consulenza() {
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
        <Card className="w-75 p-2" border="secondary">
          <Card.Img className="blue-border" variant="top" src="consulenza.png" />
          <Card.Body>
            <Card.Title className="text-center"> <h1>{siteLanguage === "ita" ? "Consulenza" : "Consultation"}{consultation ? ": " + consultation : ""}</h1></Card.Title>
            {!consultation &&
              <ConsultationChoice
                consultations={consultations}
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


