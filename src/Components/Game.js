import React, { useState, useEffect } from "react";
import Tile from "./Tile";

const Game = ({ picUrls }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const newCards = picUrls.map((url, index) => {
      return {
        id: index,
        url: url,
        state: ""
      };
    });
    setCards(newCards);
  }, [picUrls]);

  useEffect(() => {
    console.log(cards);
    const flippedCards = cards.filter(card => card.state === "flipped");
    console.log(flippedCards);
    // check if there are exactly two actively flipped cards
    if (flippedCards.length === 2) {
      // if they both point to the same url
      if (flippedCards[0].url === flippedCards[1].url) {
        setTimeout(() => {
          flippedCards[0].state = "found";
          flippedCards[1].state = "found";

          setCards(
            cards.map(card => {
              if (card.id === flippedCards[0].id) {
                return flippedCards[0];
              } else if (card.id === flippedCards[1].id) {
                return flippedCards[1];
              }
              return card;
            })
          );
        }, 1000);

        // if they point to different urls
      } else {
        setTimeout(() => {
          setCards(
            cards.map(card => {
              if (
                flippedCards.find(flippedCard => flippedCard.id === card.id)
              ) {
                return {
                  ...card,
                  state: ""
                };
              } else {
                return card;
              }
            })
          );
        }, 2000);
      }
    }
  }, [cards]);

  const handleCardClick = e => {
    console.log(e.currentTarget.id);
    // flip-card div
    const currentTarget = e.currentTarget;

    // find that card from all cards
    const currentCard = cards.find(
      card => card.id === Number(currentTarget.id)
    );

    // if clicked card is not flipped or found
    if (currentCard.state === "") {
      const flippedCards = cards.filter(card => card.state === "flipped");

      // if there are less than 2 actively flipped cards
      if (flippedCards.length < 2) {
        currentCard.state = "flipped";
        setCards(
          cards.map(card => {
            return card.id === currentCard.id ? currentCard : card;
          })
        );
      }
    }
  };

  if (cards.length > 0) {
    return (
      <div className={`game game-size-${cards.length}`}>
        {cards.map(card => {
          return (
            <Tile
              key={card.id}
              id={card.id}
              url={card.url}
              cardState={card.state}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Game;
