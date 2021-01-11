import styles from '../styles/Home.module.css'
import { useState, useContext, createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Row,
  Col
} from 'react-bootstrap'
import DBarticles from "../database/articles"
import articlesTopics from "../database/articlesTopics"
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ArticlesList } from "../components/articles/ArticlesList"
import { ArticlesLeftMenu } from "../components/articles/ArticlesLeftMenu"
import { ArticleRead } from "../components/articles/ArticleRead"
import { RelatedArticles } from "../components/articles/RelatedArticles"
import { useLanguage, useLanguageUpdate } from '../context/siteLanguageContext' //context
import { getRelatedArticles } from '../utils/articles'
import { removeDuplicatesById, includesAll } from '../utils/arrays'

export default function articoli(props) {
  const siteLanguage = useLanguage() //context
  const [articles, setArticles] = useState(DBarticles)
  const [openedArticle, setOpenedArticle] = useState(null)
  let relatedArticles = openedArticle ? getRelatedArticles(openedArticle, articles) : []

  const searchTopic = async (topic, lang) => {
    setFilteredByTopic(true)
    const result = []
    if (topic !== "") {
      DBarticles.forEach(art => {
        if (includesAll(art[lang].topic, topic, Array.isArray(art[lang].topic)).length > 0) {
          result.push(art)
        }
      })
    }
    setArticles(result)
  }

  const removeTopicFilter = () => {
    setFilteredByTopic(false)
    setArticles(DBarticles)
  }

  const searchFilter = (articles, input, lang) => {
    const searchTerms = input.toLowerCase().split(" ")
    const found = []
    if (input !== "") {
      articles.forEach(art => {
        if (
          includesAll(art.author, searchTerms, Array.isArray(art.author)).length > 0
          || includesAll(art[lang].topic, searchTerms, Array.isArray(art[lang].topic)).length > 0
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

  const [filtered, setFiltered] = useState(false)
  const [filteredByTopic, setFilteredByTopic] = useState(false)
  const [searchInput, setSearchInput] = useState("")


  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Articoli" : "Articles"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100">
          <Col md={3} className="">
            <ArticlesLeftMenu
              allArticles={articles}
              allTags={articlesTopics}
              searchTopic={searchTopic}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              filteredByTopic={filteredByTopic}
              removeTopicFilter={removeTopicFilter}
            />
          </Col>
          <Col md={6} className="justify-content-center">
            {openedArticle === null &&
              <ArticlesList
                allArticles={articles}
                setOpenedArticle={setOpenedArticle}
                searchFilter={searchFilter}
                filtered={filtered}
                setFiltered={setFiltered}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            }
            {openedArticle &&
              <ArticleRead
                article={articles.find(art => art.id === openedArticle)}
                allArticles={articles}
                setOpenedArticle={setOpenedArticle}
              />
            }
          </Col>
          <Col md={3} className="">
            {openedArticle &&
              <RelatedArticles
                relatedArticles={relatedArticles}
                setOpenedArticle={setOpenedArticle}
              />
            }
          </Col>
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}