// Never use eval() function.
// Dont return a new Function() that evaluates a string either (potential fo insecure data)

let firstNumber = 10;
let secondNumber = 3;
let operator = ["+", "-", "*", "/"];

/**
 * Adds two numbers together and returns the result.
 * @param {number} firstNumber - The first number to be added.
 * @param {number} secondNumber - The second number to be added.
 * @returns {number} The sum of the two numbers.
 */
function addVariables(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
// console.log(addVariables(firstNumber, secondNumber));

/**
 * Subtracts the second number from the first number and returns the result.
 * @param {number} firstNumber -  The number from which the second number will be subtracted.
 * @param {number} secondNumber - The number to be subtracted.
 * @returns {number} The result of subtracting the second number from the first number.
 */
function subtractVariables(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
// console.log(subtractVariables(firstNumber, secondNumber));

/**
 * Multiplies two numbers together and returns the result.
 * @param {*} firstNumber - The first number to be multiplied.
 * @param {*} secondNumber - The second number to be multiplied.
 * @returns {number} The product of the two numbers.
 */
function multiplyVariables(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
// console.log(multiplyVariables(firstNumber, secondNumber));

/**
 * Divides the first number by the second number and returns the result.
 * @param {*} firstNumber - The number to be divided.
 * @param {*} secondNumber - The number by which the first number will be divided.
 * @returns {number} The result of dividing the first number by the second number.
 */
function divideVariables(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
// console.log(divideVariables(firstNumber, secondNumber));

/**
 * Performs an arithmetic operation on two numbers based on the given operator and returns the result.
 * @param {*} firstNumber - The first number operated on.
 * @param {*} secondNumber - The second number operated on.
 * @returns {number} The result of the arithmetic operation.
 */
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
// console.log(operate(firstNumber, secondNumber));

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

// Need to call the value of displayVariables() into DOM and display in .screen.
// This displayed-value in screen should be stored in a variable for future use.