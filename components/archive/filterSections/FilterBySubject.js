import {
  Row,
  Col,
  Card,
  Form,
  Accordion,
  Button
} from 'react-bootstrap'
import { useLanguage } from '../../../context/siteLanguageContext' //context


export const FilterBySubject = function (props) {
  const siteLanguage = useLanguage()

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Fonte:</h5>
          </Row>
          <Row className="w-100 justify-content-center ml-0 mr-0 pl-2 pr-2">

            <Col md={3} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card>
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Zone Geografiche
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="pt-1 pb-1"
                    >
                      {props.zoneGeogList.map((el, i) => (
                        <Row key={i} className="w-100 justify-content-center ml-0 mr-0">
                          <Col className="pl-0 pr-0 text-center">
                            <Form.Group className="">
                              <Form.Check
                                size="lg"
                                type="checkbox"
                                label={el.label}
                                checked={el.checked}
                                onChange={el.onChange}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      )
                      )}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

            <Col md={3}>
              <Accordion
                defaultActiveKey={null}
              >
                <Card>
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Zone Geografiche
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body className="pt-1 pb-1">


                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

            <Col md={3}>
              <Accordion
                defaultActiveKey={null}
              >
                <Card>
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Zone Geografiche
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body className="pt-1 pb-1">


                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

            <Col md={3}>
              <Accordion
                defaultActiveKey={null}
              >
                <Card>
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Zone Geografiche
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body className="pt-1 pb-1">


                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>


          </Row>
        </Col>
      </Row>
    </Card>
  )
}