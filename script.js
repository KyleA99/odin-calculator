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
 * @param {number} firstNumber - The first number to be multiplied.
 * @param {number} secondNumber - The second number to be multiplied.
 * @returns {number} The product of the two numbers.
 */
function multiplyVariables(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
// console.log(multiplyVariables(firstNumber, secondNumber));

/**
 * Divides the first number by the second number and returns the result.
 * @param {number} firstNumber - The number to be divided.
 * @param {number} secondNumber - The number by which the first number will be divided.
 * @returns {number} The result of dividing the first number by the second number.
 */
function divideVariables(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
// console.log(divideVariables(firstNumber, secondNumber));

/**
 * Performs an arithmetic operation on two numbers based on the given operator and returns the result.
 * @param {number} firstNumber - The first number operated on.
 * @param {number} secondNumber - The second number operated on.
 * @returns {number} The result of the arithmetic operation.
 */
function operate(firstNumber, secondNumber, operator) {
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
console.log(operate(firstNumber, secondNumber, operator));

// Returns first element with id "screen"
const screen = document.querySelector("#screen");

// Creates a new div, and store it in the variable "screenContent"
const screenContent = document.createElement("div");
// Adds the class "screenContent" to the newly created div
screenContent.classList.add("screenContent");
// Stores the values from displayVariables() event listeners as the text content
screenContent.textContent = assignValues();

// Appends screenContent as a child node of screen
screen.appendChild(screenContent);

// Define an empty array to store the values of the display
const displayValuesArray = [];
console.log(displayValuesArray)

/**
 * Updates the content displayed on the screen and pushes the value to displayValuesArray.
 * @param {string} value - The digit or character to be displayed on the screen.
 */
function displayValue(value) {
        screenContent.textContent += value;

    // Remove the previous value from the array if it exists
    if (displayValuesArray.length > 0) {
        displayValuesArray.pop();
    }

    // Push the current value into the array
    displayValuesArray.push(screenContent.textContent);
}

/**
 * Sets event listeners to assign values to buttons.
 */
function assignValues() {
    const zeroButton = document.getElementById("zero-button");
    zeroButton.addEventListener("click", function() {
      displayValue("0");
    });

    const oneButton = document.getElementById("one-button");
    oneButton.addEventListener("click", function() {
        displayValue("1");
    });

    const twoButton = document.getElementById("two-button");
    twoButton.addEventListener("click", function() {
        displayValue("2");
    });

    const threeButton = document.getElementById("three-button");
    threeButton.addEventListener("click", function() {
        displayValue("3");
    });

    const fourButton = document.getElementById("four-button");
    fourButton.addEventListener("click", function() {
        displayValue("4");
    });

    const fiveButton = document.getElementById("five-button");
    fiveButton.addEventListener("click", function() {
        displayValue("5");
    });

    const sixButton = document.getElementById("six-button");
    sixButton.addEventListener("click", function() {
        displayValue("6");
    });

    const sevenButton = document.getElementById("seven-button");
    sevenButton.addEventListener("click", function() {
        displayValue("7");
    });

    const eightButton = document.getElementById("eight-button");
    eightButton.addEventListener("click", function() {
        displayValue("8");
    });

    const nineButton = document.getElementById("nine-button");
    nineButton.addEventListener("click", function() {
        displayValue("9");
    });

    const addButton = document.getElementById("add-button");
    addButton.addEventListener("click", function() {
        displayValue("+");
    });

    const subtractButton = document.getElementById("subtract-button");
    subtractButton.addEventListener("click", function() {
        displayValue("-");
    });

    const multiplyButton = document.getElementById("multiply-button");
    multiplyButton.addEventListener("click", function() {
        displayValue("x");
    });

    const divideButton = document.getElementById("divide-button");
    divideButton.addEventListener("click", function() {
        displayValue("÷");
    });

    const calculateButton = document.getElementById("calculate-button");
    calculateButton.addEventListener("click", function() {
        displayValue("=");
    });

    const decimalButton = document.getElementById("decimal-button");
    decimalButton.addEventListener("click", function() {
        displayValue(".");
    });
}