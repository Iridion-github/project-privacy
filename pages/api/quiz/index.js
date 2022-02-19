import dbConnect from "../../../utils/dbConnect";
import Test from "../../../models/Test";
import TestQuestion from "../../../models/TestQuestion";

dbConnect();

export default async (req, res) => {
  const { method, query } = req;
  switch (method) {
    case "GET":
      try {
        const freeQuizzes = await Test.find({ premium: false });
        const premiumQuizzesNoQuestions = await Test.find({ premium: true });
        const premiumQuizzesWithQuestions = [...premiumQuizzesNoQuestions];
        const alreadyUsedQuestions = query.excludedIds ? JSON.parse(query.excludedIds) : [];
        let shouldResetAlreadyUsedQuestions = false;
        console.log("---------------------- alreadyUsedQuestions", alreadyUsedQuestions);
        for (let i = 0; i < premiumQuizzesWithQuestions.length; i++) {
          const currentQuizId = premiumQuizzesWithQuestions[i]._id;
          const allPossibleQuestions = await TestQuestion.find({ relatedTests: currentQuizId });
          let idRelatedQuestions = allPossibleQuestions.filter(q => {
            const pertinentQuestion = q.relatedTests.includes(currentQuizId);
            const unusedQuestion = !alreadyUsedQuestions.includes(currentQuizId);
            return pertinentQuestion && unusedQuestion;
          });
          if (idRelatedQuestions.length < 5) {
            shouldResetAlreadyUsedQuestions = true;
            idRelatedQuestions = allPossibleQuestions.filter(q => q.relatedTests.includes(currentQuizId));
          }
          //[memo] rimuovere quelle presenti nella storage
          const idRelatedQuestionsNumber = idRelatedQuestions.length;
          const selectedQuestions = [];
          const alreadyUsedIndexes = [];
          for (let x = 0; x < 5; x++) {
            let randomQuestionIndex;
            randomQuestionIndex = Math.floor(Math.random() * idRelatedQuestionsNumber);
            while (alreadyUsedIndexes.includes(randomQuestionIndex)) {
              randomQuestionIndex = Math.floor(Math.random() * idRelatedQuestionsNumber);
            }
            alreadyUsedIndexes.push(randomQuestionIndex);
            selectedQuestions.push(idRelatedQuestions[randomQuestionIndex]);
          }
          premiumQuizzesWithQuestions[i].questions = selectedQuestions;
        }
        const allQuizzes = [...freeQuizzes, ...premiumQuizzesWithQuestions];
        res.status(200).json({ success: true, quizzes: allQuizzes, shouldResetAlreadyUsedQuestions });
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
