// src/quiz_page.jsx

import React from 'react';
import QuizCard from './components/QuizCard';

function QuizPage() {
  const data = {
    question: 'Who was the first bdeir?',
    options: ['Mahmoud', 'Ali', 'Abdul', 'Adam'],
  };

  return (
    <div className="QuizPage">
      <h1>Quiz</h1>
      <div className="quiz-section">
        {Array(6).fill(null).map((_, index) => (
          <QuizCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default QuizPage;
