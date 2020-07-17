const info = {
    employee: true,
    country: {
        code: 22,
        name: "Moldova"
    }
}

// can use array methods by transforming obj into arrays
Object.values(info).map((elem) => {
    console.log(elem);

})