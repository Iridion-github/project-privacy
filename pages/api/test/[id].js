import dbConnect from '../../../utils/dbConnect'
import Test from '../../../models/Test'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method,
    body
  } = req

  let targetTest = await Test.findOne({ id: id })
  if (!targetTest) return res.status(400).json({ success: false, error: "No test found for that id!" })

  switch (method) {
    case "GET":
      try {
        return res.status(200).json({ success: true, data: targetTest })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }

    case "PUT":
      try {
        const updatedTest = whichToUpdate(body, targetTest)
        targetTest = updatedTest
        await targetTest.save()
        return res.status(200).json({ success: true, data: updatedTest })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed update of existing test!" })
      }

    case "DELETE":
      try {
        await Test.deleteOne({ _id: targetTest.id })
        await targetTest.save()
        return res.status(200).json({ success: true, data: {} })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed deletion of test!" })
      }

    default: res.status(400).json({ success: false, error })
  }
}