import { Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/contextLib";

export const RightMenu = function (props) {
  const router = useRouter();
  const btnLabels = {
    articoli: {
      ita: "Articoli",
      eng: "Articles",
    },
    recensioniBibliografiche: {
      ita: "Recensioni Bibliografiche",
      eng: "Bibliographic Reviews",
    },
    normativa: {
      ita: "Normativa",
      eng: "Regulations",
    },
    giurisprudenza: {
      ita: "Giurisprudenza",
      eng: "Jurisprudence",
    },
    prassiOperative: {
      ita: "Prassi operative",
      eng: "Operations practice",
    },
    mappeConcettuali: {
      ita: "Mappe concettuali",
      eng: "Conceptual maps",
    },
    dizionarioPrivacy: {
      ita: "Dizionario privacy (ita-eng)",
      eng: "Privacy dictionary (ita-eng)",
    },
    trovaLaNorma: {
      ita: "Trova la norma",
      eng: "Find the norm",
    },
  };

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
              <Button block variant="info" onClick={() => router.push("/articoli")}>
                {btnLabels.articoli[props.currentLang]}
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/recensioniBibliografiche")}>
                {btnLabels.recensioniBibliografiche[props.currentLang]}
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/normativa")}>
                {btnLabels.normativa[props.currentLang]}
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/giurisprudenza")}>
                {btnLabels.giurisprudenza[props.currentLang]}
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/prassiOperative")}>
                {btnLabels.prassiOperative[props.currentLang]}
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/mappeConcettuali")}>
                {btnLabels.mappeConcettuali[props.currentLang]}
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/dizionarioPrivacy")}>
                {btnLabels.dizionarioPrivacy[props.currentLang]}
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button block variant="info" onClick={() => router.push("/trovaLaNorma")}>
                {btnLabels.trovaLaNorma[props.currentLang]}
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};
