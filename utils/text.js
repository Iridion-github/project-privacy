import {
  Popover,
  OverlayTrigger
} from 'react-bootstrap'
import stringToHTML from 'html-react-parser'

//Questa funzione mi ha ammazzato
export const getGlossaryPopover = (textRaw, targetsRaw) => {
  const text = textRaw
  const targets = targetsRaw.map(el => el.name)
  const textFragmented = [...text]
  let analyzing = []
  let found = []
  for (let x = 0; x < textFragmented.length; x++) {
    const regex = RegExp('^[a-zA-Z0-9àèéìòù]*$')
    if (regex.test(textFragmented[x])) {
      analyzing.push(textFragmented[x])
    } else {
      if (targets.map(el => el.toLowerCase()).includes(analyzing.join('').toLowerCase())) {
        found.push({
          start: Number(x - analyzing.length),
          end: x,
          value: targetsRaw.find(word => word.name === analyzing.join('').toLowerCase()).name,
          meaning: targetsRaw.find(word => word.name === analyzing.join('').toLowerCase()).meaning,
          reference: targetsRaw.find(word => word.name === analyzing.join('').toLowerCase()).reference
        })
      }
      analyzing = []
    }
  }
  let result = []
  let prevTarget = 0
  found.forEach((el, i) => {
    let formattedStr = textRaw.slice(prevTarget, el.start).trim()
    result.push(formattedStr, " ")
    let popover = (
      <Popover id="glossary-popover">
        <Popover.Title as="h3" id="glossary-popover-title">{el.value}</Popover.Title>
        <Popover.Content id="glossary-popover-content">
          {el.meaning}
        </Popover.Content>
        <Popover.Title id="glossary-popover-footer">{el.reference}</Popover.Title>
      </Popover>
    )
    let segment = (
      <OverlayTrigger trigger={["click", "hover", "focus"]} placement="auto" overlay={popover} key={i} id="glossary-word-container">
        <span id="glossary-word">{textRaw.slice(el.start, el.end)}</span>
      </OverlayTrigger>
    )
    result.push(segment, " ")
    prevTarget = el.end
    if (found.length === i + 1 && textRaw.slice(prevTarget).trim().length > 0) { //Se abbiamo markato già tutte le keywords e c'è ancora del testo da stampare.
      let formattedStr = textRaw.slice(prevTarget).trim()
      result.push(formattedStr, " ")
    }
  })
  if (found.length === 0) result = stringToHTML(textRaw.trim())
  let finalResult = []
  for (let x = 0; x < result.length; x++) {
    if (typeof result[x] === "string") { //Caso della stringa contenente html
      finalResult.push(stringToHTML(result[x]))
    } else { //Caso del component
      finalResult.push(result[x])
    }
  }
  return finalResult
}