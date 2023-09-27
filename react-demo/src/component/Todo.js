// import React from "react";
// import { ACTIONS } from "./UseReducer";
// export const Todo = ({ todo, dispatch }) => {
//   return (
//     <div>
//       <li>
//         <div style={{ color: todo.complete ? "#AAA" : "#000" }}>
//           <span>{todo.name}</span>
//           <span>{todo.age}</span>
//         </div>
//         <button onClick={() => dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id } })}>Complete</button>
//         <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
//       </li>
//     </div>
//   );
// };

import React, { useState } from "react";
import { ACTIONS } from "./UseReducer";

export const Todo = ({ todo, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedAge, setEditedAge] = useState(todo.age);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: { id: todo.id, name: editedName, age: editedAge },
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          <input type="number" value={editedAge} onChange={(e) => setEditedAge(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <li>
          <span>{todo.name}</span>
          <span>{todo.age}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </li>
      )}
    </div>
  );
};
