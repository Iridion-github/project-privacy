import dbConnect from "../../../utils/dbConnect";
import Trovalanormarecord from "../../../models/TrovaLaNormaRecord";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const normarecord = await Trovalanormarecord.find({});
        res.status(200).json({ success: true, data: normarecord });
      } catch (err) {
        res.status(400).json({ success: false, error: err });
      }
      break;
    case "POST":
      try {
        const normarecord = await Trovalanormarecord.create(req.body);
        res.status(201).json({ success: true, data: normarecord });
      } catch (err) {
        res.status(400).json({ success: false, error: err });
      }
      break;
    default:
      res.status(400).json({ success: false, error: "Unexpected case!" });
  }
};
