import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";
import QuestionCard from "../components/QuestionCard";
import "../styles/QuizPage.scss";
import { fetchQuizQuestions } from "../utils/api";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuizQuestions();
        setQuestions(fetchedQuestions || []);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    getQuestions();
  }, []);

  const handleAnswer = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    navigate("/report", { state: { questions, answers } });
  };

  if (!questions.length) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading questions...</p>
      </div>
    );
  }

  const isAnswered = (index) => answers.hasOwnProperty(index);

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Quiz Time</h1>
        <Timer onTimeUp={handleSubmit} />
      </div>
      <div className="quiz-content">
        <div className="quiz-main">
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswer={(answer) => handleAnswer(currentQuestionIndex, answer)}
          />
          <div className="navigation-buttons">
            <button
              className="nav-button"
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex((index) => index - 1)}
            >
              Previous
            </button>
            <button
              className="nav-button"
              disabled={currentQuestionIndex === questions.length - 1}
              onClick={() => setCurrentQuestionIndex((index) => index + 1)}
            >
              Next
            </button>
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit Quiz
          </button>
        </div>
        <div className="quiz-sidebar">
          <h2>Progress</h2>
          <ul className="progress-tracker">
            {questions.map((_, index) => (
              <li
                key={index}
                className={`progress-item ${
                  isAnswered(index) ? "answered" : "unanswered"
                }`}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
