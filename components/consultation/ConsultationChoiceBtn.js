import { useLanguage } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Button
} from 'react-bootstrap'

export const ConsultationChoiceBtn = function (props) {
  const siteLanguage = useLanguage() //context
  return (
    <Button
      className="py-5"
      block
      variant="info"
      onClick={() => props.setConsultation(props.consultation)}
    >
      <Row><Col className="text-center px-2"> <h3>{props.consultation[siteLanguage].title}</h3></Col></Row>
      <Row><Col className="text-center px-4"><p>{(siteLanguage === "ita" ? "Piccola descrizione del consulto offerto riguardo " : "Short description regarding the offered consultation about") + props.consultation[siteLanguage].title}</p></Col></Row>
    </Button>
  )
}