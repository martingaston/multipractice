export default arr =>
  arr.reduce((acc, val) => (val === "correct" ? acc + 1 : acc), 0);
