export const ClickHandler = () => {
  const clickHandler = (e, count = 0) => {
    console.log("Click Handler was click ", count, e);
    console.log();
  };
  return (
    <div>
      <button onClick={clickHandler}>Click Handeler</button>
      <br></br>
      <button onClick={(e) => clickHandler(e, 5)}>Clikc 5 </button>
    </div>
  );
};
