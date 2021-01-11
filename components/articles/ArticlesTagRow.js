import {
  ListGroup,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ArticlesTagRow = function (props) {
  return (
    <ListGroup.Item>
      <Button
        block
        variant="info"
        onClick={() => props.searchTopic(props.tagName, props.siteLanguage)}>
        {props.tagName}
      </Button>
    </ListGroup.Item>
  )
}