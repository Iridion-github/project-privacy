import dbConnect from '../../../utils/dbConnect'
import ReviewTopics from '../../../models/ReviewTopics'

dbConnect()

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const reviewTopics = await ReviewTopics.find()
        res.status(200).json({ success: true, data: reviewTopics })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    case "POST":
      try {
        const glossaryWord = await ReviewTopics.create(req.body)
        res.status(201).json({ success: true, data: glossaryWord })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    default:
      res.status(400).json({ success: false, error: "Unexpected case!" })
  }
}