import dbConnect from '../../../utils/dbConnect'
import Test from '../../../models/Test'

dbConnect()

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const test = await Test.find({})
        res.status(200).json({ success: true, data: test })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    case "POST":
      try {
        const test = await Test.create(req.body)
        res.status(201).json({ success: true, data: test })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    default:
      res.status(400).json({ success: false, error: "Unexpected case!" })
  }
}