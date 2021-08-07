import { useMemo, useState } from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  Image,
  Nav,
  Badge
} from 'react-bootstrap';
import { datePrettifier } from '../../utils/date';

export const ArticlePreview = function (props) {
  const [language, setLanguage] = useState("ita");
  const dateObj = useMemo(() => datePrettifier(props.article.date, language), [language]);
  const previewImgSrc = useMemo(() => (props.article.previewImg && props.article.previewImg.length) ? props.article.previewImg : "/articoli/url-preview-img-1.png", []);

  return (
    <Card className="w-100 mb-4 grey-border">
      <Card.Header>
        <Row className="w-100 p-0 m-0">
          <Col md={4} className="p-0">
            <Nav variant="tabs" defaultActiveKey="#ita">
              <Nav.Item>
                <Nav.Link active={language === "ita"} href="#ita" onClick={() => setLanguage("ita")}><Image src="/bandiere/ita.png" className="black-border flag-icon" /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link active={language === "eng"} href="#eng" onClick={() => setLanguage("eng")} > <Image src="/bandiere/GB.png" className="black-border flag-icon" /></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={8} className="p-0 m-0 text-right">
            <small className="text-muted">
              {dateObj.weekday}{" "}{dateObj.day}{" "}{dateObj.month}{" "}{dateObj.year}
            </small>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Img className="article-preview-img" variant="top" src={previewImgSrc} />
        <Card.Title className="article-preview-title">{language === "ita" ? props.article.ita.title : props.article.eng.title}</Card.Title>
        <Card.Text className="article-preview-subtitle">
          {language === "ita" ? props.article.ita.subtitle : props.article.eng.subtitle}
        </Card.Text>
        <Row className="justify-content-end pr-3">
          <Button
            size="md"
            variant="info"
            onClick={() => props.setOpenedArticle(props.article.id)}
          >
            {language === "ita" ? "Leggi " : "Read "}<i className="ml-2 fab fa-readme"></i>
          </Button>
        </Row>
      </Card.Body>
      <Card.Footer className="pt-1 pb-1">
        <Row className="ml-0 mr-0">
          <Col md={6} className="pr-0">
            <small className="text-muted">
              {props.article.authors.map((author, i) => {
                return (<Row key={i}>{props.article.authors.length > 1 ? " • " + author + "\n" : " • " + author} </Row>);
              })}
            </small>
          </Col>
          <Col md={6} className="p-0 text-right">
            <span className="text-muted"> {props.article[language].tags.map(tag => <Badge variant="info" className="ml-1" key={tag}>{tag}</Badge>)}</span>
          </Col>
        </Row>
      </Card.Footer>
    </Card >
  );
};