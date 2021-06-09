// from method creates a new shallow copy of the array from an array-like or iterable object

const string = '1234567';

//VERSION I
// const res = Array.from(string, mapFn);

// function mapFn(x) {
//   return Number(x);
// };


// VERSION II
// const res = Array.from(string, x => Number(x));


// VERSION III
const res = Array.from(string, Number);

console.log(res);


// an easy way to get rid of duplicates is to create a new variable using the Set constructor for numbers and strings

const numbers = [1, 2, 3, 4, 4, 3, 5, 6, 7, 7, 8, 3, 2, 1, 1, 1]

const res2 = new Set(numbers);

console.log(res2);