import { List } from "@material-ui/core";
import { useCallback, useContext, useState } from "react";
import { ToDosContext } from "../contexts/ToDosContext";
import { toDosActions } from "../reducers/actions/todos";
import { Confirm } from "./Confirm";
import { ToDo } from "./ToDo";

export const ToDosList = () => {
  const { toDos, dispatch } = useContext(ToDosContext);
  const [openedConfirm, setOpenedConfirm] = useState(false);
  const [idConfirm, setIdConfirm] = useState(null);
  const toggleToDo = useCallback(
    (idToDo) => {
      dispatch(toDosActions.toggle(idToDo));
    },
    [dispatch]
  );
  const openConfirm = useCallback((id) => {
    setIdConfirm(id);
    setOpenedConfirm(true);
  }, []);
  const closeConfirm = useCallback((id) => {
    setIdConfirm(null);
    setOpenedConfirm(false);
  }, []);
  const deleteToDo = () => {
    dispatch(toDosActions.remove(idConfirm));
    closeConfirm();
  };
  return (
    <>
      <List>
        {toDos.map((toDo) => (
          <ToDo
            key={toDo.id}
            toDo={toDo}
            toggleToDo={toggleToDo}
            openConfirm={openConfirm}
          />
        ))}
      </List>
      <Confirm
        open={openedConfirm}
        onClose={closeConfirm}
        onConfirm={deleteToDo}
      />
    </>
  );
};
