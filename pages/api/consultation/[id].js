import dbConnect from '../../../utils/dbConnect'
import Consultation from '../../../models/Consultation'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case "GET":
      try {
        const consultation = await Consultation.findById(id)
        if (!consultation) return res.status(400).json({ success: false, error: "No consultation found for that id!" })
        return res.status(200).json({ success: true, data: consultation })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }

    case "PUT":
      try {
        const consultation = await Consultation.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        })
        if (!consultation) return res.status(400).json({ success: false, error: "Failed update of consultation!" })
        return res.status(200).json({ success: true, data: consultation })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }

    case "DELETE":
      try {
        const deletedConsultation = await Consultation.deleteOne({ _id: id })
        if (!deletedConsultation) return res.status(400).json({ success: false, error: "Failed deletion of consultation!" })
        return res.status(200).json({ success: true, data: {} })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }

    default: return res.status(400).json({ success: false, error })
  }
}