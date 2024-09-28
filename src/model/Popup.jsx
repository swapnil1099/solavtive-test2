import React from "react";
import "./popup.css";
const Popup = ({ setIsOpen }) => {
  console.log(true);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="popup-header">
          <h2>Popup Title</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-body">
          <div className="section">
            <h3 className="section-title">10-Second Timer</h3>
            <ul>
              <li>Each question comes with a 10-second timer.</li>
              <li>
                If you don’t answer within the time limit, the app will
                automatically move to the next question.
              </li>
            </ul>

            <div className="section">
              <h3 className="section-title">Manual Navigation</h3>
              <ul>
                <li>
                  You can navigate to the next question manually before the
                  timer expires.
                </li>
                <li>
                  Use the "Next" button to move ahead if you’re ready before the
                  timer runs out.
                </li>
              </ul>
            </div>

            <div className="section">
              <h3 className="section-title">
                Final Score and Performance Message
              </h3>
              <ul>
                <li>
                  After all questions are answered, your final score will be
                  displayed.
                </li>
                <li>
                  Based on your performance, you will receive a personalized
                  message:
                </li>
                <ul>
                  <li>
                    Great job!: If you score <strong>above 80%</strong>.
                  </li>
                  <li>
                    Well done!: If you score{" "}
                    <strong>between 60% and 80%</strong>.
                  </li>
                  <li>
                    Keep practicing!: If you score <strong>below 60%</strong>.
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="popup-footer">
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
