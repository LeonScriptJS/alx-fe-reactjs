import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Testing Component", () => {

  test("Proper implementation of TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  test("Testing component rendering", () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText("Add todo")).toBeInTheDocument();
  });

  test("Add todo functionality", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add todo");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

});