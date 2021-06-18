import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Row,
  Col
} from 'react-bootstrap';
import { Header } from '../components/layout/Header';
import { Navigation } from '../components/layout/Navbar';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Footer } from '../components/layout/Footer';
import { ArticlesList } from "../components/articles/ArticlesList";
import { ArticlesLeftMenu } from "../components/articles/ArticlesLeftMenu";
import { removeDuplicatesById, includesAll } from '../utils/arrays';
import { Loading } from '../components/layout/Loading';
import { useAppContext } from "../context/contextLib";

function articoli(props) {
  const { DBarticles, articleTopics } = props;
  const [articles, setArticles] = useState(DBarticles);
  const [openedArticle, setOpenedArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { currentLang, changeSiteLang } = useAppContext();

  const handleOpenedArticle = (articleId) => {
    setLoading(true);
    const fullRoute = articleId !== null ? '/articoli/' + articleId : '/articoli/';
    router.push(fullRoute);
    setLoading(false);
  };

  const searchTopic = async (topic, lang) => {
    handleOpenedArticle(null);
    setFilteredByTopic(true);
    const result = [];
    if (topic !== "") {
      DBarticles.forEach(art => {
        if (includesAll(art[lang].topic, topic, Array.isArray(art[lang].topic)).length > 0) {
          result.push(art);
        }
      });
    }
    setArticles(result);
  };

  const removeTopicFilter = () => {
    handleOpenedArticle(null);
    setFilteredByTopic(false);
    setArticles(DBarticles);
  };

  const searchFilter = (articles, input, lang) => {
    const searchTerms = input.toLowerCase().split(" ");
    const found = [];
    if (input !== "") {
      articles.forEach(art => {
        if (
          includesAll(art.authors, searchTerms, Array.isArray(art.authors)).length > 0
          || includesAll(art[lang].topic, searchTerms, Array.isArray(art[lang].topic)).length > 0
          || includesAll(art[lang].tags, searchTerms, Array.isArray(art[lang].tags)).length > 0
          || includesAll(art.ita.title, searchTerms, Array.isArray(art.ita.title)).length > 0
          || includesAll(art.ita.subtitle, searchTerms, Array.isArray(art.ita.subtitle)).length > 0
          || includesAll(art.ita.content, searchTerms, Array.isArray(art.ita.content)).length > 0
          || includesAll(art.eng.title, searchTerms, Array.isArray(art.eng.title)).length > 0
          || includesAll(art.eng.subtitle, searchTerms, Array.isArray(art.eng.subtitle)).length > 0
          || includesAll(art.eng.content, searchTerms, Array.isArray(art.eng.content)).length > 0
        ) {
          found.push(art);
        }
      });
    }
    const result = removeDuplicatesById(found);
    return result;
  };

  const [filtered, setFiltered] = useState(false);
  const [filteredByTopic, setFilteredByTopic] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className={styles.container}>
      <Header

        title={currentLang === "ita" ? "Articoli" : "Articles"}
      />
      {/* Navbar */}
      <Navigation />
      <Breadcrumbs />
      {loading && <Loading />}
      {/* Page Content */}
      <main className={styles.main}>
        <Row className="w-100 mb-5">
          <Col md={3} className="">
            <ArticlesLeftMenu
              allArticles={articles}
              allTopics={articleTopics}
              searchTopic={searchTopic}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              filteredByTopic={filteredByTopic}
              removeTopicFilter={removeTopicFilter}
              currentLang={currentLang}
            />
          </Col>
          <Col md={6} className="justify-content-center">
            {(openedArticle === null || openedArticle === undefined) &&
              <ArticlesList
                allArticles={articles}
                setOpenedArticle={handleOpenedArticle}
                searchFilter={searchFilter}
                filtered={filtered}
                setFiltered={setFiltered}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                currentLang={currentLang}
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
  );
}

export async function getServerSideProps(context) {
  const environment = "http://" + context.req.headers.host;
  //const environment = "https://project-privacy-d803e.web.app"
  const apiUrlArticle = environment + "/api/article";
  const resArticle = await fetch(apiUrlArticle);
  const DBarticles = await resArticle.json();
  const apiUrlTopics = environment + "/api/articleTopics";
  const resArticleTopics = await fetch(apiUrlTopics);
  const articleTopics = await resArticleTopics.json();
  return { props: { DBarticles: DBarticles.data, articleTopics: articleTopics.data } };
}

export default articoli;
