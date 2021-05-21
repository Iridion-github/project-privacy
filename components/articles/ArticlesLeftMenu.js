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
      <Row className="mobile-compatible w-100 mt-1 pl-3">
        <Col>
          <Card className="bg-standard-blue">
            <Card.Header className="topic-filter-header">
              <Row>
                <Col md={12} className="text-center">
                  {siteLanguage === "ita" ? "Argomenti" : "Topics"}
                </Col>
                {props.filteredByTopic === true &&
                  <Button
                    size="sm"
                    className="remove-topic-filter-btn"
                    variant="danger"
                    onClick={() => props.removeTopicFilter()}
                  >
                    {siteLanguage === "ita" ? "Rimuovi Filtro" : "Remove Filter"}
                    <i className="ml-2 fas fa-times-circle"></i>
                  </Button>
                }
              </Row>
            </Card.Header>
            <ListGroup variant="flush">
              {props.allTopics.map(tag => (
                <ArticlesTagRow
                  key={tag.id}
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