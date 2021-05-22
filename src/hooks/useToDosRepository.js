import { useCallback, useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";
import { toDosActions } from "../reducers/actions/todos";
import { useFetch } from "./useFetch";

const apiUrl = process.env.REACT_APP_API_URL;

export const useToDosRepository = () => {
  const { request } = useFetch();
  const { getToDos, dispatch, loading, setLoading } = useContext(ToDosContext);

  // Load data from API
  const loadToDos = useCallback(async () => {
    setLoading(true);
    const toDos = await request(apiUrl);
    dispatch(toDosActions.load(toDos));
    setLoading(false);
  }, [dispatch, request, setLoading]);

  // Mutations to API
  const addToDo = async (toDo) => {
    setLoading(true);
    const newToDo = await request(apiUrl, "POST", toDo);
    dispatch(toDosActions.add(newToDo));
    setLoading(false);
  };

  const modifyToDo = async (toDo) => {
    setLoading(true);
    const updatedToDo = await request(apiUrl + toDo.id, "PUT", toDo);
    dispatch(toDosActions.modify(updatedToDo));
    setLoading(false);
  };

  const removeToDo = async (idToDo) => {
    setLoading(true);
    const removed = await request(apiUrl + idToDo, "DELETE", null, true);
    if (removed.status === 200) {
      dispatch(toDosActions.remove(idToDo));
    }
    setLoading(false);
  };

  const toggleToDo = async (toDo) => {
    setLoading(true);
    await request(apiUrl + toDo.id, "PATCH", { done: !toDo.done });
    dispatch(toDosActions.toggle(toDo.id));
    setLoading(false);
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
