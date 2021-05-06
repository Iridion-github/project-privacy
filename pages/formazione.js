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

formazione.getInitialProps = async (context) => {
  //const apiUrl = "http://" + context.req.headers.host + "/api/learning"
  //const resLessons = await fetch(apiUrl)
  //const lessons = await resLessons.json()
  //return { lessons: lessons.data }
  return { props: { lessons: [] } }
}

export default formazione

/* //Rimozione di getServerSideProps per deployare
export async function getServerSideProps(context) {
  //const apiUrl = "http://" + context.req.headers.host + "/api/learning"
  //const resLessons = await fetch(apiUrl)
  //const lessons = await resLessons.json()
  //return { lessons: lessons.data }
  return { props: { lessons: [] } }
}
*/