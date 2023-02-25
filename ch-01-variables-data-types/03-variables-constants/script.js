// Ways to declare a variable:
// var, let, const

let firstName = 'John';
let lastName = 'Dough';

console.log(firstName, lastName);

// console.log(firstName, lastName, age); // age was not initialized first, therefore an error has occurred

let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores, and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase (common use)
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// Using methods to manipulate arrays
const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

// Re-assigning properties in an object
const person = {
  name: 'Bob',
};

person.name = 'John';

person.email = 'john@email.com';

console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);