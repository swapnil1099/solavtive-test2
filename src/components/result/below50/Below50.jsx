import React from "react";
import "./below.css";
import { useNavigate } from "react-router-dom";

export const Below50 = ({ correct, wrong, unanswered, scorePercentage }) => {
  const navigate = useNavigate();
  return (
    <div className="quiz-container">
      <div className="emoji">
        <span>😕</span>
      </div>
      <div className="message">
        <h2>You successfully completed the Quiz but you need to</h2>
        <h1>KEEP PRACTICING!</h1>
      </div>
      <div className="score">
        <h1>Your Score</h1>
        <h2>{scorePercentage}%</h2>
      </div>
      <div className="quiz-details">
        <p>Out of 9 questions</p>
        <div className="result-summary">
          <p>
            <span className="correct">{correct}</span> Correct
          </p>
          <p>
            <span className="incorrect"> {wrong}</span> Incorrect
          </p>
          <p>
            <span className="not-answered">{unanswered}</span> Not answered
          </p>
        </div>
      </div>
      <button className="retake-button" onClick={() => navigate("/")}>
        Retake Quiz
      </button>
    </div>
  );
};
