// an object declared as const can be modified.
const user = {
    name: "John",
    "some key": 4,
};

user.name = "Pete";

console.log(user['some key']);

// The const would give an error only if we try to set user=... as a whole.

user = {}; // throws an error

// check if this key exists
console.log("name" in user);