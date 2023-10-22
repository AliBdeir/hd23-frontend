// src/QuizCard.jsx
import React from 'react';
import './index.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';


function QuizCard({ question, options, correctans, userAnswer, isQuizSubmitted, onOptionChange }) {
  
  console.log({ question, options, correctans, userAnswer, isQuizSubmitted, onOptionChange })

  // Function to handle option selection, calling the handler passed via props
  const handleOptionChange = (event) => {
    onOptionChange(question, event.target.value); // Pass the question and selected answer up
  };

  const isCorrect = userAnswer === correctans;

  return (
    <Card
      style={{
        width: "500px"
      }}
      className={`quiz-card ${isQuizSubmitted ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
      <Typography variant="h6">{question}</Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Select an option</FormLabel>
        <RadioGroup
          aria-label="radio-options"
          name="radio-options"
        // value={selectedValue}
        // onChange={handleChange}
        >

          {options.map((option, index) => (
            <label key={index} className={isQuizSubmitted && option === correctans ? 'correct-answer' : ''}>
              <FormControlLabel
                type="radio"
                name={`quiz-option-${question}`} // unique name using question
                value={option}
                disabled={isQuizSubmitted}
                checked={userAnswer === option}
                onChange={handleOptionChange} // Use the handler when option changes
                // value="option3"
                control={<Radio />} label={option}
              />

            </label>
          ))}
        </RadioGroup>
      </FormControl>

      {isQuizSubmitted && !isCorrect && <Button className="correct-answer-text">Correct answer: {correctans}</Button>}
    </Card>
  );
}

export default QuizCard;
