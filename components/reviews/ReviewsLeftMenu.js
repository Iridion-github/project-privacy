
import {
  Row,
  Col,
  Card,
  ListGroup,
  Button
} from 'react-bootstrap'
import { ReviewsTagRow } from './ReviewsTagRow'


export const ReviewsLeftMenu = function (props) {

  return (
    <Row className="justify-content-center mb-2">
      <Row className="mobile-compatible w-100 mt-1">
        <Col>
          <Card className="bg-standard-blue">
            <Card.Header>
              <Row>
                <Col>
                  {props.currentLang === "ita" ? "Argomenti" : "Topics"}
                </Col>
                <Col className="text-right">
                  {props.filteredByTopic &&
                    <Button
                      size="sm"
                      className=""
                      variant="danger"
                      onClick={() => props.removeTopicFilter()}
                    >
                      <i className="fas fa-times-circle"></i>
                    </Button>
                  }
                </Col>
              </Row>
            </Card.Header>
            <ListGroup variant="flush">
              {props.allTopics.map(tag => (
                <ReviewsTagRow
                  key={tag.id}
                  tagName={props.currentLang === "ita" ? tag.name.ita : tag.name.eng}
                  currentLang={props.currentLang}
                  searchTopic={props.searchTopic}
                />
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Row>
  )
}