import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  getByTestId,
  screen,
} from "@testing-library/react";
import Button from "./components/Button";
import FormInput from "./components/FormInput";
import userEvent from "@testing-library/user-event";

describe("Application Tests", () => {
  afterEach(cleanup);

  it("button should render", () => {
    render(<Button />);
    const buttonEl = screen.getByTestId("buttonTest");

    expect(buttonEl).toBeInTheDocument();
  });

  it("input should render", () => {
    render(<FormInput />);
    const inputEl = screen.getByTestId("inputTest");

    expect(inputEl).toBeInTheDocument();
  });

  it("should get right value if typed into", () => {
    render(<FormInput />);
    const inputEl = screen.getByTestId("inputTest");

    userEvent.type(inputEl, "Hejhej");
    expect(inputEl.value).toBe("Hejhej");
  });
});
