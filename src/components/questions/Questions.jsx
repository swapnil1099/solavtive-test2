import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../DB/data";
import "./questions.css";

export const Questions = () => {
  const navigate = useNavigate();

  const param = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [unansweredCount, setUnansweredCount] = useState(0);
  const selectCategory = data.categories.filter(
    (item) => item.name === param.id
  );
  const { questions } = selectCategory[0];
  const [timeLeft, setTimeLeft] = useState(
    questions[currentQuestionIndex].timeLimit
  );
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer); // Cleanup the timer
    } else {
      handleUnanswered();
    }
  }, [timeLeft]);

  // Move to the next question
  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(questions[currentQuestionIndex + 1].timeLimit); // Reset the timer
      setSelectedOption(null);
    } else {
      // Display the final stats or perform any other action you want.
      navigate("/result/"+`correct:${correctCount}wrong:${wrongCount}unanswered:${unansweredCount}total:${9}` );
      console.log(
        `${correctCount}${wrongCount} ${unansweredCount}`
      );
    }
  };

  // Handle unanswered question
  const handleUnanswered = () => {
    setUnansweredCount(unansweredCount + 1); // Increment unanswered count
    moveToNextQuestion();
  };

  // Handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    if (selectedOption) {
      const [letter] = selectedOption.split(". ");
      if (currentQuestion.correctAnswer === letter) {
        setCorrectCount(correctCount + 1); // Increment correct count
      } else {
        setWrongCount(wrongCount + 1); // Increment wrong count
      }
      moveToNextQuestion();
    }
  };

  const handleSkip = () => {
    handleUnanswered();
  };

  return (
    <div>
      <div className="quiz-question-container">
        <h3>{currentQuestion.question}</h3>
        <h1>{timeLeft}</h1>

        {/* Render the options */}
        <div className="quiz-options2">
          {currentQuestion.options.map((option, index) => (
            <label
              key={index}
              className={`option-label ${
                selectedOption === option ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                data-set-ans={selectedOption}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="next-button-container">
        <button
          className={selectedOption ? "selected" : "next-button"}
          disabled={!selectedOption}
          onClick={handleNext}
        >
          Next
        </button>

        <span className="skip-link" onClick={handleSkip}>
          Skip this question
        </span>
      </div>

    </div>
  );
};
