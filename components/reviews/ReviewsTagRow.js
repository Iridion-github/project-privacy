import {
  ListGroup,
  Button
} from 'react-bootstrap'

export const ReviewsTagRow = function (props) {
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