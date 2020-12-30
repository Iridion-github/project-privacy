import styles from '../../styles/Home.module.css'
import {
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Image
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context

export const Navigation = function () {
  const siteLanguage = useLanguage() //context
  const siteLanguageUpdate = useLanguageUpdate() //context
  return (
    <Row className="m-0 w-100 bg-standard-blue">
      <Col md={{ span: 9, offset: 2 }} className="m-auto justify-content-center">
        <Navbar sticky="top" bg="standard-blue" expand="lg" className={styles.navbar}>
          <Navbar.Brand href="/" className="text-center"><img src="/privacy.svg" className={styles.logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className={styles.navbarText} href="/">Home</Nav.Link>
              <div className={styles.navbarDivider}></div>
              <Nav.Link href="/chiSono" className={styles.navbarText}>Chi Sono</Nav.Link>
              <div className={styles.navbarDivider}></div>
              <NavDropdown title="Formazione" id="basic-nav-dropdown1" className={styles.navbarText}>
                <NavDropdown.Item href="/formazione/privacy" className={styles.dropdownOption}>Privacy</NavDropdown.Item>
                <NavDropdown.Item href="/formazione/antiriciclaggio" className={styles.dropdownOption} > Antiriciclaggio</NavDropdown.Item>
              </NavDropdown>
              <div className={styles.navbarDivider}></div>
              <NavDropdown title="Consulenza" id="basic-nav-dropdown2" className={styles.navbarText}>
                <NavDropdown.Item href="/consulenza/privacy" className={styles.dropdownOption}>Privacy</NavDropdown.Item>
                <NavDropdown.Item href="/consulenza/antiriciclaggio" className={styles.dropdownOption} > Antiriciclaggio</NavDropdown.Item>
              </NavDropdown>
              <div className={styles.navbarDivider}></div>
              <Nav.Link href="/areaTest" className={styles.navbarText}>Area Test</Nav.Link>
              <div className={styles.navbarDivider}></div>
              <Nav.Link href="/recensioniBibliografiche" className={styles.navbarText}>Recensioni Bibliografiche</Nav.Link>
              <div className={styles.navbarDivider}></div>
              <Nav.Link href="/articoli" className={styles.navbarText}>Articoli</Nav.Link>
              <div className={styles.navbarDivider}></div>
              <Nav.Link href="/contatti" className={styles.navbarText}>Contatti</Nav.Link>
              <div className={styles.navbarDivider}></div>
              <Row className="m-0 bg-standard-blue">
                <Nav.Link
                  active={siteLanguage === "ita"}
                  href="#ita"
                  onClick={() => siteLanguageUpdate("ita")}
                  className="mr-1"
                >
                  <Image src="bandiere/ita.png" className={styles.blackBorder + " " + styles.flagIcon} />
                </Nav.Link>
                <Nav.Link
                  active={siteLanguage === "eng"}
                  href="#eng"
                  onClick={() => siteLanguageUpdate("eng")}
                  className="ml-0 mr-0">
                  <Image src="bandiere/GB.png" className={styles.blackBorder + " " + styles.flagIcon} />
                </Nav.Link>
              </Row>
            </Nav>
            {/* Searchbar un pò brutta e che rompe le scatole nel layout 
        <Form inline>
          <FormControl type="text" placeholder="Cerca" className="mr-sm-2" />
          <Button variant="primary"><i className="fas fa-search"></i></Button>
        </Form>
        */}
          </Navbar.Collapse>
        </Navbar >
      </Col>
    </Row>
  )
}