// Dates
// All dates in JavaScript are calculated from January 1, 1970 (Unix Epoch)
// Documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://tc39.es/proposal-temporal/docs/

// Create a new Date object representing the current date and time
let myDate = new Date();

// Uncomment the following lines to see different ways to format the date:
// console.log(myDate.toString()); // Full date and time as a string
// console.log(myDate.toDateString()); // Date portion only as a string
// console.log(myDate.toLocaleString()); // Date and time formatted according to locale
// console.log(typeof myDate); // Check the type of the Date object (object)

// Different ways to create a specific date:
// let myCreatedDate = new Date(2023, 0, 23); // Year, month (0-based), day
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // Year, month, day, hour, minute
// let myCreatedDate = new Date("2023-01-14"); // ISO date string
let myCreatedDate = new Date("01-14-2023"); // MM-DD-YYYY format

// Uncomment to see the formatted created date:
// console.log(myCreatedDate.toLocaleString());

// Get the current timestamp in milliseconds since Unix Epoch
let myTimeStamp = Date.now();

// Uncomment to see the timestamp and comparison with the created date:
// console.log(myTimeStamp); // Current timestamp
// console.log(myCreatedDate.getTime()); // Timestamp of the created date
// console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds

// Create another new Date object for additional operations
let newDate = new Date();

// Log the current date and time
console.log(newDate);

// Get the current month (0-based, so add 1 for human-readable format)
console.log(newDate.getMonth() + 1);

// Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
console.log(newDate.getDay());

// Example of creating a custom string with the day and time
// `${newDate.getDay()} and the time `

// Format the date to include the full weekday name (e.g., "Monday")
newDate.toLocaleString("default", {
  weekday: "long",
});
