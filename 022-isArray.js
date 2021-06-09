// isArray method checks if the passed value is an array

const names = ['Steph', 'Louie', 'Karma'];
const string = 'Hello nasty';
const number = 17;

const namesCheck = Array.isArray(names);
const stringCheck = Array.isArray(string);
const numCheck = Array.isArray(number);

console.log(namesCheck);
console.log(stringCheck);
console.log(numCheck);