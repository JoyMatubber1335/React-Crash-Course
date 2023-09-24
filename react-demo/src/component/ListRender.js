export const ListRender = () => {
  const numbers = [1, 2, 3, 4, 5];
  return numbers.map((number) => {
    return <h1>{number}</h1>;
  });
};
