import dbConnect from "../../../utils/dbConnect";
import Trovalanormarecord from "../../../models/TrovaLaNormaRecord";

dbConnect();

export default async (req, res) => {
  try {
    const {
      query: { searchterms },
      method,
      body,
    } = req;
    const targetNormarecordsTerminiDiRiferimento = await Trovalanormarecord.find({ terminiDiRiferimento: { $regex: searchterms, $options: "i" } }, function (err, docs) {});
    const targetNormarecordsGDPR = await Trovalanormarecord.find({ GDPR: { $regex: searchterms, $options: "i" } }, function (err, docs) {});
    const targetNormarecordsDecretoLegislativo = await Trovalanormarecord.find({ decretoLegislativo: { $regex: searchterms, $options: "i" } }, function (err, docs) {});
    const targetNormarecordsAltreNorme = await Trovalanormarecord.find({ altreNorme: { $regex: searchterms, $options: "i" } }, function (err, docs) {});
    const targetNormarecordsAll = [...targetNormarecordsTerminiDiRiferimento, ...targetNormarecordsGDPR, ...targetNormarecordsDecretoLegislativo, ...targetNormarecordsAltreNorme];

    if (!targetNormarecordsAll.length) {
      return res.status(400).json({ success: false, error: "No norm found including search values!" });
    }

    switch (method) {
      case "GET":
        try {
          return res.status(200).json({ success: true, data: targetNormarecordsAll });
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
