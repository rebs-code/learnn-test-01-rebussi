// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ResultDisplay from "../../src/components/ResultDisplay";

describe("ResultDisplay", () => {
  // Funzione helper per renderizzare il componente ResultDisplay
  const renderResultDisplay = (props) => {
    const { container } = render(<ResultDisplay {...props} />);
    return { container };
  };

  it("renders the result when provided", () => {
    // Verifica che il risultato venga renderizzato quando fornito
    const result = "Player 1 wins!";
    const { container } = renderResultDisplay({ result });
    expect(within(container).getByText(result)).toBeInTheDocument();
  });

  it("does not render any text when result is not provided", () => {
    // Verifica che non venga renderizzato alcun testo quando il risultato non è fornito
    const { container } = renderResultDisplay({});
    expect(container.textContent).toBe("");
  });

  it("applies correct CSS class to the result text", () => {
    // Verifica che la classe CSS corretta sia applicata al testo del risultato
    const result = "It's a tie!";
    const { container } = renderResultDisplay({ result });
    const resultElement = within(container).getByText(result);
    expect(resultElement).toHaveClass("game-status-message");
  });

  it("renders within a flex container", () => {
    // Verifica che il risultato sia renderizzato all'interno di un contenitore flex
    const { container } = renderResultDisplay({ result: "Some result" });
    const flexContainer = container.firstChild;
    expect(flexContainer).toHaveClass("flex", "justify-center", "items-center");
  });

  it("handles different result messages correctly", () => {
    // Verifica che gestisca correttamente diversi messaggi di risultato
    const results = [
      "Player 1 wins!",
      "Player 2 wins!",
      "It's a tie!",
      "Game Over",
    ];
    results.forEach((result) => {
      const { container } = renderResultDisplay({ result });
      expect(within(container).getByText(result)).toBeInTheDocument();
    });
  });

  it("does not render the result paragraph when result is an empty string", () => {
    // Verifica che non venga renderizzato il paragrafo del risultato quando il risultato è una stringa vuota
    const { container } = renderResultDisplay({ result: "" });
    expect(container.querySelector("p")).toBeNull();
  });

  it("renders correctly with falsy values other than undefined", () => {
    // Verifica che il componente si comporti correttamente con valori falsy diversi da undefined
    const { container: containerNull } = renderResultDisplay({ result: null });
    const { container: containerFalse } = renderResultDisplay({
      result: false,
    });
    const { container: containerZero } = renderResultDisplay({ result: 0 });

    expect(containerNull.textContent).toBe("");
    expect(containerFalse.textContent).toBe("");
    expect(containerZero.textContent).toBe("0");
  });
});
