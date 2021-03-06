import { List } from "@material-ui/core";
import { useCallback, useState } from "react";
import { useToDosRepository } from "../hooks/useToDosRepository";
import { Confirm } from "./Confirm";
import { ToDo } from "./ToDo";

export const ToDosList = () => {
  const { getToDos, toggleToDo, removeToDo } = useToDosRepository();
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
        {getToDos.sortedToDos.map((toDo) => (
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
