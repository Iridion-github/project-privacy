import mongoose from 'mongoose'

const ArticleTopicsSchema = new mongoose.Schema(
  {
    name: {
      type: Object,
      ita: {
        type: String,
        required: [true, 'articleTopic name ita is required!'],
        unique: true,
        trim: true,
        maxlength: [30, "articleTopic name ita max length is 30!"]
      },
      eng: {
        type: String,
        required: [true, 'articleTopic name eng is required!'],
        unique: true,
        trim: true,
        maxlength: [30, "articleTopic name eng max length is 30!"]
      }
    }
  }
)

export default mongoose.models.ArticleTopics || mongoose.model("ArticleTopics", ArticleTopicsSchema)