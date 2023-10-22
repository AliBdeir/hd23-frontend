// src/quiz_page.jsx
import React, { useState } from 'react';
import QuizCard from './components/QuizCard';

function QuizPage() {
  // An array of quiz data
  const quizData = [
    {
      question: 'Who was the first bdeir?',
      options: ['Mahmoud', 'Ali', 'Abdul', 'Adam'],
      correctans: 'Mahmoud', // correct answer for the question
    },
    {
      question: 'What is the capital of India',
      options: ['New Delhi', 'Bombay', 'Madras', 'Calcutta'],
      correctans: 'New Delhi', // correct answer for the question
    },
    // ... more quiz items with the 'correctans' field
  ];

  // State to hold the user's answers, keyed by question
  const [userAnswers, setUserAnswers] = useState({});

  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  const handleOptionChange = (question, answer) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: answer
    }));
  };

  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      
      <h1 className="text-5xl mb-4">Quiz</h1>
      
      <form onSubmit={(e) => { e.preventDefault(); handleSubmitQuiz(); }}>
        <div className="quiz-section flex flex-col items-center">
          {quizData.map((data, index) => (
            <QuizCard 
              key={index} 
              {...data} 
              userAnswer={userAnswers[data.question]}
              isQuizSubmitted={isQuizSubmitted}
              onOptionChange={handleOptionChange}
            />
          ))}
        </div>
        {!isQuizSubmitted && <button type="submit">Submit Quiz</button>}
      </form>
    </div>
  );
}

export default QuizPage;

