import { useCallback, useContext, useState } from "react";
import { ToDosContext } from "../contexts/ToDosContext";
import { toDosActions } from "../reducers/actions/todos";
import { useFetch } from "./useFetch";

const apiUrl = process.env.REACT_APP_API_URL;

export const useToDosRepository = () => {
  const { request } = useFetch();
  const [loading, setLoading] = useState(false);
  const { getToDos, dispatch } = useContext(ToDosContext);

  // Set loading => do things => unset loading
  const withLoading = async (cb) => {
    setLoading(true);
    await cb();
    setLoading(false);
  };

  // Load data from API
  const loadToDos = useCallback(() => {
    withLoading(async () => {
      const toDos = await request(apiUrl);
      dispatch(toDosActions.load(toDos));
    });
  }, [dispatch, request]);

  // Mutations to API
  const addToDo = async (toDo) => {
    await withLoading(async () => {
      const newToDo = await request(apiUrl, "POST", toDo);
      dispatch(toDosActions.add(newToDo));
    });
  };

  const modifyToDo = async (toDo) => {
    await withLoading(async () => {
      const updatedToDo = await request(apiUrl + toDo.id, "PUT", toDo);
      dispatch(toDosActions.modify(updatedToDo));
    });
  };

  const removeToDo = async (idToDo) => {
    await withLoading(async () => {
      const removed = await request(apiUrl + idToDo, "DELETE", null, true);
      if (removed.status === 200) {
        dispatch(toDosActions.remove(idToDo));
      }
    });
  };

  const toggleToDo = async (toDo) => {
    await withLoading(async () => {
      await request(apiUrl + toDo.id, "PATCH", { done: !toDo.done });
      dispatch(toDosActions.toggle(toDo.id));
    });
  };

  return {
    getToDos,
    loading,
    loadToDos,
    addToDo,
    modifyToDo,
    removeToDo,
    toggleToDo,
  };
};
