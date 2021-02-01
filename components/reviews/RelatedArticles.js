import { useLanguage } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col
} from 'react-bootstrap'
import { RelatedReviewPreview } from './RelatedReviewPreview'

export const RelatedReviews = function (props) {

  const siteLanguage = useLanguage() //context

  return (
    <>
      <Row className="justify-content-center">
        <h1>{siteLanguage === "ita" ? "Recensioni Correlati" : "Related Reviews"}</h1>
      </Row>
      <Row>
        <Col>
          {props.relatedReviews.map((art, i) =>
            <RelatedReviewPreview
              key={i}
              setOpenedReview={props.setOpenedReview}
              review={art}
            />
          )}
        </Col>
      </Row>
    </>
  )
}