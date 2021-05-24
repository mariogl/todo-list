import { useMemo, useReducer, useState } from "react";
import { toDosReducer } from "../reducers/toDosReducer";
import { ToDosContext } from "./ToDosContext";

const compareToDosByPriority = (toDo1, toDo2) => {
  return toDo1.priority > toDo2.priority
    ? 1
    : toDo1.priority < toDo2.priority
    ? -1
    : 0;
};

export const ToDosContextProvider = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [toDos, dispatch] = useReducer(toDosReducer, []);

  // Getter object with helpers
  const getToDos = useMemo(() => {
    return {
      sortedToDos: [...toDos.sort(compareToDosByPriority)],
      nPendingToDos: toDos.filter((toDo) => !toDo.done).length,
      toDoById: (id) => toDos.find((toDo) => toDo.id === id),
    };
  }, [toDos]);

  return (
    <ToDosContext.Provider
      value={{ getToDos, dispatch, loading, setLoading, error, setError }}
    >
      {children}
    </ToDosContext.Provider>
  );
};
