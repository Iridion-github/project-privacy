
import {
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import { useState, useContext, createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context
import { RelatedArticlePreview } from './RelatedArticlePreview'

export const RelatedArticles = function (props) {

  const siteLanguage = useLanguage() //context
  const siteLanguageUpdate = useLanguageUpdate() //context

  return (
    <>
      <Row className="justify-content-center">
        <h1>{siteLanguage === "ita" ? "Articoli Correlati" : "Related Articles"}</h1>
      </Row>
      <Row>
        <Col>
          {props.relatedArticles.map((art, i) =>
            <RelatedArticlePreview
              key={i}
              setOpenedArticle={props.setOpenedArticle}
              article={art}
            />
          )}
        </Col>
      </Row>
    </>
  )
}