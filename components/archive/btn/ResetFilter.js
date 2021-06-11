import {
  Button
} from 'react-bootstrap';

export const ResetFilter = function (props) {
  return (
    <Button
      variant="warning"
      size="sm"
      className="reset-filter-btn"
      onClick={props.onResetFilter}
    >
      Pulisci Filtro
    </Button>
  );
};