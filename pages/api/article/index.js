import dbConnect from '../../../utils/dbConnect'
import Article from '../../../models/Article'

dbConnect()

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const articles = await Article.find({})

        console.log("data str:", articles[0].date)
        console.log("data str:", new Date(articles[0].date))

        const orderedArticles = articles.sort((a, b) => {
          return new Date(a.date) - new Date(b.date)
        })

        res.status(200).json({ success: true, data: orderedArticles })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    case "POST":
      try {
        const article = await Article.create(req.body)
        res.status(201).json({ success: true, data: article })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    default:
      res.status(400).json({ success: false, error: "Unexpected case!" })
  }
}