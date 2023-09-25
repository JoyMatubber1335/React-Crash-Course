import React from "react";
import { memo } from "react";
export const MemoFunction = memo(({ count }) => {
  // use memeo so that can't render
  console.log("memo render ");
  return <div>MemoFunction</div>;
});

// or
// const MemoFunction = () => {
//   console.log("memo render ");
//   return <div>MemoFunction</div>;
// };
// export default memo(MemoFunction);
