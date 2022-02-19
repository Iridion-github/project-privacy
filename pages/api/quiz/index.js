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
        const premiumQuizzesWithQuestions = [...premiumQuizzesNoQuestions];
        for (let i = 0; i < premiumQuizzesWithQuestions.length - 1; i++) {
          const currentQuizId = premiumQuizzesWithQuestions[i]._id;
          const allPossibleQuestions = await TestQuestion.find({ relatedTests: currentQuizId });
          //[Checkpoint] Sistema di aggiunta domande funziona, creare la funzione di randomicità per la scelta
          const idRelatedQuestions = allPossibleQuestions.filter(q => q.relatedTests.includes(currentQuizId));
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
          console.log(`----------- Al test "${premiumQuizzesWithQuestions[i].title}" Assegno queste domande: ${selectedQuestions}`);
          premiumQuizzesWithQuestions[i].questions = selectedQuestions;
        }
        const allQuizzes = [...quizzes, ...premiumQuizzesWithQuestions];
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
