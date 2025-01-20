import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StartPage.scss";

const StartPage = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
  
    const handleStartQuiz = () => {
      if (!email) {
        alert("Please enter your email to continue!");
        return;
      }
      navigate("/quiz");
    };
  
    return (
      <div className="animated-container">
        <div className="animated-background">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
        <div className="glass-card">
          <div className="card-header">
            <h1 className="title">Welcome to the Quiz App</h1>
            <p className="subtitle">Test your knowledge and have fun!</p>
          </div>
          <div className="card-content">
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
              <button onClick={handleStartQuiz} className="start-button">
                Start Quiz
                <span className="button-shine"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default StartPage;
