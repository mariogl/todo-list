import { render, screen } from "@testing-library/react";
import { ToDo } from "../components/ToDo";
import { generateToDo } from "./factories/todo";

describe("ToDo component", () => {
  it("should show the task description", () => {
    const toDo = generateToDo();
    render(<ToDo toDo={toDo} />);
    expect(
      screen.getByText(toDo.description, { exact: false })
    ).toBeInTheDocument();
  });
});
