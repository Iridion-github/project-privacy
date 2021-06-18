import {
  Row,
  Col,
  Button
} from 'react-bootstrap';

export const GoRegisterBtn = function (props) {

  return (
    <Button
      variant="info"
      size="sm"
      href={props.href}

    >
      {props.text}
    </Button>
  );
};