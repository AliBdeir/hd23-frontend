// src/quiz_page.jsx
import React, { useEffect, useState } from 'react';
import QuizCard from '../../components/QuizCard';
import { Button } from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';
import appConfig from "../../appConfig.js"

import axios from "axios";


function QuizPage() {
  const { sessionId, chapterId } = useParams();
  console.log(sessionId, chapterId)
  const [quizData, setQuizData] = useState(null)

  useEffect(() => {
    const fetchSession = async () => {
        try {
            const response = await axios.get(`${appConfig.baseUrl}/api/Quiz?sessionId=${sessionId}&chapterId=${chapterId}`);
            console.log(response.data)
            setQuizData(response.data)

        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    fetchSession()
}, [])

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
      
      <h1 className="text-5xl font-bold m-4">Quiz</h1>
      
      <form className="flex flex-col items-center"  onSubmit={(e) => { e.preventDefault(); handleSubmitQuiz(); }}>
        <div className="quiz-section flex flex-col items-center">
          {quizData && quizData.map((data, index) => (
            <QuizCard 
              key={index} 
              {...data} 
              userAnswer={userAnswers[data.question]}
              isQuizSubmitted={isQuizSubmitted}
              onOptionChange={handleOptionChange}
            />
          ))}
        </div>
        {!isQuizSubmitted && <Button variant="contained" type="submit">Submit Quiz</Button>}
      </form>
    </div>
  );
}

export default QuizPage;

