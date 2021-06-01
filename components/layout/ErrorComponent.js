
import { useRouter } from 'next/router'
import {
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'
import { useAppContext } from "../../context/contextLib"

export function ErrorComponent(props) {
  const { currentLang } = useAppContext()
  const router = useRouter()

  return (
    <Card className="p-0">
      <Card.Title className="text-center"><h2>{currentLang === "ita" ? "Errore 404" : "Error 404"}</h2></Card.Title>
      <Card.Img className="error-img" variant="top" src="/standardError.png" />
      <Card.Body>
        <Row className="w-100 ml-0 mr-0">
          <Col md={{ span: 8, offset: 2 }} className="text-justify text-center">
            <h5>{currentLang === "ita" ? "La pagina che hai cercato di raggiungere non esiste." : "The page you tried to reach doesn't exist."}</h5>
          </Col>
        </Row>
        <Row className="pt-3 w-100 ml-0 mr-0">
          <Col md={{ span: 4 }} className="text-center mb-3">
            <Button
              block
              variant="info"
              href="/"
            >
              <i className="fas fa-home mr-2"></i>
              {currentLang === "ita" ? "Torna alla Home" : "Return to Home"}
            </Button>
          </Col>
          <Col md={{ span: 4 }} className="text-center mb-3">
            <Button
              block
              variant="info"
              onClick={() => router.back()}
            >
              <i className="fas fa-undo-alt mr-2"></i>
              {currentLang === "ita" ? "Torna Indietro" : "Go Back"}
            </Button>
          </Col>
          <Col md={{ span: 4 }} className="text-center mb-3">
            <Button
              block
              variant="info"
              onClick={() => router.reload()}
            >
              <i className="fas fa-sync-alt mr-2"></i>
              {currentLang === "ita" ? "Riprova" : "Try Again"}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}


