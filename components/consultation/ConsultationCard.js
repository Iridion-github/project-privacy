
import {
  Row,
  Col
} from 'react-bootstrap'
import { useLanguage } from '../../context/siteLanguageContext' //context
import stringToHTML from 'html-react-parser'


export const ConsultationCard = function (props) {
  const siteLanguage = useLanguage() //context //per ora inutilizzato qui, ma work in progress
  console.log(props.consultation)
  return (
    <Row>
      <Col md={{ span: 8, offset: 2 }} className="">
        {stringToHTML(props.consultation[siteLanguage].content)}
      </Col>
    </Row>
  )
}