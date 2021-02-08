import styles from '../../styles/Home.module.css'
import { useLanguage } from '../../context/siteLanguageContext' //context
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

export default function articoli({ glossarywords, DBarticles }) {
  const siteLanguage = useLanguage() //context
  const router = useRouter()
  const { articleId } = router.query
  const [articles, setArticles] = useState(DBarticles)
  const [openedArticle, setOpenedArticle] = useState(null)
  const [shouldRenderComponent, setShouldRenderComponent] = useState(null)

  const handleOpenedArticle = (id) => {
    const fullRoute = id !== null ? '/articoli/' + id : '/articoli/'
    router.push(fullRoute)
    setOpenedArticle(id)
  }

  let relatedArticles = shouldRenderComponent ? getRelatedArticles(articleId, articles, siteLanguage) : []

  useEffect(() => {
    if (!openedArticle) {
      if (DBarticles.map(el => el.id).includes(articleId)) {
        setOpenedArticle(articleId)
      } else {
        setShouldRenderComponent(false)
      }
    }
    if (!shouldRenderComponent) setShouldRenderComponent(DBarticles.map(el => el.id).includes(articleId))
  })

  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Articoli" : "Articles"}
      />
      {/* Navbar */}
      <Navigation />
      {(openedArticle && shouldRenderComponent) &&
        <Breadcrumbs
          breadcrumbsList={getBreadcrumbsForArticles(openedArticle, articles.find(art => art.id === openedArticle)[siteLanguage].title)}
        />
      }
      {shouldRenderComponent === false &&
        <Breadcrumbs
          breadcrumbsList={getBreadcrumbsForErrors({ ita: "Articolo inesistente", eng: "No such article" }, "/articoli", siteLanguage)}
        />
      }
      {/* Page Content */}
      <main className={styles.main}>
        {shouldRenderComponent === false &&
          <ErrorComponent />
        }
        <Row className="w-100">
          <Col md={3} className="">
          </Col>
          {(openedArticle && shouldRenderComponent) &&
            <>
              <Col md={6} className="justify-content-center">
                <ArticleRead
                  article={articles.find(art => art.id === openedArticle)}
                  allArticles={articles}
                  setOpenedArticle={handleOpenedArticle}
                  glossarywords={glossarywords}
                />
              </Col>
              <Col md={3} className="">
                <RelatedArticles
                  relatedArticles={relatedArticles}
                  setOpenedArticle={handleOpenedArticle}
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