const myMap = new Map();

myMap.set("name", "Shohaib Hossain");
myMap.set("Age", 25)

console.log(myMap.get("name"));

console.log(myMap.has("name"));

myMap.delete('Age')

console.log(myMap);