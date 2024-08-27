//implicit conversion
const num = 10;
const strNum = "50";

const result = num + strNum; //1050

// console.log(typeof result);

//explicit conversion
const age = "25";
const covertedAge = parseInt(age);
console.log(typeof covertedAge);

const age2 = 25;
const covertedAge2 = age2.toString();
console.log(typeof covertedAge2);

const isMarried = false;
console.log(+isMarried);