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
import { getRelatedArticles, getBreadcrumbsList } from '../../utils/articles'

const articoli = ({ glossarywords, DBarticles }) => {
  const siteLanguage = useLanguage() //context
  const router = useRouter()
  const { articleId } = router.query
  const [articles, setArticles] = useState(DBarticles)
  const [openedArticle, setOpenedArticle] = useState(null)

  const handleOpenedArticle = (id) => {
    const fullRoute = id !== null ? '/articoli/' + id : '/articoli/'
    router.push(fullRoute, undefined, { shallow: true })
    setOpenedArticle(id)
  }

  let relatedArticles = articleId ? getRelatedArticles(articleId, articles) : []

  useEffect(() => {
    if (!openedArticle) setOpenedArticle(articleId)
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
          getBreadcrumbsList={getBreadcrumbsList}
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
                glossarywords={glossarywords}
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

articoli.getInitialProps = async () => {
  const resGlossaryword = await fetch("http://localhost:3000/api/glossaryword")
  const glossarywords = await resGlossaryword.json()
  const resArticle = await fetch("http://localhost:3000/api/article")
  const DBarticles = await resArticle.json()
  return { DBarticles: DBarticles.data, glossarywords: glossarywords.data }
}

export default articoli