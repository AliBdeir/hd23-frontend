// src/quiz_page.jsx
import { Button } from "@mui/material";
import { useState } from "react";

import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import QuizCard from "../../components/QuizCard";
import { MCQuestion } from "./types";
import { ProgressCircle } from "../../components/Progress/progress";

function QuizPage() {
  const { sessionId, chapterId } = useParams();
  const query = useQuery({
    queryKey: ["quiz", sessionId, chapterId],
    queryFn: () =>
      axios.get<MCQuestion[]>("Quiz", {
        params: {
          sessionId: sessionId,
          chapterId: chapterId,
        },
      }),
  });

  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <h1 className="text-5xl font-bold m-4">Quiz</h1>

      <form
        className="flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitQuiz();
        }}
      >
        <div className="quiz-section flex flex-col items-center">
          {query.isLoading && (
            <div>
              <ProgressCircle />
            </div>
          )}
          {query.data?.data && query.data.data.map((data, index) => <QuizCard key={index} question={data} submitted={isQuizSubmitted} />)}
          {!query.isLoading && !isQuizSubmitted && (
            <Button variant="contained" type="submit" color="secondary">
              Submit Quiz
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default QuizPage;
