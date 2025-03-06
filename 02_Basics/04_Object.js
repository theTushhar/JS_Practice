// A singleton object is an object that is instantiated only once
// throughout the entire application. Even if you try to create it
// multiple times, it will always refer back to the same instance.

// Creating an empty object using object literal syntax
// const facebookUser = new Object() // Alternate way to create an object
const facebookUser = {}; // Creating an empty object

// Adding properties to the facebookUser object
facebookUser.id = "123abc";
facebookUser.name = "Sammy";
facebookUser.isLoggedIn = false;

// console.log(facebookUser); // Logging the facebookUser object

// Creating a nested object structure
const regularUser = {
  email: "some@gmail.com", // Top-level property
  fullname: {
    userfullname: {
      firstname: "tushar", // Nested property
      lastname: "gupta", // Nested property
    },
  },
};

// Accessing nested properties using dot notation
// console.log(regularUser.fullname.userfullname.firstname); // Logs "tushar"

// Optional chaining to safely access nested properties
// If `fullname` is undefined or null, it won't throw an error
// console.log(regularUser.fullname?.userfullname.firstname); // Logs "tushar"

// Creating multiple objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// Combining objects into a single object (incorrect way, creates nested objects)
// const obj3 = { obj1, obj2 } // Results in { obj1: { ... }, obj2: { ... } }

// Combining objects using Object.assign()
// Copies properties from source objects (obj1, obj2, obj4) to the target object ({})
// const obj3 = Object.assign({}, obj1, obj2, obj4); // Results in { 1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b" }

// Combining objects using the spread operator (modern and preferred way)
const obj3 = { ...obj1, ...obj2 }; // Results in { 1: "a", 2: "b", 3: "a", 4: "b" }
// console.log(obj3); // Logging the combined object

// Array of user objects
const users = [
  {
    id: 1,
    email: "t@gmail.com",
  },
  {
    id: 1,
    email: "t@gmail.com",
  },
  {
    id: 1,
    email: "t@gmail.com",
  },
];

// Accessing a property from an object inside an array
users[1].email; // Accessing the email of the second user in the array
// console.log(facebookUser); // Logging the facebookUser object

// Getting keys, values, and entries of an object
// console.log(Object.keys(facebookUser)); // Logs ["id", "name", "isLoggedIn"]
// console.log(Object.values(facebookUser)); // Logs ["123abc", "Sammy", false]
// console.log(Object.entries(facebookUser)); // Logs [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]

// Checking if an object has a specific property
// console.log(facebookUser.hasOwnProperty('isLoggedIn')); // Logs true

// Creating a course object
const course = {
  coursename: "js in english",
  price: "999",
  courseInstructor: "tushar",
};

// Destructuring in JavaScript is a convenient way to extract
// values from arrays or properties from objects and assign them
// to variables in a single statement. It makes your code cleaner
// and easier to read by unpacking data quickly.

// Destructuring the course object to extract specific properties
const { courseInstructor: instructor } = course; // Renaming `courseInstructor` to `instructor`

// console.log(courseInstructor); // This would throw an error because `courseInstructor` is renamed to `instructor`
console.log(instructor); // Logs "tushar"

// Example of a JSON-like structure
// {
//     "name": "tushar",
//     "coursename": "js in english",
//     "price": "free"
// }

// Website for API looks Like gives result in JSON
// https://randomuser.me/
// https://randomuser.me/api/

// Example of an array of objects (common in APIs)
// [{}, {}, {}]
