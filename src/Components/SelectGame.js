import React from "react";

const SelectGame = ({ selectedGame, handleGameSelect, startNewGame }) => {
  if (selectedGame === 0) {
    return (
      <div className="select-game select-open">
        <h1 className="header-title">Welcome to Memory Cards!</h1>
        <h2>Select game mode:</h2>
        <button onClick={() => handleGameSelect(6)}>4 X 3</button>
        <button onClick={() => handleGameSelect(8)}>4 X 4</button>
        <button onClick={() => handleGameSelect(12)}>6 X 4</button>
      </div>
    );
  } else {
    return (
      <div className="select-game select-closed">
        <button onClick={startNewGame}>New game</button>
      </div>
    );
  }
};

export default SelectGame;
