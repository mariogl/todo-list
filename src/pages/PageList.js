import { useEffect } from "react";
import { AddAction } from "../components/AddAction";
import { Info } from "../components/Info";
import { ToDosList } from "../components/ToDosList";
import { useToDosRepository } from "../hooks/useToDosRepository";

export const PageList = () => {
  const { loading, loadToDos } = useToDosRepository();

  // When the page is mounted, it loads the list of ToDos from the repository
  useEffect(() => {
    loadToDos();
  }, [loadToDos]);
  return (
    <>
      {!loading && <AddAction />}
      <Info />
      <ToDosList />
    </>
  );
};
