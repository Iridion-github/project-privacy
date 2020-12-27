import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Row,
  Col,
  Button,
  Card,
  Nav,
  Image
} from 'react-bootstrap'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ArticlesList } from "../components/articles/ArticlesList"
import articles from "../database/articles"

export default function articoli() {
  return (
    <div className={styles.container}>
      <Header
        title="Articoli"
      />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <ArticlesList
          className="w-75"
          allArticles={articles}
        />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}