import React from "react";
import { useState } from "react";
import "./questionsContainer.css";
import data from "../../DB/data";
import { useNavigate } from "react-router-dom";
export const QuestionsContainer = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedTopic) {
      navigate(`/questions/${selectedTopic}`);
    } else {
      alert("Please select a topic to continue.");
    }
  };
  return (
    <div className="quiz-container">
      <form onSubmit={handleSubmit}>
        <p className="quiz-label">Please select topic to continue</p>

        <div className="quiz-options">
          {data.categories.map((category) => (
            <label
              key={category.id}
              className={`quiz-option ${
                selectedTopic === category.name ? "active" : ""
              }`}
            >
              <input
                type="radio"
                value={category.name}
                checked={selectedTopic === category.name}
                onChange={handleChange}
              />
              {category.name}
            </label>
          ))}
        </div>

        <button type="submit" className="start-quiz-btn">
          Start Quiz
        </button>
      </form>
    </div>
  );
};
