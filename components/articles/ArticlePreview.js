import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Card,
  Button,
  Image,
  Nav,
  Badge
} from 'react-bootstrap'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { datePrettifier } from '../../utils/date'

export const ArticlePreview = function (props) {
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
          {language === "ita" ? props.article.ita.subtitle : props.article.eng.subtitle}
        </Card.Text>
        <Row className="justify-content-end pr-3">
          <Button size="md">{language === "ita" ? "Leggi " : "Read "}<i className="ml-2 fab fa-readme"></i></Button>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col>
            <small className="text-muted"> {props.article.author} </small>
          </Col>
          <Col>
            <span className="text-muted"> {props.article.tags.map(tag => <Badge variant="info" className="mr-1">{tag}</Badge>)}</span>
          </Col>
          <Col className="text-right">
            <small className="text-muted"> {datePrettifier(props.article.date, language)} </small>
          </Col>
        </Row>
      </Card.Footer>
    </Card >
  )
}