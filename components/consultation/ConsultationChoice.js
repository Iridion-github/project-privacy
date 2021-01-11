
import {
  Row,
  Col,
  Button,
  Card
} from 'react-bootstrap'
import { useState, useContext, createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context
import { ConsultationChoiceBtn } from './ConsultationChoiceBtn'

export const ConsultationChoice = function (props) {
  const siteLanguage = useLanguage() //context

  return (
    <Row>
      <Col md={{ span: 4, offset: 2 }} className="text-justify">
        {props.consultations.map(consultation => (
          <ConsultationChoiceBtn
            key={consultation.id}
            consultation={consultation}
          />
        ))}
      </Col>
    </Row>
  )
}