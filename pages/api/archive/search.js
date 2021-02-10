import path from 'path'
import slash from 'slash'
import { PdfReader } from "pdfreader"  //pacchetto usato per leggere i pdf 
import fs from 'fs'//pacchetto usato per leggere docx files
import mammoth from 'mammoth' //pacchetto usato per convertire i docx in html
import WordExtractor from "word-extractor" //pacchetto usato per leggere i doc files


// ----------------------------- [Responds with an Object for every document in Archive] -----------------------------    
export default async (req, res) => {
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

  //containerResult Promise starts pending
  const containerResult = await new Promise((resolveContainer, rejectContainer) => {
    try {
      const analyzedFiles = []
      filesToAnalyze.forEach(async fileObj => {
        const pdf = fileObj.fullpath.includes(".pdf")
        const docx = fileObj.fullpath.includes(".docx")
        const doc = fileObj.fullpath.includes(".doc")

        //singleResult Promise starts pending
        const singleResult = await new Promise((resolveSingle, rejectSingle) => {
          if (pdf) { //[Pdf procedure] (PdfReader + manual array push)
            const pdfBuffer = fs.readFileSync(fileObj.fullpath)
            const getPdfContent = async () => {
              const pdfContentArray = []
              await new PdfReader().parseFileItems(fileObj.fullpath, async (err, item) => {
                if (err) return rejectSingle(err) //rejecting singleResult Promise
                if (!item) { //Condizione d'uscita da parseFileItems()
                  return resolveSingle({ //resolving singleResult Promise
                    fullpath: fileObj.fullpath,
                    linuxfullpath: fileObj.linuxfullpath,
                    filename: fileObj.filename,
                    relativepath: fileObj.relativepath,
                    linuxpath: fileObj.linuxpath,
                    content: pdfContentArray.join(" ")
                  })
                }
                if (item.text) { //Per ogni frammento del pdf, pusho in pdfContentArray.
                  pdfContentArray.push(item.text)
                  return true
                }
              })
            }
            getPdfContent()
          } else if (docx) {//[Docx procedure] (mammoth)
            const options = {}
            mammoth.convertToHtml({ path: 'public\\' + fileObj.relativepath }, options).then((mammothResult) => {
              if (mammothResult.messages.length > 0) {
                for (let x; x < mammothResult.messages.length; x++) {
                  console.log("\n\n Errors:", mammothResult.messages[x], '\n\n')
                }
              }
              return resolveSingle({ //resolving singleResult Promise
                fullpath: fileObj.fullpath,
                linuxfullpath: fileObj.linuxfullpath,
                filename: fileObj.filename,
                relativepath: fileObj.relativepath,
                linuxpath: fileObj.linuxpath,
                content: mammothResult.value
              })
            })
          } else if (doc) { //[Doc procedure] (WordExtractor)
            const getDocContent = async () => {
              const docExtractor = new WordExtractor()
              const extractedContent = docExtractor.extract('public\\' + fileObj.relativepath)
              await extractedContent.then(function (doc) {
                resolveSingle({ //resolving singleResult Promise
                  fullpath: fileObj.fullpath,
                  linuxfullpath: fileObj.linuxfullpath,
                  filename: fileObj.filename,
                  relativepath: fileObj.relativepath,
                  linuxpath: fileObj.linuxpath,
                  content: JSON.stringify(doc.getBody())
                })
              })
            }
            getDocContent()
          } else {
            rejectSingle("File is not pdf, docx or doc!") //rejecting singleResult Promise
          }
        }).then(singleResult => {
          return singleResult
        })
        //singleResult Promise resolved/rejected

        await analyzedFiles.push({
          fullpath: fileObj.fullpath,
          filename: fileObj.filename,
          relativepath: fileObj.relativepath,
          linuxpath: fileObj.linuxpath,
          content: singleResult.content
        })

        if (analyzedFiles.length === filesToAnalyze.length) {
          resolveContainer(analyzedFiles) //resolving containerResult Promise
        }

      })
    } catch (errContainer) {
      rejectContainer(errContainer) //rejecting containerResult Promise
    }
  }).then((containerResult) => {
    return containerResult
  })
  //containerResult Promise resolved/rejected

  const filteredDocs = containerResult.filter(d => {
    if (d.content) {
      //Eventuali affinamenti del filtro andranno qui
      const cleanContent = d.content.replace(/[^\w\s]/gi, '').toLowerCase()
      return cleanContent.includes(searchterms.replace(/[^\w\s]/gi, '').toLowerCase())
    } else {
      return false
    }
  }).map(d => ({
    fullpath: d.fullpath,
    filename: d.filename,
    relativepath: d.relativepath,
    linuxpath: d.linuxpath
  }))

  if (filteredDocs.length > 0) {
    return res.status(200).json({ //Success - Trovato qualcosa per i searchterms immessi, e nessun errore.
      success: true,
      data: { filteredDocs: filteredDocs }
    })
  } else {
    return res.status(200).json({ //Success - ma nessun risultatp per i searchterms immessi, ma nessun errore.
      success: true,
      data: { filteredDocs: [] }
    })
  }
}