import mongoose from "mongoose";

const TestQuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "question text is required!"],
    trim: true,
  },
  relatedTests: [
    {
      type: String,
      required: [true, "at least one relatedTest is required!"],
    },
  ],
  answers: [
    {
      text: {
        type: String,
        required: [true, "question answer text is required!"],
        trim: true,
      },
      selected: {
        type: Boolean,
        required: [true, "question answer selected is required!"],
      },
      value: {
        type: Boolean,
        required: [true, "question answer value is required!"],
      },
      points: {
        type: Number,
        required: [true, "question answer points are required!"],
      },
    },
  ],
});

export default mongoose.models.TestQuestion || mongoose.model("TestQuestion", TestQuestionSchema);
