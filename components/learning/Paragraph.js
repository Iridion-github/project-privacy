import stringToHTML from "html-react-parser";
import { Col } from "react-bootstrap";

export const Paragraph = props => {
  const calculatedSpan = { span: 12, offset: 0 };
  if (props.orientation === "center") {
    calculatedSpan.span = 12;
  }
  if (props.orientation === "left") {
    calculatedSpan.span = 10;
  }
  if (props.orientation === "right") {
    calculatedSpan.span = 10;
    calculatedSpan.offset = 2;
  }
  let calculatedClassName = "chisiamo-text p-0";
  if (props.orientation === "center") calculatedClassName + " text-center justify-content-center";

  return (
    <Col md={calculatedSpan} className="text-justify-desktop-only">
      <p className={calculatedClassName}>{stringToHTML(props.html)}</p>
    </Col>
  );
};
