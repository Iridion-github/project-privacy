import styles from "../../styles/Home.module.css";
import { Row, Col, Navbar, Nav, Image, Button } from "react-bootstrap";
import { useAppContext } from "../../context/contextLib";
import { LogInBtn } from "../buttons/LogInBtn";
import { LogOutBtn } from "../buttons/LogOutBtn";
import { GoRegisterBtn } from "../buttons/GoRegisterBtn";

export const Navigation = function () {
  const { currentLang, changeSiteLang, loggedUser, logInUser, logOutUser } = useAppContext();

  const btnLabels = {
    chiSiamo: {
      ita: "Chi Siamo",
      eng: "Who we are",
    },
    formazione: {
      ita: "Formazione",
      eng: "Learning",
    },
    consulenza: {
      ita: "Consulenza",
      eng: "Consultation",
    },
    areaQuiz: {
      ita: "Area Test",
      eng: "Tests Area",
    },
    articoli: {
      ita: "Articoli",
      eng: "Articles",
    },
    recensioniBibliografiche: {
      ita: "Recensioni Bibliografiche",
      eng: "Bibliographic Reviews",
    },
    contatti: {
      ita: "Contatti",
      eng: "Contacts",
    },
    registrazione: {
      ita: "Registrazione",
      eng: "Register",
    },
  };

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
                <Nav.Link className={styles.navbarText} href="/">
                  Home
                </Nav.Link>
                <Nav.Link href="/chiSiamo" className={styles.navbarText + " align-items-center"}>
                  {btnLabels.chiSiamo[currentLang]}{" "}
                </Nav.Link>
                <Nav.Link href="/formazione" className={styles.navbarText}>
                  {btnLabels.formazione[currentLang]}
                </Nav.Link>
                <Nav.Link href="/consulenza" className={styles.navbarText}>
                  {btnLabels.consulenza[currentLang]}
                </Nav.Link>
                <Nav.Link href="/areaTest" className={styles.navbarText}>
                  {btnLabels.areaQuiz[currentLang]}
                </Nav.Link>
                <Nav.Link href="/articoli" className={styles.navbarText}>
                  {btnLabels.articoli[currentLang]}
                </Nav.Link>
                <Nav.Link href="/recensioniBibliografiche" className={styles.navbarText}>
                  {btnLabels.recensioniBibliografiche[currentLang]}
                </Nav.Link>
                <Nav.Link href="/contatti" className={styles.navbarText}>
                  {btnLabels.contatti[currentLang]}
                </Nav.Link>
                <Row className="bg-standard-blue justify-content-center align-items-center navbar-flag-row">
                  <Col className="align-items-center p-0 flag-icon-container">
                    <Button onClick={() => changeSiteLang("ita")} variant="" active={false} className="p-0 flag-icon-btn mr-1">
                      <Image src="/bandiere/ita.png" className={"black-border flag-icon " + styles.responsiveFlagIcon} />
                    </Button>
                  </Col>
                  <Col className="align-items-center p-0 flag-icon-container">
                    <Button onClick={() => changeSiteLang("eng")} variant="" active={false} className="p-0 flag-icon-btn">
                      <Image src="/bandiere/GB.png" className={"black-border flag-icon " + styles.responsiveFlagIcon} />
                    </Button>
                  </Col>
                </Row>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col md={{ span: 1 }} className="h-100 ml-0 mr-0">
          <Row className="m-0 w-100 bg-standard-blue mt-1 mb-1 justify-content-end">
            {/* {!loggedUser &&
              <LogInBtn
                onClick={logInUser}
              />} */}
          </Row>
          <Row className="m-0 w-100 bg-standard-blue mb-1 justify-content-end">
            {/* {loggedUser && <LogOutBtn
              onClick={logOutUser}
            />} */}
          </Row>
          <Row className="m-0 w-100 bg-standard-blue mb-1 justify-content-end">
            {/* {!loggedUser && <GoRegisterBtn
              href="/registrazione"
              text={btnLabels.registrazione[currentLang]}
            />} */}
          </Row>
        </Col>
      </Row>
    </>
  );
};
