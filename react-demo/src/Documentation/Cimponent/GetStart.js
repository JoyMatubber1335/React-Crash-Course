import React from "react";

import "./Style.css";

import { Button } from "./Button";

const user = {
  name: "Joy Matubber",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export const GetStart = () => {
  return (
    <div>
      <h1>Welcome </h1>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <Button />
      <Button />
    </div>
  );
};
