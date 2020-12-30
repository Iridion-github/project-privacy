import {
  Row,
  Col,
  Card,
  ListGroup
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ArticlesTagRow } from './ArticlesTagRow'

export const ArticlesLeftMenu = function (props) {
  return (
    <Row className="justify-content-center">
      <Row className="mobile-compatible w-100 mt-5">
        <Col>
          <Card className="bg-standard-blue">
            <Card.Header>Argomenti</Card.Header>
            <ListGroup variant="flush">
              {props.allTags.map(tag => (
                <ArticlesTagRow
                  key={tag._id}
                  tagName={"ita" === "ita" ? tag.name.ita : tag.name.eng}
                />
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Row>
  )
}