const JsUser = { name: "Tushar" };

JsUser = { name: "Another User" }; // This would throw an error

console.log(JsUser["name"] = "TusharGupta");


Object.freeze(JsUser);
JsUser.email = "newemail@domain.com"; // This will silently fail in non-strict mode
Object.seal(JsUser);
JsUser.email = "newemail@domain.com"; // This will work
JsUser.city = "newcity";             // This will fail