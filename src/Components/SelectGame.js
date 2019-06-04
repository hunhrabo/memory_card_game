import React from "react";

const SelectGame = ({ selectedGame, handleGameSelect, startNewGame }) => {
  if (selectedGame === 0) {
    return (
      <div className="select-open">
        <h2>Select game mode</h2>
        <button onClick={() => handleGameSelect(6)}>4 X 3</button>
        <button onClick={() => handleGameSelect(8)}>4 X 4</button>
        <button onClick={() => handleGameSelect(12)}>6 X 4</button>
      </div>
    );
  } else {
    return (
      <div className="select-closed">
        <button onClick={startNewGame}>Start new game</button>
      </div>
    );
  }
};

export default SelectGame;
