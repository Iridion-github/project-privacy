import {
  Row,
  Col,
  Card,
  ListGroup
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ArticlesTagRow } from './ArticlesTagRow'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context

export const ArticlesLeftMenu = function (props) {
  const siteLanguage = useLanguage() //context
  return (
    <Row className="justify-content-center mb-2">
      <Row className="mobile-compatible w-100 mt-5">
        <Col>
          <Card className="bg-standard-blue">
            <Card.Header>{siteLanguage === "ita" ? "Argomenti" : "Topics"}</Card.Header>
            <ListGroup variant="flush">
              {props.allTags.map(tag => (
                <ArticlesTagRow
                  key={tag._id}
                  tagName={siteLanguage === "ita" ? tag.name.ita : tag.name.eng}
                />
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Row>
  )
}