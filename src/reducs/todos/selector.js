import { createSelector } from "reselect";

const todoSelector = (state) => state.todos;

export const getTodos = createSelector([todoSelector], (state) => state.list);
