import mongoose from 'mongoose'

const GlossarywordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required!'],
    unique: true,
    trim: true,
    maxlength: [50, "Name max length is 50!"]
  },
  meaning: {
    type: String,
    required: [true, 'Meaning is required!'],
    maxlength: [300, "Meaning max length is 300!"]
  },
  reference: {
    type: String,
    maxlength: [100, "Reference max length is 300!"]
  }
})

export default mongoose.models.Glossaryword || mongoose.model("Glossaryword", GlossarywordSchema)