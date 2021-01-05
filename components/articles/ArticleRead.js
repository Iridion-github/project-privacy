import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Card,
  Button,
  Image,
  Nav
} from 'react-bootstrap'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context

export const ArticleRead = function (props) {
  const siteLanguage = useLanguage() //context
  const [language, setLanguage] = useState("ita")
  return (
    <Row className="w-100 m-auto">
      <Card className="w-100 mb-4 p-1" border="secondary">
        <Button
          className="black-border"
          onClick={() => props.setOpenedArticle(null)}
        >
          <i className="fas fa-long-arrow-alt-left mr-2"></i> {siteLanguage === "ita" ? "Torna agli Articoli" : "Back to Articles"}
        </Button>
        <Card.Header>
          <Row>
            <Col md={2}>
              <Nav variant="tabs" defaultActiveKey="#ita">
                <Nav.Item>
                  <Nav.Link active={language === "ita"} href="#ita" onClick={() => setLanguage("ita")}><Image src="bandiere/ita.png" className="black-border flag-icon" /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link active={language === "eng"} href="#eng" onClick={() => setLanguage("eng")} > <Image src="bandiere/GB.png" className="black-border flag-icon" /></Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={10}>
              <h3>{language === "ita" ? props.article.ita.title : props.article.eng.title}</h3>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 10, offset: 2 }}>
              <h6>{language === "ita" ? props.article.ita.subtitle : props.article.eng.subtitle}</h6>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Img className={""} variant="top" src={props.article.previewImg} />
          <Card.Title>{language === "ita" ? props.article.ita.title : props.article.eng.title}</Card.Title>
          <Card.Text>
            <Row>
              <b>{language === "ita" ? props.article.ita.subtitle : props.article.eng.subtitle}</b>
            </Row>
            <Row>
              {language === "ita" ? props.article.ita.content : props.article.eng.content}
            </Row>
          </Card.Text>
        </Card.Body>
      </Card >
    </Row>
  )
}