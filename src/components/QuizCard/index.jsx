// src/QuizCard.jsx
import React from 'react';
import './qcard.css';

function QuizCard({ question, options, correctans, userAnswer, isQuizSubmitted, onOptionChange }) {
  
  // Function to handle option selection, calling the handler passed via props
  const handleOptionChange = (event) => {
    onOptionChange(question, event.target.value); // Pass the question and selected answer up
  };

  const isCorrect = userAnswer === correctans;

  return (
    <div className={`quiz-card ${isQuizSubmitted ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
      <p>{question}</p>
      {options.map((option, index) => (
        <label key={index} className={isQuizSubmitted && option === correctans ? 'correct-answer' : ''}>
          <input 
            type="radio" 
            name={`quiz-option-${question}`} // unique name using question
            value={option} 
            disabled={isQuizSubmitted}
            checked={userAnswer === option}
            onChange={handleOptionChange} // Use the handler when option changes
          />
          {option}
        </label>
      ))}
      {isQuizSubmitted && !isCorrect && <p className="correct-answer-text">Correct answer: {correctans}</p>}
    </div>
  );
}

export default QuizCard;
