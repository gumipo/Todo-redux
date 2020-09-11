import React, { useRef, useState } from "react";
import TodoList from "./TodoList";

import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../redux/todos/actions";
import { getTodos } from "../redux/todos/selector";
import { useEffect } from "react";

import styled from "styled-components";

const TodoApp = () => {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const todoList = getTodos(selector);

  const [index, setIndex] = useState(0);

  const addTodo = () => {
    const title = inputEl.current.value;
    if (!title.length) {
      return false;
    }
    //追加の場合
    if (todoList.length === index) {
      const newTodo = {
        title: title,
      };
      const newTodos = [...todoList, newTodo];
      dispatch(addTodoAction(newTodos));
      inputEl.current.value = "";
      //新規の場合
    } else {
      const newTodo = {
        title: title,
      };
      const todos = [];
      todos.push(newTodo);
      //actionに投げる
      dispatch(addTodoAction(todos));
      inputEl.current.value = "";
    }
  };

  useEffect(() => {
    setIndex(todoList.length);
  }, [todoList.length]);

  return (
    <StyleTodo>
      <Title>Todo-App</Title>
      <input type="text" placeholder="タスクの追加" ref={inputEl}></input>
      <button onClick={() => addTodo()}>タスクの追加</button>
      <TodoList />
    </StyleTodo>
  );
};
export default TodoApp;

const Title = styled.h1`
  color :red,
  background-color: pink;
`;

const StyleTodo = styled.div`
  width :300px,
  heght:500px,
  margin: 0 auto  ;`;
