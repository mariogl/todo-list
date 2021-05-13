import { List } from "@material-ui/core";
import { useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";
import { ToDo } from "./ToDo";

export const ToDosList = () => {
  const { toDos } = useContext(ToDosContext);
  return (
    <List>
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} />
      ))}
    </List>
  );
};
