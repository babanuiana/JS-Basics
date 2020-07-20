let user = {
  name: "John",
  age: 30,

  sayHi() {

    // "this" is the "current object"
    console.log(this.name);

    // same output, but this is not safe!
    // we can access by mistake another variable
    console.log(user.name); 
  }

};

user.sayHi(); // John