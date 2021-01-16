import { useLanguage } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col
} from 'react-bootstrap'
import { RelatedArticlePreview } from './RelatedArticlePreview'

export const RelatedArticles = function (props) {

  const siteLanguage = useLanguage() //context

  return (
    <>
      <Row className="justify-content-center">
        <h1>{siteLanguage === "ita" ? "Articoli Correlati" : "Related Articles"}</h1>
      </Row>
      <Row>
        <Col>
          {props.relatedArticles.map((art, i) =>
            <RelatedArticlePreview
              key={i}
              setOpenedArticle={props.setOpenedArticle}
              article={art}
            />
          )}
        </Col>
      </Row>
    </>
  )
}