// indexOf method returns the first instance and index at which a given element can be found in the array

const names = ['Steph', 'Louie', 'Karma', 'Andrew', 'Karma'];

const index = names.indexOf('Karma');
const lastIndex = names.lastIndexOf('Karma');

names[index] = 'Karma Squared';

console.log(index);
console.log(names);
console.log(lastIndex);

// const index = names.indexOf('Louie');
// console.log(index);