let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let currentOperator = "";
let previousOperator = "";

const screen = document.querySelector("#screen");
const screenContent = document.createElement("div");
screenContent.classList.add("screenContent");
screenContent.textContent = assignValues();
screen.appendChild(screenContent);

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearScreen);

const backspaceButton = document.getElementById("backspace-button");
backspaceButton.addEventListener("click", deleteCharacter);

const displayValuesArray = [];

/**
 * Sets event listeners to assign values to buttons.
 */
function assignValues() {
    const zeroButton = document.getElementById("zero-button");
    zeroButton.addEventListener("click", function() {
      displayValue(0);
    });

    const oneButton = document.getElementById("one-button");
    oneButton.addEventListener("click", function() {
        displayValue(1);
    });

    const twoButton = document.getElementById("two-button");
    twoButton.addEventListener("click", function() {
        displayValue(2);
    });

    const threeButton = document.getElementById("three-button");
    threeButton.addEventListener("click", function() {
        displayValue(3);
    });

    const fourButton = document.getElementById("four-button");
    fourButton.addEventListener("click", function() {
        displayValue(4);
    });

    const fiveButton = document.getElementById("five-button");
    fiveButton.addEventListener("click", function() {
        displayValue(5);
    });

    const sixButton = document.getElementById("six-button");
    sixButton.addEventListener("click", function() {
        displayValue(6);
    });

    const sevenButton = document.getElementById("seven-button");
    sevenButton.addEventListener("click", function() {
        displayValue(7);
    });

    const eightButton = document.getElementById("eight-button");
    eightButton.addEventListener("click", function() {
        displayValue(8);
    });

    const nineButton = document.getElementById("nine-button");
    nineButton.addEventListener("click", function() {
        displayValue(9);
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

/**
 * Adds two numbers together and returns the result.
 * @param {number} firstNumber - The first number to be added.
 * @param {number} secondNumber - The second number to be added.
 * @returns {number} The sum of the two numbers.
 */
function addVariables(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

/**
 * Subtracts the second number from the first number and returns the result.
 * @param {number} firstNumber -  The number from which the second number will be subtracted.
 * @param {number} secondNumber - The number to be subtracted.
 * @returns {number} The result of subtracting the second number from the first number.
 */
function subtractVariables(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

/**
 * Multiplies two numbers together and returns the result.
 * @param {number} firstNumber - The first number to be multiplied.
 * @param {number} secondNumber - The second number to be multiplied.
 * @returns {number} The product of the two numbers.
 */
function multiplyVariables(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

/**
 * Divides the first number by the second number and returns the result.
 * @param {number} firstNumber - The number to be divided.
 * @param {number} secondNumber - The number by which the first number will be divided.
 * @returns {number} The result of dividing the first number by the second number.
 */
function divideVariables(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

/**
 * Performs an arithmetic operation on two numbers based on the given operator and returns the result.
 * @param {number} firstNumber - The first number operated on.
 * @param {number} secondNumber - The second number operated on.
 * @param {string} operator - The arithmetic operator ('+', '-', '*', '/')
 * @returns {number} The result of the arithmetic operation.
 */
function operate(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return addVariables(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtractVariables(firstNumber, secondNumber);
    } else if (operator === "x") {
        return multiplyVariables(firstNumber, secondNumber);
    } else if (operator === "÷") {
        if (secondNumber === 0) {
            return "Error: Division by zero";
        }
        return divideVariables(firstNumber, secondNumber);
    }
}

/**
 * Updates the content displayed on the screen and pushes the value to displayValuesArray.
 * @param {string} value - The digit or character to be displayed on the screen.
 */
function displayValue(value) {
    screenContent.textContent += value;
    displayValuesArray.push(screenContent.textContent);

    if (value === "+" || value === "-" || value === "x" || value === "÷") {
        currentOperator = value;
    } else if (value === "=") {
        const displayContent = screenContent.textContent;
        // Splits displayContent into an array with two substrings of value, separated by the currentOperator
        const values = displayContent.split(currentOperator);
        // Ensures values has a length !==2 (e.g. two numbers separated by the currentOperator)
        if (values.length !== 2) {
            return;
        }
        // Converts the two array substrings to a floating point number
        const firstNumber = parseFloat(values[0]);
        const secondNumber = parseFloat(values[1]);
        // Calls operate() to execute arithmetic operations and displays the result on screen
        const result = operate(firstNumber, secondNumber, currentOperator);
        // Rounds result to three decimal places
        const resultRounded = Math.round(result * 1000) / 1000
        screenContent.textContent = resultRounded;
    }
}

/**
 * Clears screen and resets variables and arrays
 */
function clearScreen() {
    screenContent.textContent = "";
    displayValuesArray.length = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    currentOperator = "";
}

/**
 * Slices off right-most character
 */
function deleteCharacter() {
    let content = screenContent.textContent;

    if (content.length > 0) {
        // Remove the last character from the content by slicing content to be from beginning (0) to the second-to-last characer (-1)
        content = content.slice(0, -1);

        screenContent.textContent = content;
        displayValuesArray.push(screenContent.textContent);
    }
}