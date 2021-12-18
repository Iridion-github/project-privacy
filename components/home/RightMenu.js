import { Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { useRouter } from "next/router";

export const RightMenu = function (props) {
  const router = useRouter();
  return (
    <Row className="mobile-compatible w-100">
      <Col>
        <Card className="bg-standard-blue">
          <Card.Header className="topic-filter-header">
            <Row>
              <Col md={12} className="text-center">
                {props.currentLang === "ita" ? "Naviga" : "Navigate"}
              </Col>
            </Row>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/normativa")}>
                Normativa
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/giurisprudenza")}>
                Giurisprudenza
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/prassiOperativa")}>
                Prassi operativa
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/mappeConcettuali")}>
                Mappe concettuali
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/dizionarioPrivacy")}>
                Dizionario privacy (ita-eng)
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};
