
import {
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import { useState, useContext, createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context


export const ConsultationCard = function (props) {
  const siteLanguage = useLanguage() //context

  return (
    <Row>
      <Col md={{ span: 4, offset: 2 }} className="text-justify">
        Hai scelto: {props.consultation}
      </Col>
    </Row>
  )
}