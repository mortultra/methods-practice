// the some method executes a given function on the element of the array and returns true if at least one element of the array is truthy

const numbers = [1, 2, 3, 4, 5];

const nums = numbers.some(number => {
  return number > 4;
})

console.log(nums);

// function declaration method
// function nums() {
//   return number > 4;
// } 

const persons = [
  {
    name: "Steph",
    age: "33"
  },
  {
    name: "Karma",
    age: "14"
  },
  {
    name: "Louie",
    age: "10"
  },
];

const ageCheck = persons.some(person => {
  return person.age >= 18;
});

console.log(ageCheck);