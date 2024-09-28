import React, { useState } from "react";
import "./Header.css";
import Popup from "../../model/Popup";
import { UserName } from "../userName/UserName";
import { QuestionsContainer } from "../questionsContainer/QuestionsContainer";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <h1 className="quiz-title">
          <span className="quiz-logo">QUIZ</span>
          <span className="quiz-highlight">Mania</span>
        </h1>
      </header>
      <main className="quiz-content">
        <h2 className="quiz-welcome">
          Welcome to <span className="quiz-highlight">QUIZMania</span>
        </h2>
        <div className="quiz-rules">
          <p>Please read all the rules about this quiz before you start.</p>
          <p  className="quiz-rules-link" onClick={openPopup}>
            Quiz rules
          </p>
        </div>
        <UserName/>
        <QuestionsContainer/>

      </main>

      {isOpen && <Popup setIsOpen={setIsOpen}/>}
    </div>
  );
};
