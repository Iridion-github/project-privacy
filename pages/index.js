import styles from "../styles/Home.module.css";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";

function Home() {
  const { currentLang, changeSiteLang } = useAppContext();

  return (
    <div className={styles.container}>
      <Header title="Home" />
      {/* Navbar */}
      <Navigation />
      <main className="m-0 pb-5 p-0">
        {/* Homepage Slides */}
        <div className={styles.carouselContainer}>
          <Carousel className="d-block">
            <Carousel.Item interval={2000}>
              <picture>
                <source media="(max-width: 650px)" srcSet="contatti.png" alt="img alternativa mobile view" />
                <img className="d-block w-100" src="slides/1stSlide.png" alt="First slide" />
              </picture>
              <Carousel.Caption>
                <h2 className={styles.title}>{currentLang === "ita" ? "Consulenza Compliance e Integrata" : "Compliance and Integrated Consulting"}</h2>
                <span className={styles.description}>
                  {currentLang === "ita" ? "Privacy | Antiriciclaggio | Responsabilità Amministrativa degli Enti" : "Privacy | Anti-money Laundering | Administrative Liability"}
                </span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <picture>
                <source media="(max-width: 650px)" srcSet="contatti.png" alt="img alternativa mobile view" />
                <img className="d-block w-100" src="slides/2ndSlide.png" alt="Second slide" />
              </picture>
              <Carousel.Caption>
                <h2 className={styles.title}>{currentLang === "ita" ? "Consulenza Privacy e Antiriciclaggio" : "Privacy and Anti-Money Laundering Consultancy"}</h2>
                <span className={styles.description}>{currentLang === "ita" ? "Analisi e valutazione rischi" : "Risk analysis and assessment"}</span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <picture>
                <source media="(max-width: 650px)" srcSet="contatti.png" alt="img alternativa mobile view" />
                <img className="d-block w-100" src="slides/3rdSlide.png" alt="Third slide" style={{ height: "730px" }} />
              </picture>
              <Carousel.Caption>
                <h2 className={styles.title}>{currentLang === "ita" ? "Work in progress" : "Work in progress"}</h2>
                <span className={styles.description}>{currentLang === "ita" ? "Work in progress" : "Work in progress"}</span>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* Homepage Content */}
        <Container className="justify-content-center p-0 mb-5">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <Card className="pt-2 pb-2 text-center justify-content-center">
              <Card.Body>
                <Col md={{ span: 8 }} className="text-justify-desktop-only">
                  <p className="home-text-left">
                    {currentLang === "ita"
                      ? `Le dinamiche economiche e commerciali che 
                      caratterizzano specifici mercati di beni e servizi hanno 
                      indotto il legislatore nazionale o sovranazionale a 
                      disciplinare i vari settori con norme e disposizioni che 
                      richiedono l’osservanza di obblighi e adempimenti, la cui 
                      violazione determina, spesso, gravi conseguenze in 
                      termini sanzionatori o reputazionali`
                      : `The economic and commercial dynamics that
                      characterize specific markets of goods and services have
                      induced by the national or supranational legislator to
                      regulate the various sectors with rules and provisions that
                      require the observance of obligations and fulfilments, whose
                      violation often leads to serious consequences in
                      sanctioning or reputational terms`}
                  </p>
                </Col>
                <Col md={{ span: 8, offset: 4 }} className="text-justify-desktop-only pt-3">
                  <p className="home-text-right">
                    {currentLang === "ita"
                      ? `Le organizzazioni si confrontano, pertanto, con attività 
                      regolamentate verso i quali ci si deve porre necessariamente 
                      in una posizione di conformità normativa, talvolta non 
                      semplice da conseguire per effetto dell'elevato numero di 
                      adempimenti da osservare in relazione alle singole discipline, 
                      all’estrema complessità e mutevolezza dei cambiamenti 
                      legislativi nonche per la difficoltà di saper leggere e adattare 
                      le prassi operative a fattispecie astratte`
                      : `Organizations are therefore confronted with regulated activities 
                      towards which it is necessary to place themselves in a position 
                      of regulatory compliance, sometimes not easy to achieve due to 
                      the high number of obligations to be observed in relation to the 
                      individual disciplines, to the extreme complexity and the 
                      changeability of legislative changes as well as the difficulty of 
                      knowing how to read and adapt operational practices to abstract cases`}
                  </p>
                </Col>
                <Col md={{ span: 12, offset: 0 }} className="text-justify-desktop-only pt-3">
                  <picture>
                    <source media="(max-width: 650px)" srcSet="europe-with-people.png" alt="img alternativa mobile view" />
                    <img className="d-block w-100" src="europe-with-people.png" alt="mid page img" />
                  </picture>
                </Col>
                <Col md={{ span: 8, offset: 4 }} className="text-justify-desktop-only pt-3">
                  <p className="home-text-right">
                    {currentLang === "ita"
                      ? `Spesso nelle varie organizzazioni si commette un grave 
                      errore. Si affrontano i temi della conformità normativa in 
                      modo settoriale. La compliance normativa, in realtà, è un 
                      obiettivo da conseguire in modo trasversale intercettando in 
                      modo complessivo le esigenze che interessano 
                      contemporaneamente differenti ambiti normativi e differenti 
                      attori e organi di controllo aziendali.`
                      : `Often a serious mistake is committed by various organizations:
                      regulatory compliance issues are addressed in a
                      sectoral way. Regulatory compliance is actually an
                      objective to be achieved in a transversal way by intercepting a wide 
                      spectrum of needs related to different regulatory areas,
                      corporate actors and control bodies.`}
                  </p>
                </Col>
                <Col md={{ span: 8, offset: 2 }} className="text-justify-desktop-only pt-3">
                  <p className="home-text-center">
                    {currentLang === "ita"
                      ? `È indispensabile adottare un approccio integrato che permetta 
                      di leggere ed interpretare le dinamiche organizzative come un 
                      sistema organico, dinamico ed integrato. Un approccio di 
                      questo tipo rende più efficienti le misure di mitigazione dei 
                      rischi, evita duplicazioni e sovrapposizioni, e al contempo 
                      consente di contenere gli efforts economici.`
                      : `It is essential to adopt an integrated approach that allows
                      to read and interpret organizational dynamics as a
                      organic, dynamic and integrated system. An approach of
                      this type makes risk mitigation measures more efficient,
                      avoids duplication and overlaps, and at the same time allows 
                      to contain the economic efforts.`}
                  </p>
                </Col>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
