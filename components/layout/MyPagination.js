import { useState } from 'react'

import {
  Row,
  Col,
  Pagination,
  Form,
  Button
} from 'react-bootstrap'

export const MyPagination = function (props) {

  const [targetPage, setTargetPage] = useState("")

  const lastPage = props.totalPages
  const changePage = (destination) => props.setCurrentPage(destination)
  let firstShownArticleIndex = props.currentPage === 1 ? 1 : (props.currentPage * props.elementsPerPage + 1) - props.elementsPerPage
  let lastShownArticleIndex = props.currentPage === 1 ? 6 : props.currentPage * props.elementsPerPage
  if (lastShownArticleIndex > props.totalElements) lastShownArticleIndex = props.totalElements
  return (
    <Row className="w-100 m-auto justify-content-center">
      <Col sm={7} className="m-auto text-center justify-content-center">
        <Pagination
          size="sm"
          className="justify-content-end custom-pagination"
        >
          <Pagination.First onClick={() => changePage(1)} />
          {props.currentPage >= 4 && <Pagination.Ellipsis disabled />}
          {props.currentPage - 2 > 0 && <Pagination.Item onClick={() => changePage(props.currentPage - 2)}>{props.currentPage - 2}</Pagination.Item>}
          {props.currentPage - 1 > 0 && <Pagination.Item onClick={() => changePage(props.currentPage - 1)}>{props.currentPage - 1}</Pagination.Item>}
          <Pagination.Item active>{props.currentPage}</Pagination.Item>
          {props.currentPage + 1 < lastPage && <Pagination.Item onClick={() => changePage(props.currentPage + 1)}>{props.currentPage + 1}</Pagination.Item>}
          {props.currentPage + 2 < lastPage && <Pagination.Item onClick={() => changePage(props.currentPage + 2)}>{props.currentPage + 2}</Pagination.Item>}
          {props.currentPage <= lastPage - 4 && <Pagination.Ellipsis disabled />}
          {props.currentPage < lastPage && <Pagination.Item onClick={() => changePage(lastPage)}>{lastPage}</Pagination.Item>}
          <Pagination.Last onClick={() => changePage(lastPage)} />
          {props.totalPages > 20 &&
            <Form inline className="ml-2">
              <Form.Group controlId="goalPage" className="inline-form-custom">
                <Form.Control
                  value={targetPage}
                  onChange={(event) => setTargetPage(event.target.value)}
                  size="sm"
                  type="number"
                  placeholder={props.currentLang === "ita" ? "Vai a" : "Go to"}
                  className="small-input" />
                <Button
                  disabled={targetPage === ""}
                  size="sm"
                  variant="info"
                  className="ml-1"
                  onClick={() => changePage(Number(targetPage))}
                >
                  <i className="fas fa-arrow-right"></i>
                </Button>
              </Form.Group>
            </Form>
          }
        </Pagination>
      </Col>
      <Col sm={5} className="m-auto text-right">
        <p className="ml-3 text-muted small-text pt-2 pr-5">
          {
            props.currentLang === "ita"
              ? (firstShownArticleIndex + " - " + lastShownArticleIndex + " di " + props.totalElements + " articoli")
              : (firstShownArticleIndex + " - " + lastShownArticleIndex + " of " + props.totalElements + " articles")
          }
        </p>
      </Col>
    </Row>
  )
}

