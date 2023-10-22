import { Paper, Button, IconButton } from "@mui/material";
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./index.css";
import Flashcard from "../../components/FlashCard";

function FlashcardPage() {
  const [cardIndex, setCardIndex] = useState(1);

  const cardData = [
    { title: "Adam B", description: "moslem" },
    { title: "Card 2", description: "Description 2" },
    { title: "Adam B", description: "moslem" },
    { title: "Card 2", description: "Description 2" },
    { title: "Adam B", description: "moslem" },
    { title: "Card 2", description: "Description 2" },
    { title: "Adam B", description: "moslem" },
    { title: "Card 2", description: "Description 2" },
    { title: "Adam B", description: "moslem" },
    { title: "Card 2", description: "Description 2" },
    { title: "Adam B", description: "moslem" },
    { title: "Card 2", description: "Description 2" },
    { title: "Adam B", description: "moslem" },
    { title: "Card 2", description: "Description 2" },
  ];

  return (
    <div className="flex flex-col justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">Here are your flash cards!</h1>
      <div className="flex justify-center items-center">
        {/* Map through the cardData array to create an ActionAreaCard for each item */}
        <IconButton
          onClick={() => {
            if (cardIndex < cardData.length - 1) setCardIndex(cardIndex + 1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Flashcard title={cardData[cardIndex].title} description={cardData[cardIndex].description} />

        <IconButton
          onClick={() => {
            if (cardIndex < cardData.length - 1) setCardIndex(cardIndex + 1);
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default FlashcardPage;
