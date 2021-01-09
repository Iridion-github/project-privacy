import styles from '../styles/Home.module.css'
import { useState, useContext, createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Row,
  Col
} from 'react-bootstrap'
import articles from "../database/articles"
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

export default function articoli(props) {
  const siteLanguage = useLanguage() //context
  const [openedArticle, setOpenedArticle] = useState(null)
  let relatedArticles = openedArticle ? getRelatedArticles(openedArticle, articles) : []

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
            />
          </Col>
          <Col md={6} className="justify-content-center">
            {openedArticle === null &&
              <ArticlesList
                allArticles={articles}
                setOpenedArticle={setOpenedArticle}
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