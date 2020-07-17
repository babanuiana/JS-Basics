// When an object variable is copied– the reference is copied, the object is not duplicated.

const user = { name: "John" };

const admin = user; // copy the reference

admin.name = "Mary"

console.log(user); // output Mary, alterned the original obj