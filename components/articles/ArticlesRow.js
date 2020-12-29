import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ArticlePreview } from "./ArticlePreview"


export const ArticlesRow = function (props) {

  return (
    <Row className="w-100">
      {props.articles.map(article => (
        <Col md={6} className="mobile-adaptive-card-container">
          <ArticlePreview
            article={article}
          />
        </Col>
      ))}
    </Row>
  )
}