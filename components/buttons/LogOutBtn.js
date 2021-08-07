import {
  Button
} from 'react-bootstrap';


export const LogOutBtn = function (props) {
  return (
    <Button
      variant="info"
      size="sm"
      onClick={props.onClick}
    >
      Logout
    </Button>
  );
};