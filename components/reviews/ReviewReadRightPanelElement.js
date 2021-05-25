
import {
  Row,
  Col,
  Card,
  Image
} from 'react-bootstrap'

export const ReviewReadRightPanelElement = function (props) {

  return (
    <Card
      className="w-100 mb-4 cursor-pointer grey-border"
      onClick={() => { }}
    >
      <Card.Header className="pt-1 pb-1 overflow-hidden">
        <Row>
          <Col sm={4} className="p-0">
            <Image className="related-review-preview-img black-border" variant="top" src={''} />
          </Col>
          <Col sm={8}>
            <Card.Title className="mb-0 related-review-preview-title">Cosa ci sarà qui? Chissà</Card.Title>
          </Col>
        </Row>
      </Card.Header>
    </Card >
  )
}