import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Card,
  Button,
  Image,
  Nav
} from 'react-bootstrap'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ArticleRead = function (props) {
  const [language, setLanguage] = useState("ita")
  return (
    <Card className="w-100 mb-4" border="secondary">
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#ita">
          <Nav.Item>
            <Nav.Link active={language === "ita"} href="#ita" onClick={() => setLanguage("ita")}><Image src="bandiere/ita.png" className={styles.blackBorder + " " + styles.flagIcon} /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={language === "eng"} href="#eng" onClick={() => setLanguage("eng")} > <Image src="bandiere/GB.png" className={styles.blackBorder + " " + styles.flagIcon} /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Img className={styles.articlePreviewImg} variant="top" src={props.article.previewImg} />
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
  )
}