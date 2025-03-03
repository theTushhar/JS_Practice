// Arrays in JavaScript
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Key concepts: Deep Copy vs Shallow Copy
// Shallow copy: Copies references to objects (not the objects themselves).
// Deep copy: Creates a new copy of the object and all nested objects.

// Create an array with numbers
const myArr = [0, 1, 2, 3, 4, 5];

// Create an array with strings (superhero names)
const myHeors = ["batman", "superman"];

// Create an array using the Array constructor
const myArr2 = new Array(1, 2, 3, 4);

// Access an element in the array (indexing starts at 0)
// console.log(myArr[1]);

// Array Methods

// Add an element to the end of the array
// myArr.push(6);
// myArr.push(7);

// Remove the last element from the array
// myArr.pop();

// Add an element to the beginning of the array
// myArr.unshift(9);

// Remove the first element from the array
// myArr.shift();

// Check if an element exists in the array
// console.log(myArr.includes(9));

// Find the index of an element in the array
// console.log(myArr.indexOf(-19));
// console.log(myArr.indexOf(3));

// Join all elements of the array into a string
// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// Slice and Splice

// Slice: Returns a shallow copy of a portion of the array (does not modify the original array)
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

// Splice: Removes elements from the array and optionally inserts new elements (modifies the original array)
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
