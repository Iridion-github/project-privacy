import styles from '../../styles/Home.module.css'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Navbar,
  Nav,
  Image,
  Button
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
                <Row className="m-0 bg-standard-blue flag-container justify-content-center align-items-center p-0">
                  <Col md={2} className="justify-content-center align-items-center p-0 flag-icon-container">
                    <Button
                      onClick={() => siteLanguageUpdate(siteLanguage === "ita" ? "eng" : "ita")}
                      variant=""
                      active={false}
                      className="p-0 flag-icon-btn"
                    >
                      <Image src="/bandiere/hybrid.png" className="black-border flag-icon" />
                    </Button>
                  </Col>
                </Row>
              </Nav>
            </Navbar.Collapse>
          </Navbar >
        </Col>
      </Row>
    </>
  )
}