import styles from "../styles/Home.module.css";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { Row, Col } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { Footer } from "../components/layout/Footer";
import { ReviewsList } from "../components/reviews/ReviewsList";
import { ReviewsLeftMenu } from "../components/reviews/ReviewsLeftMenu";
import { removeDuplicatesById, includesAll } from "../utils/arrays";
import { Loading } from "../components/layout/Loading";
import { useAppContext } from "../context/contextLib";

function recensioniBibliografiche({ DBreviews, reviewTopics }) {
  const { currentLang, changeSiteLang } = useAppContext();
  const [reviews, setReviews] = useState(DBreviews);
  const [openedReview, setOpenedReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleOpenedReview = useCallback(reviewId => {
    setLoading(true);
    const fullRoute = reviewId !== null ? "/recensioniBibliografiche/" + reviewId : "/recensioniBibliografiche/";
    router.push(fullRoute);
    setLoading(false);
  }, []);

  const searchTopic = useCallback(async (topic, lang) => {
    handleOpenedReview(null);
    setFilteredByTopic(true);
    const result = [];
    if (topic !== "") {
      DBreviews.forEach(rev => {
        if (includesAll(rev[lang].topic, topic, Array.isArray(rev[lang].topic)).length > 0) {
          result.push(rev);
        }
      });
    }
    setReviews(result);
  }, []);

  const removeTopicFilter = useCallback(() => {
    handleOpenedReview(null);
    setFilteredByTopic(false);
    setReviews(DBreviews);
  });

  const searchFilter = useCallback((reviews, input, lang) => {
    const searchTerms = input.toLowerCase().split(" ");
    const found = [];
    if (input !== "") {
      reviews.forEach(rev => {
        if (
          includesAll(rev.author, searchTerms, Array.isArray(rev.author)).length > 0 ||
          includesAll(rev[lang].topic, searchTerms, Array.isArray(rev[lang].topic)).length > 0 ||
          includesAll(rev[lang].tags, searchTerms, Array.isArray(rev[lang].tags)).length > 0 ||
          includesAll(rev.ita.title, searchTerms, Array.isArray(rev.ita.title)).length > 0 ||
          includesAll(rev.ita.subtitle, searchTerms, Array.isArray(rev.ita.subtitle)).length > 0 ||
          includesAll(rev.ita.content, searchTerms, Array.isArray(rev.ita.content)).length > 0 ||
          includesAll(rev.eng.title, searchTerms, Array.isArray(rev.eng.title)).length > 0 ||
          includesAll(rev.eng.subtitle, searchTerms, Array.isArray(rev.eng.subtitle)).length > 0 ||
          includesAll(rev.eng.content, searchTerms, Array.isArray(rev.eng.content)).length > 0
        ) {
          found.push(rev);
        }
      });
    }
    const result = removeDuplicatesById(found);
    return result;
  }, []);

  const [filtered, setFiltered] = useState(false);
  const [filteredByTopic, setFilteredByTopic] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className={styles.container}>
      <Header title={currentLang === "ita" ? "Recensioni Bibliografiche" : "Bibliographic Reviews"} />
      {/* Navbar */}
      <Navigation />
      <Breadcrumbs />
      {loading && <Loading />}
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100 mb-5">
          <Col md={3} className="">
            <ReviewsLeftMenu
              allReviews={reviews}
              allTopics={reviewTopics}
              searchTopic={searchTopic}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              filteredByTopic={filteredByTopic}
              removeTopicFilter={removeTopicFilter}
              currentLang={currentLang}
            />
          </Col>
          <Col md={6} className="justify-content-center">
            {openedReview === null && (
              <ReviewsList
                allReviews={reviews}
                setOpenedReview={handleOpenedReview}
                searchFilter={searchFilter}
                filtered={filtered}
                setFiltered={setFiltered}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                currentLang={currentLang}
              />
            )}
          </Col>
          <Col md={3} className=""></Col>
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const environment = "http://" + context.req.headers.host;
  //const environment = "https://project-privacy-d803e.web.app"
  const apiUrlReview = environment + "/api/review";
  const resReview = await fetch(apiUrlReview);
  const DBreviews = await resReview.json();
  const apiUrlTopics = environment + "/api/reviewTopics";
  const resReviewTopics = await fetch(apiUrlTopics);
  const reviewTopics = await resReviewTopics.json();
  const orderedReviewTopics = [...reviewTopics.data].sort((a, b) => {
    if (a.index < b.index) return -1;
    if (a.index > b.index) return 1;
    return 0;
  });
  return { props: { DBreviews: DBreviews.data, reviewTopics: orderedReviewTopics } };
}

export default recensioniBibliografiche;
