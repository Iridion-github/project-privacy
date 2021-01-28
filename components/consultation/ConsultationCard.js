import {
  Row,
  Col
} from 'react-bootstrap'
import { useLanguage } from '../../context/siteLanguageContext' //context
import stringToHTML from 'html-react-parser'
import { ContactsBtn } from '../buttons/ContactsBtn'


export const ConsultationCard = function (props) {
  const siteLanguage = useLanguage()

  return (
    <>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="">
          {console.log(props.consultation[siteLanguage])}
          {stringToHTML(props.consultation[siteLanguage].content)}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <ContactsBtn />
      </Row>
    </>
  )
}