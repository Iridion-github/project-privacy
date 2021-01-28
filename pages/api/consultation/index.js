import dbConnect from '../../../utils/dbConnect'
import Consultation from '../../../models/Consultation'

dbConnect()

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const consultation = await Consultation.find({})
        res.status(200).json({ success: true, data: consultation })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    case "POST":
      try {
        const consultation = await Consultation.create(req.body)
        res.status(201).json({ success: true, data: consultation })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    default:
      res.status(400).json({ success: false, error: "Unexpected case!" })
  }
}