// Will cover these below tpics in later sessions
// singleton // Object.create
// We can create objects by two types - By Object literals & By Object.create

// By object literals

// Creating a Symbol to use as a unique key in the object
const mySym = Symbol("key1");

// Defining an object using object literal syntax
// Objects in JavaScript are collections of key-value pairs
const JsUser = {
  name: "tushar", // String property (standard key without spaces)
  "full name": "tushar gupta", // String property with space in key name (requires quotes)
  [mySym]: "mykey1", // Using a Symbol as a computed property key (must use square brackets)
  age: 18, // Number property
  location: "dehradun", // String property
  email: "tushar@google.com", // String property
  isLoggedIn: false, // Boolean property
  lastLoginDays: ["Monday", "Saturday"], // Array property
  // Objects can contain any data type as values, including other objects, arrays, functions, etc.
};

// Accessing object properties - two main ways:
// console.log(JsUser.email) // Dot notation - simpler but can't access keys with spaces/special chars
// console.log(JsUser["email"]) // Bracket notation - more versatile, can access any key
// console.log(JsUser["full name"]) // Required for keys with spaces/special characters
// console.log(JsUser[mySym]) // Required for Symbol keys (Symbols are unique primitive values)
// console.log(JsUser.lastLoginDays) // Accessing array property

// Recommendation: Bracket notation is more flexible and consistent, especially when:
// - Key names are dynamic
// - Key names contain special characters/spaces
// - Using Symbol keys

// Modifying and adding properties:
// JsUser["email"] = "tushar@chatgpt.com"; // Modifying existing property
// JsUser["city"] = "chatgpt.com"; // Adding new property

// This would throw an error because JsUser is declared with const
// const prevents reassignment, but doesn't make the object immutable
JsUser = { name: "Another User" }; // TypeError: Assignment to constant variable

console.log(JsUser["name"] = "TusharGupta"); // This works - modifying property is allowed

// Object.freeze() makes an object immutable (shallow freeze)
Object.freeze(JsUser);
JsUser.email = "newemail@domain.com"; // In non-strict mode, this fails silently
// In strict mode, this would throw a TypeError
// Note: freeze is shallow - nested objects can still be modified

// Object.seal() is less restrictive than freeze
Object.seal(JsUser);
// Seal allows modifying existing properties but prevents adding/removing properties
JsUser.email = "newemail@domain.com"; // This works - modifying existing property
JsUser.city = "newcity"; // This fails - cannot add new properties
// console.log(JsUser["city"]);
// console.log(JsUser);

// Freezing the object to prevent further modifications
// Object.freeze(JsUser)

// Attempting to modify a property after freezing (will not work if uncommented)
// JsUser.email = "tushar@microsoft.com";
//  console.log(JsUser); // Logging the object to check changes

// Adding a method to the object
// JsUser.greeting = function () {
//   console.log("Hello JS user");
// };

// console.log(JsUser.greeting());

// Adding another method that uses the object's properties
// JsUser.greetingTwo = function () {
//   console.log(`Hello JS user, ${this.name}`); // Using 'this' to refer to the object's properties
// };

// Calling the methods and logging their output
// console.log(JsUser.greeting()); // Logs "Hello JS user" and returns undefined (no explicit return)
// JsUser.greetingTwo(); // Logs "Hello JS user, tushar" and returns undefined (no explicit return)

// Research on the object behavious , 
// even the object is defined as const why we are able to modify the fields ?