import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FormToDo } from "../components/FormToDo";
import { useToDosRepository } from "../hooks/useToDosRepository";

export const PageEditToDo = () => {
  const { id } = useParams();
  const [toDo, setToDo] = useState();
  const { getToDoById } = useToDosRepository();

  // When the page is mounted, it loads the list of ToDos from the repository
  useEffect(() => {
    getToDoById(id).then((toDo) => setToDo(toDo));
  }, [id, getToDoById]);

  return <FormToDo toDo={toDo} />;
};
