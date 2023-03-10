// String
const firstName = 'Sara'; // Sara, string

// Number
const age = 30; // 30, number
const temp = 98.9; // 98.9, number

// Boolean
const hasKids = true; // true, boolean

// Null
const aptNumber = null;

// Undefined
// let score; // undefined, undefined
const score = undefined;

// Symbol
const id = Symbol('id'); // Symbol(id), symbol

// BigInt (big integers)
const n = 9007199254740991n; // 9007199254740991n, bigint

// Reference Types
const numbers = [1, 2, 3, 4, 5]; // [ 1, 2, 3, 4, 5], object

const person = {
  name: 'Ya boy!',
}; // {name: 'Ya boy!', object}

function sayHello() {
  console.log('Hello')
}; // [Function: sayHello], function

const output = sayHello;

console.log(output, typeof output);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// https://262.ecma-international.org/5.1/#sec-11.4.3