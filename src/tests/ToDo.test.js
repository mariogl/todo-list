import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToDo } from "../components/ToDo";
import { generateToDo } from "./factories/todo";

let toDo;

beforeEach(() => {
  toDo = generateToDo();
});

describe("ToDo component", () => {
  it("should show the task description", () => {
    render(<ToDo toDo={toDo} toggleToDo={() => {}} openConfirm={() => {}} />);
    expect(
      screen.getByText(toDo.description, { exact: false })
    ).toBeInTheDocument();
  });

  it("should toggle a ToDo when the user clicks on the check", () => {
    const toggleToDo = jest.fn();
    render(<ToDo toDo={toDo} toggleToDo={toggleToDo} openConfirm={() => {}} />);
    const checkIcon = screen.getByLabelText(/toggle todo/i);
    userEvent.click(checkIcon);
    expect(toggleToDo).toBeCalled();
  });
});
