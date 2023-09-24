export const ConditionalRender = () => {
  const isName = false;
  const isAge = true;
  return (
    <div>
      {isName ? "Joy" : "Rana"}
      {/* ternary operator */}
      {isAge && 24}
      {/* sort curcit operator  -> render somthing or nothing  */}
    </div>
  );
};
