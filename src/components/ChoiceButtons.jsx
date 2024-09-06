export default function ChoiceButtons({ onChoice, disabled }) {
  const choices = ["rock", "paper", "scissors"];

  return (
    <div className="flex justify-center gap-4 my-4">
      {choices.map((choice) => (
        <button
          key={choice}
          onClick={() => onChoice(choice)}
          disabled={disabled}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {choice.charAt(0).toUpperCase() + choice.slice(1)}
        </button>
      ))}
    </div>
  );
}
