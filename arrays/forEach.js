//  An array, just like an object, may end with a comma:
const fruits = [
    "Apple",
    "Orange",
    "Plum",
];

fruits.forEach(function(item, index, array) {
    console.log(item.toUpperCase(), index);
});