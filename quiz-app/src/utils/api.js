export const fetchQuizQuestions = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=15");
    const data = await response.json();
    return data.results.map((q) => ({
      question: q.question,
      choices: [q.correct_answer, ...q.incorrect_answers].sort(() => Math.random() - 0.5),
      correct_answer: q.correct_answer,
    }));
  };
  
  
  
  
