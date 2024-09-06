import PropTypes from "prop-types";

export default function ChoiceButtons({ onChoice, disabled, gameMode }) {
  const choices = ["rock", "paper", "scissors"];

  // se la gameMode è PCvsPC, mostra un pulsante per generare le scelte del PC
  if (gameMode === "PCvsPC") {
    return (
      <div className="flex justify-center my-4">
        <button
          onClick={() => onChoice()}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Generate PC Choices
        </button>
      </div>
    );
  }

  // se la gameMode è humanVsPC o humanVsHuman, mostra i pulsanti per le scelte del giocatore
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
};
