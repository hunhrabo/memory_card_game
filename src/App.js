import React, { useState, useEffect } from "react";
import SelectGame from "./Components/SelectGame";
import Game from "./Components/Game";

const App = () => {
  const [selectedGame, setSelectedGame] = useState(0);
  const [picUrls, setPicUrls] = useState([]);

  const baseUrl = "https://picsum.photos/200/200?random=";

  useEffect(() => {
    const newPicUrls = fetchUrls(baseUrl, selectedGame);
    setPicUrls(shuffleArray(newPicUrls));
  }, [selectedGame]);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const fetchUrls = (url, num) => {
    let newPicUrls = [];
    for (let i = 0; i < num; i++) {
      newPicUrls.push(`${url}${i + 1}`);
      newPicUrls.push(`${url}${i + 1}`);
    }
    return newPicUrls;
  };

  const handleGameSelect = num => {
    setSelectedGame(Number(num));
  };

  const startNewGame = () => {
    setSelectedGame(0);
  };

  return (
    <div className="game-container">
      <SelectGame
        selectedGame={selectedGame}
        handleGameSelect={handleGameSelect}
        startNewGame={startNewGame}
      />
      <Game picUrls={picUrls} />
    </div>
  );
};

export default App;
