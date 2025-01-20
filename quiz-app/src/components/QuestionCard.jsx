import React from "react";

function QuestionCard({ question, onAnswer }) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      {question.choices.map((choice, index) => (
        <button key={index} onClick={() => onAnswer(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;
