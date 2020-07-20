// The engine tries to store its elements in the contiguous memory area, one after another

// But they all break if we quit working with an array as with an “ordered collection”
// and start working with it as if it were a regular object.

const fruits = []; // make an array

fruits[3] = 5; // assign a property with the index far greater than its length

fruits.age = function() { console.log(5); }; // create a property with an arbitrary name

console.log(fruits);