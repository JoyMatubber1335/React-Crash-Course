export const Name = (props) => {
  // use export so use same name (Name) as a component
  return (
    <div>
      <h1>Hi Joy {props.id}</h1>
      {props.children}
    </div>
  );
};
const age = (props) => {
  //  use default   export so use any name as  a component
  return (
    <div>
      <h1>My age is 23</h1>
      {props.children}
    </div>
  );
};
export default age;
