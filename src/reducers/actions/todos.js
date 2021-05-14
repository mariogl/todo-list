export const toDosActionTypes = {
  toggle: "TOGGLE_TODO",
};
export const toDosActions = {
  toggle: (idToDo) => ({
    type: toDosActionTypes.toggle,
    payload: idToDo,
  }),
};
