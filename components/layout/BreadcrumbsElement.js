

export const BreadcrumbsElement = function (props) {

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