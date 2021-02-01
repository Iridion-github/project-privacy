import dbConnect from '../../../utils/dbConnect'
import Article from '../../../models/Article'

dbConnect()

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const articles = await Article.find({})
        const orderedArticles = articles.sort((a, b) => {
          return new Date(a.date) - new Date(b.date)
        })

        return res.status(200).json({ success: true, data: orderedArticles })
      } catch (err) {
        return res.status(400).json({ success: false, error: err })
      }

    case "POST":
      try {
        const article = await Article.create(req.body)
        return res.status(201).json({ success: true, data: article })
      } catch (err) {
        return res.status(400).json({ success: false, error: err })
      }

    default:
      return res.status(400).json({ success: false, error: "Unexpected case!" })
  }
}