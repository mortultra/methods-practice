// reverse method reverses an array's elements, last becomes first and vice verse. changes the original array unless stored in a new variable.

const numbers = [1, 2, 3, 4, 5]

// numbers.reverse()

const newArr = numbers.concat().reverse();

//or use spread to create a shallow copy

const newNewArr = [...numbers].reverse();



const str = 'coding is fun';

// use split('') to turn the string into an array of strings (one for each letter of the string.)
// chain reverse() to reverse the order of the array of strings
// chain join('') to join the strings of the array back together as one string
const res = str.split('').reverse().join('');