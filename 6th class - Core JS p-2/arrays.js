const fruits = ["Banana", "Orange", "Apple"];
fruits[2] = "Orange"
console.log(fruits[2]);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.push(10) //add element in the end of the array
// console.log('After pushing', numbers);
// numbers.pop(); //remove element from the array
// console.log(numbers);

//add element at the beginning of the array
numbers.shift();
numbers.unshift(0);
console.log(numbers);

console.log(fruits.length);