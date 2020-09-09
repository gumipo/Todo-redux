import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, getCompleteTodos } from "../redux/todos/selector";
import {
  addTodoAction,
  deleteTodoAction,
  addCompleteTodoAction,
  deleteCompleteTodoAction,
} from "../redux/todos/actions";
import { useEffect } from "react";

const Todos = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const todoList = getTodos(selector);
  const completeTodoList = getCompleteTodos(selector);

  const [completeTodoIndex, setCompleteTodoIndex] = useState(0);

  const deleteTodo = (index) => {
    const newTodos = todoList.filter((item, i) => i !== index);
    dispatch(deleteTodoAction(newTodos));
  };

  const deleteCompleteTodo = (index) => {
    const newTodos = completeTodoList.filter((item, i) => i !== index);
    dispatch(deleteCompleteTodoAction(newTodos));
  };

  const addCompleteTodo = (index) => {
    if (completeTodoIndex === 0) {
      const newTodoList = todoList.filter((item, i) => i === index);
      dispatch(addCompleteTodoAction(newTodoList));
      deleteTodo(index);
    } else {
      const newCompleteTodo = todoList.filter((item, i) => i === index);
      const newCompleteTodoList = [...completeTodoList, ...newCompleteTodo];
      dispatch(addCompleteTodoAction(newCompleteTodoList));
      deleteTodo(index);
    }
  };
  const reversTodo = (index) => {
    if (todoList.length === 0) {
      const newTodoList = completeTodoList.filter((item, i) => i === index);
      dispatch(addTodoAction(newTodoList));
      deleteCompleteTodo(index);
    } else {
      const newTodo = completeTodoList.filter((item, i) => i === index);
      const newTodoList = [...todoList, ...newTodo];
      dispatch(addTodoAction(newTodoList));
      deleteCompleteTodo(index);
    }
  };

  useEffect(() => {
    setCompleteTodoIndex(completeTodoList.length);
  }, [completeTodoList.length]);

  return (
    <div>
      <h2>未完了</h2>
      {todoList.length > 0 ? (
        todoList.map((todo, i) => (
          <div key={i} index={i}>
            <p>{todo.title}</p>

            <button>編集</button>
            <button onClick={() => deleteTodo(i)}>削除</button>
            <button onClick={() => addCompleteTodo(i)}>完了</button>
          </div>
        ))
      ) : (
        <p>やることみつけろ</p>
      )}
      <h2>完了</h2>
      {completeTodoList.length > 0 ? (
        completeTodoList.map((todo, i) => (
          <div key={i} index={i}>
            <p>{todo.title}</p>
            <button>編集</button>
            <button onClick={() => deleteCompleteTodo(i)}>削除</button>
            <button onClick={() => reversTodo(i)}>戻す</button>
          </div>
        ))
      ) : (
        <p>お前はまだなにも完了できていない</p>
      )}
    </div>
  );
};
export default Todos;
