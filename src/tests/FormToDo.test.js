import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormToDo } from "../components/FormToDo";
import { ToDosContext } from "../contexts/ToDosContext";
import { generateToDo } from "./factories/todo";

describe("FormToDo component", () => {
  it("should render the new ToDo page", () => {
    render(
      <ToDosContext.Provider value={{}}>
        <FormToDo />
      </ToDosContext.Provider>
    );
    expect(
      screen.getByRole("heading", { name: /new todo/i })
    ).toBeInTheDocument();
  });

  it("should render the modify ToDo page when it receives a ToDo", () => {
    const toDo = generateToDo();
    render(
      <ToDosContext.Provider value={{}}>
        <FormToDo toDo={toDo} />
      </ToDosContext.Provider>
    );
    expect(
      screen.getByRole("heading", { name: /modify todo/i })
    ).toBeInTheDocument();
  });

  describe("when the user submits the form with empty fields", () => {
    it("should show validation messages", async () => {
      render(
        <ToDosContext.Provider value={{}}>
          <FormToDo />
        </ToDosContext.Provider>
      );
      userEvent.click(screen.getByRole("button", { name: /create/i }));
      expect(
        await screen.findByText(/don't forget to enter the task description/i)
      ).toBeInTheDocument();
    });
  });
});
