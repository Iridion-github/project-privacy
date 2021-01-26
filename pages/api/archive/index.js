import fs from 'fs'
import path from 'path'

export default async (req, res) => {
  console.log("req.query:", req.query)
  console.log("req.query.searchterms:", req.query.searchterms)
  if (!req.query.searchterms) return res.status(400).json({ success: false, error: "Missing searchterms!" })
  const searchterms = req.query.searchterms.trim()
  const docsToAnalyze = []

  //funzione che estrae i path precisi di ogni file all'interno della dir archive
  function* getFiles(dir) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true })
    for (const dirent of dirents) {
      const res = path.resolve(dir, dirent.name)
      if (dirent.isDirectory()) {
        yield* getFiles(res)
      } else {
        yield res
      }
    }
  }
  (() => {
    for (const f of getFiles('archive')) {
      docsToAnalyze.push(f)
    }
  })()

  const docs = docsToAnalyze.map(filePath => {
    const fileContents = fs.readFileSync(filePath, {
      encoding: 'utf8'
    })

    return {
      filename: "file name is temporary unavailable",
      filePath: filePath.replace("C:\\Users\\antin\\Desktop\\Lavoro\\Siti Ale\\project-privacy\\archive\\", ""),
      content: fileContents
    }
  })

  const filteredDocs = docs.filter(d => {
    //Eventuali affinamenti del filtro andranno qui
    return d.content.trim().includes(searchterms)
  }).map(el => ({ filename: el.filename, filePath: el.filePath })) //NON includo il content nella risposta

  if (filteredDocs.length > 0) {
    res.status(200).json({ success: true, data: { filteredDocs: filteredDocs } })
  } else {
    res.status(200).json({ success: true, data: "No Results found!" })
  }
}