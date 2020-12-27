import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Card,
  Button
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
    <>
      <Row><h1>Ultimi Articoli</h1></Row>
      <Row className="mobile-compatible-75-to-100">
        {articlesRows.map(row =>
          <ArticlesRow
            articles={row}
          />
        )}
      </Row>
    </>
  )
}