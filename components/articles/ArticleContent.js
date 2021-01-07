import { useState, useContext, createContext } from 'react'
import {
  Row,
  Col,
  Image
} from 'react-bootstrap'
import stringToHTML from 'html-react-parser'

export const ArticleContent = function (props) {
  const getSections = (imgs, paragraphs) => {
    return paragraphs.map(
      (parag, i) => {
        console.log("start parag:", parag)
        return (
          <div key={i}>
            {stringToHTML(parag)}
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