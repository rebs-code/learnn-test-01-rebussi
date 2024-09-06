import { useState, useEffect } from "react";
import GameModeSelector from "./GameModeSelector";
import PlayerChoiceDisplay from "./PlayerChoiceDisplay";
import Button from "./ui/Button";

export default function GameArena() {
  const [gameMode, setGameMode] = useState(null);
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);

  // funzione che gestisce la selezione della modalità di gioco
  const handleModeSelect = (mode) => {
    setGameMode(mode);
    setPlayer1Choice(null);
    setPlayer2Choice(null);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <GameModeSelector onSelectMode={handleModeSelect} />
      <PlayerChoiceDisplay
        player1Choice={player1Choice}
        player2Choice={player2Choice}
        gameMode={gameMode}
      />
      <div className="flex justify-center mt-8">
        <Button>Start Game</Button>
      </div>
    </main>
  );
}
