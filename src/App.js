import React, { useState } from "react";
import SelectGame from "./Components/SelectGame";
import Game from "./Components/Game";

const App = () => {
  const [selectedGame, setSelectedGame] = useState(0);

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
      <Game selectedGame={selectedGame} />
    </div>
  );
};

export default App;
