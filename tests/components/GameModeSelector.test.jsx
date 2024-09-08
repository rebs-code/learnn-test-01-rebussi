// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import GameModeSelector from "../../src/components/GameModeSelector";

describe("GameModeSelector", () => {
  const mockOnSelectMode = vi.fn();

  // Funzione helper per renderizzare il componente GameModeSelector
  const renderGameModeSelector = (currentMode = "humanVsHuman") => {
    const user = userEvent.setup();
    const { container } = render(
      <GameModeSelector
        currentMode={currentMode}
        onSelectMode={mockOnSelectMode}
      />
    );
    return { container, user };
  };

  it("renders the title correctly", () => {
    // Verifica che il titolo sia renderizzato correttamente
    const { container } = renderGameModeSelector();
    expect(within(container).getByText("Select Game Mode")).toBeInTheDocument();
  });

  it("renders all game mode options", () => {
    // Verifica che tutte le opzioni di modalità di gioco siano renderizzate
    const { container } = renderGameModeSelector();
    expect(
      within(container).getByLabelText("Human vs Human")
    ).toBeInTheDocument();
    expect(within(container).getByLabelText("Human vs PC")).toBeInTheDocument();
    expect(within(container).getByLabelText("PC vs PC")).toBeInTheDocument();
  });

  it("selects the current mode correctly", () => {
    // Verifica che la modalità corrente sia selezionata correttamente
    const { container } = renderGameModeSelector("humanVsPC");
    expect(within(container).getByLabelText("Human vs PC")).toBeChecked();
  });

  it("calls onSelectMode when a new mode is selected", async () => {
    // Verifica che onSelectMode venga chiamato quando viene selezionata una nuova modalità
    const { container, user } = renderGameModeSelector();
    const pcVsPcRadio = within(container).getByLabelText("PC vs PC");
    await user.click(pcVsPcRadio);
    expect(mockOnSelectMode).toHaveBeenCalledWith("PCvsPC");
  });

  it("applies correct CSS classes to the container", () => {
    // Verifica che le classi CSS corrette siano applicate al contenitore
    const { container } = renderGameModeSelector();
    const selectorContainer = container.firstChild;
    expect(selectorContainer).toHaveClass(
      "p-6",
      "mx-auto",
      "w-full",
      "max-w-md",
      "rounded-lg",
      "shadow-lg",
      "bg-slate-800"
    );
  });

  it("applies correct CSS classes to the title", () => {
    // Verifica che le classi CSS corrette siano applicate al titolo
    const { container } = renderGameModeSelector();
    const title = within(container).getByText("Select Game Mode");
    expect(title).toHaveClass(
      "mb-4",
      "text-2xl",
      "font-bold",
      "text-center",
      "text-slate-200"
    );
  });

  it("applies correct CSS classes to option labels", () => {
    // Verifica che le classi CSS corrette siano applicate alle etichette delle opzioni
    const { container } = renderGameModeSelector();
    const labels = within(container)
      .getAllByRole("radio")
      .map((radio) => radio.closest("label"));
    labels.forEach((label) => {
      expect(label).toHaveClass("flex", "items-center", "space-x-2");
    });
  });
});
