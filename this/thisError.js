let user = {
  name: "John",
  age: 30,

  sayHi() {
    console.log( this.name ); // leads to an error
  }

};

let admin = user;
console.log('admin =>', admin);

user = null; // overwrite to make things obvious

console.log('user =>', user);

admin.sayHi(); // Whoops! inside sayHi(), the old name is used! er