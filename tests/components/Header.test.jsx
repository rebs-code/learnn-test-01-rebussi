// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Header from "../../src/components/Header";

describe("Header", () => {
  // Funzione helper per renderizzare il componente Header
  const renderHeader = () => {
    const { container } = render(<Header />);
    return { container };
  };

  it("renders the game title", () => {
    // Verifica che il titolo del gioco sia renderizzato correttamente
    const { container } = renderHeader();
    expect(
      within(container).getByRole("heading", { name: "Rock Paper Scissors" })
    ).toBeInTheDocument();
  });

  it("applies correct CSS classes to the header container", () => {
    // Verifica che le classi CSS corrette siano applicate al contenitore dell'header
    const { container } = renderHeader();
    const headerElement = container.firstChild;
    expect(headerElement).toHaveClass(
      "p-4",
      "w-full",
      "shadow-md",
      "bg-slate-900",
      "text-slate-100"
    );
  });

  it("applies correct CSS classes to the title", () => {
    // Verifica che le classi CSS corrette siano applicate al titolo
    const { container } = renderHeader();
    const titleElement = within(container).getByText("Rock Paper Scissors");
    expect(titleElement).toHaveClass("text-2xl", "font-bold", "tracking-tight");
  });
});
