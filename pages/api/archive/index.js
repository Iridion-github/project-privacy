import fs from 'fs'
import path from 'path'
import slash from 'slash'
import { PdfReader } from "pdfreader"


export default async (req, res) => {
  if (!req.query.searchterms) return res.status(400).json({ success: false, error: "Missing searchterms!" })
  const searchterms = req.query.searchterms
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

  const getDocs = async () => {
    docsToAnalyze.map(fileObj => {
      const pdf = fileObj.fullpath.includes(".pdf")
      if (pdf) {
        console.log("Analyzing a pdf file: ", fileObj.fullpath)
        let pdfContent = ""
        let thePromise = new Promise((resolve, reject) => {
          let pdfContentArray = []
          new PdfReader().parseFileItems(fileObj.fullpath, function (err, item) {
            if (err) {
              reject(err)
            } else if (!item) {
              resolve(pdfContentArray.join(" ")) //La callback è stata effettuata su tutto il pdf, esco.
            } else if (item.text) {
              pdfContentArray.push(item.text) //Per ogni frammento del pdf, pusho.
            }
          })
        })

        thePromise.then((promiseResult) => {
          console.log("promiseResult: ", promiseResult) //Questo è ok
          //[MEMO] Qui! Devo ancora capire come far uscire dalla promise l'intero oggetto seguente
          return {
            //fullpath: fileObj.,
            filename: fileObj.filename,
            relativepath: fileObj.relativepath,
            linuxpath: fileObj.linuxpath,
            content: promiseResult
          }
        })

      } else {
        const docContent = fs.readFileSync(fileObj.fullpath, 'utf8')
        return {
          //fullpath: fileObj.,
          filename: fileObj.filename,
          relativepath: fileObj.relativepath,
          linuxpath: fileObj.linuxpath,
          content: docContent
        }
      }
    })
  }

  const docs = await getDocs()

  const filteredDocs = docs.filter(d => {
    //Eventuali affinamenti del filtro andranno qui
    if (d.filename.includes(".pdf")) {
      console.log(`il pdf include ${searchterms}?`, d.content.includes(searchterms))
    }
    if (d.filename.includes(".doc")) {
      const cleanContent = d.content.replace(/[^\w\s]/gi, '')
      return cleanContent.includes(searchterms)
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