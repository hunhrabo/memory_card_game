import React from "react";

const Tile = ({ id, url, cardState, handleCardClick }) => {
  return (
    <div
      id={id}
      className={`flip-card tile tile-${id} ${cardState}`}
      onClick={handleCardClick}
    >
      <div className="flip-card-front">
        <img src="question-mark.svg" alt="question-mark" />
      </div>
      <div className="flip-card-back">
        <img src={`${url}`} alt="tile" />
      </div>
    </div>
  );
};

export default Tile;
