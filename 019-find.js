// the find method will search inside the array and find the first element for which the callback function returns a truthy value

const names = ['Steph', 'Louie', 'Karma'];

const findName = names.find(person => {
  return person === 'Steph';
});

console.log(findName);



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

const findSteph = persons.find(person => {
  return person.name === 'Steph'
}).age;

console.log(findSteph);