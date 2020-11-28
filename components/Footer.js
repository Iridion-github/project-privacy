import styles from '../styles/Home.module.css'
import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Footer = function () {
  return (
    <Navbar fixed="" bg="standard-blue" expand="lg" className={styles.footer}>
      <Navbar.Text className="col-md-4 offset-md-5 text-dark">
        Gaetano Mastropierro - Consulenza Privacy
      <img src="/privacy.svg" className={styles.footerLogo + " ml-2"} />
      </Navbar.Text>
    </Navbar>
  )
}