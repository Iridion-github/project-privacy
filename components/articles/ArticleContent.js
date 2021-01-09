import {
  Image,
} from 'react-bootstrap'

import { getGlossaryPopover } from '../../utils/text'
import glossary from '../../database/glossary'

export const ArticleContent = function (props) {

  const getSections = (imgs, paragraphs) => {
    //searchTargetWords("Alfa, beta e gamma. Poi c'è Delta seguita da epsilon. A sorpresa troviamo beta di nuovo alla fine.", ["beta"])
    return paragraphs.map(
      (parag, i) => {
        return (
          <div key={i}>
            <p>{getGlossaryPopover(parag, glossary)}</p>
            <Image className={"article-img-" + imgs[i].size + "-" + imgs[i].position + imgs[i].margin + " black-border"} src={imgs[i].src} />
          </div>
        )
      }
    )
  }

  return (
    <>
      <Image className="article-img-md-left mr-2 black-border" src={props.previewImg} />
      {getSections(props.images, props.paragraphs)}
    </>
  )
}