
import {
  Row,
  Col
} from 'react-bootstrap';
import { RelatedArticlePreview } from './RelatedArticlePreview';

export const RelatedArticles = function (props) {

  return (
    <>
      <Row className="justify-content-center">
        <h1 >{props.currentLang === "ita" ? "Articoli Correlati" : "Related Articles"}</h1>
      </Row>
      <Row>
        <Col>
          {props.relatedArticles.map((art, i) =>
            <RelatedArticlePreview
              key={i}
              setOpenedArticle={props.setOpenedArticle}
              article={art}
              currentLang={props.currentLang}
            />
          )}
        </Col>
      </Row>
    </>
  );
};