import styles from '../../styles/Home.module.css'
import {
  Navbar,
  Row,
  Col,
  Image
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Footer = function () {
  return (
    <Navbar fixed="" bg="standard-blue" expand="lg" className={styles.footer}>
      <Navbar.Text className="w-100">
        <Col md={{ span: 4, offset: 5 }} className="text-dark">
          Gaetano Mastropierro - Consulenza Privacy
        <Image src="/privacy.svg" className={styles.footerLogo + " ml-2"} />
        </Col>
      </Navbar.Text>
    </Navbar>
  )
}