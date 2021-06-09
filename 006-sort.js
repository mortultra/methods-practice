// sort method sorts the elements of an array by manipulating the array, the default sort order is ascending. It will convert the elements of the array to strings and will compare of sequences of key:values and return the elements in ascending order

const names = ['Steph', 'Louie', 'Karma', 'Andrew'];

names.sort();


const numbers = [2, 56, 7, 8, 89, 10, 3, 67];

numbers.sort((a, b) => {
  // a - b compares two numbers in the array against each other. if the result is a negative integer, then a moves up. if the result is a positive integer, b moves up. 
  return a - b;
});