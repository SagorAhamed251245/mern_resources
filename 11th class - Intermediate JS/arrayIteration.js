//filter
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(evenNumbers);

//map
const numbers2 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers2.map((num) => num * num);
console.log("squaredNumbers", squaredNumbers);

//find
const fruits = ["apple", "banana", "cherry", "date"];
const fruit = fruits.find((fruit) => fruit.length >= 6);
console.log("Fruit is: ", fruit);
