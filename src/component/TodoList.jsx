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

import TodoItem from "./TodoItem";

const TodoList = () => {
  const selector = useSelector((state) => state);
  const todoList = getTodos(selector);
  const completeTodoList = getCompleteTodos(selector);

  const dispatch = useDispatch();

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

  const editTodo = (index, title) => {
    todoList[index] = {
      title: title,
    };
    dispatch(addTodoAction(todoList));
  };

  const editCompleteTodo = (index, title) => {
    completeTodoList[index] = {
      title: title,
    };
    dispatch(addCompleteTodoAction(completeTodoList));
  };

  useEffect(() => {
    setCompleteTodoIndex(completeTodoList.length);
  }, [completeTodoList.length]);

  return (
    <div>
      <h2 style={{ fontSize: 30 }}>未完了</h2>
      <div className="module-spacer--small"></div>
      {todoList.length > 0 ? (
        todoList.map((todo, i) => (
          <TodoItem
            todoList={todoList}
            key={i}
            index={i}
            todo={todo}
            addCompleteTodo={addCompleteTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      ) : (
        <p>まだないよ</p>
      )}
      <div className="module-spacer--small"></div>　
      <h2 style={{ fontSize: 30 }}>完了</h2>
      <div className="module-spacer--small"></div>
      {completeTodoList.length > 0 ? (
        completeTodoList.map((completeTodo, i) => (
          <TodoItem
            completeTodoList={completeTodoList}
            key={i}
            index={i}
            completeTodo={completeTodo}
            reversTodo={reversTodo}
            deleteCompleteTodo={deleteCompleteTodo}
            editCompleteTodo={editCompleteTodo}
          />
        ))
      ) : (
        <p>まだないよ</p>
      )}
    </div>
  );
};
export default TodoList;
