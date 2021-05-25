import styles from '../../styles/Home.module.css'
import {
  Row,
  Col,
  Navbar,
  Nav,
  Image,
  Button
} from 'react-bootstrap'
import { useState, useEffect } from 'react'

export const Navigation = function (props) {

  const btnLabelsInit = {
    chiSono: "",
    formazione: "",
    consulenza: "",
    areaQuiz: "",
    recensioniBibliografiche: "",
    articoli: "",
    contatti: ""
  }

  const [btnLabels, setBtnLabels] = useState(btnLabelsInit);

  useEffect(() => {
    const itaLabels = {
      chiSono: "Chi Sono",
      formazione: "Formazione",
      consulenza: "Consulenza",
      areaQuiz: "Area Quiz",
      recensioniBibliografiche: "Recensioni Bibliografiche",
      articoli: "Articoli",
      contatti: "Contatti",
    }

    const engLabels = {
      chiSono: "Who I Am",
      formazione: "Training",
      consulenza: "Consultation",
      areaQuiz: "Quiz Area",
      recensioniBibliografiche: "Bibliographic Reviews",
      articoli: "Articles",
      contatti: "Contacts",
    }

    const targetLabels = (props.currentLang === "ita") ? itaLabels : engLabels
    setBtnLabels(targetLabels)
  }, [props.currentLang])

  return (
    <>
      <Row className="m-0 w-100 bg-standard-blue navbar-row">
        <Col md={{ span: 9, offset: 2 }} className="m-auto justify-content-center h-100">
          <Navbar sticky="top" bg="standard-blue pt-0 pb-0 h-100" expand="lg" className={styles.navbar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="h-100">
              <Nav className="m-auto align-items-center mt-0 mb-0 h-100 nav-link-container justify-content-center">
                <Nav.Link className={styles.navbarLogoContainer + " h-100"} href="/">
                  <Image src="/editedLogo.png" className={styles.navbarLogo + " h-100"} />
                </Nav.Link>
                <Nav.Link className={styles.navbarText} href="/">Home</Nav.Link>
                <Nav.Link href="/chiSono" className={styles.navbarText + " align-items-center"}>{btnLabels.chiSono} </  Nav.Link>
                <Nav.Link href="/formazione" className={styles.navbarText}>{btnLabels.formazione}</Nav.Link>
                <Nav.Link href="/consulenza" className={styles.navbarText}>{btnLabels.consulenza}</Nav.Link>
                <Nav.Link href="/areaQuiz" className={styles.navbarText}>{btnLabels.areaQuiz}</Nav.Link>
                <Nav.Link href="/recensioniBibliografiche" className={styles.navbarText}>{btnLabels.recensioniBibliografiche}</Nav.Link>
                <Nav.Link href="/articoli" className={styles.navbarText}>{btnLabels.articoli}</Nav.Link>
                <Nav.Link href="/contatti" className={styles.navbarText}>{btnLabels.contatti}</Nav.Link>
                <Row className="bg-standard-blue justify-content-center align-items-center navbar-flag-row">
                  <Col className="align-items-center p-0 flag-icon-container">
                    <Button
                      onClick={() => props.changeSiteLang("ita")}
                      variant=""
                      active={false}
                      className="p-0 flag-icon-btn mr-1"
                    >
                      <Image src="/bandiere/ita.png" className={"black-border flag-icon " + styles.responsiveFlagIcon} />
                    </Button>
                  </Col>
                  <Col className="align-items-center p-0 flag-icon-container">
                    <Button
                      onClick={() => props.changeSiteLang("eng")}
                      variant=""
                      active={false}
                      className="p-0 flag-icon-btn"
                    >
                      <Image src="/bandiere/GB.png" className={"black-border flag-icon " + styles.responsiveFlagIcon} />
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