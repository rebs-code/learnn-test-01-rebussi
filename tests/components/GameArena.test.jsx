// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import GameArena from "../../src/components/GameArena";

describe("GameArena", () => {
  // Funzione helper per renderizzare il componente GameArena e creare un utente
  const renderGameArena = () => {
    const user = userEvent.setup();
    const { container } = render(<GameArena />);
    return { container, user };
  };

  it("renders the game mode selector", () => {
    // Verifica che il selettore di modalità di gioco sia presente
    const { container } = renderGameArena();
    expect(
      within(container).getByText(/Select Game Mode/i)
    ).toBeInTheDocument();
  });

  it("changes the game mode when a new option is selected", async () => {
    // Verifica che la modalità di gioco cambi quando viene selezionata una nuova opzione
    const { container, user } = renderGameArena();
    const pcVsPcButton = within(container).getByRole("radio", {
      name: /PC vs PC/i,
    });
    await user.click(pcVsPcButton);
    expect(
      // specifichiamo che si tratta del pulsante perche' la stessa stringa e' ripetuta nel GameStatusMessage
      within(container).getByRole("button", { name: /Generate PC Choices/i })
    ).toBeInTheDocument();
  });

  it("shows the choice buttons for the Human vs PC mode", () => {
    // Verifica che i pulsanti di scelta (rock, paper, scissors) siano visibili nella modalità Human vs PC
    const { container } = renderGameArena();
    expect(
      within(container).getByRole("button", { name: /rock/i })
    ).toBeInTheDocument();
    expect(
      within(container).getByRole("button", { name: /paper/i })
    ).toBeInTheDocument();
    expect(
      within(container).getByRole("button", { name: /scissors/i })
    ).toBeInTheDocument();
  });

  it("disables the choice buttons after both players have made their choices in Human vs Human mode", async () => {
    // Verifica che i pulsanti di scelta vengano disabilitati dopo che entrambi i giocatori hanno fatto la loro scelta nella modalità Human vs Human
    const { container, user } = renderGameArena();

    // Controlliamo che sia selezionata la modalità Human vs Human, i pulsanti di scelta sono presenti e disabilitati solo quando ci sono due giocatori umani ed entrambi hanno fatto la loro scelta, quindi hanno cliccato i pulsanti di scelta due volte
    const humanVsHumanButton = within(container).getByRole("radio", {
      name: /Human vs Human/i,
    });
    await user.click(humanVsHumanButton);

    // Scelta del giocatore 1
    const rockButton = within(container).getByRole("button", { name: /rock/i });
    await user.click(rockButton);

    // Scelta del giocatore 2
    const paperButton = within(container).getByRole("button", {
      name: /paper/i,
    });
    await user.click(paperButton);

    // Per sicurezza controlliamo che tutti i pulsanti siano disabilitati
    const allButtons = within(container).getAllByRole("button", {
      name: /rock|paper|scissors/i,
    });
    allButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it("shows the game status message", () => {
    // Verifica che il messaggio di stato del gioco sia visibile
    const { container } = renderGameArena();
    expect(
      within(container).getByText(/Player 1 - Choose your move/i)
    ).toBeInTheDocument();
  });

  it('mostra il pulsante "Start Game" quando entrambi i giocatori hanno fatto la loro scelta', async () => {
    // Verifica che il pulsante "Start Game" sia presente e attivo quando entrambi i giocatori hanno fatto la loro scelta
    const { container, user } = renderGameArena();
    const rockButton = within(container).getByRole("button", { name: /rock/i });
    await user.click(rockButton);
    const generatePcChoiceButton = within(container).getByRole("button", {
      name: /Generate PC Choice/i,
    });
    await user.click(generatePcChoiceButton);
    expect(
      within(container).getByRole("button", { name: /Start Game/i })
    ).toBeInTheDocument();
  });

  it('shows the game result after clicking "Start Game"', async () => {
    // Verifica che il risultato del gioco venga mostrato dopo aver cliccato su "Inizia Gioco"
    const { container, user } = renderGameArena();
    const rockButton = within(container).getByRole("button", { name: /rock/i });
    await user.click(rockButton);
    const generatePcChoiceButton = within(container).getByRole("button", {
      name: /Generate PC Choice/i,
    });
    await user.click(generatePcChoiceButton);
    const startGameButton = within(container).getByRole("button", {
      name: /Start Game/i,
    });
    await user.click(startGameButton);
    expect(within(container).getByText(/wins|tie/i)).toBeInTheDocument();
  });

  it('resets the game when clicking "Play Again"', async () => {
    // Verifica che il gioco venga resettato quando si clicca su "Gioca Ancora"
    const { container, user } = renderGameArena();
    const rockButton = within(container).getByRole("button", { name: /rock/i });
    await user.click(rockButton);
    const generatePcChoiceButton = within(container).getByRole("button", {
      name: /Generate PC Choice/i,
    });
    await user.click(generatePcChoiceButton);
    const startGameButton = within(container).getByRole("button", {
      name: /Start Game/i,
    });
    await user.click(startGameButton);
    const playAgainButton = within(container).getByRole("button", {
      name: /Play Again/i,
    });
    await user.click(playAgainButton);
    expect(
      within(container).getByText(/Choose your move/i)
    ).toBeInTheDocument();
  });
});
