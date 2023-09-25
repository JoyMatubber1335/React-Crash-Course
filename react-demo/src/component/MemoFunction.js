import React from "react";
import { memo } from "react";
export const MemoFunction = memo(({ count, onHandelIncrement }) => {
  // use memeo so that can't render
  console.log("memo render ");
  return (
    <div>
      MemoFunction {count}
      <button onClick={onHandelIncrement}>Increment count</button>
    </div>
  );
});

// or
// const MemoFunction = () => {
//   console.log("memo render ");
//   return <div>MemoFunction</div>;
// };
// export default memo(MemoFunction);
