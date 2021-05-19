import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToDosList } from "../components/ToDosList";
import { ToDosContext } from "../contexts/ToDosContext";
import { generateToDos } from "./factories/todo";

let toDos;

beforeEach(() => {
  toDos = generateToDos();
  render(
    <ToDosContext.Provider value={{ getToDos: { toDos } }}>
      <ToDosList />
    </ToDosContext.Provider>
  );
});
afterAll(() => {
  screen.debug();
});

describe("ToDosList component", () => {
  describe("list of ToDos", () => {
    it("should render n ToDos", () => {
      const toDosElements = screen.getAllByLabelText("ToDo");
      expect(toDosElements).toHaveLength(toDos.length);
    });

    it("should render the list", () => {
      const toDosElements = screen.getAllByLabelText("ToDo");
      toDosElements.forEach((toDoElement, i) => {
        expect(toDoElement).toHaveTextContent(toDos[i].description);
      });
    });
  });

  describe("confirm dialog for removing a ToDo", () => {
    it("should show a confirm dialog when the user clicks on remove ToDo", async () => {
      const removeIcons = screen.getAllByLabelText(/remove todo/i);
      userEvent.click(removeIcons[0]);
      expect(await screen.findByText(/delete todo/i)).toBeInTheDocument();
    });

    it.skip("should close the confirm dialog when the user clicks on dialog actions", async () => {
      const deleteToDo = jest.fn(() => {});
      const removeIcons = screen.getAllByLabelText(/remove todo/i);
      userEvent.click(removeIcons[0]);
      const yesAction = await screen.findByRole("button", { name: /yes/i });
      userEvent.click(yesAction);
      expect(deleteToDo).toBeCalled();
    });
  });
});
