import { toDosActionTypes } from "./actions/todos";

export const toDosReducer = (toDos, action) => {
  switch (action.type) {
    case toDosActionTypes.toggle:
      return toDos.map((toDo) =>
        toDo.id === action.payload ? { ...toDo, done: !toDo.done } : toDo
      );
    default:
      return toDos;
  }
};
