//creating the Set
const mySet = new Set([1, 2, 3, 4, 5, 4]);

//set a value
mySet.add("10")

//claring all the values
// mySet.clear();

const isExist = mySet.has("2"); //return only boolean value
// console.log(isExist);

mySet.delete(5)

// console.log(mySet.size);


console.log(mySet);

for (let myVal of mySet) {
    console.log(myVal);
}