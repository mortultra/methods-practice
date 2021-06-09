// fill method changes all the elements in the array with a provided value. It will change the array on which it is called, and return the same array with modifications

const number = [1, 2, 3, 4, 5];

// numbers.fill(0);

// changes the values of the index 1/2/3 to a value of zero
numbers.fill(0, 1, 4);



function fillInNumbers(n) {
  // return an array and pass in a parameter to represent the length of the array
  return Array(n)
  // fill each item in the array with the value of 0
    .fill(0)
    // map over each item in the array, first unlocking the item itself which currently has no value, so pass in an underscore; then unlock the index which is the second argument provided to the map function. for each item in the array, add 1 to the index position of the item. so 1, 2, 3, etc
    .map((_, index) => index + 1);
}
// call the funciton, giving in the length of the n = 10
console.log(fillInNumbers(10));