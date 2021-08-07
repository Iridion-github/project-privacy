import {
  Image
} from 'react-bootstrap';
import { getGlossaryPopover } from '../../utils/text';

export const ReviewContent = (props) => {
  const getSections = (imgs, paragraphs) => {
    const specifiedGlossary = props.glossarywords.filter(word => props.glossary.includes(word.name));
    return paragraphs.map(
      (parag, i) => {
        return (
          <div key={i}>
            <p className="article-paragraph">{getGlossaryPopover(parag, specifiedGlossary)}</p>
            {imgs.length > 0 &&
              <Image className={"article-img-" + imgs[i].size + "-" + imgs[i].position + imgs[i].margin + " black-border"} src={imgs[i].src} />
            }
          </div>
        );
      }
    );
  };
  return (
    <>
      <Image className="article-img-md-left mr-2 black-border" src={props.previewImg} />
      {getSections(props.images, props.paragraphs)}
    </>
  );
};