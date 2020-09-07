import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../reducs/todos/selector";
import { deleteCompleteTodoAction } from "../reducs/todos/actions";

const CompletedTodos = (props) => {
  const selector = useSelector((state) => state);
  const todos = getTodos(selector);
  const dispatch = useDispatch();
  const completeTodos = todos.filter((item, i) => item.isCompleted === true);

  const deleteCompleteTodo = (index) => {
    const newCompleteTodos = completeTodos.filter((item, i) => i !== index);
    dispatch(deleteCompleteTodoAction(newCompleteTodos));
  };

  return (
    <div>
      {completeTodos.length > 0 &&
        completeTodos.map((completetodo, i) => (
          <div key={i} index={i}>
            <p>{completetodo.title}</p>
            <button>編集</button>
            <button onClick={() => deleteCompleteTodo(i)}>削除</button>
            <button>戻す</button>
          </div>
        ))}
    </div>
  );
};
export default CompletedTodos;
