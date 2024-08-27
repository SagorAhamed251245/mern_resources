const person = { name: "Shuavjit", role: "Frontend Developer", age: 25 }

const { name: Shuavjit, role, age } = person;

// console.log(Shuavjit, role);
// console.log(age);

const stack = ["ReactJS", "NEXTJS", "Redux"]

const [firstFramework, secondFramework, anything] = stack;

console.log(anything);

const numbers = [1, 2, 3, 4, 5]

const [firstNumber, secondNum, ...resNumbers] = numbers;

console.log('firstNumber, secondNum', firstNumber, secondNum);
console.log('resNumbers', resNumbers);
