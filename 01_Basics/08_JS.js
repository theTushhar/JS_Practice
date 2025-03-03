//Number and Math Object in JS

// Primitive declaration of number type
const score = 400;
// console.log(score);

//We can also declare number object by using the new keyword
const balance = new Number(100);
console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// Generate a random decimal number between 0 (inclusive) and 1 (exclusive) and log it to the console.
console.log(Math.random());

// Generate a random decimal number between 1 (inclusive) and 11 (exclusive) and log it to the console.
console.log(Math.random() * 10 + 1);

// Generate a random integer between 1 (inclusive) and 10 (inclusive) and log it to the console.
console.log(Math.floor(Math.random() * 10) + 1);

// Define the minimum and maximum values for the random number range.
const min = 10;
const max = 20;

// Generate a random integer between min (10) and max (20), inclusive, and log it to the console.
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
