import dbConnect from '../../../utils/dbConnect'
import Review from '../../../models/Review'

dbConnect()

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const reviews = await Review.find({})
        const orderedReviews = reviews.sort((a, b) => {
          return new Date(a.date) - new Date(b.date)
        })

        res.status(200).json({ success: true, data: orderedReviews })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    case "POST":
      try {
        const review = await Review.create(req.body)
        res.status(201).json({ success: true, data: review })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    default:
      res.status(400).json({ success: false, error: "Unexpected case!" })
  }
}