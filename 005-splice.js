// splice method changes the array that it's called upon by removing or replacing existing elements in the array, it gets a starting index, a count. Will change the array that it's called upon and returns a new array with the changed elements

const numbers = [1, 2, 3, 4, 5];

const removed = numbers.splice(2, 3);


const numbersNew = [1, 2, 3, 4, 5];

const changed = numbers.splice(2, 0, 2.5, 2.75, 2.95);

