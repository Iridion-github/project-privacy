import mongoose from 'mongoose'

const ConsultationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'id is required!'],
    unique: true,
    trim: true
  },
  img: {
    type: String,
    required: [true, 'previewImg is required!']
  },
  ita: {
    title: {
      type: String,
      required: [true, 'Title (ita) is required!'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Subtitle (ita) is required!'],
      trim: true
    },
    content: {
      type: String,
      required: [true, 'Content (ita) is required!'],
      trim: true
    }
  },
  eng: {
    title: {
      type: String,
      required: [true, 'Title (eng) is required!'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Subtitle (eng) is required!'],
      trim: true
    },
    content: {
      type: String,
      required: [true, 'Content (eng) is required!'],
      trim: true
    }
  },
})

export default mongoose.models.Consultation || mongoose.model("Consultation", ConsultationSchema)