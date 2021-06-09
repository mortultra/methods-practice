// unshift method adds one or more elements at the beginning of the array and returns the new length of the array

const numbers = [1, 2, 3];

numbers.unshift(0);
// adds elements to the array in the order they are given as arguments
// numbers.unshift(0, -1)

// returns the total length of the array
const newNums = numbers.unshift(-1, 0);