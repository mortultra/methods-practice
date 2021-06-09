// using forEach to count the occurences of values in an array or check for duplicates

const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

// create an empty object to hold the count

let count = {};

// iterate through the array using forEach and an if/else statement using bracket notation. Pass in the values [item] from the array to the object, then iterate over them adding to the count for each additional occurance of the item

letters.forEach(item => {
  if(count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
})

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach();

// function consoleItem(item, index) {
//   console.log('a[' + index + '] = ' + item);
// }