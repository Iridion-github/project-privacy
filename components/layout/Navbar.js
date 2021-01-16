import styles from '../../styles/Home.module.css'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Navbar,
  Nav,
  Image
} from 'react-bootstrap'


export const Navigation = function () {
  const siteLanguage = useLanguage() //context
  const siteLanguageUpdate = useLanguageUpdate() //context
  return (
    <>
      <Row className="m-0 w-100 bg-standard-blue navbar-row">
        <Col md={{ span: 9, offset: 2 }} className="m-auto justify-content-center">
          <Navbar sticky="top" bg="standard-blue" expand="lg" className={styles.navbar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link className={styles.navbarLogoContainer} href="/">
                  <Image src="/privacy.svg" className={styles.navbarLogo} />
                </Nav.Link>
                <Nav.Link className={styles.navbarText} href="/">Home</Nav.Link>
                <div className={styles.navbarDivider}></div>
                <Nav.Link href="/chiSono" className={styles.navbarText}>{siteLanguage === "ita" ? "Chi Sono" : "Who I Am"}</Nav.Link>
                <div className={styles.navbarDivider}></div>
                <Nav.Link href="/formazione" className={styles.navbarText}>{siteLanguage === "ita" ? "Formazione" : "Training"}</Nav.Link>
                <div className={styles.navbarDivider}></div>
                <Nav.Link href="/consulenza" className={styles.navbarText}>{siteLanguage === "ita" ? "Consulenza" : "Consultation"}</Nav.Link>
                <div className={styles.navbarDivider}></div>
                <Nav.Link href="/areaTest" className={styles.navbarText}>{siteLanguage === "ita" ? "Area Test" : "Test Area"}</Nav.Link>
                <div className={styles.navbarDivider}></div>
                <Nav.Link href="/recensioniBibliografiche" className={styles.navbarText}>{siteLanguage === "ita" ? "Recensioni Bibliografiche" : "Bibliographic Reviews"}</Nav.Link>
                <div className={styles.navbarDivider}></div>
                <Nav.Link href="/articoli" className={styles.navbarText}>{siteLanguage === "ita" ? "Articoli" : "Articles"}</Nav.Link>
                <div className={styles.navbarDivider}></div>
                <Nav.Link href="/contatti" className={styles.navbarText}>{siteLanguage === "ita" ? "Contatti" : "Contacts"}</Nav.Link>
                <div className={styles.navbarDivider}></div>
                <Row className="m-0 bg-standard-blue">
                  <Nav.Link
                    active={siteLanguage === "ita"}
                    href="#ita"
                    onClick={() => siteLanguageUpdate("ita")}
                    className="mr-1"
                  >
                    <Image src="/bandiere/ita.png" className="black-border flag-icon" />
                  </Nav.Link>
                  <Nav.Link
                    active={siteLanguage === "eng"}
                    href="#eng"
                    onClick={() => siteLanguageUpdate("eng")}
                    className="ml-0 mr-0">
                    <Image src="/bandiere/GB.png" className="black-border flag-icon" />
                  </Nav.Link>
                </Row>
              </Nav>
            </Navbar.Collapse>
          </Navbar >
        </Col>
      </Row>
    </>
  )
}