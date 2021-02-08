import fs from 'fs'
import path from 'path'
import slash from 'slash'
import { PdfReader } from "pdfreader"
import mammoth from 'mammoth'
import Blob from "cross-blob"


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
          linuxfullpath: slash(fullpath),
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
          const docContent = fs.readFileSync(fileObj.fullpath, 'utf8')
          const docBuffer = fs.readFileSync(fileObj.fullpath)
          //console.log("\n\n\n ||||| docBuffer stringed:", docBuffer.toString().substr(0, 4000), "\n\n\n")
          const docBlob = new Blob(docBuffer)
          console.log("\n\n\n ||||| AT CREATION - docBlob:", docBlob, "\n\n\n")
          console.log("\n\n\n ||||| AT CREATION - blob size:", docBlob.size, "\n\n\n")
          resolveSingle({
            fullpath: fileObj.fullpath,
            linuxfullpath: fileObj.linuxfullpath,
            filename: fileObj.filename,
            relativepath: fileObj.relativepath,
            linuxpath: fileObj.linuxpath,
            content: docContent,
            blob: docBlob
          })
        }
      }).then((singleResult) => {
        //[PDF] singleResult ha l'aspetto di oggetto con prop numerata, quindi lo adatto
        if (singleResult.blob) {
          //console.log("\n\n\n ||||| AFTER THEN - singleResult without content ", { ...singleResult, content: "" })
          //console.log("\n\n\n ||||| AFTER THEN - singleResult.blob of " + fileObj.filename + ":", singleResult.blob, "\n\n\n")
          //console.log("\n\n\n ||||| AFTER THEN - singleResult.blob.size of " + fileObj.filename + ":", singleResult.blob.size, "\n\n\n")
        }
        if (Object.keys(singleResult).includes('0')) {
          analyzedFiles.push({
            fullpath: fileObj.fullpath,
            linuxfullpath: fileObj.linuxfullpath,
            filename: fileObj.filename,
            relativepath: fileObj.relativepath,
            linuxpath: fileObj.linuxpath,
            content: Object.values(singleResult).join(""),
            blob: singleResult.blob
          })
        } else {
          //[DOC/DOCX] singleResult ha un aspetto normale, tranne per il content che è una copia di sè. Quindi il content diventa la prop['content']

          if (fileObj.filename.includes("provafileesterno")) {
            const options = {}
            mammoth.convertToHtml({ path: 'public\\' + fileObj.relativepath }, options).then((mammothResult) => {
              if (mammothResult.messages.length > 0) {
                for (let x; x < mammothResult.messages.length; x++) {
                  console.log("\n\n Errors:", mammothResult.messages[x], '\n\n')
                }
              }
              //console.log("\n\n\n\n ||||| mammothResult.value: ", mammothResult.value, "\n\n\n\n")
            })
          }
          analyzedFiles.push({
            fullpath: fileObj.fullpath,
            filename: fileObj.filename,
            relativepath: fileObj.relativepath,
            linuxpath: fileObj.linuxpath,
            content: singleResult.content,
            blob: singleResult.blob
          })
        }
        if (analyzedFiles.length === filesToAnalyze.length) {
          resolveContainer(analyzedFiles)
        }
      })
    })

  }).then((containerResult) => {
    const filteredDocs = containerResult.filter(d => {
      //Eventuali affinamenti del filtro andranno qui
      const cleanContent = d.content.replace(/[^\w\s]/gi, '').toLowerCase()
      if (cleanContent.includes(searchterms.replace(/[^\w\s]/gi, '').toLowerCase())) {
        //console.log("Content tradotto dal binario: ", d.content.replace(/[^\w\s]/gi, '').substr(0, 4000))
        //console.log("Blob del .doc file: ", d.blob)
      }
      return cleanContent.includes(searchterms.replace(/[^\w\s]/gi, '').toLowerCase())
    })
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Pulizia Console \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    if (filteredDocs.length > 0) {
      console.log("About to send data to client | blob size:", filteredDocs[0].blob.size)
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