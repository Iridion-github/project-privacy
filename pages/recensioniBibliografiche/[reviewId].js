import styles from '../../styles/Home.module.css';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Row,
  Col
} from 'react-bootstrap';
import { Header } from '../../components/layout/Header';
import { Navigation } from '../../components/layout/Navbar';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Footer } from '../../components/layout/Footer';
import { ReviewRead } from "../../components/reviews/ReviewRead";
import { ReviewReadRightPanel } from "../../components/reviews/ReviewReadRightPanel";
import { getBreadcrumbsForReviews } from '../../utils/reviews';
import { getBreadcrumbsForErrors } from '../../utils/errors';
import { ErrorComponent } from '../../components/layout/ErrorComponent';
import { Loading } from '../../components/layout/Loading';
import { useAppContext } from "../../context/contextLib";


function recensione({ glossarywords, DBreviews }) {
  const { currentLang, changeSiteLang } = useAppContext();
  const router = useRouter();
  const { reviewId } = router.query;
  const [reviews, setReviews] = useState(DBreviews);
  const [openedReview, setOpenedReview] = useState(reviews.find(rev => rev.id === reviewId) ? reviewId : null);
  const [loading, setLoading] = useState(true);

  const handleOpenedReview = (id) => {
    setLoading(true);
    const fullRoute = id !== null ? '/recensioniBibliografiche/' + id : '/recensioniBibliografiche/';
    router.push(fullRoute);
    setOpenedReview(id);
  };

  useEffect(() => {
    if (loading === true) {
      setLoading(false);
    }
    if (reviews.length === 0) {
      if (DBreviews.map(el => el.id).includes(reviewId)) {
        setOpenedReview(reviewId);
      }
    }
  });

  return (
    <div className={styles.container}>
      <Header
        title={currentLang === "ita" ? "Recensioni" : "Reviews"}
      />
      {/* Navbar */}
      <Navigation />
      {(openedReview && reviews.length > 0) &&
        <Breadcrumbs
          breadcrumbsList={getBreadcrumbsForReviews(openedReview, reviews.find(art => art.id === openedReview)[currentLang].title)}
        />
      }
      {reviews.length === 0 &&
        <Breadcrumbs
          breadcrumbsList={getBreadcrumbsForErrors({ ita: "Recensione inesistente", eng: "No such review" }, "/recensioniBibliografiche", currentLang)}
        />
      }
      {loading && <Loading />}
      {/* Page Content */}
      <main className={styles.main}>
        {!openedReview &&
          <ErrorComponent />
        }
        <Row className="w-100">
          <Col md={3} className="">
          </Col>
          {(openedReview && reviews.length > 0) &&
            <>
              <Col md={6} className="justify-content-center">
                <ReviewRead
                  review={reviews.find(art => art.id === openedReview)}
                  allReviews={reviews}
                  setOpenedReview={handleOpenedReview}
                  glossarywords={glossarywords}
                  currentLang={currentLang}
                />
              </Col>
              <Col md={3} className="">
                <ReviewReadRightPanel />
              </Col>
            </>
          }
        </Row>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const apiUrlGlossary = "http://" + context.req.headers.host + "/api/glossaryword";
  const resGlossaryword = await fetch(apiUrlGlossary);
  const glossarywords = await resGlossaryword.json();
  const apiUrlReview = "http://" + context.req.headers.host + "/api/review";
  const resReview = await fetch(apiUrlReview);
  const DBreviews = await resReview.json();
  return { props: { DBreviews: DBreviews.data, glossarywords: glossarywords.data } };
}

export default recensione;