import React, { useState, useEffect } from "react";
import ImageServices from "../Services/services";
import Tile from "./Tile";

const Game = ({ selectedGame }) => {
  const [picUrls, setPicUrls] = useState([]);
  const [cards, setCards] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const imageUrls = ImageServices.getAll(selectedGame);
    // console.log(imageUrls);
    setPicUrls(shuffleArray(imageUrls));
  }, [selectedGame]);

  // const baseUrl = "https://picsum.photos/200/200?random=";

  // fetch urls for pictures
  // useEffect(() => {
  //   const newPicUrls = fetchUrls(baseUrl, selectedGame);
  //   setPicUrls(shuffleArray(newPicUrls));
  // }, [selectedGame]);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // const fetchUrls = (url, num) => {
  //   let newPicUrls = [];
  //   for (let i = 0; i < num; i++) {
  //     newPicUrls.push(`${url}${i + 1}`);
  //     newPicUrls.push(`${url}${i + 1}`);
  //   }
  //   return newPicUrls;
  // };

  // create cards from urls
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

  // handle flip
  useEffect(() => {
    const flippedCards = cards.filter(card => card.state === "flipped");

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

  useEffect(() => {
    const foundCards = cards.filter(card => card.state === "found");
    // when render check if all the pairs are found
    if (cards.length > 0 && cards.length === foundCards.length) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
  }, [cards]);

  const handleCardClick = e => {
    // console.log(e.currentTarget.id);
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

  const gameStateClass = isFinished ? "finished" : "";

  return (
    <div className={`game game-size-${cards.length} ${gameStateClass}`}>
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
      <div className="congrat">
        <h1>Congratulations!</h1>
      </div>
    </div>
  );
};

export default Game;
