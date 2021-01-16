import styles from '../../styles/Home.module.css'
import { useLanguage } from '../../context/siteLanguageContext' //context
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Row,
  Col
} from 'react-bootstrap'
import DBarticles from "../../database/articles"
import { Header } from '../../components/layout/Header'
import { Navigation } from '../../components/layout/Navbar'
import { Breadcrumbs } from '../../components/layout/Breadcrumbs'
import { Footer } from '../../components/layout/Footer'
import { ArticleRead } from "../../components/articles/ArticleRead"
import { RelatedArticles } from "../../components/articles/RelatedArticles"

import { getRelatedArticles } from '../../utils/articles'

export default function articoli() {
  const router = useRouter()
  const siteLanguage = useLanguage() //context
  const [articles, setArticles] = useState(DBarticles)
  const [openedArticle, setOpenedArticle] = useState(null)

  const handleOpenedArticle = (articleId) => {
    const fullRoute = articleId !== null ? window.location.origin + '/articoli/' + articleId : window.location.origin + '/articoli/'
    router.push(fullRoute, undefined, { shallow: true })
    if (articleId !== null) setOpenedArticle(articleId)
  }

  let relatedArticles = openedArticle ? getRelatedArticles(openedArticle, articles) : []

  useEffect(() => {
    setOpenedArticle(router.query.articleId)
  })

  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Articoli" : "Articles"}
      />
      {/* Navbar */}
      <Navigation />
      {openedArticle &&
        <Breadcrumbs
          articleId={openedArticle}
          articleTitle={articles.find(art => art.id === openedArticle)[siteLanguage].title}
        />
      }
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100">
          <Col md={3} className="">
          </Col>
          <Col md={6} className="justify-content-center">
            {openedArticle &&
              <ArticleRead
                article={articles.find(art => art.id === openedArticle)}
                allArticles={articles}
                setOpenedArticle={handleOpenedArticle}
              />
            }
          </Col>
          <Col md={3} className="">
            <RelatedArticles
              relatedArticles={relatedArticles}
              setOpenedArticle={handleOpenedArticle}
            />
          </Col>
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}