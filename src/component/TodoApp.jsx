import React, { useRef, useState } from "react";
import Todos from "./Todos";
import CompletedTodos from "./CompletedTodos";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../reducs/todos/actions";
import { getTodos } from "../reducs/todos/selector";

const TodoApp = () => {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const lists = getTodos(selector);

  const [index, setIndex] = useState(1);

  const addTodo = () => {
    const title = inputEl.current.value;
    if (title === "") {
      return false;
    }

    if (lists.length === index) {
      const newTodo = {
        title: title,
        isCompleted: false,
      };
      const newTodos = [...lists, newTodo];
      dispatch(addTodoAction(newTodos));
      setIndex(index + 1);
      inputEl.current.value = "";
    } else {
      const newTodo = {
        title: title,
        isCompleted: false,
      };
      const todos = [];
      todos.push(newTodo);
      dispatch(addTodoAction(todos));
      inputEl.current.value = "";
    }
  };

  return (
    <section>
      <h1>Todo-App</h1>
      <input type="text" placeholder="タスクの追加" ref={inputEl}></input>
      <button onClick={() => addTodo()}>タスクの追加</button>
      <h2>未完了</h2>
      <Todos setIndex={setIndex} index={index} />
      <h2>完了</h2>
      <CompletedTodos />
    </section>
  );
};
export default TodoApp;
