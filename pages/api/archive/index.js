import fs from 'fs'
import path from 'path'
import slash from 'slash'
import unoconv2 from 'unoconv2'


export default async (req, res) => {
  if (!req.query.searchterms) return res.status(400).json({ success: false, error: "Missing searchterms!" })
  const searchterms = req.query.searchterms.trim()
  const docsToAnalyze = []
  const convertedPdfs = []

  //funzione che estrae i path precisi di ogni file all'interno della dir archive
  function* getFiles(dir) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true })
    for (const dirent of dirents) {
      if (dirent.name.includes('.pdf') && !convertedPdfs.includes(dirent.name)) {
        const pdfpath = path.resolve(dir, dirent.name)
        console.log("pdfpath:", pdfpath)
        const convertedFile = unoconv2.convert(pdfpath, 'doc', function (err, result) {
          // result is returned as a Buffer
          fs.writeFileSync(dirent.name.split('.pdf')[0] + '.doc', result)
          return result
        })
        console.log("convertedFile = ", convertedFile) //this is undefined, so line 20 is certainly the wrong method
        convertedPdfs.push(dirent.name)
        console.log("convertedPdfs array:", convertedPdfs)
        yield* getFiles(dir)
      }
      const fullpath = path.resolve(dir, dirent.name)
      if (dirent.isDirectory()) {
        yield* getFiles(fullpath)
      } else {
        yield {
          fullpath: fullpath,
          relativepath: fullpath.split("public\\")[1],
          linuxpath: slash(fullpath.split("public\\")[1]),
          filename: dirent.name
        }
      }
    }
  }
  (() => {
    for (const f of getFiles('public/archive')) {
      docsToAnalyze.push(f)
    }
  })()

  const docsToAnalyzeFiltered = docsToAnalyze.filter(fileObj => !fileObj.filename.includes(".pdf"))

  const docs = docsToAnalyzeFiltered.map(fileObj => {
    console.log("fileObj.fullpath.includes(.pdf):", fileObj.fullpath.includes(".pdf"))
    const pdf = fileObj.fullpath.includes(".pdf")
    const getEncoding = (typepdf) => {
      if (typepdf) {
        return { encoding: 'binary' }
      } else {
        return { encoding: 'utf8' }
      }
    }

    const fileContents = fs.readFileSync(fileObj.fullpath, getEncoding(pdf))

    return {
      //fullpath: fileObj.,
      filename: fileObj.filename,
      relativepath: fileObj.relativepath,
      linuxpath: fileObj.linuxpath,
      content: fileContents
    }
  })



  const filteredDocs = docs.filter(d => {
    //Eventuali affinamenti del filtro andranno qui
    if (d.filename.includes(".pdf")) {
      function text2Binary(string) {
        return string.split('').map(function (char) {
          return char.charCodeAt(0).toString(2);
        }).join(' ');
      }
      const searchtermsBinary = text2Binary(searchterms)
      console.log(`il pdf include ${searchterms}?`, d.content.includes(searchtermsBinary))
    }
    if (d.filename.includes(".doc")) {
      return d.content.trim().includes(searchterms)
    }
  })

  if (filteredDocs.length > 0) {
    res.status(200)
      .json({
        success: true,
        data: { filteredDocs: filteredDocs }
      })
  } else {
    res.status(200)
      .json({
        success: true,
        data: { filteredDocs: [] }
      })
  }
}