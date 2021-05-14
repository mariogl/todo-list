import { useReducer } from "react";
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

const nPendingToDos = initialTodos.filter((toDo) => !toDo.done).length;
export const ToDosContextProvider = (props) => {
  const { children } = props;
  const [toDos, dispatch] = useReducer(toDosReducer, initialTodos);
  return (
    <ToDosContext.Provider value={{ toDos, nPendingToDos, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};
