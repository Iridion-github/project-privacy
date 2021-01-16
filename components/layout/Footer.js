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
    <Navbar fixed="" bg="standard-blue" expand="lg" className={styles.footer}>
      <Navbar.Text className="w-100">
        <Row>
          <Col md={{ span: 3, offset: 4 }} className="d-flex align-items-center justify-content-end text-dark">
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
      </Navbar.Text>
      <Button
        variant="info"
        onClick={() => scrollToTopSmoothly()}>
        <i className="fas fa-arrow-circle-up"></i>
      </Button>
    </Navbar>
  )
}