
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

export const ArticlesList = function (props) {

  const siteLanguage = useLanguage() //context
  const siteLanguageUpdate = useLanguageUpdate() //context

  const searchFilter = (articles, input) => {
    let result = []
    if (input !== "") {
      let searchTerms = input.split(" ")
      for (let x = 0; x < searchTerms.length; x++) {
        result = articles.filter(art => {
          return art.author.toLowerCase().includes(searchTerms[x].toLowerCase())
            || art.topic.toLowerCase().includes(searchTerms[x].toLowerCase())
            || art.tags.includes(searchTerms[x].toLowerCase())
            || art.ita.title.toLowerCase().includes(searchTerms[x].toLowerCase())
            || art.ita.subtitle.toLowerCase().includes(searchTerms[x].toLowerCase())
            || art.ita.content.toLowerCase().includes(searchTerms[x].toLowerCase())
            || art.eng.title.toLowerCase().includes(searchTerms[x].toLowerCase())
            || art.eng.subtitle.toLowerCase().includes(searchTerms[x].toLowerCase())
            || art.eng.content.toLowerCase().includes(searchTerms[x].toLowerCase())
        })
      }
    }
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