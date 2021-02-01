import dbConnect from '../../../utils/dbConnect'
import Glossaryword from '../../../models/Glossaryword'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method,
    body
  } = req

  let targetGlossaryword = await Glossaryword.findOne({ id: id })
  if (!targetGlossaryword) return res.status(400).json({ success: false, error: "No glossary word found for that id!" })

  switch (method) {
    case "GET":
      try {
        return res.status(200).json({ success: true, data: targetGlossaryword })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }

    case "PUT":
      try {
        const updatedGlossaryword = whichToUpdate(body, targetGlossaryword)
        targetGlossaryword = updatedGlossaryword
        await targetGlossaryword.save()
        return res.status(200).json({ success: true, data: updatedGlossaryword })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed update of existing glossary word!" })
      }

    case "DELETE":
      try {
        await Glossaryword.deleteOne({ _id: targetGlossaryword.id })
        await targetGlossaryword.save()
        return res.status(200).json({ success: true, data: {} })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Failed deletion of glossary word!" })
      }

    default: res.status(400).json({ success: false, error })
  }
}