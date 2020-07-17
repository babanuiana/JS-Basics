const user = {
    name: "John",
    "some key": 4,
};

// we can iterate through an object 
for (const key in user) {

    // executes the body for each key among object properties
    console.log(key, user[key]);
}