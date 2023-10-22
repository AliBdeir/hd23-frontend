// Flashcard.js
import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import "./index.css"; // Ensure this path is correct

type FlashcardProps = {
  title: string;
  description: string;
};

const Flashcard = ({ title, description }: FlashcardProps) => {
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
  const cardClass = isFlipping ? "card-style card-flipping" : "card-style";

  return (
    <div className="flashcard-container">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={handleFlip} className={cardClass}>
          <Card>
            <CardContent>
              <div className="card-content">
                <Typography variant="h5" component="div">
                  {title}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>

        <div onClick={handleFlip} className={cardClass}>
          <Card>
            <CardContent>
              <div className="card-content">
                <Typography variant="body2">{description}</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Flashcard;
