import styles from '../../styles/Home.module.css'
import {
  Row,
  Col,
  Navbar,
  Nav,
  Image,
  Button
} from 'react-bootstrap'

export const Navigation = function (props) {

  const btnLabels = {
    chiSono: {
      ita: "Chi Sono",
      eng: "Who I Am",
    },
    formazione: {
      ita: "Formazione",
      eng: "Training",
    },
    consulenza: {
      ita: "Consulenza",
      eng: "Consultation",
    },
    areaQuiz: {
      ita: "Area Quiz",
      eng: "Quiz Area",
    },
    recensioniBibliografiche: {
      ita: "Recensioni Bibliografiche",
      eng: "Bibliographic Reviews",
    },
    articoli: {
      ita: "Articoli",
      eng: "Articles",
    },
    contatti: {
      ita: "Contatti",
      eng: "Contacts",
    },
    archivio: {
      ita: "Archivio",
      eng: "Archive",
    }
  }

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
                <Nav.Link href="/chiSono" className={styles.navbarText + " align-items-center"} suppressHydrationWarning>{btnLabels.chiSono[props.currentLang]} </  Nav.Link>
                <Nav.Link href="/formazione" className={styles.navbarText} suppressHydrationWarning>{btnLabels.formazione[props.currentLang]}</Nav.Link>
                <Nav.Link href="/consulenza" className={styles.navbarText} suppressHydrationWarning>{btnLabels.consulenza[props.currentLang]}</Nav.Link>
                <Nav.Link href="/areaQuiz" className={styles.navbarText} suppressHydrationWarning>{btnLabels.areaQuiz[props.currentLang]}</Nav.Link>
                <Nav.Link href="/recensioniBibliografiche" className={styles.navbarText} suppressHydrationWarning>{btnLabels.recensioniBibliografiche[props.currentLang]}</Nav.Link>
                <Nav.Link href="/articoli" className={styles.navbarText} suppressHydrationWarning>{btnLabels.articoli[props.currentLang]}</Nav.Link>
                <Nav.Link href="/contatti" className={styles.navbarText} suppressHydrationWarning>{btnLabels.contatti[props.currentLang]}</Nav.Link>
                <Nav.Link href="/archivio" className={styles.navbarText} suppressHydrationWarning>{btnLabels.archivio[props.currentLang]}</Nav.Link>
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