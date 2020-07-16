// arrow function has implicit return without curly braces
arrowFunction = () => 2 + 2;

console.log(arrowFunction()); // output 4

arrowFunctionBraces = () => {
    2 + 2;
}

console.log(arrowFunctionBraces()); // output  undefined