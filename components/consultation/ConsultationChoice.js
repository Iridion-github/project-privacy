import { useLanguage } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col
} from 'react-bootstrap'
import { ConsultationChoiceBtn } from './ConsultationChoiceBtn'

export const ConsultationChoice = function (props) {
  const siteLanguage = useLanguage() //context //per ora inutilizzato qui, ma work in progress
  return (
    <Row className="m-0 p-0">
      <Col md={{ span: 8, offset: 2 }} className="p-0">
        <Row className="">
          {props.consultations.map((consultation, i) => (
            <Col
              key={consultation.id}
              md={{ span: 6, offset: (i === props.consultations.length - 1 && props.consultations.length % 2 !== 0) ? 3 : 0 }}
              className="mb-4">
              <ConsultationChoiceBtn
                consultation={consultation}
                setConsultation={props.setConsultation}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}