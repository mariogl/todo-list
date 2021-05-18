import { useContext, useMemo } from "react";
import { useParams } from "react-router";
import { FormToDo } from "../components/FormToDo";
import { ToDosContext } from "../contexts/ToDosContext";

export const PageEditToDo = () => {
  const { id } = useParams();
  const { toDos } = useContext(ToDosContext);
  const toDo = useMemo(
    () => toDos.find((toDo) => toDo.id === +id),
    [id, toDos]
  );
  return <FormToDo toDo={toDo} />;
};
