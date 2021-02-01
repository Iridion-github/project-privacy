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
import { ReviewRead } from "../../components/reviews/ReviewRead"
import { RelatedReviews } from "../../components/reviews/RelatedReviews"
import { getRelatedReviews, getBreadcrumbsList } from '../../utils/reviews'

export default function recensione({ glossarywords, DBreviews }) {
  const siteLanguage = useLanguage() //context
  const router = useRouter()
  const { reviewId } = router.query
  const [reviews, setReviews] = useState(DBreviews)
  const [openedReview, setOpenedReview] = useState(null)

  const handleOpenedReview = (id) => {
    const fullRoute = id !== null ? '/recensioniBibliografiche/' + id : '/recensioniBibliografiche/'
    router.push(fullRoute)
    setOpenedReview(id)
  }

  let relatedReviews = reviewId ? getRelatedReviews(reviewId, reviews) : []

  useEffect(() => {
    if (!openedReview) setOpenedReview(reviewId)
  })

  return (
    <div className={styles.container}>
      <Header
        title={siteLanguage === "ita" ? "Articoli" : "Reviews"}
      />
      {/* Navbar */}
      <Navigation />
      {openedReview &&
        <Breadcrumbs
          reviewId={openedReview}
          reviewTitle={reviews.find(art => art.id === openedReview)[siteLanguage].title}
          getBreadcrumbsList={getBreadcrumbsList}
        />
      }
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100">
          <Col md={3} className="">
          </Col>
          <Col md={6} className="justify-content-center">
            {openedReview &&
              <ReviewRead
                review={reviews.find(art => art.id === openedReview)}
                allReviews={reviews}
                setOpenedReview={handleOpenedReview}
                glossarywords={glossarywords}
              />
            }
          </Col>
          <Col md={3} className="">
            <RelatedReviews
              relatedReviews={relatedReviews}
              setOpenedReview={handleOpenedReview}
            />
          </Col>
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const apiUrlGlossary = "http://" + context.req.headers.host + "/api/glossaryword"
  const resGlossaryword = await fetch(apiUrlGlossary)
  const glossarywords = await resGlossaryword.json()
  const apiUrlReview = "http://" + context.req.headers.host + "/api/review"
  const resReview = await fetch(apiUrlReview)
  const DBreviews = await resReview.json()
  return { props: { DBreviews: DBreviews.data, glossarywords: glossarywords.data } }
}