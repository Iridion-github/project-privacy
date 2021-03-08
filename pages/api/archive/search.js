import path from 'path'
import slash from 'slash'
import { PdfReader } from "pdfreader"  //pacchetto usato per leggere i pdf 
import fs from 'fs'//pacchetto usato per leggere docx files
import mammoth from 'mammoth' //pacchetto usato per convertire i docx in html
import WordExtractor from "word-extractor" //pacchetto usato per leggere i doc files
//import libre from 'libreoffice-convert'
import libre from 'libreoffice-convert-win' //pacchetto usato per convertire i docx files in pdf



// ----------------------------- [Responds with an Object for every document in Archive] -----------------------------    
export default async (req, res) => {
  let conversionFinished = true
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
        const pdf = fileObj.fullpath.toLowerCase().includes(".pdf")
        const docx = fileObj.fullpath.toLowerCase().includes(".docx")
        const doc = fileObj.fullpath.toLowerCase().includes(".doc")

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
          } else if (docx) {
            //[Docx procedure] (mammoth)
            const options = {}
            mammoth.convertToHtml({ path: 'public\\' + fileObj.relativepath }, options).then((mammothResult) => {
              if (mammothResult.messages.length > 0) {
                for (let x; x < mammothResult.messages.length; x++) {
                  //console.log("\n\n Errors:", mammothResult.messages[x], '\n\n')
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
            const getDocContent = async (fileObj) => {
              console.log("doc case: ", fileObj.filename)
              const docExtractor = new WordExtractor()
              const extractedContent = await docExtractor.extract('public\\' + fileObj.relativepath).then(function (doc) {
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
            getDocContent(fileObj)
          } else {
            rejectSingle("File is not pdf, docx or doc!") //rejecting singleResult Promise
          }
        }).then(singleResult => {
          console.log("singleResult.filename", singleResult.filename)
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
          console.log("resolveContainer() analyzedFiles.length", analyzedFiles.length)
          resolveContainer(analyzedFiles) //resolving containerResult Promise
        } else {
          console.log("Not resolving Container")
        }

      })
    } catch (errContainer) {
      console.log("rejectContainer with error:", errContainer)
      rejectContainer(errContainer) //rejecting containerResult Promise
    }
  }).then((containerResult) => {
    console.log("containerResult.length:", containerResult.length)
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
  })

  console.log("filteredDocs.length", filteredDocs.length)


  const checkIfConversionNeeded = (fileObjArr) => {
    const names = fileObjArr.map(el => el.filename)
    return names.some(name => (name.includes(".docx") || name.includes(".doc")))
  }

  if (checkIfConversionNeeded(filteredDocs)) {
    let convertedDocs = []
    conversionFinished = false

    //console.log("\n\n filteredDocs prima del ciclo for:", filteredDocs.map(el => ({ ...el, content: "removed" })))

    for (let x = 0; x < filteredDocs.length; x++) {
      //console.log("\n\n" + (x + 1) + "° cycle of the for \n\n")
      /*
      [CHECKPOINT] Al secondo ciclo del for appare il seguente errore:
      TypeError: Cannot read property 'filename' of undefined
      at libreResult (C:\Users\antin\Desktop\Lavoro\SitiAle\project-privacy\.next\server\pages\api\archive\search.js:289:13)
  
      */

      const d = filteredDocs[x]
      //console.log("At this cycle d is:", d)
      const libreResult = await new Promise((resolveLibre, rejectLibre) => {
        if (d && d.filename) {
          const extend = '.pdf'
          const enterPath = d.fullpath
          const outputPath = d.filename.includes(".docx") ? d.fullpath.split('.docx')[0] + extend : d.fullpath.split('.doc')[0] + extend
          //console.log(`Giving to readFileSync this enterpath: ${enterPath}`)
          const file = fs.readFileSync(enterPath)
          libre.convert(file, extend, undefined, async (err, done) => {
            if (err) {
              //console.log(`\n\n Error converting file: ${err} \n\n`)
              rejectLibre(err)
            } else {
              // writeFileSync funziona, crea veramente il pdf, ma sarebbe troppo pesante farlo ogni volta per tutti i file, quindi mi limito a sfruttare il buffer: done.
              //await fs.writeFileSync(outputPath, done)
              resolveLibre(done)
            }
          })
        } else {
          //console.log("che cazzo succede a filteredDocs[x]? ", filteredDocs[x])
        }
      }).then(libreResult => {
        return libreResult
      })

      let mapResult = {}

      if (libreResult && libreResult.byteLength) {
        //console.log(`We got a buffer for file: ${d.filename}, whose size is: ${libreResult.byteLength}`)
        mapResult = {
          fullpath: d.fullpath,
          filename: d.filename,
          relativepath: d.relativepath,
          linuxpath: d.linuxpath,
          content: d.filename.includes(".docx") ? d.content : "",
          buffer: libreResult
        }
      } else {
        //console.log(`We got no buffer for file: ${d.filename}`)
        mapResult = {
          fullpath: d.fullpath,
          filename: d.filename,
          relativepath: d.relativepath,
          linuxpath: d.linuxpath,
          content: d.filename.includes(".docx") ? d.content : ""
        }
      }
      //console.log(`map returns an object containing this buffer: ${mapResult.buffer}`) //Ok
      const updateConvertedDocs = (convertedArr, originalArr) => {
        //console.log("updateConvertedDocs - when entering the func convertedArr.lenght:", convertedArr.length)
        const resultArr = [...convertedArr, mapResult]
        //console.log("updateConvertedDocs - resultArr.length:", resultArr.length)
        //console.log("updateConvertedDocs - originalArr.length:", originalArr.length)
        if (resultArr.length === originalArr.length) {
          //console.log("setting conversionFinished to true")
          conversionFinished = true
        } else {
          //console.log("conversionFinished is staying false")
        }
        return resultArr
      }
      convertedDocs = await updateConvertedDocs(convertedDocs, filteredDocs)
      //console.log(`convertedDocs.length: ${convertedDocs.length} VS filteredDocs.length: ${filteredDocs.length}`)
    }

    (function forceWait() {
      if (!conversionFinished) {
        console.log("conversionFinished:", conversionFinished)
        setTimeout(forceWait, 1000)
      } else {
        return res.status(200).json({ //Success - Trovato qualcosa per i searchterms immessi, e nessun errore.
          success: true,
          data: { filteredDocs: convertedDocs }
        })
      }
    })()
  }
  return res.status(200).json({ //Success - Trovato qualcosa per i searchterms immessi, e nessun errore.
    success: true,
    data: { filteredDocs: filteredDocs }
  })
}