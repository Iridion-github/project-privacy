import {
  Row,
  Col,
  Image,
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
      </Popover>
    )
    let segment = (
      <OverlayTrigger trigger={["hover", "focus"]} placement="auto" overlay={popover} key={i} id="glossary-word-container">
        <span id="glossary-word">{textRaw.slice(el.start, el.end)}</span>
      </OverlayTrigger>
    )
    result.push(segment, " ")
    prevTarget = el.end
    if (found.length === i + 1) {
      let formattedStr = textRaw.slice(prevTarget).trim()
      result.push(formattedStr, " ")
    }
  })
  if (found.length === 0) result = textRaw.trim()
  let finalResult = []
  for (let x = 0; x < result.length; x++) {
    if (typeof result[x] === "string") { //Caso della stringa contenente html
      console.log("result[x] è una stringa")
      finalResult.push(stringToHTML(result[x]))  //Questa versione porta al misterioso linebreak prima di ogni parola del glossario.
      //finalResult.push(parse(result[x]))  //Questa versione porta a { Error: Objects are not valid as a React child }
      //finalResult.push(result[x])  //Questa versione porta al testo preformattato nell'articolo.
    } else { //Caso dell'oggetto
      console.log("result[x] NON è una stringa")
      finalResult.push(result[x]) //component
    }
  }
  return finalResult
}