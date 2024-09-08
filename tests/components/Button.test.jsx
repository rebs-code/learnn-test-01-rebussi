// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

import Button from "../../src/components/ui/Button";

describe("Button", () => {
  it("renders children correctly", () => {
    // render renders the component in a virtual DOM provided by @testing-library/react
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Handle Click</Button>);
    await userEvent.click(screen.getByText("Handle Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText("Disabled")).toBeDisabled();
  });

  it("applies correct color classes", () => {
    render(<Button color="amber">Amber</Button>);
    const button = screen.getByText("Amber");
    expect(button).toHaveClass("bg-amber-500");
    expect(button).toHaveClass("hover:bg-amber-700");
    expect(button).toHaveClass("active:bg-amber-800");
  });
});
