// Never use eval() function.
// Dont return a new Function() that evaluates a string either (potential fo insecure data)

let firstNumber = 10;
let secondNumber = 3;
let operator = ["+", "-", "*", "/"];

function addVariables(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
// console.log(addVariables(firstNumber, secondNumber));

function subtractVariables(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
// console.log(subtractVariables(firstNumber, secondNumber));

function multiplyVariables(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
// console.log(multiplyVariables(firstNumber, secondNumber));

function divideVariables(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
// console.log(divideVariables(firstNumber, secondNumber));

function operate(firstNumber, secondNumber) {
    let operator = "+";

    if (operator === "+") {
        return addVariables(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtractVariables(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiplyVariables(firstNumber, secondNumber);
    } else {
        return divideVariables(firstNumber, secondNumber);
    }
}
console.log(operate(firstNumber, secondNumber));

function displayVariables() {
    const zeroButton = document.getElementById("zero-button");
    zeroButton.addEventListener("click", function() {
        console.log("0");
    });

    const oneButton = document.getElementById("one-button");
    oneButton.addEventListener("click", function() {
        console.log("1");
    });

    const twoButton = document.getElementById("two-button");
    twoButton.addEventListener("click", function() {
        console.log("2");
    });

    const threeButton = document.getElementById("three-button");
    threeButton.addEventListener("click", function() {
        console.log("3");
    });

    const fourButton = document.getElementById("four-button");
    fourButton.addEventListener("click", function() {
        console.log("4");
    });

    const fiveButton = document.getElementById("five-button");
    fiveButton.addEventListener("click", function() {
        console.log("5");
    });

    const sixButton = document.getElementById("six-button");
    sixButton.addEventListener("click", function() {
        console.log("6");
    });

    const sevenButton = document.getElementById("seven-button");
    sevenButton.addEventListener("click", function() {
        console.log("7");
    });

    const eightButton = document.getElementById("eight-button");
    eightButton.addEventListener("click", function() {
        console.log("8");
    });

    const nineButton = document.getElementById("nine-button");
    nineButton.addEventListener("click", function() {
        console.log("9");
    });
}
displayVariables();
