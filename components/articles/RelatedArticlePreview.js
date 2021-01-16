import { useLanguage } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Card,
  Image
} from 'react-bootstrap'

export const RelatedArticlePreview = function (props) {
  const siteLanguage = useLanguage() //context
  const getNecessarySubtitle = (article, lang) => {
    return article[lang].title.length < 90 ? (
      <p className="mt-1 mb-0 related-article-preview-subtitle">{lang === "ita" ? props.article.ita.subtitle : props.article.eng.subtitle}</p>
    ) : ""
  }

  return (
    <Card
      className="w-100 mb-4 cursor-pointer"
      border="secondary"
      onClick={() => props.setOpenedArticle(props.article.id)}
    >
      <Card.Header className="pt-1 pb-1 overflow-hidden">
        <Row>
          <Col sm={4} className="p-0">
            <Image className="related-article-preview-img black-border" variant="top" src={props.article.previewImg} />
          </Col>
          <Col sm={8}>
            <Card.Title className="mb-0 related-article-preview-title">{siteLanguage === "ita" ? props.article.ita.title : props.article.eng.title}</Card.Title>
            {getNecessarySubtitle(props.article, siteLanguage)}
          </Col>
        </Row>
      </Card.Header>
    </Card >
  )
}