import styles from '../../styles/Home.module.css'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context
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
  const siteLanguage = useLanguage() //context
  const scrollToTopSmoothly = () => {
    let currentHeight = window.scrollY
    let heigthReduction = window.scrollY / 50
    if (heigthReduction < 7.5) heigthReduction = 7.5
    let targetHeight = currentHeight - heigthReduction
    if (currentHeight >= 1) {
      console.log("currentHeight:", currentHeight)
      console.log("heigthReduction:", heigthReduction)
      console.log("targetHeight:", targetHeight)
      window.scrollTo({
        top: targetHeight,
        //behavior: 'smooth'
      })
      setTimeout(scrollToTopSmoothly, 10)
    }
  }
  return (
    <Navbar sticky="bottom" bg="standard-blue" expand="lg" className={styles.footer}>
      <Row className="w-100">
        <Col xs={{ span: 4 }} className={styles.footerText + " text-dark"}>
        </Col>
        <Col md={{ span: 3 }} className={styles.footerText + " text-dark"}>
          {siteLanguage === "ita" ? "Gaetano Mastropierro - Consulenza Privacy" : "Gaetano Mastropierro - Privacy Consultation"}
        </Col>
        <Col
          onClick={() => router.push('/')}
          xs={{ span: 1 }}
          className={styles.footerLogoContainer + " text-center"}
        >
          <Image href='/' src="/editedLogo.png" className={styles.footerLogo} />
        </Col>
        <Col xs={2} className={styles.footerBtnContainer + " text-center"}>
          <Button
            className={styles.footerBtn}
            variant="info"
            onClick={() => scrollToTopSmoothly()}>
            <i className="fas fa-arrow-circle-up"></i>
          </Button>
        </Col>
      </Row>
    </Navbar>
  )
}