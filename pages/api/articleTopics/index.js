import dbConnect from '../../../utils/dbConnect'
import ArticleTopics from '../../../models/ArticleTopics'

dbConnect()

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const articleTopics = await ArticleTopics.find()
        res.status(200).json({ success: true, data: articleTopics })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    case "POST":
      try {
        const glossaryWord = await ArticleTopics.create(req.body)
        res.status(201).json({ success: true, data: glossaryWord })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    default:
      res.status(400).json({ success: false, error: "Unexpected case!" })
  }
}