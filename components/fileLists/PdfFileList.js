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
      <Row className="w-100 m-0 p-0">
        <Col md={{ span: 12, offset: 0 }} className="p-0">
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
    <Row className="w-100 m-0 p-0">
      <Col md={{ span: 12, offset: 0 }} className="p-0">
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
