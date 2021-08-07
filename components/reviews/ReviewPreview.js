import { useState } from 'react';
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

export const ReviewPreview = function (props) {
  const [language, setLanguage] = useState("ita");
  const dateObj = datePrettifier(props.review.date, language);
  const previewImgSrc = (props.review.previewImg && props.review.previewImg.length) ? props.review.previewImg : "/recensioni/url-preview-img-1.png";
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
        <Card.Title className="article-preview-title">{language === "ita" ? props.review.ita.title : props.review.eng.title}</Card.Title>
        <Card.Text className="article-preview-subtitle">
          {language === "ita" ? props.review.ita.subtitle : props.review.eng.subtitle}
        </Card.Text>
        <Row className="justify-content-end pr-3">
          <Button
            size="md"
            variant="info"
            onClick={() => props.setOpenedReview(props.review.id)}
          >
            {language === "ita" ? "Leggi " : "Read "}<i className="ml-2 fab fa-readme"></i>
          </Button>
        </Row>
      </Card.Body>
      <Card.Footer className="pt-1 pb-1">
        <Row className="ml-0 mr-0">
          <Col md={6} className="pr-0">
            <small className="text-muted">
              {props.review.authors.map((author, i) => {
                return (<Row key={i}>{props.review.authors.length > 1 ? " • " + author + "\n" : " • " + author} </Row>);
              })}
            </small>
          </Col>
          <Col md={6} className="p-0 text-right">
            <span className="text-muted"> {props.review[language].tags.map(tag => <Badge variant="info" className="ml-1" key={tag}>{tag}</Badge>)}</span>
          </Col>
        </Row>
      </Card.Footer>
    </Card >
  );
};