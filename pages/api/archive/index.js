import fs from 'fs'
import path from 'path'
import slash from 'slash'
import { PdfReader } from "pdfreader"


export default async (req, res) => {
  if (!req.query.searchterms) return res.status(400).json({ success: false, error: "Missing searchterms!" })
  const searchterms = req.query.searchterms
  const filesToAnalyze = []

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
      filesToAnalyze.push(f)
    }
  })()

  const containerPromise = new Promise((resolveContainer, rejectContainer) => {
    const analyzedFiles = []
    filesToAnalyze.forEach(fileObj => {
      const pdf = fileObj.fullpath.includes(".pdf")
      const singleFilePromise = new Promise((resolveSingle, rejectSingle) => {
        if (pdf) {
          //console.log("||||||||| Analyzing a pdf file: ")
          let pdfContentArray = []
          new PdfReader().parseFileItems(fileObj.fullpath, function (err, item) {
            if (err) {
              rejectSingle(err)
            } else if (!item) {
              resolveSingle(pdfContentArray.join(" ")) //La callback è stata effettuata su tutto il pdf, esco.
            } else if (item.text) {
              pdfContentArray.push(item.text) //Per ogni frammento del pdf, pusho.
            }
          })
        } else {
          //console.log("||||||||| Analyzing a doc file: ")
          const docContent = fs.readFileSync(fileObj.fullpath, 'utf8')
          resolveSingle({
            fullpath: fileObj.fullpath,
            filename: fileObj.filename,
            relativepath: fileObj.relativepath,
            linuxpath: fileObj.linuxpath,
            content: docContent
          })
        }
      }).then((singleResult) => {
        //console.log("||||||||| pushing object into analyzedFiles array")
        //nel caso dei pdf, singleResult ha l'aspetto di oggetto con prop numerata, quindi lo adatto
        if (Object.keys(singleResult).includes('0')) {
          analyzedFiles.push({
            fullpath: fileObj.fullpath,
            filename: fileObj.filename,
            relativepath: fileObj.relativepath,
            linuxpath: fileObj.linuxpath,
            content: Object.values(singleResult).join("")
          })
        } else { //nel caso dei doc, singleResult ha un aspetto normale, tranne per il content che è una copia di sè. Quindi il content diventa la prop['content']
          analyzedFiles.push({
            fullpath: fileObj.fullpath,
            filename: fileObj.filename,
            relativepath: fileObj.relativepath,
            linuxpath: fileObj.linuxpath,
            content: singleResult.content
          })
        }
        //console.log("||||||||| analyzedFiles.length:", analyzedFiles.length)
        //console.log("||||||||| filesToAnalyze.length:", filesToAnalyze.length)
        if (analyzedFiles.length === filesToAnalyze.length) {
          //console.log("analyzedFiles[16] should be file object for doc:", analyzedFiles[16])
          resolveContainer(analyzedFiles)
        }
      })
    })

  }).then((containerResult) => {
    //console.log('||||||||| containerResult[16] should be file object for doc:', containerResult[16])
    const filteredDocs = containerResult.filter(d => {
      //Eventuali affinamenti del filtro andranno qui
      const cleanContent = d.content.replace(/[^\w\s]/gi, '').toLowerCase()
      return cleanContent.includes(searchterms.replace(/[^\w\s]/gi, '').toLowerCase())
    })
    //console.log('||||||||| filteredDocs.length: ', filteredDocs.length)
    if (filteredDocs.length > 0) {
      console.log({ ...filteredDocs[0], content: "removed" })
      return res.status(200).json({ //Success - Trovato qualcosa per i searchterms immessi
        success: true,
        data: { filteredDocs: filteredDocs }
      })
    } else {
      return res.status(200).json({ //Success - ma nessun risultatp per i searchterms immessi
        success: true,
        data: { filteredDocs: [] }
      })
    }
  })
}