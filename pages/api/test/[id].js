import dbConnect from '../../../utils/dbConnect'
import Test from '../../../models/Test'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case "GET":
      try {
        const test = await Test.findById(id)
        if (!test) return res.status(400).json({ success: false, error: "No test found for that id!" })
        res.status(200).json({ success: true, data: test })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break

    case "PUT":
      try {
        const test = await Test.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        })
        if (!test) return res.status(400).json({ success: false, error: "Failed creation of new test!" })
        res.status(200).json({ success: true, data: test })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break

    case "DELETE":
      try {
        const deletedTest = await Test.deleteOne({ _id: id })
        if (!deletedTest) return res.status(400).json({ success: false, error: "Failed deletion of test!" })
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break

    default: res.status(400).json({ success: false, error })
  }
}