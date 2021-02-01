import dbConnect from '../../../utils/dbConnect'
import ArticleTopics from '../../../models/ArticleTopics'
import { whichToUpdate } from '../../../utils/dbFunctions'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method,
    body
  } = req

  let targetTopic = await ArticleTopics.findOne({ id: id })
  if (!targetTopic) return res.status(400).json({ success: false, error: "No topic found for that id!" })

  switch (method) {
    case "GET":
      try {
        return res.status(200).json({ success: true, data: targetTopic })
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

    case "PUT":
      try {
        const updatedTopic = whichToUpdate(body, targetTopic)
        targetTopic = updatedTopic
        await targetTopic.save()
        return res.status(200).json({ success: true, data: articleTopics })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed update of existing article topic!" })
      }

    case "DELETE":
      try {
        await ArticleTopics.deleteOne({ _id: targetTopic.id })
        await targetTopic.save()
        return res.status(200).json({ success: true, data: {} })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed deletion of article!" })
      }

    default: res.status(400).json({ success: false, error })
  }
}