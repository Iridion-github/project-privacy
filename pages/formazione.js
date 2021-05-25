import styles from '../styles/Home.module.css'
import { useState } from 'react'

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
import { useAppContext } from "../context/contextLib"

function formazione(props) {
  const { currentLang, changeSiteLang } = useAppContext()

  return (
    <div className={styles.container}>
      <Header
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
          <Card className=" w-100 p-2 responsive-width-card">
            <Card.Img className="black-border" variant="top" src="consulenza.png" />
            <Card.Body>
              Formazione: la struttura sarà molto simile a Consulenza.
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
  //const apiUrl = "http://" + context.req.headers.host + "/api/learning"
  //const resLessons = await fetch(apiUrl)
  //const lessons = await resLessons.json()
  //return { lessons: lessons.data }
  return { props: { lessons: [] } }
}
export default formazione