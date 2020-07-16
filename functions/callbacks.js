/*A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action.*/

const doWeNeedMilk = (answer, callback) => {
    if (answer === 'yes') {
        callback();
    }
}

const buyMilk = () => {
    console.log('Buy Milk');
}

doWeNeedMilk('yes', buyMilk);