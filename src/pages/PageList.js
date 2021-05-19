import { useContext } from "react";
import { AddAction } from "../components/AddAction";
import { Info } from "../components/Info";
import { ToDosList } from "../components/ToDosList";
import { ToDosContext } from "../contexts/ToDosContext";

export const PageList = () => {
  const { loading } = useContext(ToDosContext);
  return (
    <>
      <Info />
      <ToDosList />
      {!loading && <AddAction />}
    </>
  );
};
