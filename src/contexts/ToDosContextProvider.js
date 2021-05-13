import { ToDosContext } from "./ToDosContext";

const toDos = [
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

export const ToDosContextProvider = (props) => {
  const { children } = props;
  return (
    <ToDosContext.Provider value={{ toDos }}>{children}</ToDosContext.Provider>
  );
};
