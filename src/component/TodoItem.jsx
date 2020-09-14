import React, { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";

const TodoItem = ({
  todo,
  completeTodo,
  editTodo,
  editCompleteTodo,
  deleteTodo,
  addCompleteTodo,
  deleteCompleteTodo,
  reversTodo,
  index,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const inputEl = useRef(null);

  return (
    <div>
      {!isEdit ? (
        <div className="todo__item-flex">
          <div style={{ fontSize: 25 }}>
            {todo ? todo.title : completeTodo.title}
          </div>
          <ButtonArea>
            {todo ? (
              <button onClick={() => setIsEdit(!isEdit)}>編集</button>
            ) : (
              <button onClick={() => setIsEdit(!isEdit)}>編集</button>
            )}

            {todo ? (
              <button className="-secondary" onClick={() => deleteTodo(index)}>
                削除
              </button>
            ) : (
              <button
                className="-secondary"
                onClick={() => deleteCompleteTodo(index)}
              >
                削除
              </button>
            )}

            {todo ? (
              <button
                className="-primary"
                onClick={() => {
                  addCompleteTodo(index);
                }}
              >
                完了
              </button>
            ) : (
              <button
                className="-yellowgreen"
                onClick={() => {
                  reversTodo(index);
                }}
              >
                戻す
              </button>
            )}
          </ButtonArea>
        </div>
      ) : (
        <div>
          {todo ? (
            <input type="text" defaultValue={todo.title} ref={inputEl} />
          ) : (
            <input
              type="text"
              defaultValue={completeTodo.title}
              ref={inputEl}
            />
          )}
          {todo ? (
            <button
              onClick={() => {
                editTodo(index, inputEl.current.value);
                setIsEdit(!isEdit);
              }}
            >
              変更
            </button>
          ) : (
            <button
              onClick={() => {
                todo
                  ? editTodo(index, inputEl.current.value)
                  : editCompleteTodo(index, inputEl.current.value);

                setIsEdit(!isEdit);
              }}
            >
              変更
            </button>
          )}
        </div>
      )}
      <div className="module-spacer--small"></div>
    </div>
  );
};
export default TodoItem;

const ButtonArea = styled.div`
  width: 300px;
  display: flex;
`;
