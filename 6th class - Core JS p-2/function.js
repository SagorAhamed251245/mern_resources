//function declaration
function addNumbers(num1, num2, num3, num4) {
    const result = num1 + num2 + num3 + num4;
    return result;
}

//function declaration = function keyword + function name + parameters(optional) + function body
//function calling = function name + arguments(optional)

//function call
const result = addNumbers(4, 5, 10, 6);
// console.log(result);

//function expression
const subtractNumbers = function (num1, num2) {
    const results = num1 - num2;
    return results;
}

console.log(subtractNumbers(50, 20));



