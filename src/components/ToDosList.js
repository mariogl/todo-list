import { List } from "@material-ui/core";
import { ToDo } from "./ToDo";

const todos = [
  {
    id: 1,
    description: "Call John",
    priority: 3,
    done: false,
  },
  {
    id: 2,
    description: "Call Jane",
    priority: 1,
    done: true,
  },
  {
    id: 3,
    description: "Call mum",
    priority: 2,
    done: false,
  },
];

export const ToDosList = () => {
  return (
    <List>
      {todos.map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} />
      ))}
    </List>
  );
};
