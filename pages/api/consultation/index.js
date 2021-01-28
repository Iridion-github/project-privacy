import dbConnect from '../../../utils/dbConnect'
import Consultation from '../../../models/Consultation'

dbConnect()

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const consultation = await Consultation.find({})
        return res.status(200).json({ success: true, data: consultation })
      } catch (err) {
        return res.status(400).json({ success: false, error: err })
      }
    case "POST":
      try {
        const consultation = await Consultation.create(req.body)
        return res.status(201).json({ success: true, data: consultation })
      } catch (err) {
        return res.status(400).json({ success: false, error: err })
      }
    default:
      return res.status(400).json({ success: false, error: "Unexpected case!" })
  }
}