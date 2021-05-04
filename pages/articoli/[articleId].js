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

function articoli({ glossarywords, DBarticles }) {
  const siteLanguage = useLanguage() //context
  const router = useRouter()
  const { articleId } = router.query
  const [articles, setArticles] = useState(DBarticles)
  const [openedArticle, setOpenedArticle] = useState(articleId)

  const handleOpenedArticle = (id) => {
    const fullRoute = id !== null ? '/articoli/' + id : '/articoli/'
    router.push(fullRoute)
    setOpenedArticle(id)
  }

  let relatedArticles = getRelatedArticles(articleId, articles, siteLanguage)

  useEffect(() => {
    if (articles.length === 0) {
      if (DBarticles.map(el => el.id).includes(articleId)) {
        setOpenedArticle(articleId)
      }
    }
  })

  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Articoli" : "Articles"}
      />
      {/* Navbar */}
      <Navigation />
      {(openedArticle && articles.length > 0) &&
        <Breadcrumbs
          breadcrumbsList={getBreadcrumbsForArticles(openedArticle, articles.find(art => art.id === openedArticle)[siteLanguage].title)}
        />
      }
      {!openedArticle &&
        <Breadcrumbs
          breadcrumbsList={getBreadcrumbsForErrors({ ita: "Articolo inesistente", eng: "No such article" }, "/articoli", siteLanguage)}
        />
      }
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

articoli.getInitialProps = async (context) => {

  const getArticleId = async (rawStr) => {
    let articleId = rawStr.split('/articoli/')[1]
    if (articleId.includes('/')) {
      articleId = articleId.split('/')[1].split('/')[1]
    }
    return articleId
  }

  let propsObj = { DBarticles: [], glossarywords: [] }
  if (!context.req) {
    const articleId = await getArticleId(context.asPath)
    if (location.href.includes("articoli/")) {
      location.replace(articleId)
    } else {
      location.replace("articoli/" + articleId)
    }
  } else {
    //api of glossary
    const apiUrlGlossary = "http://" + context.req.headers.host + "/api/glossaryword"
    const resGlossaryword = await fetch(apiUrlGlossary)
    const glossarywords = await resGlossaryword.json()
    //api of all articles (for the related articles)
    const apiUrlArticle = "http://" + context.req.headers.host + "/api/article"
    const resArticle = await fetch(apiUrlArticle)
    const DBarticles = await resArticle.json()
    propsObj = { DBarticles: DBarticles.data, glossarywords: glossarywords.data }
  }
  return propsObj
}

export default articoli

/* //Rimozione di getServerSideProps per deployare su Firebase
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
*/