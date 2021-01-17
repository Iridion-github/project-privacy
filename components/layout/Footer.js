import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import {
  Navbar,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap'

export const Footer = function () {
  const router = useRouter()
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
    <Navbar fixed="bottom" bg="standard-blue" expand="lg" className={styles.footer}>
      <Row className="w-100">
        <Col md={{ span: 4 }} className={styles.footerText + " text-dark"}>
        </Col>
        <Col md={{ span: 3 }} className={styles.footerText + " text-dark mr-3"}>
          Gaetano Mastropierro - Consulenza Privacy
        </Col>
        <Col
          onClick={() => router.push('/', undefined, { shallow: true })}
          md={{ span: 1, offset: 0 }}
          className={styles.footerLogoContainer}
        >
          <Image href='/' src="/privacy.svg" className={styles.footerLogo} />
        </Col>
      </Row>
      <Button
        variant="info"
        onClick={() => scrollToTopSmoothly()}>
        <i className="fas fa-arrow-circle-up"></i>
      </Button>
    </Navbar>
  )
}