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
      const fullpath = path.resolve(dir, dirent.name)
      if (dirent.isDirectory()) {
        yield* getFiles(fullpath)
      } else {
        yield {
          //fullpath: fullpath, //nascosto per motivi di sicurezza, da rimuovere in futuro
          relativepath: fullpath.replace("C:\\Users\\antin\\Desktop\\Lavoro\\Siti Ale\\project-privacy\\public\\", ""), //vitale ma così fa schifo, da ottimizzare
          filename: dirent.name
        }
      }
    }
  }
  (() => {
    for (const f of getFiles('public/archive', true)) {
      docsToAnalyze.push(f)
    }
  })()

  const docs = docsToAnalyze.map(fileObj => {
    const fileContents = fs.readFileSync(fileObj.fullpath, {
      encoding: 'utf8'
    })

    return {
      filename: fileObj.filename,
      fullpath: fileObj.fullpath,
      relativepath: fileObj.relativepath,
      content: fileContents
    }
  })

  const filteredDocs = docs.filter(d => {
    //Eventuali affinamenti del filtro andranno qui
    return d.content.trim().includes(searchterms)
  }) //NON includo il content nella risposta

  if (filteredDocs.length > 0) {
    res.status(200).json({ success: true, data: { filteredDocs: filteredDocs } })
  } else {
    res.status(200).json({ success: true, data: "No Results found!" })
  }
}