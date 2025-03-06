// Will cover these below tpics in later sessions
// singleton // Object.create
// We can create objects by two types - By Object literals & By Object.create

// By object literals

// Creating a Symbol to use as a unique key in the object
const mySym = Symbol("key1");

// Defining an object using object literal syntax
const JsUser = {
  name: "tushar", // String property
  "full name": "tushar gupta", // String property with a space in the key name
  [mySym]: "mykey1", // Using a Symbol as a key (enclosed in square brackets)
  age: 18, // Number property
  location: "dehradun", // String property
  email: "tushar@google.com", // String property
  isLoggedIn: false, // Boolean property
  lastLoginDays: ["Monday", "Saturday"], // Array property
};

// Accessing object properties
// console.log(JsUser.email) // Accessing using dot notation
// console.log(JsUser["email"]) // Accessing using bracket notation
// console.log(JsUser["full name"]) // Accessing a key with spaces
// console.log(JsUser[mySym]) // Accessing a Symbol key

//Recommended to access the property by the square brackets([]) not with the dot(.)

// Modifying a property in the object
JsUser.email = "tushar@chatgpt.com";

// Freezing the object to prevent further modifications
// Object.freeze(JsUser)

// Attempting to modify a property after freezing (will not work if uncommented)
JsUser.email = "tushar@microsoft.com";
// console.log(JsUser); // Logging the object to check changes

// Adding a method to the object
JsUser.greeting = function () {
  console.log("Hello JS user");
};

// Adding another method that uses the object's properties
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); // Using 'this' to refer to the object's properties
};

// Calling the methods and logging their output
console.log(JsUser.greeting()); // Logs "Hello JS user" and returns undefined (no explicit return)
console.log(JsUser.greetingTwo()); // Logs "Hello JS user, tushar" and returns undefined (no explicit return)
