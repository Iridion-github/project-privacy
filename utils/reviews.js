export const getBreadcrumbsList = (reviewId, reviewTitle) => {
  const router = useRouter()
  const breadcrumbsList = []
  const section = router.asPath.slice(1)
  const title = section.split("/").reverse().pop()
  breadcrumbsList.push({ title: 'Home', path: '/' })
  breadcrumbsList.push({ title: title, path: '/' + title })
  if (reviewId) breadcrumbsList.push({ title: reviewTitle, path: section })
  return breadcrumbsList
}