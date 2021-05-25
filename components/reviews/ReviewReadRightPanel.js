
import {
  Row,
  Col
} from 'react-bootstrap'
import { ReviewReadRightPanelElement } from './ReviewReadRightPanelElement'

export const ReviewReadRightPanel = function (props) {

  return (
    <>
      <Row className="justify-content-center">
        <h1>{props.currentLang === "ita" ? "Recensioni Correlati" : "Related Reviews"}</h1>
      </Row>
      <Row>
        <Col>

          <ReviewReadRightPanelElement />

        </Col>
      </Row>
    </>
  )
}