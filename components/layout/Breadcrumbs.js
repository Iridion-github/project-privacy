import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Image
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context
import { BreadcrumbsElement } from './BreadcrumbsElement'


export const Breadcrumbs = function (props) {
  const siteLanguage = useLanguage() //context
  const siteLanguageUpdate = useLanguageUpdate() //context
  const router = useRouter()

  const [init, setInit] = useState(false)
  const [breadcrumbs, setBreadcrumbs] = useState([{ title: 'Home', path: '/' }])

  const initBreadcrumbs = () => {
    let breadcrumbsToUpdate = [...breadcrumbs]
    const section = router.asPath.slice(1)
    const title = section.split("/").reverse().pop()
    breadcrumbsToUpdate = ([...breadcrumbsToUpdate, { title: title, path: '/' + title }])
    if (props.articleId) {
      breadcrumbsToUpdate = ([...breadcrumbsToUpdate, { title: props.articleTitle, path: section + '/' + props.articleId }])
    }
    setBreadcrumbs(breadcrumbsToUpdate)
    setInit(true)
  }

  if (!init) initBreadcrumbs()

  return (
    <Row className="m-0 w-100 breadcrumbs">
      <Col md={{ span: 6, offset: 3 }} className="">
        {breadcrumbs.map((elem, i) => (
          <BreadcrumbsElement
            route={elem}
            index={i}
            key={i}
            lastElem={i === breadcrumbs.length - 1}
          />
        ))}
      </Col>
    </Row>
  )
}