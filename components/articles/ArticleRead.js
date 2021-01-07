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
import { ArticleContent } from './ArticleContent'

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
                <Nav.Item className="special-bottom-border">
                  <Nav.Link active={language === "ita"} href="#ita" onClick={() => setLanguage("ita")}><Image src="bandiere/ita.png" className="black-border flag-icon" /></Nav.Link>
                </Nav.Item>
                <Nav.Item className={language === "eng" ? "special-bottom-border" : ""}>
                  <Nav.Link active={language === "eng"} href="#eng" onClick={() => setLanguage("eng")} > <Image src="bandiere/GB.png" className="black-border flag-icon" /></Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={10}>
              <Row>
                <h3>{props.article[language].title}</h3>
              </Row>
              <Row>
                <Col md={12}>
                  <h6>{props.article[language].subtitle}</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>

          <Row>
            <Col md={12} className="text-justify">
              <ArticleContent
                paragraphs={props.article[language].content}
                previewImg={props.article.previewImg}
                images={props.article.images}
              />
            </Col>
          </Row>

        </Card.Body>
      </Card >
    </Row>
  )
}