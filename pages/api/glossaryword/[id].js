import dbConnect from '../../../utils/dbConnect'
import Glossaryword from '../../../models/Glossaryword'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case "GET":
      try {
        const glossaryword = await Glossaryword.findById(id)
        if (!glossaryword) return res.status(400).json({ success: false, error: "No glossary word found for that id!" })
        res.status(200).json({ success: true, data: glossaryword })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break

    case "PUT":
      try {
        const glossaryword = await Glossaryword.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        })
        if (!glossaryword) return res.status(400).json({ success: false, error: "Failed creation of new glossary word!" })
        res.status(200).json({ success: true, data: glossaryword })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break

    case "DELETE":
      try {
        const deletedGlossaryword = await Glossaryword.deleteOne({ _id: id })

        const glossaryword = await Glossaryword.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        })

        if (!deletedGlossaryword) return res.status(400).json({ success: false, error: "Failed deletion of new glossary word!" })
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break

    default: res.status(400).json({ success: false, error })



  }
}