export const removeDuplicatesById = (arr) => {
  const ids = []
  const uniques = []
  arr.forEach(elem => {
    if (!ids.includes(elem.id)) {
      ids.push(elem.id)
      uniques.push(elem)
    }
  })
  return uniques
}

export const includesAll = (toCheck, targets, isArray) => {
  const result = []
  if (isArray) {
    for (let x = 0; x < toCheck.length; x++) {
      let toCheckIsInclusive = true
      for (let y = 0; y < targets.length; y++) {
        if (!toCheck[x].toLowerCase().includes(targets[y].toLowerCase())) toCheckIsInclusive = false
      }
      if (toCheckIsInclusive) result.push(toCheck[x])
    }
  } else {
    let toCheckIsInclusive = true
    for (let y = 0; y < targets.length; y++) {
      if (!toCheck.toLowerCase().includes(targets[y].toLowerCase())) toCheckIsInclusive = false
    }
    if (toCheckIsInclusive) result.push(toCheck)
  }
  return result
}