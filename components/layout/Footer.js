import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { Navbar, Row, Col, Image, Button } from "react-bootstrap";
import { useAppContext } from "../../context/contextLib";

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
        <Col xs={{ span: 4 }} className={styles.footerText + " text-dark " + styles.desktopOnly}>
          <Row className="w-100 m-0 p-0">
            <a href="/privacyPolicy" target="_blank" className={styles.footerLink}>
              Privacy Policy
            </a>
            <a href="https://www.espertocompliance.it/" target="_blank" className={styles.footerLink}>
              Esperto Compliance
            </a>
            <a href="/cookiePolicy" target="_blank" className={styles.footerLink}>
              Cookie policy
            </a>
            <Image
              onClick={() => router.push("https://www.linkedin.com/in/gaetano-mastropierro-a97851186/?originalSubdomain=it")}
              href="/"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png"
              className={styles.facebookLogo}
            />
            <Image
              onClick={() => router.push("https://www.linkedin.com/in/gaetano-mastropierro-a97851186/?originalSubdomain=it")}
              href="/"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/2560px-LinkedIn_Logo_2013.svg.png"
              className={styles.linkedinLogo}
            />
          </Row>
        </Col>
        <Col md={{ span: 3 }} className={styles.footerText + " text-dark"}>
          {currentLang === "ita" ? "Gaetano Mastropierro - Consulenza Privacy" : "Gaetano Mastropierro - Privacy Consultation"}
        </Col>
        <Col onClick={() => router.push("/")} xs={{ span: 1 }} className={styles.footerLogoContainer + " text-center"}>
          <Image href="/" src="/editedLogo.png" className={styles.footerLogo} />
        </Col>
        <Col xs={2} className={styles.footerBtnContainer + " text-center " + styles.desktopOnly}>
          <Button className={styles.footerBtn} variant="info" onClick={() => scrollToTopSmoothly()}>
            <i className="fas fa-arrow-circle-up"></i>
          </Button>
        </Col>
        <Col xs={12} className={styles.footerBtnContainer + " text-center " + styles.mobileOnly}>
          <Row className="w-100 m-0 p-0">
            <Image
              onClick={() => router.push("https://www.linkedin.com/in/gaetano-mastropierro-a97851186/?originalSubdomain=it")}
              href="/"
              target="_blank"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png"
              className={styles.facebookLogo}
            />
            <Image
              onClick={() => router.push("https://www.linkedin.com/in/gaetano-mastropierro-a97851186/?originalSubdomain=it")}
              href="/"
              target="_blank"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/2560px-LinkedIn_Logo_2013.svg.png"
              className={styles.linkedinLogo}
            />
          </Row>
          <Button className={styles.footerBtn} variant="info" onClick={() => scrollToTopSmoothly()}>
            <i className="fas fa-arrow-circle-up"></i>
          </Button>
        </Col>
      </Row>
    </Navbar>
  );
};
