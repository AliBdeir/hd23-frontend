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

  return (
    <div style={{ width: "650px", height: "400px" }} onClick={() => setIsFlipped(!isFlipped)}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName="w-full h-full">
        <Card className="w-full h-full flex items-center justify-center text-center">
          <CardContent>
            <Typography variant="h3" className="!font-bold">
              {title}
            </Typography>
          </CardContent>
        </Card>
        <Card className="w-full h-full flex items-center justify-center text-center">
          <CardContent>
            <Typography variant="h6" className="!font-bold">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </ReactCardFlip>
    </div>
  );
};

export default Flashcard;
