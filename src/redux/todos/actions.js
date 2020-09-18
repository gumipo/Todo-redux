export const ADD_TODO = "ADD_TODO";
export const addTodoAction = (todos) => {
  return {
    type: "ADD_TODO",
    payload: todos,
  };
};

export const DELETE_TODO = "DELETE_TODO";
export const deleteTodoAction = (todos) => {
  return {
    type: "DELETE_TODO",
    payload: todos,
  };
};

export const ADD_COMPLETE_TODO = "ADD_COMPLETE_TODO";
export const addCompleteTodoAction = (todos) => {
  return {
    type: "ADD_COMPLETE_TODO",
    payload: todos,
  };
};

export const DELETE_COMPLETE_TODO = "DELETE_COMPLETE_TODO";
export const deleteCompleteTodoAction = (todos) => {
  return {
    type: "DELETE_COMPLETE_TODO",
    payload: todos,
  };
};
