import { useState, useReducer } from "react";
import { Todo } from "./Todo";
export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name, action.payload.age)];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

function newTodo(name, age) {
  return { id: Date.now(), name: name, age: age, complete: false };
}

export const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name, age: age } });
    setName("");
    setAge("");
  };

  console.log(todos);
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Age</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
        <button type="submit">Add todo</button>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

// import React, { useState, useReducer } from "react";

// const ACTIONS = {
//   ADD_TODO: "add-todo",
// };

// function reducer(todos, action) {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:
//       return [...todos, newTodo(action.payload.name, action.payload.age)];
//     default:
//       return [...todos];
//   }
// }

// function newTodo(name, age) {
//   return { id: Date.now(), name: name, age: age, complete: false };
// }

// export const UseReducer = () => {
//   const [todos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name, age: age } });
//     setName("");
//     setAge(0);
//   };

//   console.log(todos);
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//         <button type="submit">Add Todo</button>
//       </form>
//     </div>
//   );
// };
