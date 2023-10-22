import React from 'react';
// Import your custom component
import ActionAreaCard from './components/flashcard.jsx'; // Adjust the import path to where your component is defined

function FlashcardPage() {
    // This could also be dynamic data fetched from an API or passed as props
    const cardData = [
        { title: 'Adam B', description: 'moslem', /* other data fields */ },
        { title: 'Card 2', description: 'Description 2', /* other data fields */ },
        // ... more cards
    ];

    return (
        <div>
            {/* Map through the cardData array to create an ActionAreaCard for each item */}
            {cardData.map((data, index) => {
                console.log(data)
                return <ActionAreaCard
                    key={index}
                    title={data.title}
                    description={data.description}
                // ... other props
                />
            })}
        </div>
    );
}

export default FlashcardPage;