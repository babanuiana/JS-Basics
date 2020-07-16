// Arrow funtion doesnt have its own argumets arguments is simply a reference to the arguments of the enclosing scope:

function testArgs(n, b) {
    console.log(arguments); // output 23 8

    arrowFunc = (n, b) => {
        console.log(arguments); // output 23 8
    }

    arrowFunc('some', 'args');
}

testArgs('23', 8);