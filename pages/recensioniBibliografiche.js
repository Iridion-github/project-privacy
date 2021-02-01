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
import { ReviewsList } from "../components/reviews/ReviewsList"
import { ReviewsLeftMenu } from "../components/reviews/ReviewsLeftMenu"
import { removeDuplicatesById, includesAll } from '../utils/arrays'

export default function recensioniBibliografiche({ DBreviews, reviewTopics }) {
  const siteLanguage = useLanguage() //context
  const [reviews, setReviews] = useState(DBreviews)
  const [openedReview, setOpenedReview] = useState(null)

  const router = useRouter()

  const handleOpenedReview = (reviewId) => {
    const fullRoute = reviewId !== null ? '/recensioniBibliografiche/' + reviewId : '/recensioniBibliografiche/'
    router.push(fullRoute)
  }

  const searchTopic = async (topic, lang) => {
    handleOpenedReview(null)
    setFilteredByTopic(true)
    const result = []
    if (topic !== "") {
      DBreviews.forEach(art => {
        if (includesAll(art[lang].topic, topic, Array.isArray(art[lang].topic)).length > 0) {
          result.push(art)
        }
      })
    }
    setReviews(result)
  }

  const removeTopicFilter = () => {
    handleOpenedReview(null)
    setFilteredByTopic(false)
    setReviews(DBreviews)
  }

  const searchFilter = (reviews, input, lang) => {
    const searchTerms = input.toLowerCase().split(" ")
    const found = []
    if (input !== "") {
      reviews.forEach(rev => {
        if (
          includesAll(rev.author, searchTerms, Array.isArray(rev.author)).length > 0
          || includesAll(rev[lang].topic, searchTerms, Array.isArray(rev[lang].topic)).length > 0
          || includesAll(rev.tags, searchTerms, Array.isArray(rev.tags)).length > 0
          || includesAll(rev.ita.title, searchTerms, Array.isArray(rev.ita.title)).length > 0
          || includesAll(rev.ita.subtitle, searchTerms, Array.isArray(rev.ita.subtitle)).length > 0
          || includesAll(rev.ita.content, searchTerms, Array.isArray(rev.ita.content)).length > 0
          || includesAll(rev.eng.title, searchTerms, Array.isArray(rev.eng.title)).length > 0
          || includesAll(rev.eng.subtitle, searchTerms, Array.isArray(rev.eng.subtitle)).length > 0
          || includesAll(rev.eng.content, searchTerms, Array.isArray(rev.eng.content)).length > 0
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
        title={siteLanguage === "ita" ? "Recensioni Bibliografiche" : "Bibliographic Reviews"}
      />
      {/* Navbar */}
      <Navigation />
      <Breadcrumbs />
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100 mb-5">
          <Col md={3} className="">
            <ReviewsLeftMenu
              allReviews={reviews}
              allTags={reviewTopics}
              searchTopic={searchTopic}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              filteredByTopic={filteredByTopic}
              removeTopicFilter={removeTopicFilter}
            />
          </Col>
          <Col md={6} className="justify-content-center">
            {openedReview === null &&
              <ReviewsList
                allReviews={reviews}
                setOpenedReview={handleOpenedReview}
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

export async function getServerSideProps(context) {
  /*
  const apiUrlReview = "http://" + context.req.headers.host + "/api/review"
  const resReview = await fetch(apiUrlReview)
  const DBreviews = await resReview.json()
  const apiUrlTopics = "http://" + context.req.headers.host + "/api/reviewTopics"
  const resReviewTopics = await fetch(apiUrlTopics)
  const reviewTopics = await resReviewTopics.json()  
  return { DBreviews: DBreviews.data, reviewTopics: reviewTopics.data }
  */
  return { props: { DBreviews: [], reviewTopics: [] } }
}