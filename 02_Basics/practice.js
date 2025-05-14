const jsUser = { name: "Tushar" };

jsUser = { name: "Another User" }; // This would throw an error

console.log(jsUser["name"] = "TusharGupta");


Object.freeze(jsUser);
jsUser.email = "newemail@domain.com"; // This will silently fail in non-strict mode
Object.seal(jsUser);
jsUser.email = "newemail@domain.com"; // This will work
jsUser.city = "newcity";             // This will fail