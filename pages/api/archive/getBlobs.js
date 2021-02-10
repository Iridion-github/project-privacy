import fs from 'fs'//pacchetto usato per leggere docx files
import Blob from "cross-blob"

// ----------------------------- [Responds with Blobs of pdf] -----------------------------
export default async (req, res) => {
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n -------------------------------------- DIVIDER -------------------------------------- \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
  const pdfObjects = JSON.parse(req.query.pdfObjects)
  console.log("API - pdfObjects:", pdfObjects)
  const blobsArray = []
  const containerResult = await new Promise((resolveContainer, rejectContainer) => {
    try {
      pdfObjects.forEach(async pdf => {
        //singleResult Promise starts pending
        const singleResult = await new Promise((resolveSingle, rejectSingle) => {
          try {
            const pdfBuffer = fs.readFileSync(pdf.fullpath)
            const pdfBlob = new Blob(pdfBuffer)
            console.log("\n\n\n ||||| AT CREATION - blob size:", pdfBlob.size, "\n\n\n")
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
      console.log("\n\n\n ||||| AT resolveContainer - blobsArray:", blobsArray, "\n\n\n")
      resolveContainer(blobsArray)
    } catch (errContainer) {
      rejectContainer(errContainer) //rejecting containerResult Promise
    }
  }).then((containerResult) => {
    console.log("\n\n\n ||||| AT then - containerResult:", containerResult)
    return containerResult
  })
  //containerResult Promise resolved/rejected
  console.log("\n\n\n ||||| AFTER ALL PROMISES RESOLVED - blob size:", containerResult[0].blob.size, "\n\n\n")
  if (containerResult.length > 0) {
    console.log("\n\n\n ||||| AT END OF REQUEST - blob size:", containerResult[0].blob.size, "\n\n\n")
    return res.status(200).send(containerResult)
  } else {
    return res.status(200).json({ //Failure - containerResult è vuoto
      success: false,
      blobs: []
    })
  }
}