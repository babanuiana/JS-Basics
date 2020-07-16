// Function declarations are hoisted to the top of the enclosing function or global scope. 
hoisted(); // no error

function hoisted() {
    console.log('hoisted ');
}

// Function expressions are not hoisted unlike function declarations
console.log(notHoisted) // undefined 

//  even though the variable name is hoisted, the definition isn't. so it's undefined.
notHoisted(); // TypeError: notHoisted is not a function

const notHoisted = () => {
    console.log('test');
}