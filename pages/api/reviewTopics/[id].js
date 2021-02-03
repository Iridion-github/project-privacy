import dbConnect from '../../../utils/dbConnect'
import ReviewTopics from '../../../models/ReviewTopics'
import { whichToUpdate } from '../../../utils/dbFunctions'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method,
    body
  } = req

  let targetTopic = await ReviewTopics.findOne({ id: id })
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
        const updatedReview = whichToUpdate(body, targetReview)
        targetReview = updatedReview
        await targetReview.save()
        return res.status(200).json({ success: true, data: updatedReview })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed update of existing review!" })
      }

    case "PUT":
      try {
        const updatedTopic = whichToUpdate(body, targetTopic)
        targetTopic = updatedTopic
        await targetTopic.save()
        return res.status(200).json({ success: true, data: reviewTopics })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed update of existing review topic!" })
      }

    case "DELETE":
      try {
        await ReviewTopics.deleteOne({ _id: targetTopic.id })
        await targetTopic.save()
        return res.status(200).json({ success: true, data: {} })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed deletion of review!" })
      }

    default: res.status(400).json({ success: false, error })
  }
}