import styles from '../styles/Home.module.css'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { useLanguage, useLanguageUpdate } from '../context/siteLanguageContext' //context


export default function Home() {
  const siteLanguage = useLanguage() //context
  return (
    <div className={styles.container}>
      <Header
        title="Home"
      />
      {/* Navbar */}
      <Navigation />
      {/* Homepage Slides */}
      <div className={styles.carouselContainer}>
        <Carousel className="d-block carouselStyle">
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 650px)"
                srcSet="contatti.png"
                alt="img alternativa mobile view"
              />
              <img
                className="d-block"
                src="slides/1stSlide.png"
                alt="First slide"
              />
            </picture>
            <Carousel.Caption>
              <h2 className={styles.title}>
                {siteLanguage === "ita" ? "Consulenza Privacy e Antiriciclaggio" : "Privacy and Anti-Money Laundering Consultancy"}
              </h2>
              <span className={styles.description}>
                {siteLanguage === "ita" ? "Analisi e valutazione rischi" : "Risk analysis and assessment"}
              </span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 650px)"
                srcSet="contatti.png"
                alt="img alternativa mobile view"
              />
              <img
                className="d-block"
                src="slides/2ndSlide.png"
                alt="Second slide"
              />
            </picture>
            <Carousel.Caption>
              <h2 className={styles.title}>
                {siteLanguage === "ita" ? "Consulenza Privacy e Antiriciclaggio" : "Privacy and Anti-Money Laundering Consultancy"}
              </h2>
              <span className={styles.description}>
                {siteLanguage === "ita" ? "Analisi e valutazione rischi" : "Risk analysis and assessment"}
              </span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 650px)"
                srcSet="contatti.png"
                alt="img alternativa mobile view"
              />
              <img
                className="d-block"
                src="slides/3rdSlide.png"
                alt="Third slide"
              />
            </picture>
            <Carousel.Caption>
              <h2 className={styles.title}>
                {siteLanguage === "ita" ? "Consulenza Privacy e Antiriciclaggio" : "Privacy and Anti-Money Laundering Consultancy"}
              </h2>
              <span className={styles.description}>
                {siteLanguage === "ita" ? "Analisi e valutazione rischi" : "Risk analysis and assessment"}
              </span>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Homepage Content */}
      <main className={styles.main}>
        {/* Empty div to test scrolling 
        <div style={{ height: "3000px;" }}></div>
        */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}
