import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToDo } from "../components/ToDo";
import { generateToDo } from "./factories/todo";

describe("ToDo component", () => {
  it("should show the task description", () => {
    const toDo = generateToDo();

    render(<ToDo toDo={toDo} toggleToDo={() => {}} />);
    expect(
      screen.getByText(toDo.description, { exact: false })
    ).toBeInTheDocument();
  });
  it("should toggle a ToDo when the user clicks on the check", () => {
    const toDo = generateToDo();
    const toggleToDo = jest.fn();
    render(<ToDo toDo={toDo} toggleToDo={toggleToDo} />);
    const checkIcon = screen.getByLabelText(/toggle todo/i);
    userEvent.click(checkIcon);
    expect(toggleToDo).toBeCalled();
  });
});
