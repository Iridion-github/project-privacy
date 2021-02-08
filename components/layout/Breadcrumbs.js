import {
  Row,
  Col
} from 'react-bootstrap'
import { BreadcrumbsElement } from './BreadcrumbsElement'


export const Breadcrumbs = function (props) {

  return (
    <Row className="m-0 w-100 breadcrumbs">
      <Col md={{ span: 6, offset: 3 }} className="">
        {props.breadcrumbsList && props.breadcrumbsList.map((elem, i) => (
          <BreadcrumbsElement
            route={elem}
            index={i}
            key={i}
            lastElem={i === props.breadcrumbsList.length - 1}
          />
        ))}
      </Col>
    </Row>
  )
}