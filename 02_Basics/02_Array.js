// Define two arrays: one for Marvel heroes and one for DC heroes
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Push the entire DC heroes array into the Marvel heroes array (nested array)
// marvel_heros.push(dc_heros);

// Access the nested array and its elements
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Concatenate two arrays into a new array
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// Use the spread operator to combine two arrays into a new array
const all_new_heros = [...marvel_heros, ...dc_heros];

// Define a nested array with multiple levels of nesting
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flatten the nested array into a single-level array
// The `flat()` method takes a depth parameter (use `Infinity` to flatten all levels)
const real_another_array = another_array.flat(Infinity);

// Check if a value is an array
console.log(Array.isArray("Tushar"));

// Convert a string into an array of characters
console.log(Array.from("Tushar"));

// Attempt to convert an object into an array
// This returns an empty array because `Array.from` cannot directly convert objects without iterable properties
console.log(Array.from({ name: "tushar" })); // interesting

// Create an array from a set of variables
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
