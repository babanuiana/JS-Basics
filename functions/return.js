// That doesn’ t work, because JavaScript assumes a semicolon after return 

showEmptyValue = () => {
    return
    2 + 2 + 4
};

console.log(showEmptyValue()); // output undefined

showCorrectValue = () => {
    return (
        2 + 2 + 4
    )
};

console.log(showCorrectValue()); // output 8