import {
  Row,
  Col
} from 'react-bootstrap';
import { ArticlePreview } from "./ArticlePreview";


export const ArticlesRow = function (props) {

  return (
    <Row className="w-100">
      {props.articles.map((article, i) => (
        <Col md={6} className="mobile-adaptive-card-container" key={i}>
          <ArticlePreview
            setOpenedArticle={props.setOpenedArticle}
            article={article}
          />
        </Col>
      ))}
    </Row>
  );
};