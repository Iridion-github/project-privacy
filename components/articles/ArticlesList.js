import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Card,
  Button,
  Form
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ArticlesRow } from "./ArticlesRow"

export const ArticlesList = function (props) {
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
    <Row>
      <Row className="w-100 m-auto">
        <Col md={6}>
          <h1>Ultimi Articoli</h1>
        </Col>
        <Col sm={6} className="justify-content-end mb-1 flex-row">
          <Form inline className="justify-content-end w-100 p-0 flex-row">
            <Form.Group className="w-100" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Cerca" className="w-75 inline-form-custom" />
              <Button variant="primary" type="submit" className="ml-1">
                <i className="fas fa-search"></i>
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mobile-compatible  m-auto">
        <Col>
          {articlesRows.map(row =>
            <ArticlesRow
              articles={row}
            />
          )}
        </Col>
      </Row>
    </Row>
  )
}