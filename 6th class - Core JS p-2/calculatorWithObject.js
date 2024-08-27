const calculator = {
    add: function (num1, num2) {
        return num1 + num2
    },
    subtract: function (num1, num2) {
        return num1 - num2
    },
    multiply: function (num1, num2) {
        return num1 * num2
    },
    divide: function (num1, num2) {
        return num1 / num2
    },
}

console.log(calculator.add(1, 2));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(5, 5));
console.log(calculator.divide(4, 2));
