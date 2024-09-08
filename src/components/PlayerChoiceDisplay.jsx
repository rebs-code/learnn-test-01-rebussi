// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

export default function PlayerChoiceDisplay({
  player1Choice,
  player2Choice,
  gameMode,
}) {
  const getPlayerName = (playerNumber) => {
    if (gameMode === "PCvsPC") {
      return `PC ${playerNumber}`;
    } else if (gameMode === "humanVsPC" && playerNumber === 2) {
      return "Computer";
    } else {
      return `Player ${playerNumber}`;
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center my-8 md:flex-row">
      <div className="p-6 w-full text-center rounded-lg bg-slate-800 md:w-48">
        <h2 className="mb-4 text-xl font-bold text-slate-200">
          {getPlayerName(1)}
        </h2>
        <p className="text-4xl capitalize text-slate-100">
          {player1Choice || "?"}
        </p>
      </div>
      <div className="p-6 w-full text-center rounded-lg bg-slate-800 md:w-48">
        <h2 className="mb-4 text-xl font-bold text-slate-200">
          {getPlayerName(2)}
        </h2>
        <p className="text-4xl capitalize text-slate-100">
          {player2Choice || "?"}
        </p>
      </div>
    </div>
  );
}

PlayerChoiceDisplay.propTypes = {
  player1Choice: PropTypes.string,
  player2Choice: PropTypes.string,
  gameMode: PropTypes.string,
};
