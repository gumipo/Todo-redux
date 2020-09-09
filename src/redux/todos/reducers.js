import * as Actions from "./actions";
import initialState from "../Store/initialState";

export const TodoReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.DELETE_TODO:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};

export const completeTodoReducer = (
  state = initialState.completeTodos,
  action
) => {
  switch (action.type) {
    case Actions.ADD_COMPLETE_TODO:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.DELETE_COMPLETE_TODO:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};
