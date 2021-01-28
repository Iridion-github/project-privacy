import styles from '../styles/Home.module.css'
import { useState } from 'react'
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

function formazione(props) {
  const siteLanguage = useLanguage() //context

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
            Formazione: la struttura sarà molto simile a Consulenza.
          </Card.Body>
          <Card.Footer className="text-center"></Card.Footer>
        </Card>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

formazione.getInitialProps = async () => {
  //const resLessons = await fetch("http://localhost:3000/api/consultation")
  //const lessons = await resLessons.json()
  //return { lessons: lessons.data }
  return { lessons: [] }
}

export default formazione