// Variable declarations with different scopes
// var c = 300 // var has function scope
let a = 300; // let has block scope

// Block scope demonstration
if (true) {
  let a = 10; // New block-scoped variable (shadows outer 'a')
  const b = 20; // const also has block scope
  // console.log("INNER: ", a); // 10 (inner scope)
}

// console.log(a); // 300 (outer scope)
// console.log(b); // Error - b is not defined (block scoped)
// console.log(c); // 300 (var is function scoped)

// Function scope and closures
function one() {
  const username = "tushar"; // Function-scoped variable

  function two() {
    const website = "github";
    console.log(username); // Accesses parent's scope (closure)
  }
  // console.log(website); // Error - website is block-scoped to function two

  two();
}

// one()

// Nested block scopes
if (true) {
  const username = "tushar"; // Block-scoped
  if (username === "tushar") {
    const website = " github"; // Nested block-scoped
    // console.log(username + website); // Can access parent scope
  }
  // console.log(website); // Error - website not accessible here
}

// console.log(username); // Error - username not accessible here

// ++++++++++++++++++ interesting ++++++++++++++++++

// Hoisting demonstration
console.log(addone(5)); // Works - function declarations are hoisted

function addone(num) {
  return num + 1;
}

addTwo(5); // Error - function expressions aren't hoisted the same way
const addTwo = function (num) { // Function expression (not hoisted)
  return num + 2;
};