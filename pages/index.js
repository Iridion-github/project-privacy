import styles from '../styles/Home.module.css';

import { Carousel } from 'react-bootstrap';
import { Header } from '../components/layout/Header';
import { Navigation } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useAppContext } from "../context/contextLib";

function Home() {
  const {
    currentLang,
    changeSiteLang,
  } = useAppContext();

  return (
    <div className={styles.container}>
      <Header
        title="Home"
      />
      {/* Navbar */}
      <Navigation />
      <main className="m-0 p-0">
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
                  className="d-block w-100"
                  src="slides/1stSlide.png"
                  alt="First slide"
                />
              </picture>
              <Carousel.Caption>
                <h2 className={styles.title} >
                  {currentLang === "ita" ? "Consulenza Compliance e Integrata" : "Compliance and Integrated Consulting"}
                </h2>
                <span className={styles.description} >
                  {currentLang === "ita" ? "Privacy | Antiriciclaggio | Responsabilità Amministrativa degli Enti" : "Privacy | Anti-money Laundering | Administrative Liability"}
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
                  className="d-block w-100"
                  src="slides/2ndSlide.png"
                  alt="Second slide"
                />
              </picture>
              <Carousel.Caption>
                <h2 className={styles.title} >
                  {currentLang === "ita" ? "Consulenza Privacy e Antiriciclaggio" : "Privacy and Anti-Money Laundering Consultancy"}
                </h2>
                <span className={styles.description} >
                  {currentLang === "ita" ? "Analisi e valutazione rischi" : "Risk analysis and assessment"}
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
                  className="d-block w-100"
                  src="slides/3rdSlide.png"
                  alt="Third slide"
                />
              </picture>
              <Carousel.Caption>
                <h2 className={styles.title} >
                  {currentLang === "ita" ? "Work in progress" : "Work in progress"}
                </h2>
                <span className={styles.description} >
                  {currentLang === "ita" ? "Work in progress" : "Work in progress"}
                </span>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* Homepage Content */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;