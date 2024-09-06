//react imports
import { useState } from "react";
//components
import GameModeSelector from "./GameModeSelector";
import PlayerChoiceDisplay from "./PlayerChoiceDisplay";
import ChoiceButtons from "./ChoiceButtons";
import GameStatusMessage from "./GameStatusMessage";
// ui
import Button from "./ui/Button";
//utils
import { generatePCChoice } from "../lib/gameUtils";

export default function GameArena() {
  const [gameMode, setGameMode] = useState("humanVsPC"); //inizialmente la modalità di gioco è human vs pc
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [pcChoiceGenerated, setPcChoiceGenerated] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1); //inizialmente player01 è il giocatore che comincia, in human vs pc human è sempre player01
  const [result, setResult] = useState("");
  const [gameEnded, setGameEnded] = useState(false);

  // funzione che gestisce la selezione della modalità di gioco
  const handleModeSelect = (mode) => {
    setGameMode(mode);
    //quando si cambia modalità di gioco, si resetta il gioco
    resetGame();
  };

  //funzione che gestisce la scelta del giocatore
  const handleChoice = (choice) => {
    if (gameMode === "PCvsPC") {
      const pc1Choice = generatePCChoice();
      const pc2Choice = generatePCChoice();
      setPlayer1Choice(pc1Choice);
      setPlayer2Choice(pc2Choice);
      setPcChoiceGenerated(true);
    } else if (gameMode === "humanVsPC") {
      if (!player1Choice) {
        setPlayer1Choice(choice);
      } else {
        setPlayer2Choice(generatePCChoice());
        setPcChoiceGenerated(true);
      }
    } else if (gameMode === "humanVsHuman") {
      if (currentPlayer === 1) {
        setPlayer1Choice(choice);
        setCurrentPlayer(2);
      } else {
        setPlayer2Choice(choice);
      }
    }
  };

  //funzione che controlla se la scelta è disabilitata
  const isChoiceDisabled = () => {
    return (
      gameMode === "PCvsPC" ||
      (gameMode === "humanVsPC" && player1Choice) ||
      (gameMode === "humanVsHuman" && player1Choice && player2Choice) ||
      gameEnded
    );
  };

  // relazioni tra le mosse
  const moveRelationships = {
    rock: { beats: ["scissors", "lizard"] },
    paper: { beats: ["rock", "spock"] },
    scissors: { beats: ["paper", "lizard"] },
  };

  // funzione che determina il vincitore
  const determineWinner = (move1, move2) => {
    if (move1 === move2) return "tie";
    if (moveRelationships[move1].beats.includes(move2)) return "move1";
    return "move2";
  };

  // funzione che inizia il gioco e lo risolve
  const playGame = () => {
    if (player1Choice && player2Choice) {
      const gameResult = determineWinner(player1Choice, player2Choice);
      if (gameResult === "move1") {
        setResult("Player 1 wins!");
      } else if (gameResult === "move2") {
        setResult("Player 2 wins!");
      } else {
        setResult("It's a tie!");
      }
      setGameEnded(true);
    }
  };

  const resetGame = () => {
    setGameMode("humanVsPC");
    setPlayer1Choice(null);
    setPlayer2Choice(null);
    setCurrentPlayer(1);
    setResult("");
    setPcChoiceGenerated(false);
    setGameEnded(false);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <GameModeSelector onSelectMode={handleModeSelect} />
      <PlayerChoiceDisplay
        player1Choice={player1Choice}
        player2Choice={player2Choice}
        gameMode={gameMode}
      />
      <ChoiceButtons
        onChoice={handleChoice}
        disabled={isChoiceDisabled()}
        gameMode={gameMode}
        player1Choice={player1Choice}
        pcChoiceGenerated={pcChoiceGenerated}
      />
      <GameStatusMessage
        gameMode={gameMode}
        player1Choice={player1Choice}
        player2Choice={player2Choice}
      />

      <div className="flex justify-center mt-8">
        <Button onClick={gameEnded ? resetGame : playGame} color="teal">
          {gameEnded ? "Play Again" : "Start Game"}
        </Button>
      </div>
      {result && <p className="text-center mt-4 text-xl font-bold">{result}</p>}
    </main>
  );
}
