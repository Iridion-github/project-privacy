import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useLanguage, useLanguageUpdate } from '../context/siteLanguageContext' //context
import {
  Row,
  Col
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Breadcrumbs } from '../components/layout/Breadcrumbs'
import { Footer } from '../components/layout/Footer'
import { ArticlesList } from "../components/articles/ArticlesList"
import { ArticlesLeftMenu } from "../components/articles/ArticlesLeftMenu"
import { removeDuplicatesById, includesAll } from '../utils/arrays'

function articoli({ DBarticles, articleTopics }) {
  const siteLanguage = useLanguage() //context
  const [articles, setArticles] = useState(DBarticles)
  const [openedArticle, setOpenedArticle] = useState(null)

  const router = useRouter()

  const handleOpenedArticle = (articleId) => {
    const fullRoute = articleId !== null ? '/articoli/' + articleId : '/articoli/'
    setOpenedArticle(articles.find(art => art.id === articleId))
    router.push(fullRoute)
  }

  const searchTopic = async (topic, lang) => {
    handleOpenedArticle(null)
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
    handleOpenedArticle(null)
    setFilteredByTopic(false)
    setArticles(DBarticles)
  }

  const searchFilter = (articles, input, lang) => {
    const searchTerms = input.toLowerCase().split(" ")
    const found = []
    if (input !== "") {
      articles.forEach(art => {
        if (
          includesAll(art.authors, searchTerms, Array.isArray(art.authors)).length > 0
          || includesAll(art[lang].topic, searchTerms, Array.isArray(art[lang].topic)).length > 0
          || includesAll(art[lang].tags, searchTerms, Array.isArray(art[lang].tags)).length > 0
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
      <Breadcrumbs />
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100 mb-5">
          <Col md={3} className="">
            <ArticlesLeftMenu
              allArticles={articles}
              allTopics={articleTopics}
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
                setOpenedArticle={handleOpenedArticle}
                searchFilter={searchFilter}
                filtered={filtered}
                setFiltered={setFiltered}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            }
          </Col>
          <Col md={3} className="">
          </Col>
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

articoli.getInitialProps = async (context) => {
  const apiUrlArticle = "http://" + context.req.headers.host + "/api/article"
  const resArticle = await fetch(apiUrlArticle)
  const DBarticles = await resArticle.json()
  const apiUrlTopics = "http://" + context.req.headers.host + "/api/articleTopics"
  const resArticleTopics = await fetch(apiUrlTopics)
  const articleTopics = await resArticleTopics.json()
  return { DBarticles: DBarticles.data, articleTopics: articleTopics.data }
}

export default articoli

/* //Rimozione di getServerSideProps per deployare su Firebase
export async function getServerSideProps(context) {
  const apiUrlArticle = "http://" + context.req.headers.host + "/api/article"
  const resArticle = await fetch(apiUrlArticle)
  const DBarticles = await resArticle.json()
  const apiUrlTopics = "http://" + context.req.headers.host + "/api/articleTopics"
  const resArticleTopics = await fetch(apiUrlTopics)
  const articleTopics = await resArticleTopics.json()
  return { props: { DBarticles: DBarticles.data, articleTopics: articleTopics.data } }
}
*/