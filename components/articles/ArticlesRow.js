import {
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ArticlePreview } from "./ArticlePreview"


export const ArticlesRow = function (props) {

  return (
    <Row className="w-100">
      {props.articles.map((article, i) => (
        <Col md={6} className="mobile-adaptive-card-container" key={i}>
          <ArticlePreview
            article={article}
          />
        </Col>
      ))}
    </Row>
  )
}