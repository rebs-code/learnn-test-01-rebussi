import PropTypes from "prop-types";
import Button from "./ui/Button";

export default function ChoiceButtons({
  onChoice,
  disabled,
  gameMode,
  player1Choice,
  pcChoiceGenerated,
}) {
  const choices = ["rock", "paper", "scissors"];

  if (gameMode === "PCvsPC" || (gameMode === "humanVsPC" && player1Choice)) {
    return (
      <div className="flex justify-center my-4">
        <Button
          onClick={() => onChoice()}
          color="amber"
          disabled={pcChoiceGenerated}
        >
          Generate PC Choice{gameMode === "PCvsPC" ? "s" : ""}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 my-4">
      {choices.map((choice) => (
        <Button
          key={choice}
          onClick={() => onChoice(choice)}
          disabled={disabled}
          color="blue"
        >
          {choice}
        </Button>
      ))}
    </div>
  );
}

ChoiceButtons.propTypes = {
  onChoice: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  gameMode: PropTypes.string.isRequired,
  player1Choice: PropTypes.string,
  pcChoiceGenerated: PropTypes.bool,
};
