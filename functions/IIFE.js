// normal function

(function() {
    console.log('anonymous function');
})();

const variable = function nameFunc() {
    console.log('named function');
}();

// arrow function expression
const arrowFunc = (() => {
    console.log("named arrow function");
})();

(() => {
    console.log('anonymous arrow function');
})();