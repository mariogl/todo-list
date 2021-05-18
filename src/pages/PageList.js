import { AddAction } from "../components/AddAction";
import { Info } from "../components/Info";
import { ToDosList } from "../components/ToDosList";

export const PageList = () => {
  return (
    <>
      <Info />
      <ToDosList />
      <AddAction />
    </>
  );
};
