// let, const, var
// let is block scoped, const is block scoped and cannot be reassigned, var is function scoped and can be reassigned
// let and const are introduced in ES6
// var is the old way of declaring variables
// var is function scoped, let and const are block scoped

const accountId = 1234;
let accountName = 'John Doe';
var accountBalance = 1000;

// show the field in console directly
console.log(accountId, accountName, accountBalance);

// show the field in table format
console.table({ accountId, accountName, accountBalance });
