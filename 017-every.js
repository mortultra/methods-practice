// every method executes a given function on every item of an array, and returns true only if the callback function returns a truthy value for every item in the array

const numbers = [1, 2, 3, 4, 5];

const nums = numbers.every(item => {
  return item > 0;
})

console.log(nums);


const persons = [
  {
    name: 'Steph'
  },
  {
    name: 'Karma'
  },
  {
    name: 'Louie'
  },
  {
    surname: 'Campbell'
  }
];

const nameCheck = persons.every(person => {
  return person.name !== undefined;
});

console.log(nameCheck);