import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../reducs/todos/selector";
import { deleteTodoAction } from "../reducs/todos/actions";
import { addCompleteTodoAction } from "../reducs/todos/actions";

const Todos = (props) => {
  const selector = useSelector((state) => state);
  const todos = getTodos(selector);
  const dispatch = useDispatch();
  const incompleteTodos = todos.filter((item, i) => item.isCompleted === false);

  const deleteTodo = (index) => {
    const newTodos = todos.filter((item, i) => i !== index);
    dispatch(deleteTodoAction(newTodos));
    props.setIndex(todos.length);
  };

  const addCompleteTodo = (index) => {
    todos[index].isCompleted = true;
    dispatch(addCompleteTodoAction(todos));
    props.setIndex(todos.length);
  };

  return (
    <div>
      {incompleteTodos.length > 0 &&
        incompleteTodos.map((todo, i) => (
          <div key={i} index={i}>
            <p>{todo.title}</p>
            <button>編集</button>
            <button onClick={() => deleteTodo(i)}>削除</button>
            <button
              onClick={() => {
                addCompleteTodo(i);
              }}
            >
              完了
            </button>
          </div>
        ))}
    </div>
  );
};
export default Todos;
