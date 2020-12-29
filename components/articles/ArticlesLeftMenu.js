import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Card,
  Button,
  ListGroup
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const ArticlesLeftMenu = function (props) {
  const articlesRows = props.allArticles.reduce(function (articles, acc, i) {
    if (i % 2) {
      articles[articles.length - 1].push(acc)
    } else {
      articles.push([acc])
    }
    return articles
  }, [])
  console.log("articlesRows:", articlesRows)

  return (
    <Row className="justify-content-center">
      <Row className="mobile-compatible w-100 mt-5">
        <Col>
          <Card className="bg-standard-blue">
            <Card.Header>Argomenti</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Argomento 1</ListGroup.Item>
              <ListGroup.Item>Argomento 2</ListGroup.Item>
              <ListGroup.Item>Argomento 3</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Row>
  )
}