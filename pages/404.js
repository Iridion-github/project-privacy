import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import {
  Container
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ErrorComponent } from '../components/layout/ErrorComponent'
import { useAppContext } from "../context/contextLib"

export default function errorPage(props) {
  const router = useRouter()
  const { currentLang, changeSiteLang } = useAppContext()

  return (
    <div className={styles.container}>
      <Header
        title={currentLang === "ita" ? "Errore 404 - Pagina non trovata" : "Error 404 - Page not found"}
      />
      {/* Navbar */}
      <Navigation
        currentLang={currentLang}
        changeSiteLang={changeSiteLang}
      />
      {/* Page Content */}
      <main className={styles.main}>
        <Container className="justify-content-center mt-4 p-4">
          <ErrorComponent
            currentLang={currentLang}
          />
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </div >
  )
}


