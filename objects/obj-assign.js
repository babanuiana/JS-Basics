// copying an object 
const user = {
    name: "John",
    age: 1,
};

const info = {
    employee: true,
    country: {
        code: 22,
        name: "Moldova"
    }
}

const newObj = Object.assign({}, info);

// copy using spread operator
const newObject = {...info };

info.country = { name: "Brazil" }

console.log(newObj);
console.log(newObject);
console.log(info);