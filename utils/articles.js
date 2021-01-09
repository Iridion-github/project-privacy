import { AccordionCollapse } from "react-bootstrap"

export const getRelatedArticles = (openedArticleId, allArticles) => {
  let result = []
  for (let x = 0; x < allArticles.length && result.length < 5; x++) {
    if (
      allArticles[x].tags.some(x => allArticles.find(y => y.id === openedArticleId).tags.includes(x))
      && openedArticleId !== allArticles[x].id
    ) {
      result.push(allArticles[x])
    }
  }
  return result
}