import { List } from "@material-ui/core";
import { useCallback, useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";
import { toDosActions } from "../reducers/actions/todos";
import { ToDo } from "./ToDo";

export const ToDosList = () => {
  const { toDos, dispatch } = useContext(ToDosContext);
  console.log(toDos);
  const toggleToDo = useCallback(
    (idToDo) => {
      dispatch(toDosActions.toggle(idToDo));
    },
    [dispatch]
  );
  return (
    <List>
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} toggleToDo={toggleToDo} />
      ))}
    </List>
  );
};
