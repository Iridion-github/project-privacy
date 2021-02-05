import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'id is required!'],
    unique: true,
    trim: true
  },
  glossary: {
    type: Array
  },
  date: {
    type: String,
    required: [true, 'Date is required!'],
    trim: true
  },
  authors: {
    type: Array,
    required: [true, 'Author is required!'],
  },
  previewImg: {
    type: String,
    required: [true, 'previewImg is required!']
  },
  images: {
    type: Array
  },
  ita: {
    topic: {
      type: String,
      required: [true, 'Topic is required!'],
      trim: true
    },
    tags: {
      type: Array,
      required: [true, 'At least one ita.tag is required!'],
    },
    title: {
      type: String,
      required: [true, 'Title is required!'],
      trim: true
    },
    subtitle: {
      type: String,
      required: [true, 'Subtitle is required!'],
      trim: true
    },
    content: {
      type: Array
    }
  },
  eng: {
    topic: {
      type: String,
      required: [true, 'Topic is required!'],
      trim: true
    },
    tags: {
      type: Array,
      required: [true, 'At least one eng.tag is required!'],
    },
    title: {
      type: String,
      required: [true, 'Title is required!'],
      trim: true
    },
    subtitle: {
      type: String,
      required: [true, 'Subtitle is required!'],
      trim: true
    },
    content: {
      type: Array
    }
  }
})

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema)