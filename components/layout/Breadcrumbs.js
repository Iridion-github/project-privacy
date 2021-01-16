import {
  Row,
  Col
} from 'react-bootstrap'
import { BreadcrumbsElement } from './BreadcrumbsElement'
import { getBreadcrumbsList } from '../../utils/articles'


export const Breadcrumbs = function (props) {
  const breadcrumbsList = getBreadcrumbsList(props.articleId, props.articleTitle)

  return (
    <Row className="m-0 w-100 breadcrumbs">
      <Col md={{ span: 6, offset: 3 }} className="">
        {breadcrumbsList && breadcrumbsList.map((elem, i) => (
          <BreadcrumbsElement
            route={elem}
            index={i}
            key={i}
            lastElem={i === breadcrumbsList.length - 1}
          />
        ))}
      </Col>
    </Row>
  )
}