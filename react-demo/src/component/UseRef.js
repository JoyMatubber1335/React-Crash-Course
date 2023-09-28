import React, { useEffect, useRef, useState } from "react";

export const UserRef = () => {
  const userName = useRef('');
  const [Name, setName] = useState();
  //   const handelclick = (e) => {
  //     const use_Name = userName.current.value;
  //     console.log(use_Name);
  //   };

  useEffect(() => {
    userName.current = Name;
  }, [Name]);
  return (
    <div>
      {/* <input type="text" value={Name} onChange={(e) => setName(e.target.value)} ref={userName}></input> */}
      {/* access dom element  */}
      {/* <button onClick={handelclick}>Click</button> */}
      <input type="text" value={Name} onChange={(e) => setName(e.target.value)}></input>

      <div>
        my name is {Name} and previous name is {userName.current}
      </div>
    </div>
  );
};
