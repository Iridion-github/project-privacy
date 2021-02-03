import mongoose from 'mongoose'

const ReviewTopicsSchema = new mongoose.Schema(
  {
    name: {
      type: Object,
      ita: {
        type: String,
        required: [true, 'reviewTopic name ita is required!'],
        unique: true,
        trim: true,
        maxlength: [30, "reviewTopic name ita max length is 30!"]
      },
      eng: {
        type: String,
        required: [true, 'reviewTopic name eng is required!'],
        unique: true,
        trim: true,
        maxlength: [30, "reviewTopic name eng max length is 30!"]
      }
    }
  }
)

export default mongoose.models.ReviewTopics || mongoose.model("ReviewTopics", ReviewTopicsSchema)