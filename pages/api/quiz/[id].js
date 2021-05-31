import dbConnect from '../../../utils/dbConnect'
import Test from '../../../models/Test'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method,
    body
  } = req

  let targetQuiz = await Test.findOne({ id: id })
  if (!targetQuiz) return res.status(400).json({ success: false, error: "No quiz found for that id!" })

  switch (method) {
    case "GET":
      try {
        return res.status(200).json({ success: true, data: targetQuiz })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }

    case "PUT":
      try {
        const updatedQuiz = whichToUpdate(body, targetQuiz)
        targetQuiz = updatedQuiz
        await targetQuiz.save()
        return res.status(200).json({ success: true, data: updatedQuiz })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed update of existing quiz!" })
      }

    case "DELETE":
      try {
        await Test.deleteOne({ _id: targetQuiz.id })
        await targetQuiz.save()
        return res.status(200).json({ success: true, data: {} })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed deletion of quiz!" })
      }

    default: res.status(400).json({ success: false, error })
  }
}