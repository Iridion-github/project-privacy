import { useLanguage } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col
} from 'react-bootstrap'
import { ReviewReadRightPanelElement } from './ReviewReadRightPanelElement'

export const ReviewReadRightPanel = function (props) {

  const siteLanguage = useLanguage() //context

  return (
    <>
      <Row className="justify-content-center">
        <h1>{siteLanguage === "ita" ? "Recensioni Correlati" : "Related Reviews"}</h1>
      </Row>
      <Row>
        <Col>

          <ReviewReadRightPanelElement />

        </Col>
      </Row>
    </>
  )
}