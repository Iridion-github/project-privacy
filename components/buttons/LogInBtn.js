import { Button } from 'react-bootstrap';
import {
  Row,
  Col
} from 'react-bootstrap';

export const LogInBtn = function (props) {
  return (
    <Button
      variant="info"
      size="sm"
      onClick={props.onClick}
    >
      Login
    </Button>
  );
};