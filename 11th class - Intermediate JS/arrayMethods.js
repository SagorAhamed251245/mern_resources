//slice
const fruits = ["apple", "banana", "cherry", "date"];
const slicedFruits = fruits.slice(1, 2);
console.log("Sliced fruits", slicedFruits);
// const newArray = array.slice(start, end);

//splice
const colors = ["red", "green", "blue", "yellow"];
const removed = colors.splice(1, 3, "purple", "orange");

console.log("Removed", removed);
console.log("Origianl colors array", colors);

//split
const sentence = "Hello, I'm learning JavaScript";
const words = sentence.split(" ");
console.log("Words", words);
