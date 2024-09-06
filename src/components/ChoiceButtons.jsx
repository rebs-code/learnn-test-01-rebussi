import PropTypes from "prop-types";
import Button from "./ui/Button";

export default function ChoiceButtons({
  onChoice,
  disabled,
  gameMode,
  currentPlayer,
  player1Choice,
}) {
  const choices = ["rock", "paper", "scissors"];

  if (gameMode === "PCvsPC" || (gameMode === "humanVsPC" && player1Choice)) {
    return (
      <div className="flex justify-center my-4">
        <Button onClick={() => onChoice()} color="amber">
          Generate PC Choice{gameMode === "PCvsPC" ? "s" : ""}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 my-4">
      {choices.map((choice) => (
        <button
          key={choice}
          onClick={() => onChoice(choice)}
          disabled={disabled}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors capitalize"
        >
          {choice}
        </button>
      ))}
    </div>
  );
}

ChoiceButtons.propTypes = {
  onChoice: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  gameMode: PropTypes.string.isRequired,
  currentPlayer: PropTypes.number.isRequired,
  player1Choice: PropTypes.string,
};
