import { render, screen } from "@testing-library/react";
import { Info } from "../components/Info";
import { ToDosContext } from "../contexts/ToDosContext";

describe("Info component", () => {
  describe("When there are pending tasks", () => {
    it("should show the number of pending tasks", () => {
      const nPendingToDos = 3;
      render(
        <ToDosContext.Provider value={{ getToDos: { nPendingToDos } }}>
          <Info />
        </ToDosContext.Provider>
      );
      expect(screen.getByText(/you have 3 pending todos/i)).toBeInTheDocument();
    });
  });

  describe("When there are no pending tasks", () => {
    it("should tell the user that there are no pending tasks", () => {
      const nPendingToDos = 0;
      render(
        <ToDosContext.Provider value={{ getToDos: { nPendingToDos } }}>
          <Info />
        </ToDosContext.Provider>
      );
      expect(
        screen.getByText(/you don't have pending todos!/i)
      ).toBeInTheDocument();
    });
  });
});
