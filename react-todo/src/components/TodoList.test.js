import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

describe("TodoList Testing Component", () => {

  test("Checks for the implementation of the testing component", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  test("Checks for the proper implementation of the TodoList component", () => {
    render(<TodoList />);
    const input = screen.getByText(/Todo List/i);
    expect(input).toBeInTheDocument();
  });

  test("Checks for the proper implementation of the TodoList.test.js component", () => {
    render(<TodoList />);
    expect(screen.getByTestId("todo-item")).toBeInTheDocument();
  });

});