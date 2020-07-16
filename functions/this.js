// Arrow functions do not have this.If this is accessed, it is taken from the outside
const obj = {
    name: 'cat',
    askForFood() {
        console.log(this); // this is the object itself
    }
};

obj.askForFood();


// That’s because they are meant for short pieces of code that do not have their own “context”, but rather work in the current one.