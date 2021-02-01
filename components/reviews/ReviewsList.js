import { useState } from 'react'
import { useLanguage } from '../../context/siteLanguageContext' //context
import {
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import { ReviewsRow } from "./ReviewsRow"
import { MyPagination } from "../layout/MyPagination"


export const ReviewsList = function (props) {

  const siteLanguage = useLanguage() //context

  const [currentPage, setCurrentPage] = useState(1)
  const [elementsPerPage, setElementsPerPage] = useState(6)
  const [elementsPerRow, setElementsPerRow] = useState(2)


  const reviewsRows = !props.filtered
    ? props.allReviews.reduce(function (reviews, acc, i) {
      if (i % elementsPerRow) {
        reviews[reviews.length - 1].push(acc)
      } else {
        reviews.push([acc])
      }
      return reviews
    }, [])
    : props.searchFilter(props.allReviews, props.searchInput, siteLanguage).reduce(function (reviews, acc, i) {
      if (i % elementsPerRow) {
        reviews[reviews.length - 1].push(acc)
      } else {
        reviews.push([acc])
      }
      return reviews
    }, [])

  const visibleRows = reviewsRows.filter((elem, index) => (index >= (currentPage * elementsPerPage / elementsPerRow) - elementsPerPage / elementsPerRow) && (index < currentPage * elementsPerPage / elementsPerRow))

  const searchInputOnChange = (value) => {
    if (value.length < 3) {
      props.setSearchInput(value)
      props.setFiltered(false)
    } else {
      props.setSearchInput(value)
    }
  }

  return (
    <Row className="">
      <Row className="w-100 m-auto">
        <Col md={6}>
          <h1>{siteLanguage === "ita" ? "Ultime Recensioni" : "Latest Reviews"}</h1>
        </Col>
        <Col sm={6} className="justify-content-end mb-1 flex-row">
          <Form inline className="justify-content-end w-100 p-0 flex-row">
            <Form.Group className="w-100" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder={siteLanguage === "ita" ? "Cerca" : "Search"}
                onChange={event => searchInputOnChange(event.target.value)}
                className="w-75 inline-form-custom" />
              <Button
                variant={!props.filtered ? "info" : "danger"}
                disabled={props.searchInput.length < 3}
                onClick={!props.filtered ? () => props.setFiltered(true) : () => props.setFiltered(false)}
                className="ml-1">
                {!props.filtered ? (<i className="fas fa-search"></i>) : (<i className="fas fa-times-circle"></i>)}
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      { visibleRows.length > 0 &&
        <MyPagination
          totalPages={!props.filtered ? Math.ceil(props.allReviews.length / elementsPerPage) : Math.ceil(props.searchFilter(props.allReviews, props.searchInput, siteLanguage).length / elementsPerPage)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          elementsPerPage={elementsPerPage}
          totalElements={!props.filtered ? props.allReviews.length : props.searchFilter(props.allReviews, props.searchInput, siteLanguage).length}
        />
      }
      <Row className="w-100 mobile-compatible m-auto">
        <Col md={12} className={visibleRows.length > 0 ? "resulting-article-container" : "d-flex resulting-article-container align-items-center justify-content-center"}>
          {visibleRows.length > 0 ?
            visibleRows.map((row, i) =>
              <ReviewsRow
                setOpenedReview={props.setOpenedReview}
                key={i}
                reviews={row}
              />
            ) : <Row className="w-100 text-center justify-content-center">{(siteLanguage === "ita") ? "Nessun risultato trovato" : "No result found"}</Row>
          }
        </Col>
      </Row>
      { visibleRows.length > 0 &&
        <MyPagination
          totalPages={!props.filtered ? Math.ceil(props.allReviews.length / elementsPerPage) : Math.ceil(props.searchFilter(props.allReviews, props.searchInput, siteLanguage).length / elementsPerPage)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          elementsPerPage={elementsPerPage}
          totalElements={!props.filtered ? props.allReviews.length : props.searchFilter(props.allReviews, props.searchInput, siteLanguage).length}
        />
      }
    </Row>
  )
}