const name = "Shuvajit";

function myFunc() {
    //parent block starts here
    let number = 10;

    if (number === 10) {
        const numberInChildren = 50;
        console.log('number is from parent block', number);

        if (true) {
            console.log("number in nested block", numberInChildren);
        }
    }

    console.log(name);

}

myFunc();