import dbConnect from '../../../utils/dbConnect'
import Glossaryword from '../../../models/Glossaryword'

dbConnect()

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const glossaryword = await Glossaryword.find({})
        res.status(200).json({ success: true, data: glossaryword })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    case "POST":
      try {
        const glossaryWord = await Glossaryword.create(req.body)
        console.log("\n||||||||||||||||||||||||||||||||||||||||||||||| POST - glossaryWord:", glossaryWord, "\n|||||||||||||||||||||||||||||||||||||||||||||||")
        res.status(201).json({ success: true, data: glossaryWord })
      } catch (err) {
        res.status(400).json({ success: false, error: err })
      }
      break
    default:
      res.status(400).json({ success: false, error: "Unexpected case!" })
  }
}