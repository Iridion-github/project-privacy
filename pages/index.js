import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css" rel="stylesheet" />
        <link href="../node_modules/@blueprintjs/core/lib/css/blueprint.css" rel="stylesheet" />
      </Head>
      {/* Navbar */}
      <Navbar sticky="top" bg="standard-blue" expand="lg" className={styles.navbar}>
        <Navbar.Brand href="/"><img src="/privacy.svg" className={styles.logo + " ml-2 mr-5"} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className={styles.navbarText + " mr-4"} href="/">Home</Nav.Link>
            <Nav.Link href="/about" className={styles.navbarText + " mr-4"}>Chi Sono</Nav.Link>
            <NavDropdown title="I miei Servizi" id="basic-nav-dropdown" className={styles.navbarText + " mr-4"}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* Homepage Slides */}
      <div className={styles.carouselContainer}>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="1stSlide.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className={styles.title}>
                Consulenza Privacy e Antiriciclaggio
              </h2>
              <p className={styles.description}>
                Analisi e valutazione rischi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="2ndSlide.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1 className={styles.title}>
                Consulenza Privacy e Antiriciclaggio
              </h1>
              <p className={styles.description}>
                Analisi e valutazione rischi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="3rdSlide.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className={styles.title}>
                Consulenza Privacy e Antiriciclaggio
              </h2>
              <p className={styles.description}>
                Analisi e valutazione rischi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Homepage Content */}
      <main className={styles.main}>
        {/* Empty div to test scrolling */}
        <div style={{ height: "3000px;" }}></div>
      </main>
      {/* Footer */}
      <Navbar fixed="" bg="standard-blue" expand="lg" className={styles.footer}>
        <Navbar.Text className="col-md-4 offset-md-5 text-dark">
          Gaetano Mastropierro - Consulenza Privacy
          <img src="/privacy.svg" className={styles.logo + " ml-2"} />
        </Navbar.Text>
      </Navbar>
    </div>
  )
}
