const countElement = document.getElementById("count")
const incrementButton = document.getElementById("increment")
const decrementButton = document.getElementById("decrement")
const resetButton = document.getElementById("reset")

let counter = 0;

const updateCounter = () => {
    countElement.textContent = counter;
}

incrementButton.addEventListener("click", () => {
    counter++;
    updateCounter()
})

decrementButton.addEventListener("click", () => {
    counter--;
    updateCounter();
})

console.log(counter);