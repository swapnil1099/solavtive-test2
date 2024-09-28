import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./result.css";
import { Below50 } from "./below50/Below50";
const Result = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const correct = id.match(/correct:(\d+)/)[1];
  const wrong = id.match(/wrong:(\d+)/)[1];
  const unanswered = id.match(/unanswered:(\d+)/)[1];
  const totalQuestions = id.match(/total:(\d+)/)[1];

  const scorePercentage = Math.round((correct / totalQuestions) * 100);
  console.log(scorePercentage);
  const getResultMessage = (score) => {
    if (score >= 80) return "Great job!";
    if (score >= 50) return "Good effort!";
    return "You can do better!";
  };
  return (
    <>
      {scorePercentage > 50 ? (
        <div className="result-container">
          <div className="result-header">
            <div className="check-mark">
              <span>&#10004;</span> {/* This is a green checkmark */}
            </div>
            <h2>CONGRATULATIONS</h2>
            <p>You successfully completed the Quiz and hold</p>
          </div>

          <div className="score-section">
            <h3>Your Score</h3>
            <h1 className="score-percentage">{scorePercentage}%</h1>
            <p className="result-message">
              {getResultMessage(scorePercentage)}
            </p>
          </div>

          <div className="result-summary">
            <p>Out of {totalQuestions} questions</p>
            <p>
              <span className="correct-count">{correct} Correct</span>
              <span className="incorrect-count">{wrong} Incorrect</span>
              <span className="unanswered-count">
                {unanswered} Not answered
              </span>
            </p>
          </div>

          <button className="retake-button" onClick={() => navigate("/")}>
            Retake Quiz
          </button>
        </div>
      ) : (
        <Below50
          correct={correct}
          wrong={wrong}
          unanswered={unanswered}
          scorePercentage={scorePercentage}
        />
      )}
    </>
  );
};

export default Result;
