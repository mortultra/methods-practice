// findIndex method similar to the find methdo but will find the element and reutrn it's index

const numbers = [1, 2, 3, 4, 5]

const indexValue = numbers.findIndex(value => {
  return value === 3;
});

console.log(indexValue);
