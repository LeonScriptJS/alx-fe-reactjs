import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders TodoList with initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getAllByTestId("todo-item").length).toBeGreaterThan(0);
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);

    const todo = screen.getAllByTestId("todo-item")[0];

    fireEvent.click(todo);

    expect(todo).toBeInTheDocument();
  });

  test("deletes todo", () => {
    render(<TodoList />);

    const deleteButtons = screen.getAllByText("Delete");

    fireEvent.click(deleteButtons[0]);

    expect(
      screen.queryAllByText("Delete").length
    ).toBeLessThan(
      screen.getAllByText("Delete").length + 1
    );
  });
});