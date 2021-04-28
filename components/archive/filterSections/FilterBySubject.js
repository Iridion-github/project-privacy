import {
  Row,
  Col,
  Card,
  Form,
  Accordion,
  Button
} from 'react-bootstrap'


export const FilterBySubject = function (props) {

  const getDoubleColList = (list) => {
    const arrResult = []
    list && list.forEach((el, i) => {
      if (i % 2 === 0) {
        const currentEl = list[i]
        const nextEl = list[i + 1] ? list[i + 1] : null
        const firstCol = (
          <Col className="pl-2 pr-0">
            <Form.Group className="form-check-input-container">
              <Form.Check
                size="lg"
                type="checkbox"
                className="pl-2"
                label={currentEl.label}
                checked={currentEl.checked}
                onChange={currentEl.onChange}
              />
            </Form.Group>
          </Col>
        )
        const secondCol = nextEl ? (
          <Col className="pl-2 pr-0">
            <Form.Group className="form-check-input-container">
              <Form.Check
                size="lg"
                type="checkbox"
                className="pl-2"
                label={nextEl.label}
                checked={nextEl.checked}
                onChange={nextEl.onChange}
              />
            </Form.Group>
          </Col>
        ) : ""
        const result = (
          <Row key={i} className="w-100 justify-content-center ml-0 mr-0 pl-2 pr-2">
            {firstCol}
            {secondCol ? secondCol : ""}
          </Row>
        )
        arrResult.push(result)
      }
    })
    return arrResult
  }

  return (
    <Card className="pt-2 pb-2 mb-2">
      <Row className="w-100 ml-0 mr-0">
        <Col md={12} className="justify-content-center">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <h5>Filtra per Argomento:</h5>
          </Row>
          <Row className="w-100 justify-content-center ml-0 mr-0 pl-2 pr-2">
            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
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
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.zoneGeogList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col md={6}>
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Ministeri
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.ministeriList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>

          <Row className="w-100 justify-content-center ml-0 mr-0 pl-2 pr-2">

            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Economia
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.economiaList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Tasse & Imposte
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.tasseImposteList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

          </Row>

          <Row className="w-100 justify-content-center ml-0 mr-0 pl-2 pr-2">

            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Lavoro
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.lavoroList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Produzione & Consumazione
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.produzConsumList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

          </Row>

          <Row className="w-100 justify-content-center ml-0 mr-0 pl-2 pr-2">

            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Sanità
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.sanitàList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Forze dell'Ordine
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.forzeOrdineList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

          </Row>

          <Row className="w-100 justify-content-center ml-0 mr-0 pl-2 pr-2">

            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Istruzione
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.istruzioneList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Beni Primari
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.beniPrimariList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

          </Row>

          <Row className="w-100 justify-content-center ml-0 mr-0 pl-2 pr-2">

            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Beni Secondari
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.beniSecondariList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Intrattenimento
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.intrattenimList)}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

          </Row>

          <Row className="w-100 ml-0 mr-0 pl-2 pr-2">

            <Col md={6} className="">
              <Accordion
                defaultActiveKey={null}
              >
                <Card className="card-darker-shadow">
                  <Accordion.Toggle
                    as={Button}
                    variant="info"
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    Impieghi
              </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="0"
                    className="p-0 pl-1 pr-1"
                  >
                    <Card.Body
                      className="p-0 pt-1 pb-1"
                    >
                      {getDoubleColList(props.impieghiList)}
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