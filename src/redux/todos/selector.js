import { createSelector } from "reselect";

const todoSelector = (state) => state.todos;

export const getTodos = createSelector([todoSelector], (state) => state.list);

const completeTodoSelector = (state) => state.completeTodos;
export const getCompleteTodos = createSelector(
  [completeTodoSelector],
  (state) => state.list
);
