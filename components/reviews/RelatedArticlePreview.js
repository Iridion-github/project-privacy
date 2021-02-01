import { useLanguage } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Card,
  Image
} from 'react-bootstrap'

export const RelatedReviewPreview = function (props) {
  const siteLanguage = useLanguage() //context
  const getNecessarySubtitle = (review, lang) => {
    return review[lang].title.length < 90 ? (
      <p className="mt-1 mb-0 related-article-preview-subtitle">{lang === "ita" ? props.review.ita.subtitle : props.review.eng.subtitle}</p>
    ) : ""
  }

  return (
    <Card
      className="w-100 mb-4 cursor-pointer grey-border"
      onClick={() => props.setOpenedReview(props.review.id)}
    >
      <Card.Header className="pt-1 pb-1 overflow-hidden">
        <Row>
          <Col sm={4} className="p-0">
            <Image className="related-review-preview-img black-border" variant="top" src={props.review.previewImg} />
          </Col>
          <Col sm={8}>
            <Card.Title className="mb-0 related-review-preview-title">{siteLanguage === "ita" ? props.review.ita.title : props.review.eng.title}</Card.Title>
            {getNecessarySubtitle(props.review, siteLanguage)}
          </Col>
        </Row>
      </Card.Header>
    </Card >
  )
}