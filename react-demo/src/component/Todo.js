import React from "react";
import { ACTIONS } from "./UseReducer";
export const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <li>
        <div style={{ color: todo.complete ? "#AAA" : "#000" }}>
          <span>{todo.name}</span>
          <span>{todo.age}</span>
        </div>
        <button onClick={() => dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id } })}>Complete</button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
      </li>
    </div>
  );
};
