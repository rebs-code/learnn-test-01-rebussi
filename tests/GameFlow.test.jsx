// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import GameArena from "../src/components/GameArena";

describe("Game Flow Integration", () => {
  it("plays a full game in Human vs PC mode", async () => {
    const user = userEvent.setup();
    const { container } = render(<GameArena />);

    // Seleziona la modalità Human vs PC
    const humanVsPcRadio = within(container).getByLabelText(/Human vs PC/i);
    await user.click(humanVsPcRadio);

    // Verifica che il messaggio iniziale sia corretto
    expect(
      within(container).getByText(/Player 1 - Choose your move/i)
    ).toBeInTheDocument();

    // Il giocatore sceglie "Rock"
    const rockButton = within(container).getByRole("button", { name: /rock/i });
    await user.click(rockButton);

    // Verifica che la scelta del giocatore sia visualizzata
    const playerChoiceDisplay = within(container)
      .getAllByText(/Player 1|Human/)[0]
      .closest("div");
    expect(playerChoiceDisplay).not.toHaveTextContent("?");

    // Genera la scelta del PC
    const generatePcChoiceButton = within(container).getByRole("button", {
      name: /Generate PC Choice/i,
    });
    await user.click(generatePcChoiceButton);

    // Verifica che sia stata generata una scelta per il PC
    const pcChoiceDisplay = within(container)
      .getAllByText(/Player 2|Computer|PC/)[0]
      .closest("div");
    expect(pcChoiceDisplay).not.toHaveTextContent("?");

    // Avvia il gioco
    const startGameButton = within(container).getByRole("button", {
      name: /Start Game/i,
    });
    await user.click(startGameButton);

    // Verifica che sia stato mostrato un risultato
    const result = within(container).getByText(/wins|tie/i);
    expect(result).toBeInTheDocument();

    // Verifica che sia possibile iniziare una nuova partita
    const newGameButton = within(container).getByRole("button", {
      name: /Play Again/i,
    });
    expect(newGameButton).toBeInTheDocument();
  });
});
