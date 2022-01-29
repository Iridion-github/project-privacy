import { Button } from "react-bootstrap";

export const GoLoginBtn = function (props) {
  return (
    <Button variant="info" size="sm" href={props.href}>
      {props.text}
    </Button>
  );
};
