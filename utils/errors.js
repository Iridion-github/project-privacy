import { useRouter } from 'next/router'

export const getBreadcrumbsForErrors = (errorMsg, href, lang) => {
  const breadcrumbsList = []
  const router = useRouter()
  const section = router.asPath.slice(1)
  const title = section.split("/").reverse().pop()
  breadcrumbsList.push({ title: 'Home', path: '/' })
  breadcrumbsList.push({ title: title, path: '/' + title })
  breadcrumbsList.push({ title: errorMsg[lang], path: href })
  return breadcrumbsList
}