import { useLanguage } from '../../context/siteLanguageContext' //context

export const BreadcrumbsElement = function (props) {
  const siteLanguage = useLanguage() //context, da usare.
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