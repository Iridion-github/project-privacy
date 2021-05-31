import styles from '../../styles/Home.module.css'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Row,
  Col
} from 'react-bootstrap'
import { Header } from '../../components/layout/Header'
import { Navigation } from '../../components/layout/Navbar'
import { Breadcrumbs } from '../../components/layout/Breadcrumbs'
import { Footer } from '../../components/layout/Footer'
import { ArticleRead } from "../../components/articles/ArticleRead"
import { RelatedArticles } from "../../components/articles/RelatedArticles"
import { getRelatedArticles, getBreadcrumbsForArticles } from '../../utils/articles'
import { getBreadcrumbsForErrors } from '../../utils/errors'
import { ErrorComponent } from '../../components/layout/ErrorComponent'
import { Loading } from '../../components/layout/Loading'
import { useAppContext } from "../../context/contextLib"

function articoli({ glossarywords, DBarticles }) {
  const { currentLang, changeSiteLang } = useAppContext()
  const router = useRouter()
  const { articleId } = router.query
  const [articles, setArticles] = useState(DBarticles)
  const [openedArticle, setOpenedArticle] = useState(articleId)
  const [loading, setLoading] = useState(true)

  const handleOpenedArticle = (id) => {
    setLoading(true)
    const fullRoute = id !== null ? '/articoli/' + id : '/articoli/'
    router.push(fullRoute)
    setOpenedArticle(id)
  }

  let relatedArticles = getRelatedArticles(articleId, articles, currentLang)

  useEffect(() => {
    if (loading === true) {
      setLoading(false)
    }
    if (articles.length === 0) {
      if (DBarticles.map(el => el.id).includes(articleId)) {
        setOpenedArticle(articleId)
      }
    }
  })

  return (
    <div className={styles.container}>
      <Header
        title={currentLang === "ita" ? "Articoli" : "Articles"}
      />
      {/* Navbar */}
      <Navigation
        currentLang={currentLang}
        changeSiteLang={changeSiteLang}
      />
      {(openedArticle && articles.length > 0) &&
        <Breadcrumbs
          breadcrumbsList={getBreadcrumbsForArticles(openedArticle, articles.find(art => art.id === openedArticle)[currentLang].title)}
        />
      }
      {!openedArticle &&
        <Breadcrumbs
          breadcrumbsList={getBreadcrumbsForErrors({ ita: "Articolo inesistente", eng: "No such article" }, "/articoli", currentLang)}
        />
      }
      {loading && <Loading />}
      {/* Page Content */}
      <main className={styles.main}>
        {!openedArticle &&
          <ErrorComponent />
        }
        <Row className="w-100">
          <Col md={3} className="">
          </Col>
          {(openedArticle && articles.length > 0) &&
            <>
              <Col md={6} className="justify-content-center">
                <ArticleRead
                  article={articles.find(art => art.id === openedArticle)}
                  allArticles={articles}
                  setOpenedArticle={handleOpenedArticle}
                  glossarywords={glossarywords}
                  currentLang={currentLang}
                />
              </Col>
              <Col md={3} className="">
                <RelatedArticles
                  relatedArticles={relatedArticles}
                  setOpenedArticle={handleOpenedArticle}
                  currentLang={currentLang}
                />
              </Col>
            </>
          }
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export async function getServerSideProps({ req }) {
  //api of glossary
  const apiUrlGlossary = "http://" + req.headers.host + "/api/glossaryword"
  const resGlossaryword = await fetch(apiUrlGlossary)
  const glossarywords = await resGlossaryword.json()
  //api of all articles (for the related articles)
  const apiUrlArticle = "http://" + req.headers.host + "/api/article"
  const resArticle = await fetch(apiUrlArticle)
  const DBarticles = await resArticle.json()
  return { props: { DBarticles: DBarticles.data, glossarywords: glossarywords.data } }
}

export default articoli