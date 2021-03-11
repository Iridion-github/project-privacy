import fs from 'fs'//pacchetto usato per leggere docx files
import Blob from "cross-blob"

// ----------------------------- [Responds with Blobs of pdf] -----------------------------
export default async (req, res) => {
  const pdfObjects = JSON.parse(req.query.pdfObjects)
  const blobsArray = []
  const containerResult = await new Promise((resolveContainer, rejectContainer) => {
    try {
      pdfObjects.forEach(async pdf => {
        //singleResult Promise starts pending
        const singleResult = await new Promise((resolveSingle, rejectSingle) => {
          try {
            const pdfBuffer = fs.readFileSync(pdf.fullpath)
            const pdfBlob = new Blob(pdfBuffer)
            const getPdfBlob = async () => {
              return resolveSingle({ //resolving singleResult Promise
                fullpath: pdf.fullpath,
                filename: pdf.filename,
                blob: pdfBlob
              })
            }
            getPdfBlob()
          } catch (err) {
            rejectSingle(err)
          }
        }).then(singleResult => {
          return singleResult
        })
        await blobsArray.push(singleResult)
      })
      resolveContainer(blobsArray)
    } catch (errContainer) {
      rejectContainer(errContainer) //rejecting containerResult Promise
    }
  }).then((containerResult) => {
    return containerResult
  })
  //containerResult Promise resolved/rejected
  if (containerResult.length > 0) {
    return res.status(200).send(containerResult)
  } else {
    return res.status(200).json({ //Failure - containerResult è vuoto
      success: false,
      blobs: []
    })
  }
}