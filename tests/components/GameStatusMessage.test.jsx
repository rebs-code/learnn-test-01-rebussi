// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import GameStatusMessage from "../../src/components/GameStatusMessage";

describe("GameStatusMessage", () => {
  // Funzione helper per renderizzare il componente GameStatusMessage
  const renderGameStatusMessage = (props) => {
    const { container } = render(<GameStatusMessage {...props} />);
    return { container };
  };

  it("renders the correct message for initial state", () => {
    // Verifica che il messaggio corretto sia mostrato per lo stato iniziale
    const { container } = renderGameStatusMessage({
      gameMode: "humanVsHuman",
      player1Choice: null,
      player2Choice: null,
    });
    expect(
      within(container).getByText("Player 1 - Choose your move")
    ).toBeInTheDocument();
  });

  it("renders the correct message for player 1 choice made in humanVsHuman mode", () => {
    // Verifica che il messaggio corretto sia mostrato dopo che il giocatore 1 ha fatto la sua scelta in modalità humanVsHuman
    const { container } = renderGameStatusMessage({
      gameMode: "humanVsHuman",
      player1Choice: "rock",
      player2Choice: null,
    });
    expect(
      within(container).getByText("Player 2 - Choose your move")
    ).toBeInTheDocument();
  });

  it("renders the correct message for player 1 choice made in humanVsPC mode", () => {
    // Verifica che il messaggio corretto sia mostrato dopo che il giocatore 1 ha fatto la sua scelta in modalità humanVsPC
    const { container } = renderGameStatusMessage({
      gameMode: "humanVsPC",
      player1Choice: "rock",
      player2Choice: null,
    });
    expect(
      within(container).getByText("Click Generate PC Choice")
    ).toBeInTheDocument();
  });

  it("renders the correct message for PCvsPC mode", () => {
    // Verifica che il messaggio corretto sia mostrato in modalità PCvsPC
    const { container } = renderGameStatusMessage({
      gameMode: "PCvsPC",
      player1Choice: null,
      player2Choice: null,
    });
    expect(
      within(container).getByText("Click Generate PC Choices to start")
    ).toBeInTheDocument();
  });

  it("renders the correct message when both choices are made", () => {
    // Verifica che il messaggio corretto sia mostrato quando entrambe le scelte sono state fatte
    const { container } = renderGameStatusMessage({
      gameMode: "humanVsHuman",
      player1Choice: "rock",
      player2Choice: "paper",
    });
    expect(
      within(container).getByText("Click Start Game to declare the winner")
    ).toBeInTheDocument();
  });

  it("applies correct CSS classes", () => {
    // Verifica che le classi CSS corrette siano applicate
    const { container } = renderGameStatusMessage({
      gameMode: "humanVsHuman",
      player1Choice: null,
      player2Choice: null,
    });
    const messageElement = within(container).getByText(
      "Player 1 - Choose your move"
    );
    expect(messageElement).toHaveClass("game-status-message");
  });
});
