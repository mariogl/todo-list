import { useCallback, useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";
import { toDosActions } from "../reducers/actions/todos";
import { useFetch } from "./useFetch";

const apiUrl = `${process.env.REACT_APP_API_URL}todos/`;

export const useToDosRepository = () => {
  const { request } = useFetch();
  const { getToDos, dispatch, loading, setLoading } = useContext(ToDosContext);

  // Load data from API
  const loadToDos = useCallback(async () => {
    setLoading(true);
    const toDos = await request(apiUrl);
    if (typeof toDos !== "undefined") {
      dispatch(toDosActions.load(toDos.data));
    }
    setLoading(false);
  }, [dispatch, request, setLoading]);

  const getToDoById = useCallback(
    async (toDoId) => {
      setLoading(true);
      const toDo = await request(`${apiUrl}${toDoId}`);
      setLoading(false);
      return toDo;
    },
    [request, setLoading]
  );

  // Mutations to API
  const addToDo = async (toDo) => {
    setLoading(true);
    const newToDo = await request(`${apiUrl}todo`, "POST", toDo);
    dispatch(toDosActions.add(newToDo));
    setLoading(false);
  };

  const modifyToDo = async (toDo) => {
    setLoading(true);
    const updatedToDo = await request(`${apiUrl}todo`, "PUT", toDo);
    dispatch(toDosActions.modify(updatedToDo));
    setLoading(false);
  };

  const removeToDo = async (toDoId) => {
    setLoading(true);
    const removed = await request(
      `${apiUrl}todo/${toDoId}`,
      "DELETE",
      null,
      true,
      true
    );
    if (removed.status === 200) {
      dispatch(toDosActions.remove(toDoId));
    }
    setLoading(false);
  };

  const toggleToDo = async (toDo) => {
    setLoading(true);
    await request(apiUrl + "todo", "PUT", { ...toDo, done: !toDo.done });
    dispatch(toDosActions.toggle(toDo.id));
    setLoading(false);
  };

  return {
    getToDos,
    loading,
    loadToDos,
    getToDoById,
    addToDo,
    modifyToDo,
    removeToDo,
    toggleToDo,
  };
};
