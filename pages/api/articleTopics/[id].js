import dbConnect from '../../../utils/dbConnect'
import ArticleTopics from '../../../models/ArticleTopics'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case "GET":
      try {
        const articleTopics = await ArticleTopics.findById(id)
        if (!articleTopics) return res.status(400).json({ success: false, error: "No article topic found for that id!" })
        res.status(200).json({ success: true, data: articleTopics })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break

    case "PUT":
      try {
        const articleTopics = await ArticleTopics.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        })
        if (!articleTopics) return res.status(400).json({ success: false, error: "Failed creation of new article topic!" })
        res.status(200).json({ success: true, data: articleTopics })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break

    case "DELETE":
      try {
        const deletedArticleTopics = await ArticleTopics.deleteOne({ _id: id })
        if (!deletedArticleTopics) return res.status(400).json({ success: false, error: "Failed deletion of article topic!" })
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break

    default: res.status(400).json({ success: false, error })
  }
}