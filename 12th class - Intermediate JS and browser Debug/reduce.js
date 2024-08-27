//syntax
//array.reduce(callback, initialValue);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // The initial value is 0

console.log(sum); // Output: 15



//example 2
const numbers2 = [12, 5, 23, 8, 42, 17, 6];

const maxNumber = numbers2.reduce(function (max, currentValue) {
    // Compare the current value with the current maximum
    return Math.max(max, currentValue);
}, -Infinity); // Start with negative infinity as the initial value

console.log(maxNumber); // Output: 42