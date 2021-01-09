import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Pagination,
  Form,
  Button,
  Card
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context

export const Glossary = function (props) {
  const siteLanguage = useLanguage() //context
  const [targetPage, setTargetPage] = useState("")

  return (
    <Row className="w-100 m-auto">
      <Col md={12} className="m-auto">
        Glossario
      </Col>
    </Row>
  )
}

