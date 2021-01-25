import mongoose from 'mongoose'

const TestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required!'],
    unique: true,
    trim: true
  },
  subtitle: {
    type: String,
    required: [true, 'subtitle is required!'],
    unique: true,
    trim: true
  },
  multipleAnswer: {
    type: Boolean,
    required: [true, 'multipleAnswer bool is required!'],
    unique: true
  },
  pointsSystem: {
    type: Boolean,
    required: [true, 'pointsSystem bool is required!'],
    unique: true
  },
  instructions: {
    type: String,
    required: [true, 'instructions are required!'],
    trim: true
  },
  timeLimit: {
    type: Number,
    required: [true, 'timeLimit is required!']
  },
  questions: {
    text: {
      type: String,
      required: [true, 'question text is required!'],
      trim: true
    },
    answers: [
      {
        text: {
          type: String,
          required: [true, 'question answer text is required!'],
          trim: true
        },
        selected: {
          type: Boolean,
          required: [true, 'question answer selected is required!']
        },
        value: {
          type: Boolean,
          required: [true, 'question answer value is required!']
        },
        points: {
          type: Number,
          required: [true, 'question answer points are required!']
        }
      }
    ]
  }
})

export default mongoose.models.Test || mongoose.model("Test", TestSchema)