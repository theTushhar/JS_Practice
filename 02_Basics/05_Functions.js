// Function Declaration - defining a named function
function sayMyName() {
  console.log("T");
  console.log("U");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("R");
}

// Function Call - executing the function
// sayMyName()

// Function with Parameters - takes inputs (number1, number2)
function addTwoNumbers(number1, number2) {
  // Using return statement - sends back the result
  return number1 + number2;
}

// Storing function return value in a variable
const result = addTwoNumbers(3, 5); // Arguments - actual values passed

// Default Parameters - 'sam' is used if no username provided
function loginUserMessage(username = "sam") {
  // Conditional check - truthy/falsy values
  if (!username) {
    console.log("Please enter a username");
    return; // Early return
  }
  // Template literals - string interpolation
  return `${username} just logged in`;
}

// Rest Parameters (...) - collects remaining arguments into array
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// Object handling in functions
const user = {
  username: "tushar",
  prices: 199,
};

function handleObject(anyobject) {
  // Object property access
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// Passing object directly to function
handleObject({
  username: "sam",
  price: 399,
});

// Array handling in functions
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  // Array index access
  return getArray[1];
}

// Passing array directly to function
console.log(returnSecondValue([200, 400, 500, 1000]));