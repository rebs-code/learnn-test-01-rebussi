import PropTypes from "prop-types";

export default function GameStatusMessage({
  gameMode,
  currentPlayer,
  player1Choice,
  player2Choice,
}) {
  if (gameMode === "humanVsHuman") {
    if (!player1Choice) {
      return <p className="text-center mt-4">Player 1 - Choose your move</p>;
    } else if (!player2Choice) {
      return <p className="text-center mt-4">Player 2 - Choose your move</p>;
    } else {
      return (
        <p className="text-center mt-4">
          Click Start Game to declare the winner
        </p>
      );
    }
  } else if (gameMode === "humanVsPC") {
    if (!player1Choice) {
      return <p className="text-center mt-4">Player 1 - Choose your move</p>;
    } else if (!player2Choice) {
      return (
        <p className="text-center mt-4">Click Generate to get PC's choice</p>
      );
    } else {
      return (
        <p className="text-center mt-4">
          Click Start Game to declare the winner
        </p>
      );
    }
  } else if (gameMode === "PCvsPC") {
    if (!player1Choice || !player2Choice) {
      return (
        <p className="text-center mt-4">Click Generate PC Choices to start</p>
      );
    } else {
      return (
        <p className="text-center mt-4">
          Click Start Game to declare the winner
        </p>
      );
    }
  }

  return null;
}

GameStatusMessage.propTypes = {
  gameMode: PropTypes.string.isRequired,
  currentPlayer: PropTypes.number.isRequired,
  player1Choice: PropTypes.string,
  player2Choice: PropTypes.string,
};
