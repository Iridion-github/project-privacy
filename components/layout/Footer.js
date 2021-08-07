import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import {
  Navbar,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap';
import { useAppContext } from '../../context/contextLib';

export const Footer = function () {
  const { currentLang } = useAppContext();
  const router = useRouter();
  const scrollToTopSmoothly = () => {
    let currentHeight = window.scrollY;
    let heigthReduction = window.scrollY / 50;
    if (heigthReduction < 7.5) heigthReduction = 7.5;
    let targetHeight = currentHeight - heigthReduction;
    if (currentHeight >= 1) {
      window.scrollTo({
        top: targetHeight,
        //behavior: 'smooth'
      });
      setTimeout(scrollToTopSmoothly, 10);
    }
  };
  return (
    <Navbar sticky="bottom" bg="standard-blue" expand="lg" className={styles.footer}>
      <Row className="w-100">
        <Col xs={{ span: 4 }} className={styles.footerText + " text-dark"}>
        </Col>
        <Col md={{ span: 3 }} className={styles.footerText + " text-dark"} >
          {currentLang === "ita" ? "Gaetano Mastropierro - Consulenza Privacy" : "Gaetano Mastropierro - Privacy Consultation"}
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
  );
};