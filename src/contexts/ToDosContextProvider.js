import { useCallback, useReducer } from "react";
import { toDosReducer } from "../reducers/toDosReducer";
import { ToDosContext } from "./ToDosContext";

const initialTodos = [
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

const compareToDosByPriority = (toDo1, toDo2) => {
  return toDo1.priority > toDo2.priority
    ? 1
    : toDo1.priority < toDo2.priority
    ? -1
    : 0;
};

export const ToDosContextProvider = (props) => {
  const { children } = props;
  const [toDos, dispatch] = useReducer(toDosReducer, initialTodos);

  // Getters helpers
  const getToDos = {
    toDos: [...toDos.sort(compareToDosByPriority)],
    nPendingToDos: toDos.filter((toDo) => !toDo.done).length,
    toDoById: useCallback(
      (id) => toDos.find((toDo) => toDo.id === id),
      [toDos]
    ),
  };

  return (
    <ToDosContext.Provider value={{ getToDos, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};
