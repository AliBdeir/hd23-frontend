// src/QuizCard.jsx
import React, { useState } from "react";
import "./index.css";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { MCOption, MCQuestion } from "../../pages/QuizPage/types";

type QuizCardProps = {
  question: MCQuestion;
  submitted: boolean;
};

function QuizCard({ question, submitted }: QuizCardProps) {
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  // Function to handle option selection, calling the handler passed via props
  const handleOptionChange = (event: React.SyntheticEvent<Element, Event>, _: boolean) => {
    setUserAnswer((event as React.ChangeEvent<HTMLInputElement>).target.value); // Pass the question and selected answer up
  };

  const isCorrect = userAnswer === question.correctChoiceId;

  return (
    <Card
      style={{
        width: "500px",
      }}
      className={`quiz-card ${submitted ? (isCorrect ? "correct" : "incorrect") : ""}`}
    >
      <Typography variant="h6">{question.question}</Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Select an option</FormLabel>
        <RadioGroup
          aria-label="radio-options"
          name="radio-options"
          // value={selectedValue}
          // onChange={handleChange}
        >
          {question.options.map((option, index) => (
            <label key={index} className={submitted && isCorrect ? "correct-answer" : ""}>
              <FormControlLabel
                value={option.choiceId}
                disabled={submitted}
                checked={userAnswer === option.choiceId}
                onChange={handleOptionChange} // Use the handler when option changes
                control={<Radio />}
                label={option.text}
              />
            </label>
          ))}
        </RadioGroup>
      </FormControl>

      {submitted && !isCorrect && <Button className="correct-answer-text">Correct answer: {question.correctChoiceId}</Button>}
    </Card>
  );
}

export default QuizCard;
