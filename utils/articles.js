import { useRouter } from 'next/router'

export const getRelatedArticles = (openedArticleId, allArticles, lang) => {
  let result = []
  for (let x = 0; x < allArticles.length && result.length < 5; x++) {
    if (
      allArticles[x][lang].tags.some(x => allArticles.find(y => y.id === openedArticleId)[lang].tags.includes(x))
      && openedArticleId !== allArticles[x].id
    ) {
      result.push(allArticles[x])
    }
  }
  return result
}

export const getBreadcrumbsForArticles = (articleId, articleTitle) => {
  const router = useRouter()
  const breadcrumbsList = []
  const section = router.asPath.slice(1)
  const title = section.split("/").reverse().pop()
  breadcrumbsList.push({ title: 'Home', path: '/' })
  breadcrumbsList.push({ title: title, path: '/' + title })
  if (articleId) breadcrumbsList.push({ title: articleTitle, path: section })
  return breadcrumbsList
}