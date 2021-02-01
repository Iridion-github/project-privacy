import dbConnect from '../../../utils/dbConnect'
import Consultation from '../../../models/Consultation'
import { whichToUpdate } from '../../../utils/dbFunctions'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method,
    body
  } = req

  let targetConsult = await Consultation.findOne({ id: id })
  if (!targetConsult) return res.status(400).json({ success: false, error: "No consultation found for that id!" })

  switch (method) {
    case "GET":
      try {
        return res.status(200).json({ success: true, data: consultation })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }

    case "PUT":
      try {
        const updatedConsult = whichToUpdate(body, targetConsult)
        targetConsult = updatedConsult
        await targetConsult.save()
        return res.status(200).json({ success: true, data: updatedConsult })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed update of existing consultation!" })
      }

    case "DELETE":
      try {
        await Consultation.deleteOne({ _id: targetConsult.id })
        await targetConsult.save()
        return res.status(200).json({ success: true, data: {} })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed deletion of existing consultation!" })
      }

    default: return res.status(400).json({ success: false, error })
  }
}