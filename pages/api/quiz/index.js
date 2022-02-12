import dbConnect from "../../../utils/dbConnect";
import Test from "../../../models/Test";
import TestQuestion from "../../../models/TestQuestion";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const quizzes = await Test.find({ premium: false });
        const premiumQuizzesNoQuestions = await Test.find({ premium: true });
        //[Checkpoint] Sistema di aggiunta domande funziona, creare la funzione di randomicità per la scelta
        // for(let x = 0; x < premiumQuizzes.length - 1; x++){
        //   const currentQuizId = premiumQuizzes[x].id;
        //   const allPossibleQuestions = await TestQuestion.find({ relatedTests: currentQuizId});
        //   const currentQuizQuestions = allPossibleQuestions.slice(0,4);
        // }
        const currentQuizId = premiumQuizzesNoQuestions[0]._id;
        const allPossibleQuestions = await TestQuestion.find({ relatedTests: currentQuizId });
        const currentQuizQuestions = allPossibleQuestions.slice(0, 4);
        const premiumQuizzes = premiumQuizzesNoQuestions.map(q => {
          q.questions = currentQuizQuestions;
          return q;
        });
        const allQuizzes = [...quizzes, ...premiumQuizzes];
        res.status(200).json({ success: true, quizzes: allQuizzes });
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
