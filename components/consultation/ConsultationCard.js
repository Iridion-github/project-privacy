
import {
  Row,
  Col
} from 'react-bootstrap'
import { useLanguage } from '../../context/siteLanguageContext' //context


export const ConsultationCard = function (props) {
  const siteLanguage = useLanguage() //context //per ora inutilizzato qui, ma work in progress
  return (
    <Row>
      <Col md={{ span: 4, offset: 2 }} className="">
        Hai scelto: {props.consultation}
      </Col>
    </Row>
  )
}