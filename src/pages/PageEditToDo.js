import { useContext, useMemo } from "react";
import { useParams } from "react-router";
import { FormToDo } from "../components/FormToDo";
import { ToDosContext } from "../contexts/ToDosContext";

export const PageEditToDo = () => {
  const { id } = useParams();
  const {
    getToDos: { toDoById },
  } = useContext(ToDosContext);
  const toDo = useMemo(() => toDoById(+id), [id, toDoById]);
  return <FormToDo toDo={toDo} />;
};
