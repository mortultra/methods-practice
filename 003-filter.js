const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(number => {
  return number % 2 === 0;
});



const people = [
  {
    name: "Florin",
    age: 26
  },
  {
    name: "Ivan",
    age: 18
  },
  {
    name: "Jai",
    age: 15
  }
];

const legalVote = people.filter(person => {
  return person.age >= 18;
})


const newNumbers = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];

// call filter function on newNumbers including all parameters (value, index, arr)
const newNums = newNumbers.filter((value, index, arr) => {
  // use indexOf method to check & assign the index values of the first occurences of the numbers to remove duplicates
  return arr.indexOf(value) === index;
});


