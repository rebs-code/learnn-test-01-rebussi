// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import MainContainer from "../../src/components/MainContainer";

describe("MainContainer", () => {
  // Funzione helper per renderizzare il componente MainContainer
  const renderMainContainer = (children) => {
    const { container } = render(<MainContainer>{children}</MainContainer>);
    return { container };
  };

  it("renders children correctly", () => {
    // Verifica che i children siano renderizzati correttamente
    const { container } = renderMainContainer(<div>Test Content</div>);
    expect(within(container).getByText("Test Content")).toBeInTheDocument();
  });

  it("applies correct CSS classes to the main container", () => {
    // Verifica che le classi CSS corrette siano applicate al contenitore principale
    const { container } = renderMainContainer(<div>Test</div>);
    const mainContainer = container.firstChild;
    expect(mainContainer).toHaveClass(
      "flex",
      "justify-center",
      "items-center",
      "p-4",
      "min-h-screen",
      "bg-gray-100"
    );
  });

  it("applies correct CSS classes to the phone screen container", () => {
    // Verifica che le classi CSS corrette siano applicate al contenitore dello schermo del telefono
    const { container } = renderMainContainer(<div>Test</div>);
    const phoneContainer = container.firstChild.firstChild;
    expect(phoneContainer).toHaveClass(
      "overflow-hidden",
      "w-full",
      "max-w-md",
      "bg-white",
      "rounded-3xl",
      "shadow-xl"
    );
  });

  it("applies correct CSS classes to the content container", () => {
    // Verifica che le classi CSS corrette siano applicate al contenitore del contenuto
    const { container } = renderMainContainer(<div>Test</div>);
    const contentContainer = container.firstChild.firstChild.firstChild;
    expect(contentContainer).toHaveClass("p-4", "sm:p-6");
  });

  it("renders nested structure correctly", () => {
    // Verifica che la struttura annidata sia renderizzata correttamente
    const { container } = renderMainContainer(<div>Test</div>);
    const mainContainer = container.firstChild;
    const phoneContainer = mainContainer.firstChild;
    const contentContainer = phoneContainer.firstChild;

    expect(mainContainer).toContainElement(phoneContainer);
    expect(phoneContainer).toContainElement(contentContainer);
    expect(contentContainer).toHaveTextContent("Test");
  });
});
