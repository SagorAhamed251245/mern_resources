let firstName; //Declaring a variable without assigning a value results in undefined
console.log(firstName); //output: undefined

function doSomething() {
  //This function does not return a value, so it'll return undefined
}

console.log("doSomething function", doSomething());

let noValue = null; //Explicitely indicating that no meaningful value is assigned

console.log("noValue", noValue);
