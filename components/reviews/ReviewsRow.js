import {
  Row,
  Col
} from 'react-bootstrap'
import { ReviewPreview } from "./ReviewPreview"


export const ReviewsRow = function (props) {

  return (
    <Row className="w-100">
      {props.reviews.map((review, i) => (
        <Col md={6} className="mobile-adaptive-card-container" key={i}>
          <ReviewPreview
            setOpenedReview={props.setOpenedReview}
            review={review}
          />
        </Col>
      ))}
    </Row>
  )
}