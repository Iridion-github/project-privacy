import dbConnect from '../../../utils/dbConnect'
import Review from '../../../models/Review'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method,
    body
  } = req

  let targetReview = await Review.findOne({ id: id })
  if (!targetReview) return res.status(400).json({ success: false, error: "No review found for that id!" })

  switch (method) {
    case "GET":
      try {
        return res.status(200).json({ success: true, data: targetReview })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }

    case "PUT":
      try {
        const updatedReview = whichToUpdate(body, targetReview)
        targetReview = updatedReview
        await targetReview.save()
        return res.status(200).json({ success: true, data: updatedReview })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed update of existing review!" })
      }

    case "DELETE":
      try {
        await Review.deleteOne({ _id: targetReview.id })
        await targetReview.save()
        return res.status(200).json({ success: true, data: {} })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed deletion of review!" })
      }

    default: res.status(400).json({ success: false, error })
  }
}