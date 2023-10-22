// src/quiz_page.jsx
import { Button, Typography } from "@mui/material";
import { useState } from "react";

import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import QuizCard from "../../components/QuizCard";
import { MCQuestion } from "./types";
import { ProgressCircle } from "../../components/Progress/progress";
import { useRandomQuote } from "../../hooks/use-random-quote";

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

  const quote = useRandomQuote();

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
            <div className="text-center">
              <div className="w-full text-center flex items-center  justify-center">
                <ProgressCircle />
              </div>
              <Typography className="py-2" variant="h4">
                We're Courseifying you a quiz 🔥...
              </Typography>
              <Typography className="py-2" variant="subtitle1">
                This might take a while; here's some wise words...
              </Typography>
              <Typography className="py-2 italic animate-fadeInOut duration-5000" variant="h3">
                {quote}
              </Typography>
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
