const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

const keys = Object.keys(person);
console.log(keys); // Output: ["firstName", "lastName", "age"]

for (const key of keys) {
    const value = person[key];
    console.log(`${key}: ${value}`);
}