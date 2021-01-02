import styles from '../styles/Home.module.css'
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
import { useLanguage, useLanguageUpdate } from '../context/siteLanguageContext' //context

export default function articoli(props) {
  const siteLanguage = useLanguage() //context
  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Articoli" : "Articles"}
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Row>
          <Col md={3} className="">
            <ArticlesLeftMenu
              allArticles={articles}
              allTags={articlesTopics}
            />
          </Col>
          <Col md={6} className="justify-content-center">
            <ArticlesList
              allArticles={articles}
            />
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