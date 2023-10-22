import { Paper, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./index.css";
import Flashcard from "../../components/FlashCard";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FlashcardType } from "./types";
import axios from "axios";
import { ProgressCircle } from "../../components/Progress/progress";

function FlashcardPage() {
  const [cardIndex, setCardIndex] = useState(0);
  const { sessionId, chapterId } = useParams();
  const flashCards = useQuery({
    queryKey: ["flash-cards"],
    queryFn: () =>
      axios.get<FlashcardType[]>("Flashcards", {
        params: {
          sessionId: sessionId,
          chapterId: chapterId,
        },
      }),
  });
  const maxElements = flashCards.data?.data?.length ?? 0;
  const noMoreRight = cardIndex === maxElements - 1;
  const noMoreLeft = cardIndex === 0;
  return (
    <div className="flex flex-col justify-center h-screen">
      <Typography variant="h2" className="text-center py-8">
        Flashcards
      </Typography>
      <div className="flex justify-center items-center">
        {flashCards.isLoading ? (
          <ProgressCircle />
        ) : (
          <div className="flex flex-row gap-4 items-center justify-center">
            <div>
              <IconButton
                onClick={() => {
                  if (!noMoreLeft) setCardIndex(cardIndex - 1);
                }}
                className="scale-150 px-8"
                disabled={noMoreLeft}
              >
                <ArrowBackIcon />
              </IconButton>
            </div>

            <Flashcard
              title={flashCards.data?.data[cardIndex]?.title ?? "Something went wrong"}
              description={flashCards.data?.data[cardIndex]?.description ?? "Something went wrong"}
            />

            <div>
              <IconButton
                disabled={noMoreRight}
                onClick={() => {
                  if (!noMoreRight) setCardIndex(cardIndex + 1);
                }}
                className="scale-150 px-8"
              >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlashcardPage;
