import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToDosList } from "../components/ToDosList";
import { generateToDos } from "./factories/todo";

beforeEach(() => {
  render(<ToDosList />);
});

describe("ToDosList component", () => {
  it("should render n ToDos", () => {
    const toDos = generateToDos();
    expect(screen.getAllByRole("listitem")).toHaveLength(toDos.length);
  });

  it("should render the list", () => {
    const toDos = generateToDos();
    const toDosElements = screen.getAllByRole("listitem");
    toDosElements.forEach((toDoElement, i) => {
      expect(toDoElement).toHaveTextContent(toDos[i].description);
    });
  });

  describe("confirm dialog for removing a ToDo", () => {
    it("should show a confirm dialog when the user clicks on remove ToDo", async () => {
      const removeIcon = screen.getByLabelText(/remove todo/i);
      userEvent.click(removeIcon);
      expect(await screen.findByText(/delete todo/i)).toBeInTheDocument();
    });

    it("should close the confirm dialog when the user clicks on dialog actions", async () => {
      const deleteToDo = jest.fn();
      const removeIcon = screen.getByLabelText(/remove todo/i);
      userEvent.click(removeIcon);
      const yesAction = await screen.findByRole("button", { name: "yes" });
      userEvent.click(yesAction);
      expect(deleteToDo).toBeCalled();
    });
  });
});
