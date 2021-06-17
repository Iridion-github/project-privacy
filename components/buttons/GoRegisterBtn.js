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
      src={"/Registration"}
    >
      Register
    </Button>
  );
};