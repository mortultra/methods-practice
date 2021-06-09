// slice returns a shallow copy of a portion of an array
const numbers = [1, 2, 3, 4, 5];

const numberTwo = numbers.slice(1, 4);

// we have an array of participants and only want to show the top three
const participants = ['name1', 'name2', 'name3', 'name4', 'name5'];

const topThree = participants.slice(0, 3);