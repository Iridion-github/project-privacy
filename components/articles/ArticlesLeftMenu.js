import { useLanguage } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Card,
  ListGroup,
  Button
} from 'react-bootstrap'
import { ArticlesTagRow } from './ArticlesTagRow'


export const ArticlesLeftMenu = function (props) {
  const siteLanguage = useLanguage() //context
  return (
    <Row className="justify-content-center mb-2">
      <Row className="mobile-compatible w-100 mt-5">
        <Col>
          <Card className="bg-standard-blue">
            <Card.Header>
              <Row>
                <Col>
                  {siteLanguage === "ita" ? "Argomenti" : "Topics"}
                </Col>
                <Col className="text-right">
                  {props.filteredByTopic &&
                    <Button
                      size="sm"
                      className="black-border"
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
              {props.allTags.map(tag => (
                <ArticlesTagRow
                  key={tag._id}
                  tagName={siteLanguage === "ita" ? tag.name.ita : tag.name.eng}
                  siteLanguage={siteLanguage}
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