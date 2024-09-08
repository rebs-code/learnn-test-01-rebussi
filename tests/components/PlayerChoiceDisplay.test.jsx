// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import PlayerChoiceDisplay from "../../src/components/PlayerChoiceDisplay";

describe("PlayerChoiceDisplay", () => {
  // Funzione helper per renderizzare il componente PlayerChoiceDisplay
  const renderPlayerChoiceDisplay = (props) => {
    const { container } = render(<PlayerChoiceDisplay {...props} />);
    return { container };
  };

  it("renders player choices correctly for humanVsHuman mode", () => {
    // Verifica che le scelte dei giocatori siano renderizzate correttamente in modalità humanVsHuman
    const { container } = renderPlayerChoiceDisplay({
      player1Choice: "rock",
      player2Choice: "paper",
      gameMode: "humanVsHuman",
    });

    expect(within(container).getByText("Player 1")).toBeInTheDocument();
    expect(within(container).getByText("Player 2")).toBeInTheDocument();
    expect(within(container).getByText("rock")).toBeInTheDocument();
    expect(within(container).getByText("paper")).toBeInTheDocument();
  });

  it("renders player choices correctly for humanVsPC mode", () => {
    // Verifica che le scelte dei giocatori siano renderizzate correttamente in modalità humanVsPC
    const { container } = renderPlayerChoiceDisplay({
      player1Choice: "scissors",
      player2Choice: "rock",
      gameMode: "humanVsPC",
    });

    expect(within(container).getByText("Player 1")).toBeInTheDocument();
    expect(within(container).getByText("Computer")).toBeInTheDocument();
    expect(within(container).getByText("scissors")).toBeInTheDocument();
    expect(within(container).getByText("rock")).toBeInTheDocument();
  });

  it("renders player choices correctly for PCvsPC mode", () => {
    // Verifica che le scelte dei giocatori siano renderizzate correttamente in modalità PCvsPC
    const { container } = renderPlayerChoiceDisplay({
      player1Choice: "paper",
      player2Choice: "scissors",
      gameMode: "PCvsPC",
    });

    expect(within(container).getByText("PC 1")).toBeInTheDocument();
    expect(within(container).getByText("PC 2")).toBeInTheDocument();
    expect(within(container).getByText("paper")).toBeInTheDocument();
    expect(within(container).getByText("scissors")).toBeInTheDocument();
  });

  it('displays "?" when choices are not provided', () => {
    // Verifica che venga mostrato "?" quando le scelte non sono fornite
    const { container } = renderPlayerChoiceDisplay({
      gameMode: "humanVsHuman",
    });

    const questionMarks = within(container).getAllByText("?");
    expect(questionMarks).toHaveLength(2);
  });

  it("applies correct CSS classes to the main container", () => {
    // Verifica che le classi CSS corrette siano applicate al contenitore principale
    const { container } = renderPlayerChoiceDisplay({
      gameMode: "humanVsHuman",
    });

    const mainContainer = container.firstChild;
    expect(mainContainer).toHaveClass(
      "flex",
      "flex-col",
      "gap-4",
      "justify-center",
      "items-center",
      "my-8",
      "md:flex-row"
    );
  });

  it("capitalizes player choices", () => {
    // Verifica che le scelte dei giocatori siano capitalizzate
    const { container } = renderPlayerChoiceDisplay({
      player1Choice: "rock",
      player2Choice: "paper",
      gameMode: "humanVsHuman",
    });

    const choiceElements = container.querySelectorAll("p");
    choiceElements.forEach((element) => {
      expect(element).toHaveClass("capitalize");
    });
  });
});
