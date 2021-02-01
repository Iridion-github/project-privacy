export const whichToUpdate = (body, obj) => {
  const propsNames = Object.keys(body)
  const propsValues = Object.values(body)
  for (let x = 0; x < propsNames.length; x++) {
    if (obj[propsNames[x]]) { obj[propsNames[x]] = propsValues[x] }
  }
  return obj
}