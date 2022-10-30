import styles from "../styles/Home.module.css";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";
import { RightMenu } from "../components/home/RightMenu";

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
                <img className="d-block w-100" src="slides/1stSlide.png" alt="First slide" style={{ height: "680px" }} />
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
                <img className="d-block w-100" src="slides/2ndSlide.png" alt="Second slide" style={{ height: "680px" }} />
              </picture>
              <Carousel.Caption>
                <h2 className={styles.title}>{currentLang === "ita" ? "Consulenza Privacy e Antiriciclaggio" : "Privacy and Anti-Money Laundering Consultancy"}</h2>
                <span className={styles.description}>{currentLang === "ita" ? "Analisi e valutazione rischi" : "Risk analysis and assessment"}</span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <picture>
                <source media="(max-width: 650px)" srcSet="contatti.png" alt="img alternativa mobile view" />
                <img className="d-block w-100" src="slides/3rdSlide.png" alt="Third slide" style={{ height: "680px" }} />
              </picture>
              <Carousel.Caption>
                <h2 className={styles.title}>{currentLang === "ita" ? "Work in progress" : "Work in progress"}</h2>
                <span className={styles.description}>{currentLang === "ita" ? "Work in progress" : "Work in progress"}</span>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* Homepage Content */}
        <Row className="w-100 p-0 m-0 ">
          <Col md={{ span: 6, offset: 3 }} className="">
            <Container className="justify-content-center p-0 mb-5">
              <Row className="w-100 justify-content-center ml-0 mr-0">
                <Card className="pt-2 pb-2 text-center justify-content-center">
                  <Card.Body className="home-text">
                    <Col md={{ span: 8 }} className="text-justify-desktop-only">
                      <p className="home-text-left">
                        {currentLang === "ita"
                          ? `Le dinamiche economiche e commerciali che caratterizzano specifici mercati di beni e servizi hanno indotto il legislatore nazionale o sovranazionale a disciplinare i vari settori con norme e disposizioni che richiedono l’osservanza di obblighi e adempimenti, la cui violazione determina, spesso, gravi conseguenze in termini sanzionatori o reputazionali`
                          : `The economic and commercial dynamics that characterize specific markets of goods and services have led the national or supranational legislator to regulate the various sectors with rules and provisions that comply with obligations and fulfilments, the definition of which often has serious penalties or reputational consequences.`}
                      </p>
                    </Col>
                    <Col md={{ span: 8, offset: 4 }} className="text-justify-desktop-only pt-3">
                      <p className="home-text-right">
                        {currentLang === "ita"
                          ? `La maggior parte di dette normative di settore trovano il loro tratto caratterizzante in un approccio basato sul rischio. Il legislatore nazionale sulla base di input provenienti spesso da contesti internazionali, ha adottato la filosofia della gestione del rischio come caposaldo di sistemi di prevenzione. In sostanza non vengono dettate disposizioni di dettaglio su specifici adempimenti ma si lascia al soggetto destinatario degli obblighi l’adozione delle più adeguate misure tecnico organizzative nel rispetto dei principi di proporzionalità e di responsabilizzazione.`
                          : `Most of these sector regulations find their characterizing feature in a risk-based approach. On the basis of inputs often coming from international contexts, the national legislator has adopted the philosophy of risk management as a cornerstone of prevention systems. In essence, no detailed provisions are laid down on specific obligations, but the recipient of the obligations is left to adopt the most appropriate technical and organizational measures in compliance with the principles of proportionality and accountability.`}
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
                          ? `Le organizzazioni si confrontano, pertanto, con attività regolamentate verso i quali ci si deve porre necessariamente in una posizione di conformità (compliance) normativa. Raggiungere l’obbiettivo della conformità talvolta non è semplice da conseguire per effetto dell'elevato numero di adempimenti da osservare in relazione alle singole discipline, all’estrema complessità e mutevolezza dei cambiamenti legislativi nonchè per la difficoltà di saper leggere e adattare fattispecie astratte alle prassi operative.`
                          : `Organizations are therefore confronted with regulated activities towards which it is necessary to place themselves in a position of regulatory compliance. Reaching the objective of compliance is sometimes not easy to achieve due to the high number of requirements to be observed in relation to individual disciplines, the extreme complexity and changeability of legislative changes as well as the difficulty of knowing how to read and adapt abstract cases to practices operational.`}
                      </p>
                    </Col>
                    <Col md={{ span: 8, offset: 2 }} className="text-justify-desktop-only pt-3">
                      <p className="home-text-center">
                        {currentLang === "ita"
                          ? `In tale contesto nelle varie organizzazioni si commette un grave errore. Si affrontano i temi della conformità normativa in modo settoriale. La compliance normativa, in realtà, è un obiettivo da conseguire intercettando in modo trasversale tutte le differenti esigenze organizzative che interessano contemporaneamente i vari ambiti normativi e i diversi attori e organi di controllo interno.`
                          : `In this context, a serious mistake is made in the various organizations. Regulatory compliance issues are addressed in a sectoral way. In reality, regulatory compliance is an objective to be achieved by intercepting in a transversal way all the different organizational needs that simultaneously affect the various regulatory areas and the various actors and internal control bodies.`}
                      </p>
                    </Col>
                    <Col md={{ span: 8, offset: 0 }} className="text-justify-desktop-only pt-3">
                      <p className="home-text-left">
                        {currentLang === "ita"
                          ? `È indispensabile, pertanto, adottare un approccio integrato che permetta di leggere e interpretare le dinamiche organizzative come un sistema organico, dinamico ed integrato. Un approccio di questo tipo rende più efficienti le misure di mitigazione dei rischi, evita duplicazioni e sovrapposizioni e, al contempo, consente di contenere gli efforts economici.`
                          : `It is therefore essential to adopt an integrated approach that allows to read and interpret the organizational dynamics as an organic, dynamic and integrated system. Such an approach makes risk mitigation measures more efficient, avoids duplication and overlap and, at the same time, allows to contain economic efforts.`}
                      </p>
                    </Col>
                  </Card.Body>
                </Card>
              </Row>
            </Container>
          </Col>
          <Col md={{ span: 3, offset: 0 }} className="m-0 p-0 justify-content-center">
            <RightMenu currentLang={currentLang} />
          </Col>
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
