import PropTypes from "prop-types";
import Button from "./ui/Button";

export default function ChoiceButtons({
  onChoice,
  disabled,
  gameMode,
  player1Choice,
  pcChoiceGenerated,
}) {
  //set di scelte disponibili
  const choices = ["rock", "paper", "scissors"];

  //se la modalità di gioco è PC vs PC o human vs PC e il giocatore ha già scelto, si mostra il pulsante per generare la scelta del PC
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
    <div className="flex gap-4 justify-center my-4">
      {/* si crea un pulsante per ogni scelta disponibile */}
      {choices.map((choice) => (
        <Button
          key={choice}
          onClick={() => onChoice(choice)}
          disabled={disabled}
          color="teal"
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
