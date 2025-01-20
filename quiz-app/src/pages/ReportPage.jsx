import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ReportPage.scss";

function ReportPage() {
  const { state } = useLocation();
  const { questions, answers } = state || {};
  const navigate = useNavigate();

  if (!questions || !answers) {
    navigate("/");
    return null;
  }

  return (
    <div className="report-page">
      <h1>Quiz Report</h1>
      {questions.map((q, index) => (
        <div key={index} className="report-item">
          <h3>{q.question}</h3>
          <p>Your Answer: {answers[index] || "Not answered"}</p>
          <p>Correct Answer: {q.correct_answer}</p>
        </div>
      ))}
    </div>
  );
}

export default ReportPage;
