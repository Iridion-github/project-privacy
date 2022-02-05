import dbConnect from "../../../utils/dbConnect";
import Test from "../../../models/Test";
import TestQuestion from "../../../models/TestQuestion";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const quizzes = await Test.find({});
        const questions = await TestQuestion.find({});
        res.status(200).json({ success: true, data: { quizzes, questions } });
      } catch (err) {
        res.status(400).json({ success: false, error: err });
      }
      break;
    case "POST":
      try {
        const quiz = await Test.create(req.body);
        res.status(201).json({ success: true, data: quiz });
      } catch (err) {
        res.status(400).json({ success: false, error: err });
      }
      break;
    default:
      res.status(400).json({ success: false, error: "Unexpected case!" });
  }
};
