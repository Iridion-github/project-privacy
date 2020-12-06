import styles from '../../styles/Home.module.css'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Navigation = function () {
  return (
    <Navbar sticky="top" bg="standard-blue" expand="lg" className={styles.navbar}>
      <Navbar.Brand href="/"><img src="/privacy.svg" className={styles.logo + " ml-2 mr-5"} /></Navbar.Brand>
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
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar >
  )
}