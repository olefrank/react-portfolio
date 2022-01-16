import Todos from "..";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Todos", () => {
  test("Can add a new Todo", () => {
    const todoTitle = "New Todo";
    render(<Todos />);

    // enter a Todo
    userEvent.type(screen.getByRole("textbox"), todoTitle);

    // Add new Todo
    userEvent.click(screen.getByRole("button", { name: "Add" }));

    // New Todo should have been added to list
    expect(screen.getAllByRole("listitem")).toHaveLength(1);

    // New Todo should be visible
    expect(screen.getByText(todoTitle)).toBeInTheDocument();

    // Text input should be cleared
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  test("Can mark a Todo as 'Done'", () => {
    const todoTitle = "New Todo";
    render(<Todos />);

    // enter a Todo
    userEvent.type(screen.getByRole("textbox"), todoTitle);

    // Add new Todo
    userEvent.click(screen.getByRole("button", { name: "Add" }));

    // Statistics should include new new todo
    expect(screen.getByText("Total todos: 1, done: 0")).toBeInTheDocument();

    // mark todo as "Done"
    userEvent.click(screen.getByRole("checkbox", { name: todoTitle }));

    // New todo should be marked as Done
    expect(screen.getByText("Total todos: 1, done: 1")).toBeInTheDocument();
  });
});
