import { useCallback, useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";
import { toDosActions } from "../reducers/actions/todos";

const compareToDosByPriority = (toDo1, toDo2) => {
  return toDo1.priority > toDo2.priority
    ? 1
    : toDo1.priority < toDo2.priority
    ? -1
    : 0;
};

export const useToDosRepository = () => {
  const { toDos, dispatch, setLoading } = useContext(ToDosContext);

  // Getters
  const sortedToDos = [...toDos.sort(compareToDosByPriority)];
  const nPendingToDos = toDos.filter((toDo) => !toDo.done).length;
  const toDoById = (id) => toDos.find((toDo) => toDo.id === id);

  // Mutations
  const addToDo = (toDo) => {
    setLoading(true);
    dispatch(toDosActions.add(toDo));
    setLoading(false);
  };
  const modifyToDo = (toDo) => {
    setLoading(true);
    dispatch(toDosActions.modify(toDo));
    setLoading(false);
  };
  const removeToDo = (idToDo) => {
    setLoading(true);
    dispatch(toDosActions.remove(idToDo));
    setLoading(false);
  };
  const toggleToDo = (idToDo) => {
    setLoading(true);
    dispatch(toDosActions.toggle(idToDo));
    setLoading(false);
  };

  return {
    toDos: sortedToDos,
    nPendingToDos,
    toDoById,
    addToDo,
    modifyToDo,
    removeToDo,
    toggleToDo,
  };
};
