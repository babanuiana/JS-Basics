const sayHi = function() {
    console.log("Hello");
    return 'returned value';
}

const func = sayHi; // copies the function
const functionCall = sayHi(); // stores the result of the call of that functions

console.log('function ', func);
console.log('function call', functionCall);