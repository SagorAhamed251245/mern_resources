const person = {
    firstName: "Gazi", //key value pair
    lastName: "Ahmed",
    age: 25,
    isMarried: false,
    program: "MERN",
    isDeveloper: true,
    technologies: ["HTML", "CSS", "Bootstrap"]
}

// Gazi is enrolled in MERN program
//dot notation
console.log(person.firstName + " is enrolled in " + person.program + " program"); //concatination
console.log(`${person.firstName} is enrolled in ${person.program} program`)

//bracket notation
// console.log(person["isDeveloper"]);

person.city = "New York";

console.log('City: ', person.city);