import { toDosActionTypes } from "./actions/todos";

export const toDosReducer = (toDos, action) => {
  switch (action.type) {
    case toDosActionTypes.add:
      return [
        ...toDos,
        {
          id: toDos.length ? toDos[toDos.length - 1].id + 10 : 1,
          description: action.payload.description,
          priority: action.payload.priority,
          done: false,
        },
      ];
    case toDosActionTypes.modify:
      return toDos.map((toDo) =>
        toDo.id === action.payload.id
          ? {
              ...toDo,
              description: action.payload.description,
              priority: action.payload.priority,
            }
          : toDo
      );
    case toDosActionTypes.toggle:
      return toDos.map((toDo) =>
        toDo.id === action.payload ? { ...toDo, done: !toDo.done } : toDo
      );
    default:
      return toDos;
  }
};
