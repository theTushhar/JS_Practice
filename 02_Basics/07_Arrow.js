// Object with method using 'this'
const user = {
  username: "tushar",
  price: 999,

  // Method definition (function inside object)
  welcomeMessage: function () {
    // 'this' refers to the current object context
    console.log(`${this.username} , welcome to website`);
    // 'this' here shows the entire object
    console.log(this);
  },
};

user.welcomeMessage(); // 'this' points to 'user' object
// user.username = "sam" // Modifying property
// user.welcomeMessage() // 'this' now shows updated username

// console.log(this); // In global scope, 'this' refers to global object (empty {} in Node, window in browser)

// Regular function 'this' behavior (commented out)
// function chai(){
//     let username = "tushar"
//     console.log(this.username); // undefined - 'this' doesn't work like in objects
// }

// Arrow function examples
const chai = () => {
  let username = "tushar";
  console.log(this); // Arrow functions inherit 'this' from surrounding scope (lexical scoping)
};

// Different arrow function syntax variations:

// 1. Explicit return (with curly braces and return statement)
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// 2. Implicit return (single expression without curly braces)
// const addTwo = (num1, num2) =>  num1 + num2

// 3. Implicit return with parentheses (common for JSX in React)
// const addTwo = (num1, num2) => ( num1 + num2 )

// 4. Returning an object requires parentheses
const addTwo = (num1, num2) => ({ username: "tushar" });

// console.log(addTwo(3, 4)); // Returns the object { username: "tushar" }

// Array method example (commented out)
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach() // Common array iteration method
