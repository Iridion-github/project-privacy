import styles from '../styles/Home.module.css'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Header } from '../components/Header'
import { Navigation } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function Home() {
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
                srcset="contatti.png"
                alt="img alternativa mobile view"
              />
              <img
                className="d-block"
                src="1stSlide.png"
                alt="First slide"
              />
            </picture>
            <Carousel.Caption>
              <h2 className={styles.title}>
                Consulenza Privacy e Antiriciclaggio
              </h2>
              <p className={styles.description}>
                Analisi e valutazione rischi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 650px)"
                srcset="contatti.png"
                alt="img alternativa mobile view"
              />
              <img
                className="d-block"
                src="2ndSlide.png"
                alt="Second slide"
              />
            </picture>
            <Carousel.Caption>
              <h1 className={styles.title}>
                Consulenza Privacy e Antiriciclaggio
              </h1>
              <p className={styles.description}>
                Analisi e valutazione rischi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 650px)"
                srcset="contatti.png"
                alt="img alternativa mobile view"
              />
              <img
                className="d-block"
                src="3rdSlide.png"
                alt="Third slide"
              />
            </picture>
            <Carousel.Caption>
              <h2 className={styles.title}>
                Consulenza Privacy e Antiriciclaggio
              </h2>
              <p className={styles.description}>
                Analisi e valutazione rischi
              </p>
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
