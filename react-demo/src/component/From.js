import { useState } from "react";
export const From = () => {
  const [UsernName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(UsernName);
    console.log(password);
    // alert(`name is ${UsernName} and pass is ${password}`);
    if (UsernName === "joy" && password == 123) {
      alert("Login ");
    } else {
      alert("try again");
    }
  };
  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label htmlFor="">UsernName</label>
        <input
          type="text"
          value={UsernName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="number"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};
