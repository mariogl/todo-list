import { lorem, datatype } from "faker";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  description: lorem.words(4),
  priority: datatype.number({ min: 1, max: 3 }),
  done: datatype.boolean(),
}));

export const generateToDo = (params) => factory.build(params);
export const generateToDos = (params) => {
  const nToDos = Math.random() * 5;
  return factory.buildList(nToDos, params);
};
