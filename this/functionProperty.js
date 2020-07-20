// Functions that are stored in object properties are called “methods”.

let user = {
  name: "John",
  age: 30
};

user.sayHi = () => {
  console.log("Hello!");
};

user.sayHi(); // Hello!

console.log(user);



