// src/QuizCard.jsx

import React from 'react';
import './qcard.css';


function QuizCard({ question, options }) {
  return (
    <div className="quiz-card">
      <p>{question}</p>
      {options.map((option, index) => (
        <label key={index}>
          <input type="radio" name="quiz-option" value={option} />
          {option}
        </label>
      ))}
    </div>
  );
}

export default QuizCard;
