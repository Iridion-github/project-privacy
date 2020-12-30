import {
  ListGroup,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const ArticlesTagRow = function (props) {
  return (
    <ListGroup.Item><Button block variant="info">{props.tagName}</Button></ListGroup.Item>
  )
}