
import {
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import { useState, useContext, createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ArticlesRow } from "./ArticlesRow"
import { MyPagination } from "../layout/MyPagination"
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context

export const ArticlesList = function (props) {

  const siteLanguage = useLanguage() //context
  const siteLanguageUpdate = useLanguageUpdate() //context

  const articlesRows = props.allArticles.reduce(function (articles, acc, i) {
    if (i % 2) {
      articles[articles.length - 1].push(acc)
    } else {
      articles.push([acc])
    }
    return articles
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const [elementsPerPage, setElementsPerPage] = useState(6)

  const visibleRows = articlesRows.filter((elem, index) => index <= currentPage + 1 && index >= currentPage - 1)

  return (
    <Row>
      <Row className="w-100 m-auto">
        <Col md={6}>
          <h1>{siteLanguage === "ita" ? "Ultimi Articoli" : "Latest Articles"}</h1>
        </Col>
        <Col sm={6} className="justify-content-end mb-1 flex-row">
          <Form inline className="justify-content-end w-100 p-0 flex-row">
            <Form.Group className="w-100" controlId="formBasicEmail">
              <Form.Control type="text" placeholder={siteLanguage === "ita" ? "Cerca" : "Search"} className="w-75 inline-form-custom" />
              <Button variant="primary" type="submit" className="ml-1">
                <i className="fas fa-search"></i>
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <MyPagination
        totalPages={Math.ceil(props.allArticles.length / elementsPerPage)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementsPerPage={elementsPerPage}
        totalElements={props.allArticles.length}
      />
      <Row className="mobile-compatible  m-auto">
        <Col>
          {visibleRows.map((row, i) =>
            <ArticlesRow
              key={i}
              articles={row}
            />
          )}
        </Col>
      </Row>
      <MyPagination
        totalPages={Math.ceil(props.allArticles.length / elementsPerPage)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementsPerPage={elementsPerPage}
        totalElements={props.allArticles.length}
      />
    </Row>
  )
}