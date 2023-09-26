import React from "react";
import { ACTIONS } from "./UseReducer";
export const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <li>
        <span>{todo.name}</span>
        <span>{todo.age}</span>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
      </li>
    </div>
  );
};
