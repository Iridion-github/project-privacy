import { Row, Col, Button, ListGroup } from "react-bootstrap";

export const LinksList = function (props) {
  console.log("props.linkSections:", props.linkSections);
  if (props.linkSections && props.linkSections.length) {
    return (
      <Row className="w-100 m-0 p-0">
        {props.handleGoBackBtn && (
          <Button variant="info" onClick={() => props.handleGoBackBtn()} style={{ position: "absolute", left: "1%", zIndex: 9999 }}>
            <i className="fas fa-long-arrow-alt-left mr-2"></i>
            {props.currentLang === "ita" ? "Torna Indietro" : "Back to Selection"}
          </Button>
        )}
        {props.linkSections.map(section => (
          <Row className="w-100 m-0 p-0">
            <Row className="w-100 m-0 p-0 justify-content-center pt-3 pb-2">
              <Col md={{ span: props.colMd ?? 12, offset: 0 }} className="p-0">
                <h5>{section}</h5>
              </Col>
            </Row>
            <Row className="w-100 m-0 p-0 justify-content-center">
              <Col md={{ span: props.colMd ?? 12, offset: 0 }} className="p-0">
                <ListGroup>
                  {props.links
                    .filter(link => link.section === section)
                    .map(link => {
                      return (
                        <ListGroup.Item inactive key={link.id} className="justify-content-center">
                          <Row className="m-0 p-0 w-100">
                            <Button variant="link" block href={link.url} target="_blank" className="pl-0 pr-0">
                              {link.title}
                            </Button>
                          </Row>
                          {link.subtitle && link.subtitle.length && (
                            <Row className="m-0 p-0 w-100">
                              <span className="link-subtitle">{link.subtitle}</span>
                            </Row>
                          )}
                        </ListGroup.Item>
                      );
                    })}
                </ListGroup>
              </Col>
            </Row>
          </Row>
        ))}
      </Row>
    );
  }

  return (
    <Row className="w-100 m-0 p-0 justify-content-center">
      {props.handleGoBackBtn && (
        <Button variant="info" onClick={() => props.handleGoBackBtn()} style={{ position: "absolute", left: "1%", zIndex: 9999 }}>
          <i className="fas fa-long-arrow-alt-left mr-2"></i>
          {props.currentLang === "ita" ? "Torna Indietro" : "Back to Selection"}
        </Button>
      )}
      <Col md={{ span: props.colMd ?? 12, offset: 0 }} className="p-0">
        <ListGroup>
          {props.links.map(link => {
            return (
              <ListGroup.Item inactive key={link.id} className="justify-content-center">
                <Row className="m-0 p-0 w-100">
                  <Button variant="link" block href={link.url} target="_blank" className="pl-0 pr-0">
                    {link.title}
                  </Button>
                </Row>
                {link.subtitle && link.subtitle.length && (
                  <Row className="m-0 p-0 w-100">
                    <span className="link-subtitle">{link.subtitle}</span>
                  </Row>
                )}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>
    </Row>
  );
};
