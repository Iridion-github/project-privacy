import styles from '../styles/Home.module.css'
import { useLanguage } from '../context/siteLanguageContext' //context
import { useRouter } from 'next/router'
import {
  Container
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ErrorComponent } from '../components/layout/ErrorComponent'

export default function errorPage(props) {
  const siteLanguage = useLanguage() //context
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Errore 404 - Pagina non trovata" : "Error 404 - Page not found"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Container className="justify-content-center mt-4 p-4">
          <ErrorComponent />
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </div >
  )
}


