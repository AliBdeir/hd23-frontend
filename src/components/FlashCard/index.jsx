// Flashcard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import ReactCardFlip from 'react-card-flip';
import './index.css'; // Ensure this path is correct

const Flashcard = ({ title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleFlip = () => {
    setIsFlipping(true);
    setIsFlipped(!isFlipped);

    setTimeout(() => {
      setIsFlipping(false);
    }, 600);
  };

  // Determine the class for the card based on the flipping state
  const cardClass = isFlipping ? 'card-style card-flipping' : 'card-style';

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleFlip} className={cardClass}>
        <Card className="card-content">
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div onClick={handleFlip} className={cardClass}>
        <Card className="card-content">
          <CardContent>
            <Typography variant="body2">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </ReactCardFlip>
  );
};

export default Flashcard;
