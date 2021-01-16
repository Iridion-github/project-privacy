import { useState } from 'react'
import stringToHTML from 'html-react-parser'
import { useLanguage } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Card,
  Button,
  ButtonToolbar,
  ButtonGroup,
  Image,
  Nav
} from 'react-bootstrap'
import { ArticleContent } from './ArticleContent'
import { datePrettifier } from '../../utils/date'


export const ArticleRead = function (props) {
  const siteLanguage = useLanguage() //context
  const [language, setLanguage] = useState("ita")
  return (
    <Row className="w-100 m-auto">
      <Card className="w-100 mb-4 p-1" border="secondary">
        <Button
          className="black-border"
          variant="info"
          href="/articoli"
        >
          <i className="fas fa-long-arrow-alt-left mr-2"></i> {siteLanguage === "ita" ? "Torna agli Articoli" : "Back to Articles"}
        </Button>
        <Card.Header className="pb-0">
          <Row>
            <Col md={{ span: 12, offset: 0 }}>
              <Row>
                <h3 className="text-justify"><strong>{props.article[language].title}</strong></h3>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Row>
                <Col md={12}>
                  <h6 className="text-justify">«{props.article[language].subtitle}»</h6>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="w-100 ml-0">
            <Col md={9} className="pr-0 pl-0">
              <Row className="w-100 mr-0 ml-0">
                <Col
                  md={6}
                  className="fake-navbar-item pr-0"
                >
                  <strong>
                    {language === "ita"
                      ? (props.article.authors.length < 2) ? "Autore: " : "Autori: "
                      : (props.article.authors.length < 2) ? "Author: " : "Authors: "}
                  </strong>
                  {props.article.authors.map((author, i) => {
                    return i > 0 ? stringToHTML(`<span className="pb-1"> | </span> ${author}`) : author
                  })}
                </Col>
                <Col
                  md={6}
                  className="fake-navbar-item pr-0"
                >
                  <strong>{siteLanguage === "ita" ? "Data: " : "Date: "}</strong> {datePrettifier(props.article.date, language, true)}
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 1, offset: 2 }} className="m-0 p-0">
              <ButtonToolbar className="height-100 w-100" >
                <ButtonGroup className="w-100">
                  <Button
                    className="btn btn-light grey-border"
                    active={language === "ita"}
                    href="#ita"
                    onClick={() => setLanguage("ita")}>
                    <Image src="/bandiere/ita.png" className="black-border flag-icon" />
                  </Button>
                  <Button
                    className="btn btn-light grey-border"
                    active={language === "eng"}
                    href="#eng"
                    onClick={() => setLanguage("eng")}
                  >
                    <Image src="/bandiere/GB.png" className="black-border flag-icon" />
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={12} className="text-justify">
              <ArticleContent
                glossary={props.article.glossary}
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