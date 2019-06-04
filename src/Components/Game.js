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

  // if there are 2 flipped cards and they are different
  useEffect(() => {
    const flippedCards = cards.filter(card => card.state === "flipped");
    if (flippedCards.length >= 2) {
      setTimeout(() => {
        setCards(
          cards.map(card => {
            if (flippedCards.find(flippedCard => flippedCard.id === card.id)) {
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
  }, [cards]);

  const handleCardClick = e => {
    console.log(e.currentTarget.id);
    // flip-card div
    const currentTarget = e.currentTarget;

    // find that card from all cards
    const currentCard = cards.find(
      card => card.id === Number(currentTarget.id)
    );

    // if clicked card is not flipped
    if (currentCard.state === "") {
      const flippedCards = cards.filter(card => card.state === "flipped");

      // if there are less than 2 actively flipped cards
      if (flippedCards.length < 2) {
        // if there are no active flipped cards
        if (flippedCards.length === 0) {
          currentCard.state = "flipped";
          setCards(
            cards.map(card => {
              return card.id === currentCard.id ? currentCard : card;
            })
          );

          // if there is another flipped card then compare it with currently clicked card
        } else if (flippedCards.length === 1) {
          currentCard.state = "flipped";
          // if they point to the same url
          if (flippedCards[0].url === currentCard.url) {
            flippedCards[0].state = "found";
            currentCard.state = "found";
            setCards(
              cards.map(card => {
                if (card.id === flippedCards[0].id) {
                  return flippedCards[0];
                } else if (card.id === currentCard.id) {
                  return currentCard;
                }
                return card;
              })
            );
            // if they are different
          } else {
            setCards(
              cards.map(card => {
                return card.id === currentCard.id ? currentCard : card;
              })
            );
          }
        }
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
