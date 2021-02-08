import { useLanguage } from '../../context/siteLanguageContext' //context
import { useRouter } from 'next/router'
import {
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'

export function ErrorComponent(props) {
  const siteLanguage = useLanguage() //context
  const router = useRouter()

  return (
    <Card className="w-75 p-2 no-border">
      <Card.Title className="text-center"><h2>{siteLanguage === "ita" ? "Errore 404" : "Error 404"}</h2></Card.Title>
      <Card.Img className="error-img" variant="top" src="/standardError.png" />
      <Card.Body>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-justify text-center">
            <h5>{siteLanguage === "ita" ? "La pagina che hai cercato di raggiungere non esiste." : "The page you tried to reach doesn't exist."}</h5>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col md={{ span: 2, offset: 3 }} className="text-justify text-center mb-3">
            <Button
              block
              variant="info"
              href="/"
            >
              <i className="fas fa-home mr-2"></i>
              {siteLanguage === "ita" ? "Torna alla Home" : "Return to Home"}
            </Button>
          </Col>
          <Col md={{ span: 2 }} className="text-justify text-center mb-3">
            <Button
              block
              variant="info"
              onClick={() => router.back()}
            >
              <i className="fas fa-undo-alt mr-2"></i>
              {siteLanguage === "ita" ? "Torna Indietro" : "Go Back"}
            </Button>
          </Col>
          <Col md={{ span: 2 }} className="text-justify text-center mb-3">
            <Button
              block
              variant="info"
              onClick={() => router.reload()}
            >
              <i className="fas fa-sync-alt mr-2"></i>
              {siteLanguage === "ita" ? "Riprova" : "Try Again"}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}


