import { useState } from 'react'
import { useLanguage } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import { ArticlesRow } from "./ArticlesRow"
import { MyPagination } from "../layout/MyPagination"


export const ArticlesList = function (props) {

  const siteLanguage = useLanguage() //context

  const [currentPage, setCurrentPage] = useState(1)
  const [elementsPerPage, setElementsPerPage] = useState(6)
  const [elementsPerRow, setElementsPerRow] = useState(2)


  const articlesRows = !props.filtered
    ? props.allArticles.reduce(function (articles, acc, i) {
      if (i % elementsPerRow) {
        articles[articles.length - 1].push(acc)
      } else {
        articles.push([acc])
      }
      return articles
    }, [])
    : props.searchFilter(props.allArticles, props.searchInput, siteLanguage).reduce(function (articles, acc, i) {
      if (i % elementsPerRow) {
        articles[articles.length - 1].push(acc)
      } else {
        articles.push([acc])
      }
      return articles
    }, [])

  const visibleRows = articlesRows.filter((elem, index) => (index >= (currentPage * elementsPerPage / elementsPerRow) - elementsPerPage / elementsPerRow) && (index < currentPage * elementsPerPage / elementsPerRow))

  const searchInputOnChange = (value) => {
    if (value.length < 3) {
      props.setSearchInput(value)
      props.setFiltered(false)
    } else {
      props.setSearchInput(value)
    }
  }

  return (
    <Row>
      <Row className="w-100 m-auto">
        <Col md={6}>
          <h1>{siteLanguage === "ita" ? "Ultimi Articoli" : "Latest Articles"}</h1>
        </Col>
        <Col sm={6} className="justify-content-end mb-1 flex-row">
          <Form inline className="justify-content-end w-100 p-0 flex-row">
            <Form.Group className="w-100" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder={siteLanguage === "ita" ? "Cerca" : "Search"}
                onChange={event => searchInputOnChange(event.target.value)}
                className="w-75 inline-form-custom" />
              <Button
                variant={!props.filtered ? "info" : "danger"}
                disabled={props.searchInput.length < 3}
                onClick={!props.filtered ? () => props.setFiltered(true) : () => props.setFiltered(false)}
                className="ml-1">
                {!props.filtered ? (<i className="fas fa-search"></i>) : (<i className="fas fa-times-circle"></i>)}
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <MyPagination
        totalPages={!props.filtered ? Math.ceil(props.allArticles.length / elementsPerPage) : Math.ceil(props.searchFilter(props.allArticles, props.searchInput, siteLanguage).length / elementsPerPage)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementsPerPage={elementsPerPage}
        totalElements={!props.filtered ? props.allArticles.length : props.searchFilter(props.allArticles, props.searchInput, siteLanguage).length}
      />
      <Row className="mobile-compatible  m-auto">
        <Col>
          {visibleRows.map((row, i) =>
            <ArticlesRow
              setOpenedArticle={props.setOpenedArticle}
              key={i}
              articles={row}
            />
          )}
        </Col>
      </Row>
      <MyPagination
        totalPages={!props.filtered ? Math.ceil(props.allArticles.length / elementsPerPage) : Math.ceil(props.searchFilter(props.allArticles, props.searchInput, siteLanguage).length / elementsPerPage)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementsPerPage={elementsPerPage}
        totalElements={!props.filtered ? props.allArticles.length : props.searchFilter(props.allArticles, props.searchInput, siteLanguage).length}
      />
    </Row>
  )
}