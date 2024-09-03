import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders TodoList and displays initial todos", () => {
    render(<TodoList />);

    // Check if the default todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Master JavaScript")).toBeInTheDocument();
  });

  test("allows users to add a new todo", () => {
    render(<TodoList />);

    // Simulate user input and form submission
    fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
      target: { value: "New Todo" },
    });
    fireEvent.click(screen.getByText("Add Todo"));

    // Verify that the new todo appears in the list
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("allows users to toggle a todo item", () => {
    render(<TodoList />);

    // Get a todo item and click to toggle its completed state
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);

    // Verify that the todo item is crossed out (completed)
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Click again to toggle back
    fireEvent.click(todoItem);

    // Verify that the todo item is not crossed out (not completed)
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("allows users to delete a todo item", () => {
    render(<TodoList />);

    // Simulate deleting a todo item
    const deleteButton = screen.getAllByText("Delete")[0]; // Assumes first delete button
    fireEvent.click(deleteButton);

    // Verify that the todo item is removed from the list
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
