import PropTypes from "prop-types";

export default function GameStatusMessage({
  gameMode,
  player1Choice,
  player2Choice,
}) {
  const getMessage = () => {
    if (gameMode === "humanVsHuman") {
      if (!player1Choice) return "Player 1 - Choose your move";
      if (!player2Choice) return "Player 2 - Choose your move";
    } else if (gameMode === "humanVsPC") {
      if (!player1Choice) return "Player 1 - Choose your move";
      if (!player2Choice) return "Click Generate to get PC's choice";
    } else if (gameMode === "PCvsPC") {
      if (!player1Choice || !player2Choice)
        return "Click Generate PC Choices to start";
    }
    return "Click Start Game to declare the winner";
  };

  return <p className="game-status-message">{getMessage()}</p>;
}

GameStatusMessage.propTypes = {
  gameMode: PropTypes.string.isRequired,
  currentPlayer: PropTypes.number.isRequired,
  player1Choice: PropTypes.string,
  player2Choice: PropTypes.string,
};
