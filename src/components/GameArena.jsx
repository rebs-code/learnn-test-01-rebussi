import { useState, useEffect } from "react";
import GameModeSelector from "./GameModeSelector";
import PlayerChoiceDisplay from "./PlayerChoiceDisplay";
import Button from "./ui/Button";
import ChoiceButtons from "./ChoiceButtons";

export default function GameArena() {
  const [gameMode, setGameMode] = useState(null);
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1); //inizialmente player01 è il giocatore che comincia, in human vs pc human è sempre player01

  // funzione che gestisce la selezione della modalità di gioco
  const handleModeSelect = (mode) => {
    setGameMode(mode);
    setPlayer1Choice(null);
    setPlayer2Choice(null);
  };

  // funziona che gestisce la scelta del giocatore o dei giocatori
  const handleChoice = (choice) => {
    if (currentPlayer === 1) {
      setPlayer1Choice(choice);
      if (gameMode === "humanVsHuman") {
        setCurrentPlayer(2);
      } else {
        // simula la scelta del pc
        const pcChoice = ["rock", "paper", "scissors"][
          Math.floor(Math.random() * 3)
        ];
        setPlayer2Choice(pcChoice);
      }
    } else {
      setPlayer2Choice(choice);
    }
  };

  const isChoiceDisabled = () => {
    return (
      gameMode === "PCvsPC" ||
      (gameMode === "humanVsPC" && currentPlayer === 2) ||
      (player1Choice && player2Choice)
    );
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <GameModeSelector onSelectMode={handleModeSelect} />
      <PlayerChoiceDisplay
        player1Choice={player1Choice}
        player2Choice={player2Choice}
        gameMode={gameMode}
      />
      <ChoiceButtons onChoice={handleChoice} disabled={isChoiceDisabled()} />
      <div className="flex justify-center mt-8">
        <Button>Start Game</Button>
      </div>
    </main>
  );
}
