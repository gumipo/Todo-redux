import React, { useState } from "react";
import { useRef } from "react";

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
        <div>
          {todo ? todo.title : completeTodo.title}
          {todo ? (
            <button onClick={() => setIsEdit(!isEdit)}>編集</button>
          ) : (
            <button onClick={() => setIsEdit(!isEdit)}>編集</button>
          )}

          {todo ? (
            <button onClick={() => deleteTodo(index)}>削除</button>
          ) : (
            <button onClick={() => deleteCompleteTodo(index)}>削除</button>
          )}

          {todo ? (
            <button
              onClick={() => {
                addCompleteTodo(index);
              }}
            >
              完了
            </button>
          ) : (
            <button
              onClick={() => {
                reversTodo(index);
              }}
            >
              戻す
            </button>
          )}
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
    </div>
  );
};
export default TodoItem;
