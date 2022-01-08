import Increment from "..";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Increment", () => {
  test("clicking Increment button should increment value by 1", () => {
    render(<Increment />);

    // click Increment
    userEvent.click(screen.getByRole("button", { name: "Increment" }));

    // counter should be incremented
    expect(screen.getByText("Value: 1")).toBeInTheDocument();
  });

  test("clicking Reset button should reset value to 0", () => {
    render(<Increment />);

    // click Increment
    userEvent.click(screen.getByRole("button", { name: "Increment" }));

    // click Reset
    userEvent.click(screen.getByRole("button", { name: "Reset" }));

    // counter should be reset to 0
    expect(screen.getByText("Value: 0")).toBeInTheDocument();
  });
});
