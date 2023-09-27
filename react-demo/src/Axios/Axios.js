import React, { useState, useEffect } from "react";
import axios from "axios";

export const Axios = () => {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setGetData(res.data))
      .catch((err) => console.log(err.message));
  });
  return (
    <div>
      {getData.map((data) => (
        <li>
          <h1 key={data.id}>{data.name}</h1>
          <h1 key={data.id}>{data.address.geo.lat}</h1>
        </li>
      ))}
    </div>
  );
};
