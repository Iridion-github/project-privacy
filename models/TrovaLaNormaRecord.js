import mongoose from "mongoose";

const TrovaLaNormaRecordSchema = new mongoose.Schema({
  terminiDiRiferimento: {
    type: String,
    required: [true, "terminiDiRiferimento is required!"],
    unique: false,
    trim: true,
    maxlength: [300, "terminiDiRiferimento max length is 100!"],
  },
  GDPR: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: [50, "GDPR max length is 100!"],
  },
  decretoLegislativo: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: [50, "decretoLegislativo max length is 50!"],
  },
  altreNorme: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: [50, "altreNorme max length is 50!"],
  },
});

export default mongoose.models.Trovalanormarecord || mongoose.model("Trovalanormarecord", TrovaLaNormaRecordSchema);
