import { useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";
import { toDosActions } from "../reducers/actions/todos";

export const useToDosRepository = () => {
  const { dispatch, setLoading } = useContext(ToDosContext);
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
    addToDo,
    modifyToDo,
    removeToDo,
    toggleToDo,
  };
};
