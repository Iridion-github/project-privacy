import { useCallback } from "react";
import { Row, Col, Button, ListGroup } from "react-bootstrap";

export const PdfFileList = function (props) {
  const handleFileClick = useCallback(
    f => () => {
      props.onFileClick(f);
    },
    []
  );

  if (props.noSections) {
    return (
      <Row className="w-100 m-0 p-0 justify-content-center">
        {props.handleGoBackBtn && (
          <Button variant="info" onClick={() => props.handleGoBackBtn()} style={{ position: "absolute", left: "1%", zIndex: 9999 }}>
            <i className="fas fa-long-arrow-alt-left mr-2"></i>
            {props.currentLang === "ita" ? "Torna Indietro" : "Back to Selection"}
          </Button>
        )}
        <Col md={{ span: props.colMd ?? 12, offset: 0 }} className="p-0">
          <ListGroup defaultActiveKey="#link1">
            {props.files.map(file => {
              return (
                <ListGroup.Item key={file.id}>
                  <Button block variant="info" onClick={handleFileClick(file)}>
                    {file.title}
                  </Button>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
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
        <ListGroup defaultActiveKey="#link1">
          {props.files.map(file => {
            return (
              <ListGroup.Item key={file.id}>
                <Button block variant="info" onClick={handleFileClick(file)}>
                  {file.title}
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>
    </Row>
  );
};
