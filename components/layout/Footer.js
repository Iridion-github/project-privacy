import styles from '../../styles/Home.module.css'
import {
  Navbar,
  Col,
  Image,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Footer = function () {

  const scrollToTopSmoothly = () => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: window.scrollY - Math.ceil(window.scrollY / 10),
        behavior: 'smooth'
      })
      setTimeout(scrollToTopSmoothly, 10)
    }
  }


  return (
    <Navbar fixed="" bg="standard-blue" expand="lg" className={styles.footer}>
      <Navbar.Text className="w-100">
        <Col md={{ span: 4, offset: 5 }} className="text-dark">
          Gaetano Mastropierro - Consulenza Privacy
        <Image src="/privacy.svg" className={styles.footerLogo + " ml-2"} />
        </Col>
      </Navbar.Text>
      <Button
        variant="info"
        onClick={() => scrollToTopSmoothly()}>
        <i className="fas fa-arrow-circle-up"></i>
      </Button>
    </Navbar>
  )
}