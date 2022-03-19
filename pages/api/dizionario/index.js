import dbConnect from "../../../utils/dbConnect";
import DizionarioRecord from "../../../models/DizionarioRecord";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const dizionariorecord = await DizionarioRecord.find({});
        res.status(200).json({ success: true, data: dizionariorecord });
      } catch (err) {
        res.status(400).json({ success: false, error: err });
      }
      break;
    case "POST":
      try {
        const dizionariorecord = await DizionarioRecord.create(req.body);
        res.status(201).json({ success: true, data: dizionariorecord });
      } catch (err) {
        res.status(400).json({ success: false, error: err });
      }
      break;
    default:
      res.status(400).json({ success: false, error: "Unexpected case!" });
  }
};
