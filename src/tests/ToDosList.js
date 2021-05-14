import { render, screen } from "@testing-library/react";
import { ToDosList } from "../components/ToDosList";
import { generateToDos } from "./factories/todo";

describe("ToDosList component", () => {
  it("should render n ToDos", () => {
    const toDos = generateToDos();
    render(<ToDosList />);
    expect(screen.getAllByRole("listitem")).toHaveLength(toDos.length);
  });
  it("should render the list", () => {
    const toDos = generateToDos();
    render(<ToDosList />);
    screen.debug();
    const toDosElements = screen.getAllByRole("listitem");
    toDosElements.forEach((toDoElement, i) => {
      expect(toDoElement).toHaveTextContent(toDos[i].description);
    });
  });
});
