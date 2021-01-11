import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Card,
  Button,
  Image,
  Nav,
  Badge
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context

export const ConsultationChoiceBtn = function (props) {
  const siteLanguage = useLanguage() //context
  console.log(props.consultation[siteLanguage].title)
  return (
    <Button
      className="black-border p-0"
      block
      variant="info"
      onClick={() => props.setConsultation("Privacy")}
    >
      <Card className="w-100 h-100" border="secondary">
        <Card.Header className="consultation-card-header">
        </Card.Header>
        <Card.Body className="consultation-card-body">
          <Card.Img className="consultation-card-img" variant="top" src={props.consultation.img} />
          <Card.Title className="consultation-card-title">{props.consultation[siteLanguage].title}</Card.Title>
          <Card.Text className="consultation-card-description">{props.consultation[siteLanguage].description}</Card.Text>
        </Card.Body>
        <Card.Footer className="consultation-card-footer">
          <Row>
            <Col>
            </Col>
          </Row>
        </Card.Footer>
      </Card >
    </Button>
  )
}