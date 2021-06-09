// flat method creates a new array with the sub-arrays concatenated within it. It works works recursively 

const arr = [1, [2, [3, [4, [5]]]]];

const res = arr.flat(Infinity);

console.log(res);