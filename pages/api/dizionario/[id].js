import dbConnect from "../../../utils/dbConnect";
import Dizionariorecord from "../../../models/DizionarioRecord";

dbConnect();

export default async (req, res) => {
  try {
    const {
      query: { searchterms },
      method,
      body,
    } = req;
    const targetDizionariorecordsIta = await Dizionariorecord.find({ ita: { $regex: searchterms, $options: "i" } }, function (err, docs) {});
    const targetDizionariorecordsEng = await Dizionariorecord.find({ eng: { $regex: searchterms, $options: "i" } }, function (err, docs) {});
    const targetDizionariorecordsAll = [...targetDizionariorecordsIta, ...targetDizionariorecordsEng];

    if (!targetDizionariorecordsAll.length) return res.status(400).json({ success: false, error: "No dictionary record found including search values!" });

    switch (method) {
      case "GET":
        try {
          return res.status(200).json({ success: true, data: targetDizionariorecordsAll });
        } catch (error) {
          return res.status(400).json({ success: false, error });
        }

      case "PUT":
        return res.status(400).json({ success: false, error: "PUT not handled for this endpoint" });

      case "DELETE":
        return res.status(400).json({ success: false, error: "DELETE not handled for this endpoint" });

      default:
        res.status(400).json({ success: false, error });
    }
  } catch (err) {
    console.log("Server error:", err);
    return res.status(400).json({ success: false, error: err });
  }
};
