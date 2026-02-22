import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {

  test("Proper implementation of TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  test("Testing component implementation", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add todo");
    expect(input).toBeInTheDocument();
  });

});