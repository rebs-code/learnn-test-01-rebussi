// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Footer from "../../src/components/Footer";

describe("Footer", () => {
  // funzione helper per renderizzare il componente Footer e restituire il container
  const renderFooter = () => {
    const { container } = render(<Footer />);
    return container;
  };

  it("renders the footer element", () => {
    const container = renderFooter();
    // verifica che il footer sia presente nel documento
    // dando footer in html ha il role contentinfo in automatico
    const footerElement = within(container).getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  it("displays the developer name", () => {
    const container = renderFooter();
    // verifica che il testo "Giacomo Rebussi" sia presente nel documento
    expect(within(container).getByText(/Giacomo Rebussi/)).toBeInTheDocument();
  });

  it("displays the company name", () => {
    const container = renderFooter();
    // verifica che il testo "Learnn" sia presente nel documento
    expect(within(container).getByText(/Learnn/)).toBeInTheDocument();
  });

  it("displays the correct date", () => {
    const container = renderFooter();
    // verifica che il testo "September 2024" sia presente nel documento
    expect(within(container).getByText(/September 2024/)).toBeInTheDocument();
  });

  it("has the correct CSS classes", () => {
    const container = renderFooter();
    // verifica che il footer abbia le classi corrette
    const footerElement = within(container).getByRole("contentinfo");
    expect(footerElement).toHaveClass(
      "py-4",
      "w-full",
      "bg-slate-900",
      "text-slate-300"
    );
  });

  it("contains a container div with correct classes", () => {
    const container = renderFooter();
    // verifica che il container div abbia le classi corrette
    const containerDiv = within(container)
      .getByText(/Developed by/)
      .closest("div");
    expect(containerDiv).toHaveClass(
      "container",
      "px-4",
      "mx-auto",
      "text-center"
    );
  });

  it("has the correct text structure", () => {
    const container = renderFooter();
    const developerText = within(container).getByText(/Developed by/);
    const dateText = within(container).getByText(/September 2024/);
    // verifica che il testo "Developed by" abbia la classe "text-sm"
    expect(developerText).toHaveClass("text-sm");
    // verifica che il testo "September 2024" abbia le classi "mt-1" e "text-xs"
    expect(dateText).toHaveClass("mt-1", "text-xs");
  });
});
