// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import ChoiceButtons from "../../src/components/ChoiceButtons";

describe("ChoiceButtons", () => {
  // simula la funzione onChoice
  const mockOnChoice = vi.fn();

  // funzione helper per renderizzare il componente con le props passate dentro un container, cosi' da poter testare il componente in modo isolato ed utilizzare within per isolare lo scope del test
  const renderChoiceButtons = (props) => {
    const { container } = render(
      <ChoiceButtons onChoice={mockOnChoice} {...props} />
    );
    return container;
  };

  it("renders rock, paper, scissors buttons for humanVsPC mode", () => {
    const container = renderChoiceButtons({
      disabled: false,
      gameMode: "humanVsPC",
    });
    // prende tutti i pulsanti dentro il container
    const buttons = within(container).getAllByRole("button");
    // verifica che ci sia almeno un pulsante con il testo "rock", "paper", "scissors"
    expect(
      buttons.some((button) => button.textContent === "rock")
    ).toBeTruthy();
    expect(
      buttons.some((button) => button.textContent === "paper")
    ).toBeTruthy();
    expect(
      buttons.some((button) => button.textContent === "scissors")
    ).toBeTruthy();
  });

  it("disables buttons when disabled prop is true", () => {
    const container = renderChoiceButtons({
      disabled: true,
      gameMode: "humanVsPC",
    });
    // prende tutti i pulsanti dentro il container
    const buttons = within(container).getAllByRole("button");
    // verifica che ogni pulsante sia disabilitato
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it("calls onChoice with correct choice when a button is clicked", async () => {
    const container = renderChoiceButtons({
      disabled: false,
      gameMode: "humanVsPC",
    });
    // prende il pulsante con il testo "paper" dentro il container
    const paperButton = within(container)
      .getAllByRole("button")
      .find((button) => button.textContent === "paper");
    // simula il click sul pulsante
    await userEvent.click(paperButton);
    // verifica che la funzione mockOnChoice sia stata chiamata con il valore "paper"
    expect(mockOnChoice).toHaveBeenCalledWith("paper");
  });

  it("renders Generate PC Choice button for PCvsPC mode", () => {
    const container = renderChoiceButtons({
      disabled: false,
      gameMode: "PCvsPC",
    });
    // prende il pulsante con il testo "Generate PC Choices" dentro il container
    const generateButton = within(container).getByRole("button", {
      name: /Generate PC Choices/i,
    });
    // verifica che il pulsante sia presente nel documento
    expect(generateButton).toBeInTheDocument();
  });

  it("renders Generate PC Choice button for humanVsPC mode when player1Choice is set", () => {
    const container = renderChoiceButtons({
      disabled: false,
      gameMode: "humanVsPC",
      player1Choice: "rock",
    });
    // prende il pulsante con il testo "Generate PC Choice" dentro il container
    const generateButton = within(container).getByRole("button", {
      name: /Generate PC Choice/i,
    });
    // verifica che il pulsante sia presente nel documento
    expect(generateButton).toBeInTheDocument();
  });

  it("disables Generate PC Choice button when pcChoiceGenerated is true", () => {
    const container = renderChoiceButtons({
      disabled: false,
      gameMode: "PCvsPC",
      pcChoiceGenerated: true,
    });
    // prende il pulsante con il testo "Generate PC Choices" dentro il container
    const generateButton = within(container).getByRole("button", {
      name: /Generate PC Choices/i,
    });
    // verifica che il pulsante sia disabilitato
    expect(generateButton).toBeDisabled();
  });

  it("calls onChoice without arguments when Generate PC Choice button is clicked", async () => {
    const container = renderChoiceButtons({
      disabled: false,
      gameMode: "PCvsPC",
    });
    // prende il pulsante con il testo "Generate PC Choices" dentro il container
    const generateButton = within(container).getByRole("button", {
      name: /Generate PC Choices/i,
    });
    // simula il click sul pulsante
    await userEvent.click(generateButton);
    // verifica che la funzione mockOnChoice sia stata chiamata senza argomenti
    expect(mockOnChoice).toHaveBeenCalledWith();
  });
});
