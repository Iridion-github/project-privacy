import mongoose from "mongoose";

const DizionarioRecordSchema = new mongoose.Schema({
  ita: {
    type: String,
    required: [true, "Italian sentence is required!"],
    unique: false,
    trim: true,
    maxlength: [100, "Italian sentence max length is 100!"],
  },
  eng: {
    type: String,
    required: [true, "English sentence is required!"],
    unique: false,
    trim: true,
    maxlength: [100, "English sentence max length is 100!"],
  },
  ref: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: [50, "ref max length is 50!"],
  },
});

export default mongoose.models.Dizionariorecord || mongoose.model("Dizionariorecord", DizionarioRecordSchema);
