import { List } from "@material-ui/core";
import { useCallback, useContext, useState } from "react";
import { ToDosContext } from "../contexts/ToDosContext";
import { useToDosRepository } from "../hooks/useToDosRepository";
import { Confirm } from "./Confirm";
import { ToDo } from "./ToDo";

export const ToDosList = () => {
  const {
    getToDos: { toDos },
  } = useContext(ToDosContext);
  const { removeToDo, toggleToDo } = useToDosRepository();
  const [openedConfirm, setOpenedConfirm] = useState(false);
  const [idConfirm, setIdConfirm] = useState(null);
  const openConfirm = useCallback((id) => {
    setIdConfirm(id);
    setOpenedConfirm(true);
  }, []);
  const closeConfirm = useCallback((id) => {
    setIdConfirm(null);
    setOpenedConfirm(false);
  }, []);
  const deleteToDo = () => {
    removeToDo(idConfirm);
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
