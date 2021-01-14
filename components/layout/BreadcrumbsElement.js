import {
  NavItem,
  NavLink,
  Button,
  Nav
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLanguage, useLanguageUpdate } from '../../context/siteLanguageContext' //context

export const BreadcrumbsElement = function (props) {

  const siteLanguage = useLanguage() //context
  const siteLanguageUpdate = useLanguageUpdate() //context
  return (<>
    {props.index > 0 && <span> » </span>}
    <a
      href={props.lastElem ? null : props.route.path}
      onClick={() => { }}
    >
      {props.route.title}
    </a>
  </>
  )
}