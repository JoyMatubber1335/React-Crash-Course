import React, { useEffect, useState } from "react";

export const FetchData = () => {
  const [todos, setTodos] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("Fatching is not ok");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setTodos(data);
        console.log(todos);
      })
      .catch((error) => {
        setError(error.message);
      });
  });

  return (
    <div>
      <h1>{error}</h1>
      {todos &&
        todos.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
    </div>
  );
};
