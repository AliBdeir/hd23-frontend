import React from 'react';
import Flashcard from './components/FlashCard/index.jsx'; 

function FlashcardPage() {
    
    const cardData = [
        { title: 'Adam B', description: 'moslem',  },
        { title: 'Card 2', description: 'Description 2',  },
        
    ];

    return (
        <div>
            {/* Map through the cardData array to create an ActionAreaCard for each item */}
            {cardData.map((data, index) => {
                console.log(data)
                return <Flashcard
                    key={index}
                    title={data.title}
                    description={data.description}
                />
            })}
        </div>
    );
}

export default FlashcardPage;