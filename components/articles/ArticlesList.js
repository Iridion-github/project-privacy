
import {
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import { useState, useContext, createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ArticlesRow } from "./ArticlesRow"
import { MyPagination } from "../layout/MyPagination"
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context
import { removeDuplicatesById, includesAll } from '../../utils/arrays'

export const ArticlesList = function (props) {

  const siteLanguage = useLanguage() //context
  const siteLanguageUpdate = useLanguageUpdate() //context

  const searchFilter = (articles, input) => {
    const searchTerms = input.toLowerCase().split(" ")
    const found = []
    if (input !== "") {
      articles.forEach(art => {
        if (
          includesAll(art.author, searchTerms, Array.isArray(art.author)).length > 0
          || includesAll(art.topic, searchTerms, Array.isArray(art.topic)).length > 0
          || includesAll(art.tags, searchTerms, Array.isArray(art.tags)).length > 0
          || includesAll(art.ita.title, searchTerms, Array.isArray(art.ita.title)).length > 0
          || includesAll(art.ita.subtitle, searchTerms, Array.isArray(art.ita.subtitle)).length > 0
          || includesAll(art.ita.content, searchTerms, Array.isArray(art.ita.content)).length > 0
          || includesAll(art.eng.title, searchTerms, Array.isArray(art.eng.title)).length > 0
          || includesAll(art.eng.subtitle, searchTerms, Array.isArray(art.eng.subtitle)).length > 0
          || includesAll(art.eng.content, searchTerms, Array.isArray(art.eng.content)).length > 0
        ) {
          found.push(art)
        }
      })
    }
    const result = removeDuplicatesById(found)
    return result
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [elementsPerPage, setElementsPerPage] = useState(6)
  const [elementsPerRow, setElementsPerRow] = useState(2)
  const [filtered, setFiltered] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  const articlesRows = !filtered
    ? props.allArticles.reduce(function (articles, acc, i) {
      if (i % elementsPerRow) {
        articles[articles.length - 1].push(acc)
      } else {
        articles.push([acc])
      }
      return articles
    }, [])
    : searchFilter(props.allArticles, searchInput).reduce(function (articles, acc, i) {
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
      setSearchInput(value)
      setFiltered(false)
    } else {
      setSearchInput(value)
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
                variant={!filtered ? "primary" : "danger"}
                disabled={searchInput.length < 3}
                onClick={!filtered ? () => setFiltered(true) : () => setFiltered(false)}
                className="ml-1">
                {!filtered ? (<i className="fas fa-search"></i>) : (<i className="fas fa-times-circle"></i>)}
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <MyPagination
        totalPages={!filtered ? Math.ceil(props.allArticles.length / elementsPerPage) : Math.ceil(searchFilter(props.allArticles, searchInput).length / elementsPerPage)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementsPerPage={elementsPerPage}
        totalElements={!filtered ? props.allArticles.length : searchFilter(props.allArticles, searchInput).length}
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
        totalPages={!filtered ? Math.ceil(props.allArticles.length / elementsPerPage) : Math.ceil(searchFilter(props.allArticles, searchInput).length / elementsPerPage)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementsPerPage={elementsPerPage}
        totalElements={!filtered ? props.allArticles.length : searchFilter(props.allArticles, searchInput).length}
      />
    </Row>
  )
}