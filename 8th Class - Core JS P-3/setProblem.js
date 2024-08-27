//Find the unique elements in an array and return them in a new array

function removeDupliacateValues(values) {
    const uniqueSet = new Set(values);

    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;

}

const uniqueValueArr = removeDupliacateValues([1, 2, 3, 3, 4, 5, 5]);

console.log('uniqueValueArr', uniqueValueArr);