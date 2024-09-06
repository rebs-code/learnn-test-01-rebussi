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
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-8">
      <div className="bg-slate-800 p-6 rounded-lg text-center w-full md:w-48">
        <h2 className="text-xl font-bold mb-4 text-slate-200">
          {getPlayerName(1)}
        </h2>
        <p className="text-4xl text-slate-100">{player1Choice || "?"}</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg text-center w-full md:w-48">
        <h2 className="text-xl font-bold mb-4 text-slate-200">
          {getPlayerName(2)}
        </h2>
        <p className="text-4xl text-slate-100">{player2Choice || "?"}</p>
      </div>
    </div>
  );
}
