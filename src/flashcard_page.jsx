

import { Paper, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';

import { motion, AnimatePresence } from "framer-motion";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Flashcard from './components/FlashCard/index.jsx';

import "./index.css"

function FlashcardPage() {

    const [cardIndex, setCardIndex] = useState(1)

    const cardData = [
        { title: 'Adam B', description: 'moslem', },
        { title: 'Card 2', description: 'Description 2', },
        { title: 'Adam B', description: 'moslem', },
        { title: 'Card 2', description: 'Description 2', },
        { title: 'Adam B', description: 'moslem', },
        { title: 'Card 2', description: 'Description 2', },
        { title: 'Adam B', description: 'moslem', },
        { title: 'Card 2', description: 'Description 2', },
        { title: 'Adam B', description: 'moslem', },
        { title: 'Card 2', description: 'Description 2', },
        { title: 'Adam B', description: 'moslem', },
        { title: 'Card 2', description: 'Description 2', },
        { title: 'Adam B', description: 'moslem', },
        { title: 'Card 2', description: 'Description 2', },
    ];

    return <div
        className="flex"
    >
        {/* Map through the cardData array to create an ActionAreaCard for each item */}
        <IconButton onClick={() => {if (cardIndex < cardData.length - 1) setCardIndex(cardIndex + 1)}}>
            <ArrowBackIcon />
        </IconButton>
        
        <Flashcard
            title={cardData[cardIndex].title}
            description={cardData[cardIndex].description}
        />

        <IconButton onClick={() => {if (cardIndex < cardData.length - 1) setCardIndex(cardIndex + 1)}}>
            <ArrowForwardIcon />
        </IconButton>

    </div>

}

export default FlashcardPage;