import dbConnect from '../../../utils/dbConnect'
import Article from '../../../models/Article'
import { whichToUpdate } from '../../../utils/dbFunctions'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method,
    body
  } = req

  console.log("API - req:", req)
  console.log("API - res:", res)

  let targetArticle = await Article.findOne({ id: id })
  if (!targetArticle) {
    return res.status(400).json({ success: false, error: "No article found for that id!" })
  }

  switch (method) {
    case "GET":
      try {
        return res.status(200).json({ success: true, data: targetArticle })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }

    case "PUT":
      try {
        const updatedArticle = whichToUpdate(body, targetArticle)
        targetArticle = updatedArticle
        await targetArticle.save()
        return res.status(200).json({ success: true, data: updatedArticle })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed update of existing article!" })
      }

    case "DELETE":
      try {
        await Article.deleteOne({ _id: targetArticle.id })
        await targetArticle.save()
        return res.status(200).json({ success: true, data: {} })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed deletion of article!" })
      }

    default: res.status(400).json({ success: false, error })
  }
}