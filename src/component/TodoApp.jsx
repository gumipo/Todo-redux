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
    <>
      <TodoHeader>
        <TodoHeaderInner>
          <TodoHeaderTitle>Todo-App</TodoHeaderTitle>
        </TodoHeaderInner>
      </TodoHeader>
      <div className="module-spacer--small" />
      <TodoBox>
        <input type="text" placeholder="タイトル書いてね" ref={inputEl}></input>
        <button className="-skyblue" onClick={() => addTodo()}>
          タスクの追加
        </button>
        <div className="module-spacer--small" />
        <TodoList />
      </TodoBox>
    </>
  );
};
export default TodoApp;

const TodoHeader = styled.div`
  height: 200px;
  background-color: skyblue;
  line-height: 200px;
`;

const TodoHeaderInner = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const TodoHeaderTitle = styled.h1`
  font-size: 50px;
  color: pink;
`;

const TodoBox = styled.section`
  width: 800px;
  height: 1000px;
  margin: 0 auto;

  input {
    width: 600px;
    height: 50px;
    font-size: 20px;
    background-color: white;
    margin-right: 20px;
  }
`;
